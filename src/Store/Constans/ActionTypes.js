const ACTIONS_TYPES = {
  USER: {
        LOGIN_GET_START: 'LOGIN_GET_START',
        LOGIN_GET_FAILED: 'LOGIN_GET_FAILED',
        LOGIN_GET_SUCCESS: 'LOGIN_GET_SUCCESS',
        LOGIN_GET_LOGOUT: 'LOGIN_GET_LOGOUT',
        REGISTER_GET_START: 'REGISTER_GET_START',
        REGISTER_GET_FAILED: 'REGISTER_GET_FAILED',
        REGISTER_GET_SUCCESS: 'REGISTER_GET_SUCCESS',
        DELETE_ACCOUNT_START: 'DELETE_ACCOUNT_START',
        DELETE_ACCOUNT_FAILED: 'DELETE_ACCOUNT_FAILED',
        DELETE_ACCOUNT_SUCCESS: 'DELETE_ACCOUNT_SUCCESS',
    },
    PRODUCT: {
        GET_DETAIL_PRODUCT_START: 'GET_DETAIL_PRODUCT_START',
        GET_DETAIL_PRODUCT_FAILED: 'GET_DETAIL_PRODUCT_FAILED',
        GET_DETAIL_PRODUCT_SUCCESS: 'GET_DETAIL_PRODUCT_SUCCESS',
        GET_PRODUCT_CATEGORY_START: 'GET_PRODUCT_CATEGORY_START',
        GET_PRODUCT_CATEGORY_FAILED: 'GET_PRODUCT_CATEGORY_FAILED',
        GET_PRODUCT_CATEGORY_SUCCESS: 'GET_PRODUCT_CATEGORY_SUCCESS',
        GET_LIST_PRODUCT_START: 'GET_LIST_PRODUCT_START',
        GET_LIST_PRODUCT_FAILED: 'GET_LIST_PRODUCT_FAILED',
        GET_LIST_PRODUCT_SUCCESS: 'GET_LIST_PRODUCT_SUCCESS',
        GET_BEST_SELLER_PRODUCT_START: 'GET_BEST_SELLER_PRODUCT_START',
        GET_BEST_SELLER_PRODUCT_FAILED: 'GET_BEST_SELLER_PRODUCT_FAILED',
        GET_BEST_SELLER_PRODUCT_SUCCESS: 'GET_BEST_SELLER_PRODUCT_SUCCESS',
        GET_TOP_PRODUCT_START: 'GET_TOP_PRODUCT_START',
        GET_TOP_PRODUCT_FAILED: 'GET_TOP_PRODUCT_FAILED',
        GET_TOP_PRODUCT_SUCCESS: 'GET_TOP_PRODUCT_SUCCESS',
        GET_ALL_PRODUCT_START: 'GET_ALL_PRODUCT_START',
        GET_ALL_PRODUCT_FAILED: 'GET_ALL_PRODUCT_FAILED',
        GET_ALL_PRODUCT_SUCCESS: 'GET_ALL_PRODUCT_SUCCESS',
        GET_PAGINATION_PRODUCT_START: 'GET_PAGINATION_PRODUCT_START',
        GET_PAGINATION_PRODUCT_FAILED: 'GET_PAGINATION_PRODUCT_FAILED',
        GET_PAGINATION_PRODUCT_SUCCESS: 'GET_PAGINATION_PRODUCT_SUCCESS',
    },
  REVIEW: {
    GET_ALL_REVIEW_START: "GET_ALL_REVIEW_START",
    GET_ALL_REVIEW_FAILED: "GET_ALL_REVIEW_FAILED",
    GET_ALL_REVIEW_SUCCESS: "GET_ALL_REVIEW_SUCCESS",
  },
  FEED: {
    GET_ALL_FEED_START: "GET_ALL_FEED_START",
    GET_ALL_FEED_FAILED: "GET_ALL_FEED_FAILED",
    GET_ALL_FEED_SUCCESS: "GET_ALL_FEED_SUCCESS",
    GET_ALL_FEED_BY_ID_START: "GET_ALL_FEED_BY_ID_START",
    GET_ALL_FEED_BY_ID_FAILED: "GET_ALL_FEED_BY_ID_FAILED",
    GET_ALL_FEED_BY_ID_SUCCESS: "GET_ALL_FEED_BY_ID_SUCCESS",
    GET_REVIEW_FEED_BY_ID_START: "GET_REVIEW_FEED_BY_ID_START",
    GET_REVIEW_FEED_BY_ID_FAILED: "GET_REVIEW_FEED_BY_ID_FAILED",
    GET_REVIEW_FEED_BY_ID_SUCCESS: "GET_REVIEW_FEED_BY_ID_SUCCESS",
  },
  EVENT: {
    GET_DATA_EVENT_START: "GET_DATA_EVENT_START",
    GET_DATA_EVENT_FAILED: "GET_DATA_EVENT_FAILED",
    GET_DATA_EVENT_SUCCESS: "GET_DATA_EVENT_SUCCESS",
    GET_EVENT_ID_START: "GET_EVENT_ID_START",
    GET_EVENT_ID_FAILED: "GET_EVENT_ID_FAILED",
    GET_EVENT_ID_SUCCESS: "GET_EVENT_ID_SUCCESS",
    GET_EVENT_REVIEW_ID_START: "GET_EVENT_REVIEW_ID_START",
    GET_EVENT_REVIEW_ID_FAILED: "GET_EVENT_REVIEW_ID_FAILED",
    GET_EVENT_REVIEW_ID_SUCCESS: "GET_EVENT_REVIEW_ID_SUCCESS",
  },
  BANNER: {
    GET_DATA_BANNER_START: "GET_DATA_BANNER_START",
    GET_DATA_BANNER_FAILED: "GET_DATA_BANNER_FAILED",
    GET_DATA_BANNER_SUCCESS: "GET_DATA_BANNER_SUCCESS",
  },
  COMMUNITY: {
    GET_DATA_COMMUNITY_START: "GET_DATA_COMMUNITY_START",
    GET_DATA_COMMUNITY_FAILED: "GET_DATA_COMMUNITY_FAILED",
    GET_DATA_COMMUNITY_SUCCESS: "GET_DATA_COMMUNITY_SUCCESS",
    GET_DATA_COMMUNITY_BY_ID_START: "GET_DATA_COMMUNITY_BY_ID_START",
    GET_DATA_COMMUNITY_BY_ID_FAILED: "GET_DATA_COMMUNITY_BY_ID_FAILED",
    GET_DATA_COMMUNITY_BY_ID_SUCCESS: "GET_DATA_COMMUNITY_BY_ID_SUCCESS",
    POST_COMMUNITY_REPLY_START: "POST_COMMUNITY_REPLY_START",
    POST_COMMUNITY_REPLY_FAILED: "POST_COMMUNITY_REPLY_FAILED",
    POST_COMMUNITY_REPLY_SUCCESS: "POST_COMMUNITY_REPLY_SUCCESS",
    POST_REPORT_THREAD_START: "POST_REPORT_THREAD_START",
    POST_REPORT_THREAD_FAILED: "POST_REPORT_THREAD_FAILED",
    POST_REPORT_THREAD_SUCCESS: "POST_REPORT_THREAD_SUCCESS",
    POST_REPORT_REPLY_START: "POST_REPORT_REPLY_START",
    POST_REPORT_REPLY_FAILED: "POST_REPORT_REPLY_FAILED",
    POST_REPORT_REPLY_SUCCESS: "POST_REPORT_REPLY_SUCCESS",
    POST_LIKE_THREAD_START: "POST_LIKE_THREAD_START",
    POST_LIKE_THREAD_FAILED: "POST_LIKE_THREAD_FAILED",
    POST_LIKE_THREAD_SUCCESS: "POST_LIKE_THREAD_SUCCESS",
    POST_DISLIKE_THREAD_START: "POST_DISLIKE_THREAD_START",
    POST_DISLIKE_THREAD_FAILED: "POST_DISLIKE_THREAD_FAILED",
    POST_DISLIKE_THREAD_SUCCESS: "POST_DISLIKE_THREAD_SUCCESS",
  },
  INFLUENCER: {
    GET_DATA_INFLUENCER_START: "GET_DATA_INFLUENCER_START",
    GET_DATA_INFLUENCER_FAILED: "GET_DATA_INFLUENCER_FAILED",
    GET_DATA_INFLUENCER_SUCCESS: "GET_DATA_INFLUENCER_SUCCESS",
  },
  VIDEO: {
    GET_DATA_VIDEO_START: "GET_DATA_VIDEO_START",
    GET_DATA_VIDEO_FAILED: "GET_DATA_VIDEO_FAILED",
    GET_DATA_VIDEO_SUCCESS: "GET_DATA_VIDEO_SUCCESS",
    GET_DATA_VIDEO_INSTAGRAM_START: "GET_DATA_VIDEO_INSTAGRAM_START",
    GET_DATA_VIDEO_INSTAGRAM_FAILED: "GET_DATA_VIDEO_INSTAGRAM_FAILED",
    GET_DATA_VIDEO_INSTAGRAM_SUCCESS: "GET_DATA_VIDEO_INSTAGRAM_SUCCESS",
    GET_DATA_VIDEO_UNNIS_START: "GET_DATA_VIDEO_UNNIS_START",
    GET_DATA_VIDEO_UNNIS_FAILED: "GET_DATA_VIDEO_UNNIS_FAILED",
    GET_DATA_VIDEO_UNNIS_SUCCESS: "GET_DATA_VIDEO_UNNIS_SUCCESS",
    GET_DATA_VIDEO_PRODUCT_RECOMMENDATION_START:
      "GET_DATA_VIDEO_PRODUCT_RECOMMENDATION_START",
    GET_DATA_VIDEO_PRODUCT_RECOMMENDATION_FAILED:
      "GET_DATA_VIDEO_PRODUCT_RECOMMENDATION_FAILED",
    GET_DATA_VIDEO_PRODUCT_RECOMMENDATION_SUCCESS:
      "GET_DATA_VIDEO_UNNIS_SUCCESS",
    GET_DATA_VIDEO_PRODUCT_START: "GET_DATA_VIDEO_PRODUCT_START",
    GET_DATA_VIDEO_PRODUCT_FAILED: "GET_DATA_VIDEO_PRODUCT_FAILED",
    GET_DATA_VIDEO_PRODUCT_SUCCESS: "GET_DATA_VIDEO_PRODUCT_SUCCESS",
    GET_DATA_VIDEO_INFLUENCER_START: "GET_DATA_VIDEO_INFLUENCER_START",
    GET_DATA_VIDEO_INFLUENCER_FAILED: "GET_DATA_VIDEO_INFLUENCER_FAILED",
    GET_DATA_VIDEO_INFLUENCER_SUCCESS: "GET_DATA_VIDEO_INFLUENCER_SUCCESS",
  },
  RECYCLE: {
    GET_ALL_RECYCLE_LEADERBOARD_START: "GET_ALL_RECYCLE_LEADERBOARD_START",
    GET_ALL_RECYCLE_LEADERBOARD_FAILED: "GET_ALL_RECYCLE_LEADERBOARD_FAILED",
    GET_ALL_RECYCLE_LEADERBOARD_SUCCESS: "GET_ALL_RECYCLE_LEADERBOARD_SUCCESS",
    GET_ALL_RECYCLE_HISTORY_START: "GET_ALL_RECYCLE_HISTORY_START",
    GET_ALL_RECYCLE_HISTORY_FAILED: "GET_ALL_RECYCLE_HISTORY_FAILED",
    GET_ALL_RECYCLE_HISTORY_SUCCESS: "GET_ALL_RECYCLE_HISTORY_SUCCESS",
  },
  FEEDBACK: {
    POST_FEEDBACK_START: "POST_FEEDBACK_START",
    POST_FEEDBACK_FAILED: "POST_FEEDBACK_FAILED",
    POST_FEEDBACK_SUCCESS: "POST_FEEDBACK_SUCCESS",
  },
  FAQ: {
    GET_FAQ_CATEGORY_START: "GET_FAQ_CATEGORY_START",
    GET_FAQ_CATEGORY_FAILED: "GET_FAQ_CATEGORY_FAILED",
    GET_FAQ_CATEGORY_SUCCESS: "GET_FAQ_CATEGORY_SUCCESS",
  },
  SUBSCRIPTION: {
    REVIEW: {
      GET_ALL_REVIEW_START: "GET_ALL_REVIEW_START",
      GET_ALL_REVIEW_FAILED: "GET_ALL_REVIEW_FAILED",
      GET_ALL_REVIEW_SUCCESS: "GET_ALL_REVIEW_SUCCESS",
    },
  },
};

export default ACTIONS_TYPES;
