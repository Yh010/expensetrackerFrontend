import { ReactFlow, Controls, Panel, NodeOrigin } from "@xyflow/react";
import { shallow } from "zustand/shallow";
import "@xyflow/react/dist/base.css";
import { RFState, useFlowStore } from "@/store/store";

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
});

const nodeOrigin: NodeOrigin = [0.5, 0.5];

function MindmapPage() {
  const { nodes, edges, onNodesChange, onEdgesChange } = useFlowStore(
    selector,
    shallow
  );
  return (
    <div className="h-screen w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeOrigin={nodeOrigin}
        fitView
      >
        <Controls showInteractive={false} />
        <Panel position="top-left" className="text-black">
          React Flow Mind Map
        </Panel>
      </ReactFlow>
    </div>
  );
}

export default MindmapPage;
