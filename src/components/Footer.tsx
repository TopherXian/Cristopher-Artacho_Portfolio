

const Footer = () => {
    return(
        <div className="h-[20vh] w-full text-center bg-highlight1 py-[2rem]">
            {/* NAME */}
            <p className=" lg:text-lg_heading2
            md:text-md_heading2
            text-sm_heading2 font-bold text-white font-raleway pb-[1rem]">Cristopher Ian Artacho</p>
            <div className="flex gap-4 items-center justify-center gap-[2.5rem]">
  <a
    href="https://github.com/Cristopher-Artacho-WVSU"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/icons/github.png"
      alt="GitHub"
      className="w-[2rem] h-[2rem] rounded-full hover:scale-110 transition"
    />
  </a>

  <a
    href="https://huggingface.co/CristopherWVSU"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/icons/huggingface.png"
      alt="HuggingFace"
      className="w-[2rem] h-[2rem] rounded-full hover:scale-110 transition"
    />
  </a>

  <a
    href="https://www.facebook.com/artachocristopherian/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/icons/facebook.png"
      alt="Facebook"
      className="w-[2rem] h-[2rem] rounded-full hover:scale-110 transition"
    />
  </a>

  <a href="mailto:cristopherian.artacho@wvsu.edu.ph">
    <img
      src="/icons/gmail.png"
      alt="Gmail"
      className="w-[2rem] h-[2rem] rounded-full hover:scale-110 transition"
    />
  </a>
</div>
        </div>
    )
} 
export default Footer;