import React, { useEffect, useState } from "react";

import axios from "axios";

const DataFetchingOne = () => {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [posts, setPosts] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setLoading(false);
        setPosts(response.data);
        setErrorMessage("");
      })
      .catch((error) => {
        setLoading(false);
        setPosts({});
        setErrorMessage(error);
      });
  }, []);
  return (
    <div>
      {loading ? <h2>Loading</h2> : posts.title}
      {errorMessage && <h2>something wrong</h2>}
    </div>
  );
};

export default DataFetchingOne;
