import React, { Component } from 'react';
import Photos from './Photos';

class PhotoList extends Component {
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
        const photoList = this.props.photos;
        if (!this.state.expanded) {
            return <p className="btn btn-dark" onClick={this.openExpand}>PHOTOS!!!!</p>
        }
        return (
            <div>
                <p className="btn btn-danger" onClick={this.closeExpand}>CLOSE THIS PEASANT</p>
                <div className="container">

                    <ul>
                        {
                            photoList.map((image) => {
                                console.log(image)
                                return (
                                    <div key={image.id}>  
                                        <Photos photoInfo={image} />
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

export default PhotoList; 