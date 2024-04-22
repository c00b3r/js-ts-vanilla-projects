import "./Footer.css"

const Footer = () => {
  const footerDiv = document.createElement("div");
  footerDiv.classList.add("footer");

  const footerText = document.createElement("p");
  footerText.classList.add("footer-text");
  footerText.textContent = "© 2024 - MikAleinik RSSchool"

  footerDiv.appendChild(footerText);
  return footerDiv;
};

export default Footer;