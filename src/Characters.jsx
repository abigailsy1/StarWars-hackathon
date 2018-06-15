import React, { Component } from 'react';

class Characters extends Component {

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
        const info = this.props.charInfo;

        if (!this.state.expanded) {
            return <p className="btn btn-dark" onClick={this.openExpand}>WHATS THE DEETS</p>
        }

        return (
            <div>
               
            
                <p className="btn btn-danger" onClick={this.closeExpand}>CLOSE THIS PEASANT</p>
                <ul>
                    <li><p>Height: {info.height}</p></li>
                    <li><p>Mass: {info.mass}</p></li>
                    <li><p>Hair color: {info.hair_color}</p></li>
                    <li><p>Skin color: {info.skin}</p></li>
                    <li><p>Eye color: {info.eye}</p></li>
                    <li><p>Birth date: {info.birth_year}</p></li>
                    <li><p>Gender: {info.gender}</p></li>
                </ul>
            </div>
         
          
        )
    }
}

export default Characters; 