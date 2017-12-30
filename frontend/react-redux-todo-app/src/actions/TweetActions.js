import * as actionType from "./ActionType";

export const updateTweetData = (tweets) => (
    {
        type: actionType.GET_TWEET_DATA_RECEIVED,
        tweets: tweets
    }
);

export const getTweets = (filter, count) => (
    {
        type: actionType.GET_TWEET_DATA,
        filter: filter,
        count: count
    }
);