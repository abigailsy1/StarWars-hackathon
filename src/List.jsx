import React, { Component } from 'react';
import Characters from './Characters';

class List extends Component {
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
        const peopleList = this.props.people;
        if (!this.state.expanded) {
            return <p className="btn btn-dark" onClick={this.openExpand}>HEROES/VILLAINS</p>
        }
        return (
            <div>
                <p className="btn btn-danger" onClick={this.closeExpand}>CLOSE THIS PEASANT</p>
                <div className="container">

                    <ul>
                        {
                            peopleList.map((p) => {
                                console.log(p)
                                return (
                                    <div key={p.url}>
                                        <h1 className="char-name">{p.name}</h1>
                                        <Characters charInfo={p} />
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

export default List; 