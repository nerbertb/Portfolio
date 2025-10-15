import Cards from '../components/Cards';
import cards from './hooks/cards';

function createCards(card) {
  return <Cards key={card.id} img={card.imgURL} name={card.name} desc={card.description} />;
}

function Projects() {
  return (
    <div className='flex justify-center bg-[url(@/assets/layered-peaks-dark-blue.svg)]  w-full min-h-dvh bg-cover bg-no-repeat bg-center overflow-x-hidden'>
      
    <section id='projects' className="flex flex-col min-h-screen w-[50%] p-10  place-content-center place-items-center bg-linear-to-r from-[#071A32]/10 to-[#44525f]/50 ">
      <div className='grid  grid-flow-row justify-center content-center items-center'>
      {cards.map(createCards)}
      </div>
      
    </section>
    </div>
  );
}

export default Projects;
