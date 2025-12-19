import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./walletSlice";
import transactionReducer from "./transactionSlice";

const store = configureStore({
  reducer: {
    wallet: walletReducer,
    transactions: transactionReducer,
  },
});

export default store;