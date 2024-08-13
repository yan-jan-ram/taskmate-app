import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={style.footerContent}>
        <h5>Copyright &copy; {new Date().getFullYear()}</h5>
        <p>
          Email: <a href="mailto:ram@gmail.com">ram@gmail.com</a>
        </p>
        <p>
          Contact: <a href="tel:+91 69345 73376">+91 69345 73376</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
