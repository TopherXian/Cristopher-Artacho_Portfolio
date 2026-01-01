import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import profile_pic from "../assets/images/portrait.jpg"
import cv from "../assets/cv/cv.pdf"
import { motion} from "framer-motion";

const Homepage = () => {
  return (
    <>
      <div className="bg-background">
        {/* LAYER 1 */}
        <div id="homepage" className="overflow-hidden
        min-h-screen relative">
          <Navbar />
          <div className="flex md:mr-[2rem] lg:gap-[0]
          ">
            {/* INTRODUCTION */}
            <div className="xl:h-[40rem] xl:w-[50rem] xl:px-[10vw] xl:pt-[10rem]
                            lg:h-[40rem] lg:w-[40rem] lg:px-[7rem] lg:pt-[10rem]
                            md:h-[40rem] md:w-[40rem] md:pl-[4rem] md:pt-[15rem]
                            h-[10rem] w-[100%] px-[5rem] pt-[20rem] items-center justify-center text-black z-10

            ">
              <p className=" xl:text-left xl:text-xl_intro
              lg:text-left lg:text-lg_intro
              md:text-left md:text-md_intro 
              text-center text-sm_intro
              font-light font-inter 
              ">Hello there!</p>

              <p className=" xl:text-left xl:text-xl_heading
              lg:text-left lg:text-lg_heading
              md:text-left md:text-md_heading
              text-center text-sm_heading
               font-raleway font-bold">
                I’m <span>Cristopher Ian</span>
              </p>
              <p className=" xl:text-left xl:text-xl_heading
              lg:text-left lg:text-lg_heading
              md:text-left md:text-md_heading
              text-center text-sm_heading
              font-raleway font-bold">
                Computer Programmer
              </p>
              <p className=" xl:text-left xl:text-xl_content
              lg:text-left lg:text-lg_content
              md:text-left md:text-lg_content
              text-center text-sm_content
               mt-[1vh] mb-[2vh] font-normal">
                I specialize in game development, website design, and computer
                science, creating engaging games, intuitive websites, and
                innovative tech solutions.
              </p>
              
             <div className=" xl:justify-start xl:text-xl_heading2
             lg:justify-start lg:text-lg_heading2
             md:justify-start md:text-md_heading2
             justify-center text-sm_heading2
             flex gap-[2rem]"> 
               <a href={cv} download>
                <button
                  className="
                    md:px-[1rem] md:py-[1rem]
                    mt-[1rem] px-[0.5rem] py-[0.5rem] text-intro 
                    bg-highlight1 text-white font-inter font-bold
                  "
                >
                  Download CV
                </button>
              </a>
              <button 
              className="md:px-[1rem] md:py-[1rem]
              mt-[1rem] px-[0.5rem] py-[0.5rem] text-intro bg-highlight1 text-white mt-[1rem] font-inter font-bold
              "
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView();
                }}
              >Hire Me
              </button>
             </div>
              {/* PHOTO */}
              <div className="bg-[(../assets/images/SampleImage.png)] h-[90vh] w-[40vw]"></div>
              {/* DECORATIVE SQUARES */}
              <motion.div
                className="md:top-[20vh] md:left-[0vw] md:w-[5vw] md:h-[20vh]
                top-[10vh] left-[0vw] w-[10vw] h-[15vh]  
                bg-object1 absolute "
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ transformOrigin: "left" }}
              />
              <motion.div
                className=" md:top-[30vh] md:right-[0vw] md:w-[10vw] md:h-[30vh]
                top-[30vh] right-[0vw] w-[10vw] h-[20vh] 
                bg-object2 absolute"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ transformOrigin: "right" }}
              />
              <motion.div
                className="md:top-[90vh] md:right-[0vw] md:w-[10vw] md:h-[30vh]
                top-[80vh] right-[0vw] w-[20vw] h-[20vh]
                absolute bg-object1 z-20"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ transformOrigin: "right" }}
              />
            </div>
            {/* PORTRAIT */}
            <div className="flex-shrink-0
            ">
            <div
              className="
                absolute inset-0
                z-0
                bg-center bg-cover
                opacity-50
                pointer-events-none
                xl:ml-[0rem]
                xl:static
                xl:opacity-100
                xl:w-[35rem]
                xl:aspect-[3/4]
                lg:ml-[-8rem]
                lg:static
                lg:opacity-100
                lg:w-[30.5rem]
                lg:aspect-[3/4]
                md:ml-[-14rem]
                md:static
                md:opacity-100
                md:w-[30.5rem]
                md:aspect-[3/4]
              "
              style={{ backgroundImage: `url(${profile_pic})` }}
            />
            </div>
          </div>
        </div>
        {/* LAYER 2 */}
        <div id="about" className="min-h-screen relative bg-highlight1 text-white z-10">
          <div className="xl:pt-[6rem] xl:gap-[18rem]
          lg:pt-[6rem] lg:gap-[6rem] lg:flex-row
          md:py-[3rem] md:gap-[1rem] md:flex-row md:px-[0rem]
          pt-[3rem] py-[5rem] px-[5rem] relative pt-[1rem] gap-[1rem] pb-[4rem] flex flex-col items-center
           ">
            {/* EXPERTISE */}
            <motion.div 
            className=" 
            md:text-left md:order-1 md:pr-[1rem] md:pt-[0rem]
            pt-[3rem] order-2 relative text-center font-raleway shrink-0 space-y-[1rem]"
            initial={{ opacity: 0, y: 50 }}        // start 50px below & invisible
            whileInView={{ opacity: 1, y: 0 }}     // move up to normal position & fade in
            viewport={{ once: false }}              // animate only once
            transition={{ duration: 0.6, ease: "easeOut" }}
            >
            
              <p className="xl:pl-[5rem] xl:text-xl_heading
              lg:pl-[5rem] lg:text-lg_heading
              md:pl-[3rem] md:text-md_heading
              text-sm_heading
            font-bold">Website Development</p>
            <p className="xl:pl-[5rem] xl:text-xl_content
            lg:pl-[5rem] lg:text-lg_content
            md:pl-[3rem] md:text-md_content
            text-sm_content">
              TailwindCSS, MongoDB, React, NodeJS, Firebase, Vercel
            </p>
              <p className="xl:pl-[5rem] xl:text-xl_heading
              lg:pl-[5rem] lg:text-lg_heading
              md:pl-[3rem] md:text-md_heading
              text-sm_heading
            font-bold">Game Development</p>
            <p className="xl:pl-[5rem] xl:text-xl_content
            lg:pl-[5rem] lg:text-lg_content
            md:pl-[3rem] md:text-md_content
            text-sm_content">
              Godot, Unreal Engine 5, RPG Maker
            </p>
              <p className="xl:pl-[5rem] xl:text-xl_content
              xl:pl-[5rem] xl:text-xl_heading
              lg:pl-[5rem] lg:text-lg_heading
              md:pl-[3rem] md:text-md_heading
              text-sm_heading
            font-bold">Computer Scientist</p>
            <p className="xl:pl-[5rem] xl:text-xl_content
            lg:pl-[5rem] lg:text-lg_content
            md:pl-[3rem] md:text-md_content
            text-sm_content">
              AI & ML using Python, Java and C++, Arduino
            </p>
            </motion.div>
            {/* DESCRIPTION */}
          <motion.div className="
          md:text-left md:order-2 md:pr-[1rem]
          order-1 text-center relative "
          initial={{ opacity: 0, y: 50 }}        // start 50px below & invisible
          whileInView={{ opacity: 1, y: 0 }}     // move up to normal position & fade in
          viewport={{ once: false }}              // animate only once
          transition={{ duration: 0.6, ease: "easeOut" }}>
            <p className="xl:text-xl_section
            lg:text-lg_section
            md:text-md_section
            text-sm_section
            font-bold font-inter">About Me</p>
            <p className="xl:text-lg_content xl:pt-[3rem]
            lg:text-lg_content lg:pt-[3rem]
            md:text-lg_content md:pt-[2rem]
            text-sm_content pt-[2rem]
            font-normal font-inter">I transform ideas into interactive realities by seamlessly blending creativity with technology. Through thoughtful design and purposeful engineering, I craft immersive digital experiences that are not only visually engaging but also intuitive and impactful.
              <p className="lg:pt-[2rem]
              pt-[1rem]
              ">My work spans interactive applications, game development, and intelligent systems—each project driven by a commitment to innovation, usability, and performance. I enjoy exploring the intersection of imagination and logic, where creative vision meets technical precision.</p>
              <p className="lg:pt-[2rem]
              pt-[1rem]
              ">By bridging the gap between concept and execution, I aim to build solutions that feel alive, meaningful, and future-ready—shaping the digital world one creation at a time.</p></p>
          </motion.div>
            {/* DECORATIVE SQUARES */}
            <motion.div
              className=" md:top-[80vh] md:left-[0vw] md:w-[15vw] md:h-[30vh]
              top-[90vh] left-[0vw] w-[15vw] h-[30vh] absolute bg-object2"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
            />
          </div>
        </div>

        {/* LAYER 3 */}
        <div id="portfolio" className="min-h-screen 
        lg:py-[3rem] 
        pt-[1rem]
        relative font-inter flex flex-col">
          <div className="xl:mr-[9rem] xl:ml-[70vw] xl:text-lg_heading xl:pr-[2rem]
          lg:mr-[6rem] lg:ml-[45rem] lg:text-lg_heading lg:pr-[2rem]
          md:mr-[7rem] md:ml-[42rem] md:text-md_heading md:pr-[1rem]
          mr-[2rem] ml-[30rem] text-sm_heading pr-[1rem]
          bg-highlight1  font-bold text-white text-right">
          <p>
            Portfolio
          </p>
          </div>
          {/* PORTFOLIO COMPONENT */}
         <Portfolio />
          
          {/* DECORATIVE SQUARES */}
         <motion.div
            className="absolute top-[30vh] left-[0vw] w-[5vw] h-[30vh] bg-object1 z-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            style={{ transformOrigin: "left" }}
          />
          <motion.div
            className="absolute top-[80vh] right-[0vw] w-[10vw] h-[40vh] bg-object2 z-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            style={{ transformOrigin: "right" }}
          />

        </div>

        {/* LAYER 4 */}
        <div id="contact" className="xl:py-[2rem] xl:px-[4rem]
        lg:py-[6rem] lg:px-[4rem]
        md:py-[5rem] md:px-[3rem] md:flex-row
        py-[4rem] px-[2rem] 
        min-h-screen relative font-inter bg-highlight1 flex flex-col">
          {/* PHOTO */}
          <div
              className=" absolute inset-0 md:relative md:inset-auto z-0
                bg-center bg-cover w-full 
              "
            />
          {/* FORM */}
          <div className="
          lg:pt-[1rem] lg:px-[4rem]
          md:pt-[3rem] md:px-[3rem] md:text-left
          pt-[2rem] px-[1rem] text-center

          relative h-full w-full flex flex-col justify-center ">
            <p className=" xl:text-xl_section 
            lg:text-lg_section 
            md:text-md_section 
            text-sm_section
            font-bold font-inter text-white">Contact Me!</p>
            <p className="xl:text-xl_content
            lg:text-lg_content
            md:text-md_content
            text-sm_content pt-[1rem]
            font-inter text-white">
              Have questions, ideas, or opportunities to share? I’d love to hear from you! Whether you’re looking to collaborate, need assistance with a project, or just want to connect, feel free to reach out. Let’s bring ideas to life together!
            </p>
            <ContactForm/>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Homepage;
