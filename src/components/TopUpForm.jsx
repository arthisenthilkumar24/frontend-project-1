import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { topUp } from "../redux/walletSlice";
import { addTransaction } from "../redux/transactionSlice";

const TopUpForm = () => {
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const handleTopUp = () => {
    if (!amount || amount <= 0) return;

    dispatch(topUp(Number(amount)));
    dispatch(addTransaction(`Top-up: +$${amount}`));
    setAmount("");
  };

  return (
    <div className="card">
      <h3>Top Up Wallet</h3>
      <input
        type="number"
        value={amount}
        placeholder="Enter amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleTopUp}>Top Up</button>
    </div>
  );
};

export default TopUpForm;