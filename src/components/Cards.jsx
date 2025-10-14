function Cards(props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center text-[#F5DEB3] text-center gap-4 ">
      <div>
        <h2 className=" sm:text-xl md:text-3xl font-bold">{props.name}</h2>
        <h3 className=" sm:text-md md:text-lg font-semibold px-10">{props.desc}</h3>
      </div>
      <div className='mb-10'>
        <img
          className="h-80 w-full rounded-md object-cover"
          src={props.img}
          name={props.name}
        />
      </div>
    </div>
  );
}

export default Cards;
