import {
  applyNodeChanges,
  applyEdgeChanges,
  type Edge,
  type EdgeChange,
  type Node,
  type NodeChange,
  type OnNodesChange,
  type OnEdgesChange,
  type XYPosition,
} from '@xyflow/react';
import { create } from 'zustand';
import { nanoid } from 'nanoid/non-secure';

export type RFState = {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  addChildNode: (parentNode: Node, position: XYPosition) => void;
  updateNodeLabel: (nodeId: string, label: string) => void;
};

export interface UserState{
/*   username: string,
  investment : number,
  profit:number,
  loss: number, */

  user: {
    username: string,
    investment : number,
    profit:number,
    loss: number, 
  },

  setUserName: (input: string) => void,
  setInvestment: (input: number) => void,
  setProfit: (input: number) => void,
  setLoss: (input: number) => void,
  
}

export const useUserStore = create<UserState>()((set) => ({
    user: {
        username: "",
        investment : 0,
        profit:0,
        loss: 0,
    },
    
  setUserName: (input) => set((state) => ({ user: { ...state.user, username: input } })),
   setInvestment: (input) => set((state) => ({ 
    user: { ...state.user, investment: input } 
  })),
   setProfit: (input) => set((state) => ({ 
    user: { ...state.user, profit: input } 
  })),
 setLoss: (input) => set((state) => ({ 
    user: { ...state.user, loss: input } 
  }))
      
}));




export const useFlowStore = create<RFState>((set, get) => ({
  nodes: [
    {
      id: 'root',
      type: 'mindmap',
      data: { label: 'Start typing...' },
      position: { x: 0, y: 0 },
    },
  ],
  edges: [],
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  addChildNode: (parentNode: Node, position: XYPosition) => {
    const newNode = {
      id: nanoid(),
      type: 'mindmap',
      data: { label: 'New..' },
      position,
      parentId: parentNode.id,
    };

    const newEdge = {
      id: nanoid(),
      source: parentNode.id,
      target: newNode.id,
    };

    set({
      nodes: [...get().nodes, newNode],
      edges: [...get().edges, newEdge],
    });
  },
  updateNodeLabel: (nodeId: string, label: string) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          node.data = { ...node.data, label };
        }

        return node;
      }),
    });
  },
}));