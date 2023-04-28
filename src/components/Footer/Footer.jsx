import React from "react";
import footerImg from "../../assets/images/m.png"

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-redcolor text-primary-content">
        <div>
            <h1 className="text-5xl font-[900] ">M</h1>
          <p className="font-bold">
           Martin Vallejo Developer <br />
            Software Developer
          </p>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/Vxllejo"><i class="ri-github-fill text-3xl hover:text-smallTextColor"></i></a>
          <a href="https://www.linkedin.com/in/martinvallejoz/"><i class="ri-linkedin-box-fill text-3xl hover:text-smallTextColor"></i></a>
          <a href="https://www.instagram.com/mxrtinvallejo/"><i class="ri-instagram-line text-3xl hover:text-smallTextColor"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
