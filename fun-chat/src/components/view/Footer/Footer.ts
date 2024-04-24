import "./Footer.css";

const Footer = () => {
  const footerDiv = document.createElement("div");
  footerDiv.classList.add("footer");

  const footerText = document.createElement("h3");
  footerText.classList.add("footer-text");
  footerText.textContent = "© 2024 c00b3r RSSchool";

  footerDiv.appendChild(footerText);
  return footerDiv;
};

export default Footer;
