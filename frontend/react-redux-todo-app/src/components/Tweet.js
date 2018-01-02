import React, {Component} from 'react';

class Tweet extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {tweet} = this.props;
        return (
            <div className="rounded infoContainer">
                <p>{tweet.text}</p>
            </div>
        )
    }
}

export default Tweet;