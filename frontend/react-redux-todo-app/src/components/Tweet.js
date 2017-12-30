import React, {Component} from 'react';

class Tweet extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {tweet} = this.props;
        return (
            <div style={{border: '1px solid black'}}>
                <p>{tweet.text}</p>
            </div>
        )
    }
}

export default Tweet;