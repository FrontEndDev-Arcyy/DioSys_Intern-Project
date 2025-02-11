import React, { useState } from "react";
import ProfilePageModal from "../ProfilePage/ProfilePageModal";
import ProfilePageUpload from "../ProfilePage/ProfilePageModalUpload";

const ProfilePageTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const columns = [
    "Full Name", "Date of Birth", "Age", "Citizenship", "Religion", "Status", "Actions"
  ];

  const data = new Array(6).fill(null).map((_, index) => ({
    key: index + 1,
    fullName: "Cell Data",
    dateOfBirth: "Cell Data",
    age: "Cell Data",
    citizenship: "Cell Data",
    religion: "Cell Data",
    status: "Cell Data"
  }));

  return (
    <div style={{
      padding: "20px",
      background: "#F5F5F5",
      minHeight: "100vh",
      borderRadius: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      
      {/* Buttons Layout */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px",
        width: "100%",
        maxWidth: "1100px",
        marginBottom: "15px"
      }}>
        
        {/* Top Row: Add Profile & Upload File Excel */}
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => setIsModalOpen(true)} style={{
            backgroundColor: "#0D5B10",
            border: "none",
            color: "white",
            fontWeight: "bold",
            borderRadius: "20px",
            padding: "10px 20px",
            cursor: "pointer",
            minWidth: "160px"
          }}>
            + Add Profile
          </button>

          <button onClick={() => setIsUploadModalOpen(true)} style={{
            backgroundColor: "#0D5B10",
            border: "none",
            color: "white",
            fontWeight: "bold",
            borderRadius: "20px",
            padding: "10px 20px",
            cursor: "pointer",
            minWidth: "160px"
          }}>
            Upload File Excel
          </button>
        </div>

        {/* Bottom Row: Active & Archive */}
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button style={{
            backgroundColor: "#73C041",
            border: "none",
            color: "white",
            fontWeight: "bold",
            borderRadius: "20px",
            padding: "10px 20px",
            cursor: "pointer",
            minWidth: "160px"
          }}>
            Active
          </button>

          <button style={{
            backgroundColor: "white",
            border: "2px solid #0D5B10",
            color: "#0D5B10",
            fontWeight: "bold",
            borderRadius: "20px",
            padding: "10px 20px",
            cursor: "pointer",
            minWidth: "160px"
          }}>
            Archive
          </button>
        </div>
      </div>
       {/* Search Bar */}
       <div style={{
        marginBottom: "15px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: "1100px",
        justifyContent: "flex-start",
        marginTop: "15px"
      }}>
        <input
          placeholder="Search..."
          style={{
            width: "200px",
            padding: "8px",
            borderRadius: "20px",
            border: "1px solid #ccc"
          }}
        />
      </div>    

      {/* Table */}
      <div style={{
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        width: "100%",
        maxWidth: "1100px"
      }}>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left"
        }}>
          <thead>
            <tr style={{ backgroundColor: "#E0E0E0", fontWeight: "bold" }}>
              {columns.map((col, index) => (
                <th key={index} style={{ padding: "10px", borderBottom: "2px solid #ccc" }}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                <td style={{ padding: "10px" }}>{row.fullName}</td>
                <td style={{ padding: "10px" }}>{row.dateOfBirth}</td>
                <td style={{ padding: "10px" }}>{row.age}</td>
                <td style={{ padding: "10px" }}>{row.citizenship}</td>
                <td style={{ padding: "10px" }}>{row.religion}</td>
                <td style={{ padding: "10px" }}>{row.status}</td>
                <td style={{ padding: "10px", textAlign: "center" }}>
                  🖊️ 🗑️
                </td>
              </tr>
            ))}
          </tbody>
        </table>    
      </div>

      {/* Modals */}
      <ProfilePageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ProfilePageUpload isOpen={isUploadModalOpen} onClose={() => setIsUploadModalOpen(false)} />
    </div>
  );
};

export default ProfilePageTable;
