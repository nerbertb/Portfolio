import { Link } from 'react-router-dom';

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

function NavBar() {
  return (
    <section className="">
      <nav className="text-white flex justify-between p-5 items-center mx-10">
        <h1 className="text-2xl font-bold">
          <Link to="/">NB/.</Link>
        </h1>
        
        <div className="flex gap-3">
          <Link 
            to="/" 
            className="px-5 py-2 rounded-lg bg-transparent hover:bg-white/10 transition-colors duration-200"
          >
            Home
          </Link>
          
          <a
            href="https://www.dropbox.com/scl/fi/5j53iihqalrn511ex8au7/Nerbert-S.-Bulaquena-CV.pdf?rlkey=eyceob1m8e8rkn7bmu1eusqkf&st=a5wr0zmn&dl=1"
            className="px-5 py-2 rounded-lg bg-transparent hover:bg-white/10 transition-colors duration-200"
          >
            Resume
          </a>

          
          
          <Link 
            to="/#projects"  onClick={() => scrollToSection('projects')}
            className="px-5 py-2 rounded-lg bg-transparent hover:bg-white/10 transition-colors duration-200"
          >
            Projects
          </Link>

          <Link 
            to="/about" 
            className="px-5 py-2 rounded-lg bg-transparent hover:bg-white/10 transition-colors duration-200"
          >
            About
          </Link>
          
          <Link 
            to="/#contact" onClick={() => scrollToSection('contacts')}
            className="px-5 py-2 rounded-lg bg-transparent hover:bg-white/10 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </nav>
    </section>
  );
}

export default NavBar;
