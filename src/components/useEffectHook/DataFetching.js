import React, { useEffect, useState } from "react";

import axios from "axios";

const DataFetching = () => {
  const [post, setPost] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const searchId = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }, [idFromButtonClick]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={searchId}>
        Fetch Post
      </button>
      <ul>
        {/* {posts && posts.map((post) => <li key={post.id}>{post.title}</li>)} */}
        {post && <h6>{post.title}</h6>}
        {errorMessage && <h1>{errorMessage}</h1>}
      </ul>
    </div>
  );
};

export default DataFetching;
