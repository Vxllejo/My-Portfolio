import React from "react";
import "remixicon/fonts/remixicon.css";
import avatarimg from "../../assets/images/avatarimg.jpg";

const Header = () => {
  return (
    <header className="w-full fixed z-10 h-[70px] leading-[60px] flex items-center">
      <div className="container bg-white">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-[10px]">
            <div class="avatar">
              <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={avatarimg} alt=""/>
              </div>
            </div>
            {/*<span className="w-[35px] h-[35px] bg-browncolor text-white text-[18px] font-[500] rounded-full items-center flex justify-center">
              M
  </span>*/}

            <div className="pl-1 leading-[10px]">
              <h2 className="text-xl text-smallTextColor font-[700]">Martín</h2>

              <p className="text-smallTextColor text-[14px] font-[500]">
                Node Dev
              </p>
              <div className="h-[2px] mt-1 bg-black w-[100%]"></div>
            </div>
          </div>

          {/* LOGO END */}
          {/* MENU START */}
          <div className="menu">
            <ul className="flex items-end gap-[25px]">
              <li>
                <a
                  className="text-smallTextColor font-[600] hover:underline"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-smallTextColor font-[600] hover:underline"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-smallTextColor font-[600] hover:underline "
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  className="text-smallTextColor font-[600] hover:underline"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* MENU END */}

        </div>
      </div>
    </header>
  );
};

export default Header;
