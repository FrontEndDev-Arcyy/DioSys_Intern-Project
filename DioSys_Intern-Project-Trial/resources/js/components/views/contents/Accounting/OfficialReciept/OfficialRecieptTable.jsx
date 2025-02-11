import React, { useState } from "react";
import OfficialReceiptModal from "../OfficialReciept/OfficialRecieptModal";

const OfficialReceiptTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    "Reference No.", "Date", "Services", "Record From", "Form of Payment", 
    "Total Amount", "Payment Status", "Actions"
  ];

  const data = new Array(6).fill(null).map((_, index) => ({
    key: index + 1,
    referenceNo: "Cell Data",
    date: "Cell Data",
    services: "Cell Data",
    recordFrom: "Cell Data",
    formOfPayment: "Cell Data",
    totalAmount: "Cell Data",
    paymentStatus: index === 1 ? "Paid" : "Not paid",
  }));

  return (
    <div style={{ padding: "20px", background: "#F5F5F5", minHeight: "100vh", borderRadius: "10px" }}>
      
      {/* Top Controls */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          {/* Add Payment Button */}
          <button onClick={() => setIsModalOpen(true)}
            style={{
              backgroundColor: "#0D5B10",
              borderColor: "#0D5B10",
              color: "white",
              fontWeight: "bold",
              borderRadius: "20px",
              padding: "8px 20px",
              border: "none",
              cursor: "pointer",
            }}>
            + Add Payment
          </button>

          {/* Active & Archive Buttons */}
          <button style={{
            backgroundColor: "#73C041",
            borderColor: "#73C041",
            color: "white",
            fontWeight: "bold",
            borderRadius: "20px",
            padding: "8px 20px",
            border: "none",
            cursor: "pointer",
          }}>
            Active
          </button>

          <button style={{
            backgroundColor: "white",
            borderColor: "#0D5B10",
            color: "#0D5B10",
            fontWeight: "bold",
            borderRadius: "20px",
            padding: "8px 20px",
            border: "1px solid #0D5B10",
            cursor: "pointer",
          }}>
            Archive
          </button>
        </div>

        {/* Dropdown for Page Size */}
        <select style={{
          padding: "8px",
          borderRadius: "20px",
          border: "1px solid #ccc",
          background: "white",
          cursor: "pointer"
        }}>
          <option>50 / Page</option>
          <option>100 / Page</option>
        </select>
      </div>

      {/* Search Bar */}
      <div style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
        🔍 <input
          placeholder="Search..."
          style={{
            marginLeft: "5px",
            padding: "8px",
            borderRadius: "20px",
            border: "1px solid #ccc",
            width: "200px"
          }}
        />
      </div>

      {/* Table */}
      <div style={{ backgroundColor: "white", borderRadius: "10px", padding: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          {/* Table Header */}
          <thead>
            <tr style={{ backgroundColor: "#E0E0E0", fontWeight: "bold" }}>
              {columns.map((col, index) => (
                <th key={index} style={{ padding: "10px", borderBottom: "2px solid #ccc" }}>{col}</th>
              ))}
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {data.map((row, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "10px" }}>{row.referenceNo}</td>
                <td style={{ padding: "10px" }}>{row.date}</td>
                <td style={{ padding: "10px" }}>{row.services}</td>
                <td style={{ padding: "10px" }}>{row.recordFrom}</td>
                <td style={{ padding: "10px" }}>{row.formOfPayment}</td>
                <td style={{ padding: "10px" }}>{row.totalAmount}</td>
                <td style={{
                  padding: "10px",
                  fontWeight: row.paymentStatus === "Paid" ? "bold" : "normal",
                  color: row.paymentStatus === "Paid" ? "green" : "black"
                }}>
                  {row.paymentStatus}
                </td>
                <td style={{ padding: "10px", textAlign: "center" }}>📄</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Results Text & Pagination */}
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        <span style={{ fontWeight: "bold" }}>Results 1 to 6 records</span>
        <span>📄 1</span>
      </div>

      {/* Official Receipt Modal */}
      <OfficialReceiptModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default OfficialReceiptTable;
