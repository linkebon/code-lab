import * as actionType from '../actions/ActionType';

const tweetsReducer = (state = [], action) => {
    switch (action.type) {
        case actionType.GET_TWEET_DATA_RECEIVED:
            return action.tweets;
        case actionType.GET_TWEET_DATA_ERROR:
            console.log("error i reducer");
        case actionType.GET_TWEET_DATA:
        default:
            return state;
    }
};

export default tweetsReducer;