function Footer() {
  return (
    <footer style={{
      background: "#000407",
      color: "white",
      textAlign: "center",
      padding: "30px 20px",
      marginTop: "40px"
    }}>
      <div style={{ marginBottom: "10px" }}>
        <a href="/about" style={footerLink}>About Us</a> | 
        <a href="/privacy" style={footerLink}> Privacy Policy</a> | 
        <a href="/contactus" style={footerLink}> Contact Us</a>
      </div>
      <p style={{ fontSize: "14px", margin: "5px 0" }}>
        © {new Date().getFullYear()} My Online Bookstore. All Rights Reserved.
      </p>
    </footer>
  );
}

const footerLink = {
  color: "white",
  textDecoration: "none",
  margin: "0 5px",
  fontSize: "14px",
};

export default Footer;
