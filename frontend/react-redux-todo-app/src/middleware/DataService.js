import request from 'superagent';
import * as actionType from '../actions/ActionType';
import {updateTweetData} from "../actions/TweetActions";

const dataService = store => next => action => {

    next(action);
    switch (action.type) {
        case actionType.GET_TWEET_DATA:
            if(action.filter === undefined || action.filter === ""){
                break;
            }
            let filter = action.filter;
            let count = action.count ? action.count : '5';
            request
                .get('/api/tweets/' + filter + '?count= ' + count)
                .end((err, res) => {
                    if (err) {
                        //todo add error handling
                        console.log("error: " + err);
                    }
                    const data = JSON.parse(res.text);
                    next(updateTweetData(data.statuses));
                });

        default:
            break;
    }
};

export default dataService;