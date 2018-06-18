import React, { Component } from 'react';
import Videos from './Videos';

class VideoList extends Component {
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
        const videoList = this.props.videos;
        if (!this.state.expanded) {
            return <p className="btn btn-dark" onClick={this.openExpand}>VIDEOS!!</p>
        }
        return (
            <div>
                <p className="btn btn-danger" onClick={this.closeExpand}>CLOSE THIS PEASANT</p>
                <div className="container text-center">
                    <div className="d-flex justify-content-center flex-wrap">

                        {
                            videoList.map((videos) => {
                                console.log(videos)
                                return (
                                    <div key={videos.id}>
                                        <Videos videoInfo={videos} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoList; 