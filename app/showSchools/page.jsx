"use client";
import { useEffect, useState } from "react";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    async function fetchSchools() {
      const res = await fetch("/api/getSchools");
      const data = await res.json();
      setSchools(data);
    }
    fetchSchools();
  }, []);

  return (
    <div style={{ padding: "20px", color: "#000" }}>
      <h1 style={{ color: "#000" }}>All Schools</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {schools.map((school, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              background: "#fff", // ensure white background
              color: "#000", // force black text
            }}
          >
            {/* School Image */}
            {school.image ? (
              <img
                src={school.image}
                alt={school.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "6px",
                  marginBottom: "10px",
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "150px",
                  background: "#eee",
                  borderRadius: "6px",
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#666",
                }}
              >
                No Image
              </div>
            )}

            {/* School Info */}
            <h2 style={{ margin: "5px 0", color: "#000" }}>{school.name}</h2>
            <p style={{ margin: "2px 0", color: "#000" }}>
              {school.address}, {school.city}, {school.state}
            </p>
            <p style={{ margin: "2px 0", color: "#000" }}>📞 {school.contact}</p>
            <p style={{ margin: "2px 0", color: "#000" }}>📧 {school.email_id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
