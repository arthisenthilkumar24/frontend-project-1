import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { transfer } from "../redux/walletSlice";
import { addTransaction } from "../redux/transactionSlice";

const TransferForm = () => {
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const handleTransfer = () => {
    if (!amount || amount <= 0) return;

    dispatch(transfer(Number(amount)));
    dispatch(addTransaction(`Transfer: -$${amount}`));
    setAmount("");
  };

  return (
    <div className="card">
      <h3>Transfer Money</h3>
      <input
        type="number"
        value={amount}
        placeholder="Enter amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleTransfer}>Transfer</button>
    </div>
  );
};

export default TransferForm;