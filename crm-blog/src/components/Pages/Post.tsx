import React, { useEffect } from "react";

function Post() {
  useEffect(() => {
    console.log(import.meta.env.PATH_TO_SERVER);
    fetch(import.meta.env.PATH_TO_SERVER)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return <div>Post</div>;
}

export default Post;
