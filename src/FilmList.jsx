import React, { Component } from 'react';
import Films from './Films';

class FilmList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: null,
        }
        this.openExpand = this.openExpand.bind(this);
        this.closeExpand = this.closeExpand.bind(this);
    }

    openExpand() {
        this.setState({ expanded: !this.state.expanded })
    }

    closeExpand() {
        this.setState({ expanded: !this.state.expanded })
    }
    render() {
        const filmList = this.props.films;
        if (!this.state.expanded) {
            return <p className="btn btn-dark" onClick={this.openExpand}>MUST SEE MOVIES</p>
        }
        return (
            <div>
                <p className="btn btn-danger" onClick={this.closeExpand}>CLOSE THIS PEASANT</p>
                <div className="container">

                    <ul>
                        {
                            filmList.map((f) => {
                                console.log(f)
                                return (
                                    <div key={f.url}>
                                        <h1 className="film-name">{f.title}</h1>
                                        <Films filmInfo={f} />
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default FilmList; 