import React from 'react';

function Header() {
    const headerStyle= {
        backgroundColor: "black",
        padding: "15px 0",
        textAlign: "center",
        color: "#fff"
      }
    const headerTitleStyle = {
        margin: "20px",
        fontSize: "24px",
        fontWeight: "bold"
      }
  return (
    <div style={headerStyle}>
      <h1 style={headerTitleStyle}>Amazon Prime Users</h1>
    </div>
  );
}

export default Header;
