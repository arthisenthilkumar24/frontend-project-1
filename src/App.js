import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WalletBalance from "./components/WalletBalance";
import TopUpForm from "./components/TopUpForm";
import TransferForm from "./components/TransferForm";
import TransactionHistory from "./components/TransactionHistory";

const App = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<WalletBalance />} />
          <Route path="/topup" element={<TopUpForm />} />
          <Route path="/transfer" element={<TransferForm />} />
          <Route path="/history" element={<TransactionHistory />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;