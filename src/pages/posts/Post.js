import React from "react";
import { updatePost } from "../../services/post.service";
import "./Posts.css";
const Post = (props) => {
  const { img, title, desc, categories, createdBy, updated, id } = props;
  return (
    <div className="post">
      <img src={img} alt="Post" />
      <div className="postInfo">
        {categories.map((el, index) => {
          return (
            <span key={index} className="post-category">
              {" "}
              {el}{" "}
            </span>
          );
        })}
      </div>
      <p className="post-title"> {title} </p>{" "}
      <span className="post-date"> {new Date(updated).toDateString()} </span>{" "}
      <p className="post-desc"> {desc} </p>{" "}
    </div>
  );
};

export default Post;
