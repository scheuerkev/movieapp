import React, {Component} from "react";
import Style from './MovieDetails.module.scss';

export default class MovieDetails extends Component {
    render() {
        return (
            <div className={"w-25 p-4 d-flex flex-column border " + Style.container }>
                <h5>{this.props.movie.title}</h5>
                <hr className="w-100"/>
                <div>
                    <img className="d-block mx-auto" src={this.props.movie.img} alt=""/>
                </div>
                <hr className="w-100"/>
                <span className="text-secondary">{this.props.movie.details}</span>
                <hr className="w-100"/>
                <span>{this.props.movie.description}</span>
            </div>
        );
    }
}