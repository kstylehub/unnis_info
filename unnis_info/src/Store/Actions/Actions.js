import ACTIONS_TYPES from "../Constans/ActionTypes";

// const BASE_URL = 'http://52.74.126.149:9696';
const BASE_URL = "http://3.35.189.96:9696";
const {
  PRODUCT,
  REVIEW,
  FEED,
  EVENT,
  USER,
  BANNER,
  INFLUENCER,
  VIDEO,
  COMMUNITY, 
  RECYCLE,
  FEEDBACK
} = ACTIONS_TYPES;

export const logout = () => ({
  type: USER.LOGIN_GET_LOGOUT,
});

export const register = (dataRegister) => async (dispatch) => {
  try {
    dispatch({ type: USER.REGISTER_GET_START });
    const response = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataRegister),
    });
    if (!response.ok) {
      throw new Error("Internal server error");
    }

    const data = await response.json();
    console.log(data, "suksssesss");
    dispatch({
      type: USER.REGISTER_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("error register");
    dispatch({
      type: USER.REGISTER_GET_FAILED,
      payload: error,
    });
  }
};
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER.LOGIN_GET_START });
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error("Internal server error");
    }

    const data = await response.json();
    dispatch({
      type: USER.LOGIN_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("error login");
    dispatch({
      type: USER.LOGIN_GET_FAILED,
      payload: error,
    });
  }
};

// PRODUCT
export const getAllProduct = (body) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT.GET_ALL_PRODUCT_START });
    const response = await fetch(`${BASE_URL}/product/listProductPage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error("Internal server error");
    }

    const data = await response.json();
    dispatch({
      type: PRODUCT.GET_ALL_PRODUCT_SUCCESS,
      payload: data,
    });
    console.log("product >>> ",data);
    return data; // Return the entire data object for use in countPage()
  } catch (error) {
    console.log("error get all data product:", error);
    dispatch({
      type: PRODUCT.GET_ALL_PRODUCT_FAILED,
      payload: error,
    });
  }
};

export const getAllProductWithPagination = () => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT.GET_PAGINATION_PRODUCT_START });
  
      const response = await fetch(`${BASE_URL}/product/listProductPage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idMember: 1, limit: 50, page: 5, category: "", filter: "" }), 
      });
  
      if (!response.ok) {
        throw new Error("Internal server error");
      }
  
      const data = await response.json();
      console.log("Full response data:", data); 
  
      if (!data.dataProduct) {
        throw new Error("dataProduct is undefined in the response");
      }
  
      dispatch({
        type: PRODUCT.GET_PAGINATION_PRODUCT_SUCCESS,
        payload: data,
      });
      console.log("this is list product", data);
      return data; 
    } catch (error) {
      console.log("error get data product:", error);
      dispatch({
        type: PRODUCT.GET_PAGINATION_PRODUCT_FAILED,
        payload: error.message, 
      });
    }
  };
  
  

export const getProductCategory = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT.GET_PRODUCT_CATEGORY_START });
    const response = await fetch(`${BASE_URL}/product/productCategory`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Internal server error");
    }

    const data = await response.json();
    dispatch({
      type: PRODUCT.GET_PRODUCT_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("error get data", error);
    dispatch({
      type: PRODUCT.GET_PRODUCT_CATEGORY_FAILED,
      payload: error,
    });
  }
};

export const getListProduct = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT.GET_LIST_PRODUCT_START });
    const response = await fetch(`${BASE_URL}/product/listProductByLogin/0_`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Internal server error");
    }

    const data = await response.json();
    dispatch({
      type: PRODUCT.GET_LIST_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("error get data", error);
    dispatch({
      type: PRODUCT.GET_LIST_PRODUCT_FAILED,
      payload: error,
    });
  }
};

export const getTopProduct = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT.GET_TOP_PRODUCT_START });
    const response = await fetch(`${BASE_URL}/product/bestSeller?limit=10`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Internal server error");
    }

    const data = await response.json();
    dispatch({
      type: PRODUCT.GET_TOP_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("error get data", error);
    dispatch({
      type: PRODUCT.GET_TOP_PRODUCT_FAILED,
      payload: error,
    });
  }
};

export const getDetailProduct = (body) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT.GET_DETAIL_PRODUCT_START });
    const response = await fetch(`${BASE_URL}/product/detailProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error("Internal server error");
    }

    const data = await response.json();
    dispatch({
      type: PRODUCT.GET_DETAIL_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("error get data", error);
    dispatch({
      type: PRODUCT.GET_DETAIL_PRODUCT_FAILED,
      payload: error,
    });
  }
};

export const getAllReview = () => async (dispatch) => {
  try {
    dispatch({ type: REVIEW.GET_ALL_REVIEW_START });
    const response = await fetch(
      `${BASE_URL}/reviewSub/listAllReviewMobile/0`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("internal server error");
    }

    const data = await response.json();
    dispatch({
      type: REVIEW.GET_ALL_REVIEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("error get data", error);
    dispatch({ type: REVIEW.GET_ALL_REVIEW_FAILED, payload: error });
  }
};

// FEED
export const getAllFeed = () => async (dispatch) => {
  try {
    dispatch({ type: FEED.GET_ALL_FEED_START });
    const response = await fetch(`${BASE_URL}/feed/listFeedVisible`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("internal server error");
    }

    const data = await response.json();
    dispatch({
      type: FEED.GET_ALL_FEED_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("error get data", error);
    dispatch({ type: FEED.GET_ALL_FEED_FAILED, payload: error });
  }
};

export const getFeedById = (id) => async (dispatch) => {
  try {
    dispatch({ type: FEED.GET_ALL_FEED_BY_ID_START });
    const response = await fetch(`${BASE_URL}/feed/feedById/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("internal Server error");
    }

    const data = await response.json();
    dispatch({
      type: FEED.GET_ALL_FEED_BY_ID_SUCCESS,
      payload: data,
    });
    return data;
  } catch (error) {
    console.log("error get data", error);
    dispatch({
      type: FEED.GET_ALL_FEED_BY_ID_FAILED,
      payload: error,
    });
  }
};

export const getFeedReview = (id) => async (dispatch) => {
  try {
    dispatch({ type: FEED.GET_REVIEW_FEED_BY_ID_START });
    const response = await fetch(`${BASE_URL}/reviewFeed/reviewById/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("internal Server error");
    }

    const data = await response.json();
    dispatch({
      type: FEED.GET_REVIEW_FEED_BY_ID_SUCCESS,
      payload: data,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log("error get data", error);
    dispatch({
      type: FEED.GET_REVIEW_FEED_BY_ID_FAILED,
      payload: error,
    });
  }
};

// EVENT

export const getEvent = () => async (dispatch) => {
  try {
    dispatch({ type: EVENT.GET_DATA_EVENT_START });
    const response = await fetch(`${BASE_URL}/events/listEvent`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("internal Server error");
    }

    const data = await response.json();
    dispatch({
      type: EVENT.GET_DATA_EVENT_SUCCESS,
      payload: data,
    });
    return data;
  } catch (error) {
    console.log("error get data", error);
    dispatch({
      type: EVENT.GET_DATA_EVENT_FAILED,
      payload: error,
    });
  }
};

export const getEventbyId = (id) => async (dispatch) => {
  try {
    dispatch({ type: EVENT.GET_EVENT_ID_START });
    const response = await fetch(`${BASE_URL}/events/eventById/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("internal Server error");
    }

    const data = await response.json();
    dispatch({
      type: EVENT.GET_EVENT_ID_SUCCESS,
      payload: data,
    });
    return data;
  } catch (error) {
    console.log("error get data", error);
    dispatch({
      type: EVENT.GET_EVENT_ID_FAILED,
      payload: error,
    });
  }
};

export const getReviewEventbyId = (id) => async (dispatch) => {
  try {
    dispatch({ type: EVENT.GET_EVENT_REVIEW_ID_START });
    const response = await fetch(`${BASE_URL}/reviewEvent/reviewById/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("internal Server error");
    }

    const data = await response.json();
    dispatch({
      type: EVENT.GET_EVENT_REVIEW_ID_SUCCESS,
      payload: data,
    });
    return data;
  } catch (error) {
    console.log("error get data", error);
    dispatch({
      type: EVENT.GET_EVENT_REVIEW_ID_FAILED,
      payload: error,
    });
  }
};

// BANNER
export const getActiveBanner = () => async (dispatch) => {
  try {
    dispatch({ type: BANNER.GET_DATA_BANNER_START });
    const response = await fetch(`${BASE_URL}/banner/active/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("internal Server error");
    }

    const data = await response.json();
    dispatch({
      type: BANNER.GET_DATA_BANNER_SUCCESS,
      payload: data,
    });

    return data;
  } catch (error) {
    console.log("error get data", error);
    dispatch({
      type: BANNER.GET_DATA_BANNER_FAILED,
      payload: error,
    });
  }
};

// INFLUENCER
export const getAllInfluencer = () => async (dispatch) => {
  try {
    dispatch({ type: INFLUENCER.GET_DATA_INFLUENCER_START });
    const response = await fetch(`${BASE_URL}/video-recommendation/listInfluencer/?userId=8&length=20&star=1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("internal Server error");
    }

    const data = await response.json();
    dispatch({
      type: INFLUENCER.GET_DATA_INFLUENCER_SUCCESS,
      payload: data,
    });
    // console.log('data',data);
    return data;
  } catch (error) {
    console.log("error get data", error);
    dispatch({
      type: INFLUENCER.GET_DATA_INFLUENCER_FAILED,
      payload: error,
    });
  }
};

// VIDEO
export const getVideoByIdMemberYoutube = () => async (dispatch) => {
  try {
    dispatch({ type: VIDEO.GET_DATA_VIDEO_START });
    const response = await fetch(
      `${BASE_URL}/video-recommendation/1?sourceVideo=youtube&length=20&start=1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("internal Server error");
    }

    const data = await response.json();
    dispatch({
      type: VIDEO.GET_DATA_VIDEO_SUCCESS,
      payload: data.data,
    });
    // console.log("data", data);
    return data;
  } catch (error) {
    console.log("error get data", error);
    dispatch({
      type: VIDEO.GET_DATA_VIDEO_FAILED,
      payload: error,
    });
  }
};

export const getVideoByIdMemberInstagram = () => async (dispatch) => {
  try {
    dispatch({ type: VIDEO.GET_DATA_VIDEO_INSTAGRAM_START });
    const response = await fetch(
      `${BASE_URL}/video-recommendation/1?sourceVideo=instagram&length=20&start=1`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("internal Server error");
    }

    const data = await response.json();
    dispatch({
      type: VIDEO.GET_DATA_VIDEO_INSTAGRAM_SUCCESS,
      payload: data.data,
    });
    return data;
  } catch (error) {
    console.log("error get data", error);
    dispatch({
      type: VIDEO.GET_DATA_VIDEO_INSTAGRAM_FAILED,
      payload: error,
    });
  }
};

export const getVideoByIdMemberUnnis= () => async (dispatch) => {
  try {
    dispatch({ type: VIDEO.GET_DATA_VIDEO_UNNIS_START });
    const response = await fetch(
      `${BASE_URL}/video-recommendation/unnis-video/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("internal Server error");
    }
    const data = await response.json();
    dispatch({
      type: VIDEO.GET_DATA_VIDEO_UNNIS_SUCCESS,
      payload: data,
    });
    // console.log("UNNISSS VIDEO >>> ", data);
    return data;
  } catch (error) {
    console.log("error get data", error);
    dispatch({
      type: VIDEO.GET_DATA_VIDEO_UNNIS_FAILED,
      payload: error,
    });
  }
};

export const getRecommendationProductVideo= () => async (dispatch) => {
  try {
    dispatch({ type: VIDEO.GET_DATA_VIDEO_PRODUCT_RECOMMENDATION_START });
    const response = await fetch(
      `${BASE_URL}/video-recommendation/product-unnis/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("internal Server error");
    }
    const data = await response.json();
    dispatch({
      type: VIDEO.GET_DATA_VIDEO_PRODUCT_RECOMMENDATION_SUCCESS,
      payload: data,
    });
    return data;
  } catch (error) {
    console.log("error get data", error);
    dispatch({
      type: VIDEO.GET_DATA_VIDEO_PRODUCT_RECOMMENDATION_FAILED,
      payload: error,
    });
  }
};

export const getProductVideo= () => async (dispatch) => {
  try {
    dispatch({ type: VIDEO.GET_DATA_VIDEO_PRODUCT_START });
    const response = await fetch(
      `${BASE_URL}/video-recommendation/product/`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("internal Server error");
    }
    const data = await response.json();
    dispatch({
      type: VIDEO.GET_DATA_VIDEO_PRODUCT_SUCCESS,
      payload: data.data,
    });
    // console.log("Data Product >>> ", data);
    return data;
  } catch (error) {
    console.log("error get data", error);
    dispatch({
      type: VIDEO.GET_DATA_VIDEO_PRODUCT_FAILED,
      payload: error,
    });
  }
};

export const getVideoInfluencer= (name) => async (dispatch) => {
  try {
    dispatch({ type: VIDEO.GET_DATA_VIDEO_INFLUENCER_START });
    const response = await fetch(
      `${BASE_URL}/video-recommendation/detailInfluencer/?name=${name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("internal Server error");
    }
    const data = await response.json();
    dispatch({
      type: VIDEO.GET_DATA_VIDEO_INFLUENCER_SUCCESS,
      payload: data.data,
    });
    console.log("Data INFLUENCER >>> ", data);
    return data;
  } catch (error) {
    console.log("error get data", error);
    dispatch({
      type: VIDEO.GET_DATA_VIDEO_INFLUENCER_FAILED,
      payload: error,
    });
  }
};

// COMMUNITY
export const getAllCommunity = () => async (dispatch) => {
  try {
    dispatch({ type: COMMUNITY.GET_DATA_COMMUNITY_START });
    const response = await fetch(`${BASE_URL}/all-thread?memberId=33`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("internal Server error");
    }

    const data = await response.json();
    dispatch({
      type: COMMUNITY.GET_DATA_COMMUNITY_SUCCESS,
      payload: data,
    });
    return data;
  } catch (error) {
    console.log("error get data", error);
    dispatch({
      type: COMMUNITY.GET_DATA_COMMUNITY_FAILED,
      payload: error,
    });
  }
};

// RECYCLE
export const getVRecycleLeaderboard = () => async (dispatch) => {
  try {
    dispatch({ type: RECYCLE.GET_ALL_RECYCLE_LEADERBOARD_START });
    const response = await fetch(
      `${BASE_URL}/reward/leaderBoard`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("internal Server error");
    }

    const data = await response.json();
    dispatch({
      type: RECYCLE.GET_ALL_RECYCLE_LEADERBOARD_SUCCESS,
      payload: data,
    });
    // console.log("data RECYCLE LEADERBOARD >>> ", data);
    return data;
  } catch (error) {
    console.log("error get data", error);
    dispatch({
      type: RECYCLE.GET_ALL_RECYCLE_LEADERBOARD_FAILED,
      payload: error,
    });
  }
};

export const getRecycleHistoryById = (id) => async (dispatch) => {
  try {
    dispatch({ type: RECYCLE.GET_ALL_RECYCLE_HISTORY_START });
    const response = await fetch(
      `${BASE_URL}/reward/historyRewardById/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("internal Server error");
    }

    const data = await response.json();
    dispatch({
      type: RECYCLE.GET_ALL_RECYCLE_HISTORY_SUCCESS,
      payload: data.dataReward,
    });
    console.log("data RECYCLE HISTORY BY ID >>> ", data);
    return data;
  } catch (error) {
    console.log("error get data", error);
    dispatch({
      type: RECYCLE.GET_ALL_RECYCLE_HISTORY_FAILED,
      payload: error,
    });
  }
};

// FEEDBACK 
export const postFeedback = (body) => async (dispatch) => {
  try {
    dispatch({ type: FEEDBACK.POST_FEEDBACK_START });
    const response = await fetch(`${BASE_URL}/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error("Internal server error");
    }

    const data = await response.json();
    dispatch({
      type: FEEDBACK.POST_FEEDBACK_SUCCESS,
      payload: data,
    });
    console.log("FEEDBACK >>> ",data);
    return data; 
  } catch (error) {
    console.log("error get all data FEEDBACK:", error);
    dispatch({
      type: FEEDBACK.POST_FEEDBACK_FAILED,
      payload: error,
    });
  }
};