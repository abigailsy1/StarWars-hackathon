import React, { Component } from 'react';

class Videos extends Component {
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
        const details = this.props.videoInfo;
        return (
            <div className="column" word-wrap="word-wrap break-word">
                <div>
                    <video width="320" height="240" controls>
                        <source src={details.videos.tiny.url} />
                    </video>
                </div>
            </div>
        )
    }
}

export default Videos; 