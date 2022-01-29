import React from "react";
import "./Single.css";
import { Link } from "react-router-dom";
import { FiEdit, FiTrash } from "react-icons/fi";

const Single = (props) => {
  console.log("props", props);
  const { title, description, image, createdBy } = props.post;
  return (
    <div className="single">
      <img className="post-img" src={image} alt="Details about post"></img>
      <h2 className="post-title">{title}</h2>
      <div className="post-info">
        <p className="author">
          Author:{" "}
          <span>
            <Link className="link" to={`/?author=${createdBy}`}>
              {createdBy}
            </Link>
          </span>
        </p>
        <div className="post-icons">
          <FiEdit className="icons edit-icon"></FiEdit>
          <FiTrash className="icons delete-icon" />
        </div>
      </div>
      <p className="single-postDesc">{description}</p>
    </div>
  );
};

export default Single;
