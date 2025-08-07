function Dashboard() {
  return (
    <div style={{ padding: "40px 20px", textAlign: "center" }}>
      <h1 style={{ color: "#4a90e2" }}>My Dashboard</h1>
      <p style={{ margin: "20px 0", fontSize: "18px" }}>
        Welcome back! Here are your recent activities:
      </p>

      <div style={{
        display: "flex", justifyContent: "center", gap: "20px", marginTop: "30px", flexWrap: "wrap"
      }}>
        <div style={cardStyle}>
          <h3>🛒 Orders</h3>
          <p>2 Orders in Progress</p>
        </div>
        <div style={cardStyle}>
          <h3>❤️ Wishlist</h3>
          <p>5 Books Saved</p>
        </div>
        <div style={cardStyle}>
          <h3>📖 Recently Viewed</h3>
          <p>The Alchemist, Atomic Habits</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "white",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "20px",
  width: "200px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
};

export default Dashboard;
