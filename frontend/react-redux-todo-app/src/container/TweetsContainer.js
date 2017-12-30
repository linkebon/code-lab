import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as tweetActions from "../actions/TweetActions";
import Tweet from "../components/Tweet";

class TweetsContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    tweets(filter, count = 5) {
        if (filter === "" || filter === undefined) {
            return;
        }

        this.props.getTweets(filter, count);
    }

    render() {
        let noValidFilter = "Search tweets";
        return (
            <div className="container">
                <h2>Tweets</h2>
                <label for="filter">Search tweet</label>
                <input id="filter" style={{maxWidth: "30%"}} className="form-control" type="text" onChange={(e) => {
                    e.preventDefault();
                    if (e.target.value.length > 3 && e.target.value !== noValidFilter) {
                        this.tweets(e.target.value);
                    }
                }} />
                <br/>
                <div className="row">
                    {this.props.tweets.map((tweet, index) => {
                        return (
                            <div className="col-md-6" key={index}>
                                <Tweet tweet={tweet}/>
                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tweets: state.tweetsReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(tweetActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TweetsContainer)
