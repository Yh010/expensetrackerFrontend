import { useCallback, useRef } from "react";
import {
  ReactFlow,
  Controls,
  Panel,
  useStoreApi,
  useReactFlow,
  ConnectionLineType,
  type NodeOrigin,
  type InternalNode,
  type OnConnectEnd,
  type OnConnectStart,
} from "@xyflow/react";
import { useShallow } from "zustand/shallow";
import "../index.css";
import "@xyflow/react/dist/style.css";
import MindMapNode from "@/components/MindMap/MindMapNode";
import MindMapEdge from "@/components/MindMap/MindMapEdge";
import { type RFState, useFlowStore } from "@/store/store";

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  addChildNode: state.addChildNode,
});

const nodeTypes = {
  mindmap: MindMapNode,
};

const edgeTypes = {
  mindmap: MindMapEdge,
};

const nodeOrigin: NodeOrigin = [0.5, 0.5];
const connectionLineStyle = { stroke: "#F6AD55", strokeWidth: 3 };
const defaultEdgeOptions = { style: connectionLineStyle, type: "mindmap" };

export default function MindmapPage() {
  const { nodes, edges, onNodesChange, onEdgesChange, addChildNode } =
    useFlowStore(useShallow(selector));
  const connectingNodeId = useRef<string | null>(null);
  const store = useStoreApi();
  const { screenToFlowPosition } = useReactFlow();

  const getChildNodePosition = (
    event: MouseEvent | TouchEvent,
    parentNode?: InternalNode
  ) => {
    const { domNode } = store.getState();

    if (
      !domNode ||
      !parentNode?.internals.positionAbsolute ||
      !parentNode?.measured.width ||
      !parentNode?.measured.height
    ) {
      return;
    }

    const isTouchEvent = "touches" in event;
    const x = isTouchEvent ? event.touches[0].clientX : event.clientX;
    const y = isTouchEvent ? event.touches[0].clientY : event.clientY;

    const panePosition = screenToFlowPosition({
      x,
      y,
    });

    return {
      x:
        panePosition.x -
        parentNode.internals.positionAbsolute.x +
        parentNode.measured.width / 2,
      y:
        panePosition.y -
        parentNode.internals.positionAbsolute.y +
        parentNode.measured.height / 2,
    };
  };

  const onConnectStart: OnConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd: OnConnectEnd = useCallback(
    (event) => {
      const { nodeLookup } = store.getState();
      const targetIsPane = (event.target as Element).classList.contains(
        "react-flow__pane"
      );

      if (targetIsPane && connectingNodeId.current) {
        const parentNode = nodeLookup.get(connectingNodeId.current);
        const childNodePosition = getChildNodePosition(event, parentNode);

        if (parentNode && childNodePosition) {
          addChildNode(parentNode, childNodePosition);
        }
      }
    },
    [getChildNodePosition]
  );

  return (
    <div className="h-screen w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        nodeOrigin={nodeOrigin}
        connectionLineStyle={connectionLineStyle}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineType={ConnectionLineType.Straight}
        fitView
      >
        <Controls showInteractive={false} />
        <Panel position="top-center">
          <div className="text-black font-extrabold text-2xl">
            Your Investing Roadmap
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
}
