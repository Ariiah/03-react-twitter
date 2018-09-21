import React, { Component } from 'react';
import './Feed.css';
import FeedItem from './FeedItem';
class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            error: false
        }
    }
    async componentDidMount() {
        //TODO Ask THE API MASTER to sort it for us
        const response = await fetch('/api/messages');
        if(response.status === 200 ){
            const data = await response.json();
            this.setState({items: data.messages})
        }
        else {
            this.setState({
                ...this.state,
                'error' : response.status
            })
        }
    }

    render() {
        const {items, error} = this.state;
        if(error) {
            return (
                <div className="App">
                    Error code : {error}
                </div>
            )
        }
        return (
            <div className="App">
                <h1 className="App-title">React Twitter Feed</h1>
                <div className="feed">
                    {items.map((item, i) => {
                        return (<FeedItem item={item}/>)
                    })}
                </div>
            </div>
        );
    }
}

export default Feed;
