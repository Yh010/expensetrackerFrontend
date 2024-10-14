import { create } from "zustand";
import {
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  OnNodesChange,
  OnEdgesChange,
  applyNodeChanges,
  applyEdgeChanges,
} from '@xyflow/react';
import { createWithEqualityFn } from 'zustand/traditional';

export type RFState = {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
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

export const useFlowStore = createWithEqualityFn<RFState>((set, get) => ({
  nodes: [
    {
      id: 'root',
      type: 'mindmap',
      data: { label: 'React Flow Mind Map' },
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
}));
