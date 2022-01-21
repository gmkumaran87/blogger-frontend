import React from "react";
import "./Posts.css";
const Post = (props) => {
  const { img } = props;
  return (
    <div className="post">
      <img src={img} alt="Post" />
      <div className="postInfo">
        <span className="post-category"> Life</span>
        <span className="post-category"> Technology</span>
      </div>

      <p className="post-title">My Life of Coding</p>
      <span className="post-date">1 hour ago</span>
      <p className="post-desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta dolorem
        laborum ut consectetur reprehenderit architecto voluptas nam? Modi
        maiores optio necessitatibus voluptatibus delectus, maxime incidunt
        temporibus distinctio repellendus corporis saepe.
      </p>
    </div>
  );
};

export default Post;
