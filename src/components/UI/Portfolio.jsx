import React, { useState, useEffect } from "react";
import data from "../../assets/data/portfolioData";
import Modal from "./Modal";

const Portfolio = () => {
  const [nextItems, setNextItems] = useState(6);
  const [portfolios, setPortfolios] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 3);
  };

  const showModalHandler = id => {
    setShowModal(true)
    setActiveID(id)
  }

  useEffect(() => {
    if (selectTab === "all") {
      setPortfolios(data);
    }

    if (selectTab === "web-development") {
      const filteredData = data.filter(
        (item) => item.category === "Web Development"
      );
      setPortfolios(filteredData);
    }

    if (selectTab === "ux/ui") {
      const filteredData = data.filter((item) => item.category === "UX/UI");
      setPortfolios(filteredData);
    }
  }, [selectTab]);

  return (
    <section id="portfolio">
      <div className="container mockup-window text-primaryColor border border-gray-100 py-10 ">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-headingColor text-[2.5rem] pt-3 font-[700]">
              My Recent Projects
              <div className="dropdown dropdown-start left-1 bottom-3">
                <label
                  tabIndex={0}
                  className="btn btn-circle btn-ghost btn-xs text-info"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </label>
                <div
                  tabIndex={0}
                  className="card compact dropdown-content shadow bg-base-100 rounded-box w-64"
                >
                  <div className="card-body">
                    <h1 className="card-title">I love this section!</h1>
                    <p className="font-[600] ">
                      Here are the projects that I have done with the greatest
                      effort and dedication.
                    </p>
                    <p className="font-[800] ">all pages are made in javascript.</p>
                  </div>
                </div>
              </div>
            </h3>
          </div>

          <div className="flex gap-3 pt-5">
            <button
              onClick={() => setSelectTab("all")}
              className="text-white bg-redcolor hover:bg-browncolor border border-solid border-smallTextColor  py-2 px-4 rounded-[8px]"
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("web-development")}
              className="text-white bg-redcolor hover:bg-browncolor ease-in duration-300 border border-solid  border-smallTextColor bpy-2 px-4 rounded-[8px]"
            >
              Web Development
            </button>
            <button
              onClick={() => setSelectTab("ux/ui")}
              className="text-white bg-redcolor hover:bg-browncolor ease-in duration-300  border border-solid border-smallTextColor  py-2 px-4 rounded-[8px]"
            >
              UX/UI
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap mt-12">
          {portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
            <div
              key={index}
              data-aos="fade-zoom"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img className="rounded" src={portfolio.imgUrl} alt="" />
              </figure>

              <div
                className="w-full h-full bg-gray-200 bg-opacity-40 absolute top-0 left-0 z-[5]
                        hidden group-hover:block"
              >
                <div className="flex items-center justify-center pt-[85px] gap-3  ">
                  <button
                    href="#"
                    onClick={() => showModalHandler(portfolio.id)}
                    className="text-white text-lg bg-redcolor hover:bg-browncolor py-2 px-4 rounded-[8px] font-[600] ease-in duration-200"
                  >
                    More Details
                  </button>
                 
                </div>
              </div>
            </div>
          ))}
          ;
        </div>
        <div className="text-center mt-6">
          <button
            onClick={loadMoreHandler}
            className="text-white bg-redcolor hover:bg-browncolor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200"
          >
            Load More
          </button>
        </div>
      </div>
      {
        showModal && <Modal setShowModal={setShowModal} activeID={activeID}/>
      }
    </section>
  );
};

export default Portfolio;
