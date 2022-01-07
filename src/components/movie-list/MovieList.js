import React, {Component} from "react";
import MovieElement from "./MovieElement";

export default class MovieList extends Component {
    render() {
        return (
            <div className="w-75 d-flex flex-row flex-wrap align-content-start">
                {this.props.movies.map((m,i) => (
                    <MovieElement movie={m} key={m.title} updateSelectedMovie={() => {this.props.updateSelectedMovie(i)}}/>
                ))}

            </div>
        );
    }
}