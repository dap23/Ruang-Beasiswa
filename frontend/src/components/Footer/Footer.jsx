import "./footer.css";
import { HiGlobeAlt } from "react-icons/hi";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-atas">
        <div>
          <h3>Ruang Beasiswa</h3>
          <form>
            <input
              className="input-email"
              type="text"
              placeholder="Email Address..."
              name="email"
            />
            <br />
            <br />
            <button
              className="button-susbcribe"
              type="submit"
              aria-label="Submit Button">
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h5>Company</h5>
          <div className="keterangan">
            <Link to="/about" className="link">
              <p>About</p>
            </Link>
            <p>Term</p>
            <p>Privacy</p>
          </div>
        </div>
        <div>
          <h5>Service</h5>
          <div className="keterangan">
            <p>Account</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div>
          <h5>Partner</h5>
          <div className="keterangan">
            <p>Be Our Partner</p>
          </div>
        </div>
      </div>
      <div className="logo-footer">
        <button className="button-logo">
          <HiGlobeAlt />
        </button>
        <button className="button-logo">
          <GrFacebookOption />
        </button>
        <button className="button-logo">
          <FaLinkedinIn />
        </button>
        <button className="button-logo">
          <AiFillGithub />
        </button>
      </div>
    </div>
  );
};

export default Footer;
