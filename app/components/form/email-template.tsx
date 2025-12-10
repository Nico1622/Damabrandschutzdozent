import * as React from "react";

interface EmailTemplateProps {
  companyName: string;
  email: string;
  phone: string;
  message: string;
}

export function EmailTemplate({
  companyName,
  email,
  phone,
  message,
}: EmailTemplateProps) {
  return (
    <div style={{ backgroundColor: "#f9f9f9", padding: "20px" }}>
      <table
        width="100%"
        cellPadding={0}
        cellSpacing={0}
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
          fontSize: "16px",
          color: "#333",
          borderCollapse: "collapse",
        }}
      >
        <tr>
          <td
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              padding: "20px",
              border: "1px solid #e0e0e0",
            }}
          >
            <h2 style={{ color: "#0070f3", marginBottom: "20px" }}>
              Neue Nachricht von Ihrem Portfolio
            </h2>

            <table width="100%" cellPadding={5} cellSpacing={0}>
              <tr>
                <td style={{ fontWeight: "bold", width: "120px" }}>Name:</td>
                <td>{companyName}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>Email:</td>
                <td>{email}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold" }}>Telefon:</td>
                <td>{phone}</td>
              </tr>
              <tr>
                <td style={{ fontWeight: "bold", verticalAlign: "top" }}>
                  Nachricht:
                </td>
                <td
                  style={{
                    backgroundColor: "#f0f0f0",
                    padding: "10px",
                    borderRadius: "5px",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {message}
                </td>
              </tr>
            </table>

            <p
              style={{
                fontSize: "14px",
                color: "#888",
                marginTop: "20px",
              }}
            >
              Dies ist eine automatisch generierte Nachricht. Bitte nicht direkt
              antworten.
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
}
