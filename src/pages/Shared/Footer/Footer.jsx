import logo from "../../../assets/images/logo.svg";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <img src={logo} alt="logo" className="h-16 w-24" />
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
        <div className="flex gap-3 mx-auto">
          <p>
            <FaFacebook></FaFacebook>
          </p>
          <p>
            <FaInstagram></FaInstagram>
          </p>
          <p>
            <FaTwitter></FaTwitter>
          </p>
          <p>
            <FaGithub></FaGithub>
          </p>
        </div>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
      </div>
    </footer>
  );
};

export default Footer;
