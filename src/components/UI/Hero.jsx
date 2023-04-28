import React from "react";
import heroImg from "../../assets/images/hero.svg";
import CountUp from "react-countup";
import Particle from "./Particle";

const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* hero left content */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              👨‍💻 Welcome everyone!
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5 pb-4"
            >
              I'm Martín Vallejo <br />
              Software Developer
            </h1>

            <div className="h-1 bg-black w-[80%]"></div>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-red-700 text-white font-[500] flex items-center gap-2 hover:bg-browncolor ease-in duration-300 py-2 px-4 rounded-md">
                  <i class="ri-mail-line"></i> Hire me
                </button>
              </a>

              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextcolor"
              >
                See Projects
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-10 font-[500] text-[15px] leading-7  sm:pr-1"
            >
              Hi, I'm Martin Vallejo, a MERN stack developer. I'm a passionate
              and dedicated software developer with a passion for building and
              maintaining applications. I have a strong foundation in front end
              & back-end development
            </p>
            <div className="flex items-center gap-9 mt-14 pb-10">
              <span className="text-browncolor text-3xl ">
                <a href="https://github.com/Vxllejo">
                  <i className="ri-github-fill "></i>
                </a>
              </span>
              <span className="text-browncolor text-3xl">
                <a href="https://www.instagram.com/mxrtinvallejo/">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
              <span className="text-browncolor text-3xl">
                <a href="https://www.linkedin.com/in/martinvallejoz/">
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span className="text-browncolor text-3xl">
                <a href="https://www.facebook.com/profile.php?id=100089889647768">
                  <i class="ri-facebook-circle-fill"></i>
                </a>
              </span>
            </div>
          </div>
          {/* hero left end */}
          {/* hero img */}
          <div className="basis-1/3 md:mt-10">
            

            <figure className="flex items-center justify-center">
              <img className="relative bottom-20" src={heroImg}></img>
            </figure>
          </div>

          {/* hero img end*/}
          {/* hero content right*/}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb10">
              <h2 className="text-headingColor font-[600] text-[32px]">
                <CountUp start={0} end={3} duration={3} suffix="+" />
              </h2>
              <h4>Years of Experience</h4>
            </div>
            <div className="mb10">
              <h2 className="text-headingColor font-[600] text-[32px]">
                <CountUp start={0} end={100} duration={3.5} suffix="%" />
              </h2>
              <h4>Sucess Rate</h4>
            </div>
            <div className="mb10">
              <h2 className="text-headingColor font-[600] text-[32px]">
                <CountUp start={0} end={2} duration={3} suffix="+" />
              </h2>
              <h4>Happy Clients</h4>
            </div>
            <div className="mb10">
              <h2 className="text-headingColor font-[600] text-[32px]">
                <CountUp start={0} end={5} duration={3} suffix="+" />
              </h2>
              <h4>Projects Completed</h4>
            </div>
          </div>
          {/* hero content right end*/}
        </div>
      </div>
    </section>
  );
};

export default Hero;
