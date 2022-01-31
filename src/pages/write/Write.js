import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { uploadImage, createPost } from "../../services/post.service";
import "./Write.css";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const navigate = useNavigate();
  const initialState = {
    title: "",
    desc: "",
    file: null,
  };

  const [state, setState] = useState(initialState);
  const handleSubmit = async (e) => {
    const post = {};
    e.preventDefault();

    post["title"] = state.title;
    post["description"] = state.desc;
    post["categories"] = "Technology";

    console.log("File", state.file);

    if (state.file) {
      const formData = new FormData();
      formData.append("myImage", state.file);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      console.log("before upload", formData);
      try {
        const result = await uploadImage(formData, config);
        console.log(result);
        const imageUrl = result.data.imageUrl;
        post["image"] = imageUrl;
        try {
          const res = await createPost(post);
          console.log("Post result", res);
          if (res.status === 201) {
            navigate("/");
          }
        } catch (error) {}
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="write-page">
      {state.file && (
        <img
          className="write-img"
          src={URL.createObjectURL(state.file)}
          alt=""
        ></img>
      )}
      <form className="write-form" onSubmit={handleSubmit}>
        <div className="write-group">
          <label htmlFor="upload">
            <FiPlus className="write-icon" />
          </label>
          <input
            type="file"
            name="upload"
            id="upload"
            className="file-upload"
            onChange={(e) => setState({ ...state, file: e.target.files[0] })}
          />
          <input
            type="text"
            name="write-title"
            placeholder="Title"
            className="write-text write-title"
            value={state.title}
            autoFocus={true}
            onChange={(e) => setState({ ...state, title: e.target.value })}
          ></input>
        </div>
        <div className="write-group">
          <textarea
            name="write-story"
            className="write-text write-textArea"
            cols="40"
            rows="10"
            placeholder="Tell your Story"
            value={state.desc}
            onChange={(e) => setState({ ...state, desc: e.target.value })}
          ></textarea>
        </div>
        <button className="btn write-btn">Publish</button>
      </form>
    </div>
  );
};

export default Write;
