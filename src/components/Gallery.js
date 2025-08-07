function Gallery() {
  return (
    <div style={{ textAlign: "center", padding: "40px 20px" }}>
      <h1 style={{ color: "#4a90e2", marginBottom: "30px" }}>Our Book Collection</h1>
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap"
      }}>
        <div style={{
          background: "white",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "15px",
          width: "150px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}>
          <img src="https://picsum.photos/150/200" alt="The Alchemist" style={{ width: "100%", borderRadius: "5px" }} />
          <h3>The Alchemist</h3>
          <p>₹299</p>
          <button style={{
            background: "#4a90e2",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "5px",
            marginTop: "10px",
            cursor: "pointer"
          }}>Add to Cart</button>
        </div>

        <div style={{
          background: "white",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "15px",
          width: "150px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}>
          <img src="https://picsum.photos/150/201" alt="Atomic Habits" style={{ width: "100%", borderRadius: "5px" }} />
          <h3>Atomic Habits</h3>
          <p>₹399</p>
          <button style={{
            background: "#4a90e2",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "5px",
            marginTop: "10px",
            cursor: "pointer"
          }}>Add to Cart</button>
        </div>

        <div style={{
          background: "white",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "15px",
          width: "150px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}>
          <img src="https://picsum.photos/150/202" alt="Harry Potter" style={{ width: "100%", borderRadius: "5px" }} />
          <h3>Harry Potter</h3>
          <p>₹499</p>
          <button style={{
            background: "#4a90e2",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "5px",
            marginTop: "10px",
            cursor: "pointer"
          }}>Add to Cart</button>
        </div>

        <div style={{
          background: "white",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "15px",
          width: "150px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}>
          <img src="https://picsum.photos/150/203" alt="Rich Dad Poor Dad" style={{ width: "100%", borderRadius: "5px" }} />
          <h3>Rich Dad Poor Dad</h3>
          <p>₹350</p>
          <button style={{
            background: "#4a90e2",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "5px",
            marginTop: "10px",
            cursor: "pointer"
          }}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
