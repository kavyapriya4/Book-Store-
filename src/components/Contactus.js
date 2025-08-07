function ContactUs() {
  // Inline styles
  const pageStyle = {
    textAlign: "center",
    padding: "40px 20px",
    background: "#f4f4f4",
    minHeight: "80vh",
  };

  const headingStyle = {
    color: "#4a90e2",
    marginBottom: "20px",
    fontSize: "32px",
  };

  const textStyle = {
    marginBottom: "20px",
    fontSize: "16px",
    color: "#333",
  };

  const formStyle = {
    maxWidth: "400px",
    margin: "auto",
    textAlign: "left",
    background: "white",
    padding: "30px 25px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  const textareaStyle = {
    ...inputStyle,
    height: "100px",
    resize: "none",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    background: "#4a90e2",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>Contact Us</h1>
      <p style={textStyle}>Have questions? We'd love to hear from you! Fill out the form below:</p>

      <form style={formStyle}>
        <input type="text" placeholder="Your Name" style={inputStyle} />
        <input type="email" placeholder="Your Email" style={inputStyle} />
        <textarea placeholder="Your Message" style={textareaStyle}></textarea>
        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
