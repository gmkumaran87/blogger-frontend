import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import "./Write.css";

const Write = () => {
  const initialState = {
    title: "",
    desc: "",
    file: null,
  };

  const [state, setState] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("File", state.file);

    if (state.file) {
      const data = new FormData();
      const filename = new Date.now() + state.file.name;

      data.append("file", state.file);
      data.append("name", filename);
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
