const SearchCard = ({ id, title, release_date, onSelect }) => {
  const movie = {
    id,
    title,
    release_date,
    onSelect,
  };
  return (
    <>
      <div
        className="flex flex-col justify-end p-3 relative text-black"
        onClick={() => onSelect(title)}
      >
        <div>
          <h4 className="font-extrabold">{movie.title}</h4>
        </div>
        <div>
          <h6>{movie.release_date}</h6>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
