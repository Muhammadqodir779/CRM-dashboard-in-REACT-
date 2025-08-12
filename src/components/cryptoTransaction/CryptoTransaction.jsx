import React from "react";
import { FiArrowUpRight, FiArrowDownLeft } from "react-icons/fi";

export default function TransactionsCard() {
  const transactions = [
    {
      type: "Buy BTC",
      date: "01.29.2024 / 09:36 AM",
      amountBTC: "+ 0.1337 BTC",
      amountUSD: "$4,805.00",
      icon: <FiArrowUpRight size={20} color="#22c55e" />,
      color: "#22c55e",
    },
    {
      type: "Sell BTC",
      date: "01.24.2024 / 08:47 AM",
      amountBTC: "- 0.2105 BTC",
      amountUSD: "$2,344.00",
      icon: <FiArrowDownLeft size={20} color="#ef4444" />,
      color: "#ef4444",
    },
  ];

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        padding: "16px",
        width: "890px",
        marginTop: "32px",
        marginLeft: "24px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        fontFamily: "sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ fontWeight: "600", fontSize: "16px", marginBottom: "16px" }}>
        Transactions
      </div>

      {/* Transaction list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {transactions.map((tx, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Left side */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  backgroundColor: tx.color + "20",
                  padding: "6px",
                  borderRadius: "50%",
                }}
              >
                {tx.icon}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontWeight: "500", fontSize: "14px" }}>{tx.type}</span>
                <span style={{ fontSize: "12px", color: "#6b7280" }}>{tx.date}</span>
              </div>
            </div>

            {/* Right side */}
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: tx.color,
                }}
              >
                {tx.amountBTC}
              </div>
              <div style={{ fontSize: "12px", color: "#6b7280" }}>{tx.amountUSD}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "16px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "13px",
          fontWeight: "600",
          color: "#000",
          cursor: "pointer",
        }}
      >
        See all →
      </div>
    </div>
  );
}
