import React, { useEffect, useReducer } from "react";

import axios from "axios";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING_TRUE":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.value,
        error: "",
      };
    case "FETCH_FAILED":
      return {
        ...state,
        loading: false,
        data: {},
        error: action.value,
      };
    default:
      return state;
  }
};

const DataFetchingTwo = () => {
  const [post, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOADING_TRUE" });
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        console.log("I got it");
        dispatch({ type: "FETCH_SUCCESS", value: response.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAILED", value: err.message });
      });
  }, []);

  return (
    <div>
      {console.log(post.loading)}
      {post.loading ? <h2>Loading</h2> : post.data.title}
      {post.error && <h2>Something is wrong</h2>}
    </div>
  );
};

export default DataFetchingTwo;
