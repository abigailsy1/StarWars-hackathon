import React, { Component } from 'react';

class Films extends Component {

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
        const details = this.props.filmInfo;

        if (!this.state.expanded) {
            return <p className="btn btn-dark" onClick={this.openExpand}>MOVIE DEETS</p>
        }

        return (
            <div className="container" word-wrap="word-wrap break-word">
            
                <p className="btn btn-danger" onClick={this.closeExpand}>CLOSE THIS PEASANT</p>
                <ul className="list-group">
                    <li><p>Title: {details.title}</p></li>
                    <li><p>Episdoe: {details.episode_id}</p></li>
                    <li><p>Director: {details.director}</p></li>
                    <li><p>Producter: {details.producer}</p></li>
                    <li><p>Release Date:{details.release_date}</p></li>
                    
                </ul>
            </div>
        )
    }
}

export default Films; 