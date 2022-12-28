import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Shutter Island",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTDqBjsQqiH8fHLE7rmp8Kesh4143AeyVOfnItvVPRpGMMSLfsx",
      author: "Martin Scorsese"
    },
    {
      id: 2,
      title: "Seven Souls",
      image:
        "https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/301750213_423737133189593_4628249996821775683_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=d75-5eC3I2oAX-fzCeB&_nc_ht=scontent-lhr8-1.xx&oh=00_AfDOPSpvPjCEOMDTaXXxUYYtkCsIgwjMyLQ9n3WYOT4qxg&oe=63B1C4B0",
      author: "Gerry Bruno"
    },
    {
      id: 3,
      title: "Trainspotting",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRL72QB6PzUUQZMxsfFNBtctU5XpRUOJDPL2r7XnT1iPl39yCMH",
      author: "Danny Boyle"
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
