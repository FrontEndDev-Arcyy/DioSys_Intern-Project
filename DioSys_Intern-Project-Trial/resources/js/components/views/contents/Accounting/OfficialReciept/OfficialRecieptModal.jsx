import React, { useState } from "react";

const OfficialReceiptModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    referenceNo: "",
    date: "",
    recordFrom: "",
    services: "",
    formOfPayment: "",
    amount: "",
    totalAmount: "",
    receivedBy: "",
    checkedBy: "",
    approvedBy: "",
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100%", height: "100vh",
      background: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center",
      zIndex: 1000
    }}>
      <div style={{ background: "white", width: "700px", borderRadius: "10px", padding: "20px", position: "relative", boxShadow: "0px 5px 15px rgba(0,0,0,0.3)" }}>
        
        {/* Header */}
        <div style={{ backgroundColor: "#0D5B10", color: "white", padding: "12px", fontWeight: "bold", borderRadius: "5px 5px 0 0", textAlign: "center" }}>
          OFFICIAL RECEIPT
        </div>

        {/* Close Button */}
        <button onClick={onClose} style={{
          position: "absolute", top: "15px", right: "20px", background: "transparent", border: "none",
          fontSize: "16px", color: "white", cursor: "pointer"
        }}>✖</button>

        {/* Form Fields */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <div>
              <label>Reference No.</label>
              <input type="text" value={formData.referenceNo} onChange={(e) => handleChange("referenceNo", e.target.value)}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }} />
            </div>
            <div>
              <label>Date</label>
              <input type="date" value={formData.date} onChange={(e) => handleChange("date", e.target.value)}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }} />
            </div>
          </div>

          <div>
            <label>Record From</label>
            <select value={formData.recordFrom} onChange={(e) => handleChange("recordFrom", e.target.value)}
              style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }}>
              <option value="">Select</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
            <div>
              <label>Services</label>
              <select value={formData.services} onChange={(e) => handleChange("services", e.target.value)}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }}>
                <option value="">Select</option>
                <option value="Service 1">Service 1</option>
                <option value="Service 2">Service 2</option>
              </select>
            </div>
            <div>
              <label>Form of Payment</label>
              <input type="text" value={formData.formOfPayment} onChange={(e) => handleChange("formOfPayment", e.target.value)}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }} />
            </div>
            <div>
              <label>Amount</label>
              <input type="text" value={formData.amount} onChange={(e) => handleChange("amount", e.target.value)}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }} />
            </div>
          </div>

          {/* Add Another Payment Button */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button style={{
              background: "#73C041", border: "none", color: "white", padding: "10px 20px",
              borderRadius: "20px", cursor: "pointer", fontWeight: "bold"
            }}>
              Add Another Payment
            </button>
          </div>

          <div>
            <label>Total Amount</label>
            <input type="text" value={formData.totalAmount} onChange={(e) => handleChange("totalAmount", e.target.value)}
              style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </div>

          <hr style={{ margin: "15px 0", borderTop: "1px solid #ccc" }} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
            <div>
              <label>Received by</label>
              <input type="text" value={formData.receivedBy} onChange={(e) => handleChange("receivedBy", e.target.value)}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }} />
            </div>
            <div>
              <label>Checked by</label>
              <input type="text" value={formData.checkedBy} onChange={(e) => handleChange("checkedBy", e.target.value)}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }} />
            </div>
            <div>
              <label>Approved by</label>
              <input type="text" value={formData.approvedBy} onChange={(e) => handleChange("approvedBy", e.target.value)}
                style={{ width: "100%", padding: "8px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }} />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "15px" }}>
          <button style={{
            background: "#73C041", border: "none", color: "white", padding: "10px 25px",
            borderRadius: "20px", cursor: "pointer", fontWeight: "bold"
          }} onClick={onClose}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfficialReceiptModal;
