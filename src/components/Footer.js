import React from "react";
import "../components/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="ft-wrap">
        <p>
          <a href="https://help.netflix.com/ko/contactus">
            Questions? Contact us.
          </a>
        </p>
        <ul>
          <li>
            <a href="https://help.netflix.com/ko/node/412">FAQ</a>
          </li>
          <li>
            <a href="https://help.netflix.com/ko/">Help Center</a>
          </li>
          <li>
            <a href="https://help.netflix.com/legal/termsofuse">Terms of Use</a>
          </li>
          <li>
            <a href="https://help.netflix.com/legal/privacy">
              Privacy Statement
            </a>
          </li>
          <li>
            <a href="https://www.netflix.com/kr-en/login">Cookie Preferences</a>
          </li>
          <li>
            <a href="https://help.netflix.com/legal/corpinfo">
              Corporate Information
            </a>
          </li>
        </ul>
        <p>
          Netflix Services Korea Ltd. E-Commerce Registration Number: Je
          2018-Seoul Jong-ro-0426 Ho. Phone:
          <br />
          Representative: Reginald Shawn Thompson
          <br /> Email: korea@netflix.com
          <br /> Address: 20F, Tower A, Centropolis Building 26, Ujeongguk-ro,
          Jongno-gu, Seoul, 03161 Republic of Korea
          <br />
          Business registration number: 165-87-00119 <br />
          Hosted by: Amazon Web Services Inc.
          <br /> KFTC website
        </p>
      </div>
    </footer>
  );
};

export default Footer;
