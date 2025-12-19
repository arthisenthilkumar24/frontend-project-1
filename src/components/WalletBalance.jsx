import React from "react";
import { useSelector } from "react-redux";

const WalletBalance = () => {
  const balance = useSelector((state) => state.wallet.balance);

  return (
    <div className="card">
      <h3>Wallet Balance</h3>
      <p>${balance}</p>
    </div>
  );
};

export default WalletBalance;