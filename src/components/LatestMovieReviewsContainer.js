import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '7aBKeWoydtBaARQgEVcQIeuzy3SMaTYv';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


class LatestMovieReviewsContainer extends Component {

  state = {
    reviews: []
  }

  componentDidMount() {
     fetch(URL)
       .then(response => response.json())
       .then(reviews => this.setState({ MovieReviews }))
   }

  render() {
   return (
     <div className ="latest-movie-reviews">
       <h1>The Latest Movie Reviews:</h1>
       <MovieReviews reviews={this.state.reviews} />
       </div>
    )
  }

}


export default LatestMovieReviewsContainer ;
