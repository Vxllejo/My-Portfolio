import React from "react";
import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);
  return (
    <div className="w-full h-full fixed top-0 letf-0 z-10 bg-headingColor bg-opacity-40">
      <div className="max-w-[700px] p-5 absolute top-1/2 left-1/2 z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 ">
        <div>
          <figure>
            <img className="rounded-[8px] " src={portfolio.imgUrl} alt=""></img>
          </figure>
        </div>
        <div>
          <h2 className="text-2xl text-headingColor font-[700] my-5 ">
            {portfolio.title}
          </h2>
        </div>

        <p className="text-[15px] leading-7 font-[400] text-smallTextColor">
          {portfolio.description}
        </p>
        <div className="mt-5 flex items-center gap-3 flex-wrap">
          <h2 className="text-headingColor text-[18px] text-[900]">
            Technologies Used :
          </h2>

          {portfolio.technologies.map((item, index) => (
            <span
              key={index}
              className="bg-gray-200 py-1 px-2 rounded-[5px] font-[600] text-[14px] leading-0"
            >
              {item}
            </span>
          ))}
        </div>

        <a href={portfolio.siteUrl}>
          <button className="bg-redcolor text-white px-4 py-2 rounded-[8px] my-8  font-[500] hover:bg-browncolor ease-in duration-300 ">
            Live Site
          </button>
        </a>
        <a href={portfolio.gitURL}>
          <button className="text-white  bg-redcolor hover:bg-browncolor py-2 px-4 rounded-[8px] font-[500] ease-in duration-300 relative left-5">
          <i class="ri-github-fill"></i>

          </button>
        </a>
        <button onClick={()=>setShowModal(false)} className="w-[1.8rem] h-[1.8rem] hover:bg-gray-200 bg-[white] absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer ">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
