// import bgDisplay from '@/assets/layered-peaks-blue.svg';
// import profilePic from '@/assets/NerbertPF1.png';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
 

import Projects from './Projects';

function Home() {
  return (
    <div>
      <section className=" flex text-black bg-[url(@/assets/layered-peaks-blue.svg)] mask-b-from-200 w-full min-h-dvh bg-cover bg-no-repeat bg-center overflow-x-hidden justify-center items-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 h-[50%]">
          <div className="mt-25 md:mt-0 font-dislay text-right justify-self-end place-content-center">
            <h1 className=" text-5xl md:text-7xl/15 lg:text-8xl/20 xl:text-9xl/25">
              Nerbert
              <br />
              Bulaqueña
            </h1>
            <p className="text-xl md:text-2xl/5 pl-2">Web Developer</p>

            <p className="sm:text-sm md:text-lg lg:text-xl pl-2 pt-10">
              Hi! I am Nerbert S. Bulaqueña, a seasoned Network Operations and
              Provisioning Engineer. <br /> Now, I am channeling my technical
              expertise and problem-solving skills into Web Development. <br />{' '}
              My transition is driven by a passion for building digital
              solutions and I’m excited to bring the <br />
              same level of dedication, precision, and collaborative spirit to
              the world of web development.
            </p>
            <div className="flex items-center justify-end">
              <a
                type="button"
                className="text-white bg-[#0C4A8F] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 h-[90%]  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
               href='https://www.dropbox.com/scl/fi/5j53iihqalrn511ex8au7/Nerbert-S.-Bulaquena-CV.pdf?rlkey=eyceob1m8e8rkn7bmu1eusqkf&st=a5wr0zmn&dl=1'>
                Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/nerbertb/"
                target="_blank"
                className="text-[#0C4A8F]"
              >
                <AiFillLinkedin size={50} />
              </a>
              <a
                href="https://github.com/nerbertb"
                target="_blank"
                className="text-[#0C4A8F]"
              >
                <AiFillGithub size={50} />
              </a>
            </div>
          </div>
          <div className="order-last md:order-none w-64 sm:w-72 md:w-80 lg:w-96 md:ml-[25%] bg-white [border-radius:60%_40%_30%_70%_/_60%_30%_70%_40%] bg-[url(@/assets/NerbertPF1.png)] bg-contain bg-no-repeat bg-center size-130 "></div>
          <div className=" text-5xl  text-[#0c4a8f] place-items-end">
            <p className="font-dislay text-gray-800 font-semibold mb-5">
              PREFERRED TECH
            </p>
            <div className="icons flex">
              <p className="devicon-html5-plain pr-2"></p>
              <p className="devicon-css3-plain pr-2"></p>
              <p className="devicon-javascript-plain pr-2"></p>
              <p className="devicon-react-original pr-2"></p>
              <p className="devicon-git-plain-wordmark pr-2"></p>
              <p className="devicon-nodejs-plain-wordmark pr-2"></p>
              <p className="devicon-tailwindcss-original pr-2"></p>
              <p className="devicon-express-original pr-2"></p>
              <p className="devicon-mongodb-plain pr-2"></p>
            </div>
          </div>
        </div>
      </section>

      <Projects />
    </div>
  );
}

export default Home;
