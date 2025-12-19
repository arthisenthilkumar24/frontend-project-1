import React from "react";
import { useSelector } from "react-redux";

const TransactionHistory = () => {
  const transactions = useSelector((state) => state.transactions);

  return (
    <div className="card">
      <h3>Transaction History</h3>
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <ul>
          {transactions.map((tx, index) => (
            <li key={index}>{tx}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionHistory;