import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <p className="sidebar-title">About me</p>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p className="about-desc">
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>

      <div className="sidebar-item">
        <p className="sidebar-title">categories</p>
        <ul className="cat-lists">
          <li>life</li>
          <li>Technology</li>
          <li>sports</li>
          <li>science</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <p className="sidebar-title">follow us</p>
        <ul className="cat-lists">
          <li>life</li>
          <li>Technology</li>
          <li>sports</li>
          <li>science</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
