import React from "react";
import axios from 'axios';
import { SignupView } from '../Signup-view/signup-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
      registered: true,
    };
  }

  componentDidMount() {
    axios.get('https://lit-headland-72819.herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }
  onLoggedIn(user) {
    this.setState({
      user
    });
  }
  
  toRegister(registered) {
    this.setState({
      registered,
    });
  }

  if(selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }
  render() {
    const { movies, selectedMovie, user, registered } = this.state;
    if (!registered) return <SignupView />;

    if (!user)
    return (
      <LoginView
        onLoggedIn={(user) => this.onLoggedIn(user)}
        toRegister={(registered) => this.toRegister(registered)}
      />
    );

    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
    return (
      <div>
        {selectedMovie
          ? (
            <MovieView movie={selectedMovie} onBackClick={newselectedMovie => { this.setSelectedMovie(newselectedMovie); }} />

          )
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />

          ))
        }
      </div>
    );
  };
}