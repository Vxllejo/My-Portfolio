import React from "react";
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import appsImg from "../../assets/images/apps.png";
import designImg from "../../assets/images/design.png";

const Services = () => {
  return (
    <section id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[700] text-[2.4rem]  text-center mb-5">
            How can I help you?
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor rounded shadow-md shadow-red-500    group  p-4 font-[500] text-[16px] leading-7">
            I'm able to develop interfaces, microservices and connect with the
            back-end, I'm willing to learn and be guided by my superiors to
            achieve the right performance for the project and for the team.
          </p>
          <div className="pt-20 flex flex-row justify-center gap-5 ">
          <div className="radial-progress text-reactcolor font-semibold" style={{ "--value": 85 }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" className="w-8"></img>
            85%
          </div>
            
          <div className="radial-progress text-black" style={{ "--value": 80 }}><img src="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png" className="w-8"></img>
            80%
          </div>
          <div className="radial-progress text-jscolor" style={{ "--value": 85 }}><img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" className="w-8 rounded-lg"></img>
            85%
          </div>
          <div className="radial-progress text-typescriptcolor" style={{ "--value": 75 }}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" className="w-8 rounded-md"></img>
            75%
          </div>
          <div className="radial-progress text-tailwindcolor" style={{ "--value": 90 }}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" className="w-8"></img>
            90%
          </div>
          <div className="radial-progress text-browncolor" style={{ "--value": 75 }}><img src="https://img.icons8.com/color/512/mongodb.png" className="w-8"></img>
            75%
          </div>

          </div>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* vertical line running through the middle */}
              <div
                className="hidden absolute w-1 sm:block bg-browncolor h-full left-1/2 transform -translate-x-1/2
                    "
              ></div>

              {/* left card */}
              <div className="mt-6 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                        className="bg-white p-4 rounded shadow group hover:bg-rosecolor cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-bluecolor font-[700] mb-3 group-hover:text-white
                                            group:hover:font-[700] text-2xl
                                            "
                        >
                          Front-End Web Development
                        </h3>
                        <p className=" text-[15px] text-smallTextColor group-hover:font-[500] font-[500] leading-7">
                          I develop the frontend with React JS, NextJS and
                          TailwindCSS Library.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-redcolor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4  sm:translate-y-0 flex items-center justify-center ">
                    <figure>
                      <img src={frontendImg}></img>
                    </figure>
                  </div>
                </div>
              </div>

              {/* right card */}
              <div className="mt-6 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                        className="bg-white p-4 rounded shadow group hover:bg-rosecolor cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-bluecolor font-[700] mb-3 group-hover:text-white 
                                            group:hover:font-[700] text-2xl
                                            "
                        >
                          Microservices Development
                        </h3>
                        <p className=" text-[15px] text-smallTextColor group-hover:font-[500] font-[500]  leading-7">
                          I've experience in microservices development, I've
                          also studied the subject a lot and I want to discover
                          more about it.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-redcolor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4  sm:translate-y-0 flex items-center justify-center ">
                    <figure>
                      <img src={backendImg}></img>
                    </figure>
                  </div>
                </div>
              </div>

              {/* left card */}
              <div className="mt-6 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                        className="bg-white p-4 rounded shadow group hover:bg-rosecolor cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-bluecolor font-[700] mb-3 group-hover:text-white 
                                            group:hover:font-[700] text-2xl
                                            "
                        >
                          UX/UI Design
                        </h3>
                        <p className="  text-smallTextColor group-hover:font-[500] font-[500] text-[16px] leading-7">
                          Before I started programming, my field was UX/UI
                          design, but I fell more in love with logic.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-redcolor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4  sm:translate-y-0 flex items-center justify-center ">
                    <figure>
                      <img src={designImg}></img>
                    </figure>
                  </div>
                </div>
              </div>

              {/* right card */}
              <div className="mt-6 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        data-aos-delay="300"
                        className="bg-white p-4 rounded shadow group hover:bg-rosecolor cursor-pointer ease-in duration-150"
                      >
                        <h3
                          className="text-bluecolor font-[700] mb-3 group-hover:text-white 
                                            group:hover:font-[700] text-2xl
                                            "
                        >
                          Back-End Development
                        </h3>
                        <p className=" text-[15px] text-smallTextColor group-hover:font-[500] font-[500]  leading-7">
                        The back-end is one of those important things that cannot be missing from your sandwich. I manage the back-end with node.js and express.js.

                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-redcolor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4  sm:translate-y-0 flex items-center justify-center ">
                    <figure>
                      <img src={appsImg}></img>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
