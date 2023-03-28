import { useState, useEffect } from "react";
import { Button, Col, Card, Link } from "react-bootstrap";
import { ProfileView } from "../profile-view/profile-view";
import { MovieCard } from "../movie-card/movie-card";

export const FavMovies = ({user, movies}) => {
    const storedToken = localStorage.getItem("token");
    const storedMovies = JSON.parse(localStorage.getItem("movies"))
    const storedUser = localStorage.getItem("user");

    const [token] = useState(storedToken ? storedToken : null);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState("");
    const [FavoriteMovies, setFavoriteMovies] = useState([]);

    const [allMovies] = useState(storedMovies ? storedMovies: movies);
    const [filteredMovies, setFilteredMovies] = useState([]);

    // Show updated user on the profile
const getUser = (token) => {
    fetch(`https://lit-headland-72819.herokuapp.com/users${user.Username}`,{
      method: "GET",
      headers: { Authorization: `Bearer ${token}`},
    }).then(response => response.json())
    .then((response) => {
      console.log("getUser response", response)
      setUsername(response.Username);
      setEmail(response.Email);
      setPassword(response.Password);
      setBirthday(response.Birthday);
      
      setFavoriteMovies(response.FavoriteMovies)
    })
  }
  console.log("userFavMov", FavoriteMovies)

  const favoriteMovies = movies.filter((movie) => FavoriteMovies.includes(movie.id));

  console.log("favMovies", favoriteMovies)

    //Filter favorite movies for later display
    useEffect (() => {
    const newList = allMovies.filter((movie)=> {
        const hasMovieId = FavoriteMovies.some((m)=> movie.id === m);
        if (hasMovieId) {
            return movie
        }
    })
    setFavoriteMovies (newList)
    getUser(token);
  }, [])


  return (
    <>
    <h4>Favorite movies:</h4>
    {/* Display favorite movies */}
    {favoriteMovies.length === 0 ?
     <span>No movies selected</span> : favoriteMovies.map ((movie) => (
     <Col className="mb-4" key={movie.id} xs={12} md={6} lg={3}>
       <MovieCard movie={movie} />
     </Col>
     ))
   }
 </>
  )
}