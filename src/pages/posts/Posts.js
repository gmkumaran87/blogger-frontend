import React, { useEffect } from "react";
import Post from "./Post";
import "./Posts.css";
import { getAllPosts } from "../../services/post.service";
import { postAction } from "../../store/post-slice";

import { useDispatch, useSelector } from "react-redux";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  // console.log("Posts", posts);
  // Getting all the Posts
  useEffect(() => {
    const getPosts = async () => {
      try {
        const result = await getAllPosts();
        console.log(result);
        if (result.status === 200) {
          dispatch(postAction.loadPosts(result.data));
        }
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
  }, [dispatch]);

  console.log(posts);

  const postsArray = posts.map((post) => {
    return (
      <Post
        key={post._id}
        title={post.title}
        desc={post.description}
        categories={post.categories}
        createdBy={post.createdBy}
        updated={post.updatedAt}
        img={post.image}
        id={post._id}
      />
    );
  });
  return <div className="posts">{postsArray}</div>;
};

export default Posts;
