import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
  name: "wallet",
  initialState: {
    balance: 1000,
  },
  reducers: {
    topUp: (state, action) => {
      state.balance += action.payload;
    },
    transfer: (state, action) => {
      state.balance -= action.payload;
    },
  },
});

export const { topUp, transfer } = walletSlice.actions;
export default walletSlice.reducer;