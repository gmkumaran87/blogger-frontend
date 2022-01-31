import React from "react";
import "./Single.css";
import { Link } from "react-router-dom";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { deleteSinglePost, allPosts } from "../../actions/postActions";
import { useNavigate } from "react-router-dom";

const Single = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  console.log("props", props);
  const { _id, title, description, image, author, createdBy } = props.post;

  const handleDelete = (id) => {
    try {
      dispatch(deleteSinglePost(id));
      dispatch(allPosts());
      navigate("/");
    } catch (error) {}
  };
  return (
    <div className="single">
      <img className="post-img" src={image} alt="Details about post"></img>
      <h2 className="post-title">{title}</h2>
      <div className="post-info">
        <p className="author">
          Author:{" "}
          <span>
            <Link className="link" to={`/?author=${createdBy}`}>
              {author}
            </Link>
          </span>
        </p>
        {user._id === createdBy && (
          <>
            <div className="post-icons">
              <FiEdit className="icons edit-icon"></FiEdit>
              <FiTrash
                className="icons delete-icon"
                onClick={(e) => handleDelete(_id)}
              />
            </div>
          </>
        )}
      </div>
      <p className="single-postDesc">{description}</p>
    </div>
  );
};

export default Single;
