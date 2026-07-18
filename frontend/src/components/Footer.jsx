import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-box">
          <h2>SafeX Feedback Module</h2>

          <p>
            Weekly Task Assignment System developed to evaluate intern
            performance and improve team collaboration.
          </p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>

          <ul>
            <li>Dashboard</li>
            <li>Feedback Form</li>
            <li>History</li>
            <li>Leader Feedback</li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Contact</h3>

          <p>
            <FaEnvelope /> support@safex.com
          </p>

          <div className="social-icons">
            <FaFacebook />
            <FaLinkedin />
            <FaGithub />
          </div>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 SafeX Solutions | Weekly Task Assignment System | Group 50
      </p>
    </footer>
  );
}

export default Footer;