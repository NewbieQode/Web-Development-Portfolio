function Footer() {
  return (
    <footer>
      <p
        className="footer"
        style={{
          position: "absolute",
          display: "inline-block",
          marginTop: `51%`,
          marginBottom: `50%`,
        }}
      >
        &copy; {new Date().getFullYear()} Youtube Clone
      </p>
    </footer>
  );
}

export default Footer;
