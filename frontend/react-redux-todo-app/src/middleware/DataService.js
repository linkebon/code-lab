import request from 'superagent';
import * as actionType from '../actions/ActionType';
import {updateTweetData, updateTweetDataError} from "../actions/TweetActions";

// curried function for generating a get request function which takes a url route, successAction and errorAction.
const getApiGenerator = next => (route, successAction, errorAction) =>
    request
        .get(route)
        .end((err, res) => {
            if (err) {
                console.log(route + " error" + err);
                next(errorAction(err));
            }
            const data = JSON.parse(res.text);
            next(successAction(data));
        });


const tweetDataService = store => next => action => {
    next(action);
    const getApi = getApiGenerator(next);
    switch (action.type) {
        case actionType.GET_TWEET_DATA:
            if (action.filter === undefined || action.filter === "") {
                break;
            }
            let filter = action.filter;
            let count = action.count ? action.count : '5';
            getApi('/api/tweets/' + filter + '?count= ' + count, updateTweetData, updateTweetDataError);
            break;
        default:
            break;
    }
};

export default tweetDataService;