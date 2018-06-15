import React, { Component } from 'react';

class Photos extends Component {

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
        const details = this.props.photoInfo;

        if (!this.state.expanded) {
            return <p className="btn btn-dark" onClick={this.openExpand}>VIEW</p>
        }

        return (
            <div className="container" word-wrap="word-wrap break-word">
            
                <p className="btn btn-danger" onClick={this.closeExpand}>CLOSE THIS PEASANT</p>
                <ul className="list-group">
                    <li>
                    <img src={details.previewURL} alt="hello"/>
                    </li>
             
                    
                </ul>
            </div>
        )
    }
}

export default Photos; 