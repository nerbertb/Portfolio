import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
  AiFillPhone,
} from 'react-icons/ai';
import Projects from './Projects';



function HomeGrid() {
  return (
    <section className="min-h-screen w-full justify-center items-center">
      {/* Container */}
      <div className="grid auto-rows-auto grid-cols-1">
        <div className="font-display font-semibold text-black text-center p-5">
          <h1 className="text-5xl">NERBERT BULAQUENA</h1>
          <h2 className="text-2xl">Web Developer</h2>
          <p className="text-md py-5 leading-6 text-gray-500">
            Hi!, I am Nerbert S. Bulaqueña, a seasoned Network Operations and
            Provisioning Engineer. Now, I am channeling my technical expertise
            and problem-solving skills into Web Development. My transition is
            driven by a passion for building digital solutions and I’m excited
            to bring the same level of dedication, precision, and collaborative
            spirit to the world of web development.
          </p>
          {/* CV AND SOCIAL LINKS */}
          <div className="flex text-2xl text-gray-500 justify-center items-center gap-15">
            <button>
              <a href="https://www.dropbox.com/scl/fi/5j53iihqalrn511ex8au7/Nerbert-S.-Bulaquena-CV.pdf?rlkey=eyceob1m8e8rkn7bmu1eusqkf&st=a5wr0zmn&dl=1">
                Download CV
              </a>
            </button>

            <a
              href="https://www.linkedin.com/in/nerbertb/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile"
              className="inline-flex items-center rounded hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <AiFillLinkedin size={30} />
            </a>
            <a
              href="https://github.com/nerbertb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open LinkedIn profile"
              className="inline-flex items-center rounded hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <AiFillGithub size={30} />
            </a>
            
          </div>
          {/* EMAIL AND CONTACT */}
          <div className="font-display flex text-sm pt-5 justify-center gap-5">
            <div className="flex items-center gap-2">
              <AiOutlineMail size={25} role="img" aria-label="Email" />
              <p>nerbertb@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
              <AiFillPhone size={25} role="img" aria-label="Contact" href="" />
              <span>
                <p>+63-917-633-8309</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Projects />
    </section>
  );
}

export default HomeGrid;
