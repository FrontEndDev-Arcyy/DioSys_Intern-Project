import React from "react";

const ProfilePageModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        overflowY: "auto",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "white",
          width: "80%",
          maxWidth: "1000px",
          maxHeight: "80vh",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
        }}
      >
        {/* Parishioner Information */}
        <h2
          style={{
            background: "#0D5B10",
            color: "white",
            padding: "10px",
            textAlign: "left",
            fontSize: "18px",
            width: "100%",
          }}
        >
          PARISHIONER INFORMATION
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "10px",
            padding: "15px",
          }}
        >
          {["First Name", "Middle Name", "Last Name", "Date of Birth", "Age", "Place of Birth", "Gender", "Citizenship", "Religion", "Civil Status", "Country", "State/Province", "City/Municipality", "Zipcode", "Barangay", "Complete Address"].map(
            (placeholder, index) => (
              <input
                key={index}
                type={placeholder === "Date of Birth" ? "date" : "text"}
                placeholder={placeholder}
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
            )
          )}
        </div>

        {/* Parent Information */}
        {["FATHER INFORMATION", "MOTHER INFORMATION"].map((title, i) => (
          <div key={i}>
            <h3
              style={{
                background: "#0D5B10",
                color: "white",
                padding: "10px",
                fontSize: "16px",
                width: "100%",
              }}
            >
              {title}
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "10px",
                padding: "15px",
              }}
            >
              {["First Name", "Middle Name", "Last Name", "Residence", "Email", "Gender", "Birthdate", "Age"].map(
                (placeholder, index) => (
                  <input
                    key={index}
                    type={placeholder === "Birthdate" ? "date" : "text"}
                    placeholder={placeholder}
                    style={{
                      width: "100%",
                      padding: "8px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                    }}
                  />
                )
              )}
            </div>
          </div>
        ))}

        {/* Data Privacy Act */}
        <div
          style={{
            padding: "15px",
            border: "1px solid #E0E0E0",
            borderRadius: "10px",
            background: "#FAFAFA",
            marginTop: "15px",
            width: "100%",
          }}
        >
          <h4
            style={{
              color: "red",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            DATA PRIVACY ACT OF 2012
          </h4>
          <p style={{ fontSize: "12px" }}>
            The processing of personal information shall be allowed, subject to
            compliance with the requirements of this Act and other laws allowing
            disclosure of information to the public and adherence to the
            principles of transparency, legitimate purpose, and proportionality.
          </p>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: "8px 20px",
              borderRadius: "5px",
              background: "white",
              border: "1px solid #0D5B10",
              color: "#0D5B10",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            style={{
              padding: "8px 20px",
              borderRadius: "5px",
              background: "#73C041",
              border: "none",
              color: "white",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageModal;
