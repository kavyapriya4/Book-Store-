function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav style={{
        width: "100%",
        background: "#000407",
        padding: "0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)"
      }}>
        <ul style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          listStyle: "none",
          margin: 0,
          padding: 0,
          minHeight: "56px"
        }}>
          <li><a href="/login" style={linkStyle}>Login</a></li>
          <li><a href="/signup" style={linkStyle}>Signup</a></li>
          <li><a href="/gallery" style={linkStyle}>Gallery</a></li>
          <li><a href="/dashboard" style={linkStyle}>Dashboard</a></li>
          <li><a href="/contactus" style={linkStyle}>Contact Us</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section style={{
        textAlign: "center",
        // margin: "20px 0",
        padding: "40px 20px",
        background: "linear-gradient(to right, #4a90e2, #50c9c3)",
        color: "white"
      }}>
        <h1 style={{ fontSize: "40px", marginBottom: "20px", letterSpacing: "1px" }}>
          Welcome to My Online Bookstore !!!
        </h1>
        <p style={{
          fontSize: "18px",
          maxWidth: "600px",
          margin: "auto",
          lineHeight: "1.5"
        }}>
          Discover your next favorite book from our vast collection.  
          Enjoy easy shopping, exclusive deals, and a world of knowledge at your fingertips!
        </p>
        <a href="/books" style={{
          background: "white",
          color: "#4a90e2",
          padding: "12px 30px",
          textDecoration: "none",
          fontWeight: "bold",
          borderRadius: "5px",
          marginTop: "20px",
          display: "inline-block"
        }}>
          Browse Books
        </a>
      </section>
    </div>
  );
}

// Define link style once to reuse it
const linkStyle = {
  display: "inline-block",
  padding: "12px 24px",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "16px"
};

export default Home;
