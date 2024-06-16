import "./App.css";
import logo from "../src/assets/images/sb.png";
// import consult from "../src/assets/images/consult.png";
// import security from "../src/assets/images/security.png";
import mobile from "../src/assets/images/mobile2.png";
import splash from "../src/assets/images/Group.png";
import host from "../src/assets/images/host.png";
// import ui from "../src/assets/images/ui.png";
import web from "../src/assets/images/web.png";
import React, { useState } from "react";
import Faq from "react-faq-component";
import { FaBars, FaInstagram, FaTwitter } from "react-icons/fa";
// import TypeWriterEffect from "react-typewriter-effect";
import TextTransition, { presets } from "react-text-transition";
import More from "./components/More";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-scroll";


const data = {
  title: "",
  rows: [
    {
      title: "What services does BinZ provide?",
      content: ` BinZ offers advanced smart bin solutions that focus on the efficient collection, classification, and recycling of plastic waste. Our services emphasize innovative waste management technology, ensuring the secure handling of waste data, and providing timely notifications for waste collection. BinZ aims to enhance user satisfaction through high-quality, transparent communication and effective waste management practices, ultimately contributing to a cleaner and more sustainable environment..`,
    },
    // {
    //   title: "How does BinZ approach effective waste collection?",
    //   content:
    //     "Our team of skilled professionals combines technical expertise, creativity, and a user-centric approach to deliver exceptional mobile app and web development solutions. We focus on creating seamless experiences, captivating designs, and robust functionality to meet the unique needs of our clients.",
    // },
    {
      title: " How do I get started with BinZ?",
      content: `Getting started is easy! Simply reach out to us through our social handles or contact links. We'll promise prompt response from our Help Desk team.`,
    },
    {
      title: "What industries does BinZ serve?",
      content:
        "BinZ offers a range of adaptive features that makes it both capable and relavant in many sectors and walks of life, our Adaptive solution can be effective at homes, business areas, schools, public spaces and goverment locations.",
    },
    {
      title: " How does BinZ ensure customer satisfaction?",
      content:
        "We place a strong emphasis on user satisfaction and strive to exceed expectations in every project. By actively listening to our clients' needs, we provide transparent communication throughout the process and deliver high-quality smart bin solutions that meet their objectives. Our goal is to build long-lasting partnerships based on trust and mutual success, ensuring that our clients are delighted with the efficiency and effectiveness of our waste management systems.",
    },
  ],
};



// const styles = {
//   bgColor: "none",
//   Cursor: "pointer",
// };

const TEXTS = ["Solutions for Cleaner Environments", "Solutions for Efficient Waste Collection"];



function App() {
  const [isOpen, setIsOpen] = useState(false);

const handleOpenModal = () => {
  setIsOpen(true);
};

const handleCloseModal = () => {
  setIsOpen(false);
};
  
  const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        4000 // every 6 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);

  return (
    <div className="App overflow-x-hidden">
      <div className="flex flex-col bg-blue-100">
        <div className="flex max-w-[1200px]  w-full mx-auto ">
          {/* Navbar */}
          <div className="flex flex-row w-full items-center justify-between pb-3 my-6 border-b-2 font-outfit mx-10 md:mx-0">
            {/* logo */}
            <div className="md:w-[15%] w-[140px]">
              <img src={logo} alt="binz-logo" className="" />
            </div>
            <div>
              <button
                onClick={handleOpenModal}
                className=" flex items-center  md:hidden btn  border-black text-black bg-white hover:text-white shadow-solid-primary"
              >
                <FaBars />
              </button>
              {isOpen && (
                <div class="fixed  inset-0 flex items-center justify-center z-50">
                  <div class="fixed inset-0 bg-black opacity-50"></div>
                  <div className="absolute transform -mt-80 bg-white text-red-500 rounded-lg p-8 w-[55%] h-[30%] outline-none ">
                    <div className="text-[#1E212B] justify-self-center items-center  flex-col flex gap-4 font-outfit ">
                      <span className="text-2xl">
                        <Link
                          to="more"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                          href=""
                          onClick={handleCloseModal}
                        >
                          {" "}
                          About
                        </Link>
                      </span>
                      <span className="text-2xl">
                        <Link
                          to="about"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                          href=""
                          onClick={handleCloseModal}
                        >
                          Services
                        </Link>
                      </span>
                      <span className="text-2xl">
                        <Link
                          to="accordion"
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                          href=""
                          onClick={handleCloseModal}
                        >
                          FAQ
                        </Link>
                      </span>
                    </div>
                    <button
                      onClick={handleCloseModal}
                      className="items-center justify-center text-2xl flex mt-5"
                    >
                      <FaSignOutAlt />
                    </button>
                  </div>
                </div>
              )}{" "}
            </div>

            <div
              className="text-[#1E212B] items-end justify-self-end pl-[500px]  md:flex text-lg gap-7 font-outfit font
            hidden "
            >
              <span className="cursor-pointer hover:text-green-500 transition">
                <Link
                  to="more"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  href=""
                >
                  {" "}
                  About
                </Link>
              </span>
              <span className="text-2xl text-gray-200"> | </span>
              <span className="cursor-pointer hover:text-green-500 transition">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  href=""
                >
                  Services
                </Link>
              </span>
              <span className="text-2xl text-gray-200"> | </span>
              <span className="cursor-pointer hover:text-green-500 transition">
                <Link
                  to="accordion"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  href=""
                >
                  FAQ
                </Link>
              </span>
            </div>

            {/* join waitlist btn */}
            <div className="hidden justify-end md:flex">
              <a
                href="https://grwa014ja7o.typeform.com/to/IyD9p2Wg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="shadow-solid-primary
               border-2 border-black py-2 px-4
              ease-out text-black hover:bg-black hover:text-[#fffffe] rounded-3xl capitalize font-semibold transition"
                >
                  <span className="flex items-center justify-center">
                    <label>Join Waitlist</label>
                  </span>
                </button>
              </a>
            </div>
            {/* The button to open modal */}
          </div>
        </div>

        <div className="flex flex-col w-full md:w-full md:h-full mx-auto font-outfit">
          <div className="flex flex-col w-full items-center justify-start pt-7">
            <h1 className="md:text-6xl text-3xl font-outfit text-black text-center">
              Develop Eco-friendly
              <br /> Waste Management 🚀{" "}
              <span className="flex md:flex-row flex-col">
                <span className="flex items-center justify-center flex-row gap-4 ">
                  <TextTransition
                    className="flex items-center md:items-end justify-center font-bold text-green-600 text-3xl md:text-6xl"
                    springConfig={presets.wobbly}
                  >
                    {TEXTS[index % TEXTS.length]}
                  </TextTransition>{" "}
                </span>
                <span className="md:pl-4">
                </span>
              </span>
            </h1>
          </div>
        </div>

        <div className="flex pt-6 justify-center items-center">
          <img
            src={splash}
            alt="Splash"
            className="bg-transparent h-60 w-80 md:h-[400px] md:w-[600px]"
          />
        </div>

        <hr className="md:my-10" />

        {/* ---About section--- */}
        <div
          className="w-full h-full flex flex-col md:mb-40 md:flex-row justify-start relative"
          id="about"
        >
          <div className="max-w-[1200px] w-full mx-auto my-10">
            <div className="w-full font-outfit md:mt-10 border-r-green-800 md:border-r-green-800 md:border-t-0 md:border-l-0 md:border-b-0 md:border-r-4 pr-5 md:ml-0 ml-6">
              <h1 className="md:text-7xl md:text-end text-3xl md:pb-3">
                Our services{" "}
              </h1>
              {/* <h2 className="md:text-3xl md:text-end pr-2 text-lg text-black pb-4">
                What we offer{"  "}
                <span className="text-gray-400 pr-6" id="span-xlistics">
                  @Xpace
                </span>{" "}
              </h2> */}
            </div>
            <div className="w-full ">
              <h1 className="hidden md:flex font-extralight md:text-3xl text-start text-xl text-pink-500">
                Our Arsenal of Digital Marvels;{" "}
              </h1>
            </div>
            <div className=" h-full items-center md:mt-0 mt-6 justify-center md:mx-6 mx-6 flex-col flex md:gap-32 gap-6 font-outfit ">
              <div className="w-[100%] justify-center flex flex-col md:flex-row md:gap-10 gap-6">
                <div className="  bg-blue-100 border-2 border-black  md:px-4 mt-6 mx-4 shadow-solid-about rounded flex-col items-center justify-center text-center">
                  <div className=" flex md:mx-40 mx-28 items-center w-[100px] h-[50px]">
                    <img src={mobile} alt="mobile" /> 
                  </div>
                  <h1 className="md:text-3xl text-xl text-violet-600 font-semibold pt-5">
                    Waste Collection
                  </h1>
                  <h5 className="text-sm md:text-md flex p-4 md:px-8 md:pt-5">
                  Our innovative solution at BinZ ensures the effective and hygienic collection of waste, preventing contamination and disease spread. Our smart bins create a barrier between users and collected trash, ensuring safety and cleanliness. Additionally, when a bin is full, our system promptly notifies waste collection officers for immediate pick-up, ensuring efficient and timely waste management.
                  </h5>
                </div>
                <div className=" bg-blue-100 border-2 border-black  md:px-4 mt-6 mx-4 shadow-solid-about rounded flex-col items-center justify-center text-center">
                  <div className=" flex md:mx-40 mx-28 items-center w-[100px] h-[50px]">
                    <img src={web} alt="web" />
                  </div>
                  <h1 className="md:text-3xl text-xl text-orange-500 font-semibold pt-5">
                    Waste Classification
                  </h1>
                  <h5 className="text-sm md:text-md p-4 md:px-8 md:pt-5">
                  BinZ stands as a testament to effective waste classification. Our advanced smart bin technology ensures precise sorting of waste, maximizing recycling efficiency and minimizing environmental impact. With BinZ, waste is meticulously classified, contributing to a cleaner and more sustainable future.
                  </h5>
                </div>
                <div className=" bg-blue-100 mt-6 mx-4 border-2 border-black  md:px-4 shadow-solid-about rounded flex-col items-center justify-center text-center">
                  <div className=" flex md:mx-40 mx-28 items-center w-[100px] h-[50px]">
                    <img src={host} alt="host" />
                  </div>
                  <h1 className="md:text-3xl text-xl text-green-600 font-semibold pt-5">
                    Effective Recycling
                  </h1>
                  <h5 className="text-sm md:text-md  p-4 md:px-8 md:pt-5">
                  With our advanced recycling solutions, you can rest assured that waste management is in capable hands. We handle the complexities of waste collection and classification, allowing you to focus on your core business and deliver exceptional results. Experience the peace of mind that comes with efficient recycling and reliable waste management, and let us take your sustainability efforts to new heights.
                  </h5>
                </div>
              </div>

              {/* <div className="w-[100%] justify-center mt-5 flex flex-col md:flex-row md:gap-10 gap-6">
                <div className="  bg-blue-100 mx-4 border-2 border-black  md:px-4 shadow-solid-about-2 rounded flex-col items-center justify-center text-center">
                  <div className=" flex md:mx-40 mx-28 items-center w-[100px] h-[50px]">
                    <img src={ui} />
                  </div>
                  <h1 className="md:text-3xl text-xl text-pink-700 font-semibold pt-5">
                    UI/UX
                  </h1>
                  <h5 className="text-sm md:text-md flex p-4 md:px-8 md:pt-5">
                    Crafting Seamless Experiences: Elevate your digital presence
                    with our exceptional UI/UX design service. Our team of
                    skilled designers combines creativity and expertise to
                    create captivating interfaces that engage users and drive
                    results. From intuitive navigation to visually stunning
                    aesthetics, we bring your vision to life, ensuring every
                    interaction is a delightful journey. Experience the power of
                    design that captivates, inspires, and leaves a lasting
                    impression.
                  </h5>
                </div>
                <div className=" bg-blue-100 border-2 border-black  md:px-4 mt-6 mx-4 shadow-solid-about-2 rounded flex-col items-center justify-center text-center">
                  <div className=" flex md:mx-40 mx-28 items-center w-[100px] h-[50px]">
                    <img src={security} />
                  </div>
                  <h1 className="md:text-3xl text-xl text-brown-500 font-semibold pt-5">
                    Cyber Security
                  </h1>
                  <h5 className="text-sm md:text-md p-4 md:px-8 md:pt-5">
                    we unravel the intricate tales of cyber threats,
                    anticipating their every move. Our proactive approach
                    identifies vulnerabilities before they can be exploited,
                    fortifying your defenses and ensuring your digital empire
                    remains impenetrable. But our mission goes beyond
                    protection. We empower you with knowledge, equipping you to
                    navigate the treacherous digital landscape. Through
                    comprehensive audits, training programs, and strategic
                    guidance, we empower you to become the hero of your own
                    cybersecurity story.
                  </h5>
                </div>
                <div className=" bg-blue-100 mt-6 mx-4 border-2 border-black  md:px-4 shadow-solid-about-2 rounded flex-col items-center justify-center text-center">
                  <div className=" flex md:mx-40 mx-28 items-center w-[100px] h-[50px]">
                    <img src={consult} />
                  </div>
                  <h1 className="md:text-3xl text-xl text-yellow-600 font-semibold pt-5">
                    Consultancy
                  </h1>
                  <h5 className="text-sm md:text-md p-4 md:px-8 md:pt-5">
                    Our consultancy services extend beyond advice. We work
                    collaboratively with your team, providing hands-on support
                    and guidance throughout the implementation process. We
                    believe in building long-lasting partnerships, and our
                    commitment to your success remains unwavering. Whether
                    you're a startup looking to disrupt the market or an
                    established enterprise seeking to stay ahead of the
                    competition, let's unlock your business potential and embark
                    on a journey of growth and success.
                  </h5>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div id="more">
          <More />
        </div>

        {/* ---FaQ section--- */}
        <div className="w-full px-6 md:mt-40 md:px-0 bg-blue-100 h-full flex flex-col justify-start relative">
          <div className="max-w-[1200px] mx-auto w-full h-full flex md:flex-row flex-col items-center justify-between">
            <h1 className="font-outfit text-green-600 md:my-4 font-bold text-2xl pb-4 md:text-5xl md:self-center items-center">
              Frequently Asked Questions?
            </h1>
            <div className="font-outfit md:mx-8 bg-none" id="accordion">
              <div
                className="mt-2 text-[10px] border-2 rounded-xl px-10"
                id="accordion"
              >
                <Faq data={data} id="accordion" />
              </div>

              <div className="flex md:flex-row flex-col items-center justify-end md:gap-7 my-6">
                <div className="flex mt-5 md:mt-0 justify-center items-center md:gap-0 gap-3">
                  <span className="text-md md:text-2xl justify-end md:my-0 my-3 text-black">
                    Reach out to us:
                  </span>
                </div>

                <div className="flex flex-row items-center justify-center gap-5 md:pt-9 md:mb-0 mb-5">
                  <a
                    href="https://grwa014ja7o.typeform.com/to/IyD9p2Wg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="shadow-solid-primary
               border-2 border-black py-2 px-4
              ease-out text-black hover:bg-black hover:text-[#fffffe] rounded-md btn-sm md:btn-md flex items-center justify-center capitalize font-semibold transition"
                    >
                      <label>Join Waitlist</label>
                    </button>
                  </a>
                  <span className="md:text-2xl cursor-pointer">
                    <a
                      href="https://twitter.com/usebinz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter />
                    </a>
                  </span>
                  <span className="text-xs">|</span>
                  <span className="md:text-2xl cursor-pointer">
                    <a
                      href="https://www.instagram.com/usebinz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex items-end justify-center py-3 text-center px-6 bg-gray-800">
          <h1 className="flex gap-2 font-thin text-gray-500 md:text-lg text-sm ">
            © 2024 BinZ inc. All Rights Reserved.
            <a className="text-violet-500" href="mailto:product@xpace.rocks" >product@binz.rocks</a>
          </h1>
        </div>
      </div>
    </div>
  );
}


export default App;
