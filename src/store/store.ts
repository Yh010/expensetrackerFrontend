import { create } from "zustand";

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


