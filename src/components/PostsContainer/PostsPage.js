//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";

// import data 


const PostsPage = ({ data }) => {
  
  return (
    <div className="posts-container-wrapper">


    {
    data.map(user => {
      return <Post userData={user} />
    })
    }
    </div>
  );

};

export default PostsPage;