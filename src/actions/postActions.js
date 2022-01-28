import { uiActions } from "../store/ui-slice";
import { postAction } from "../store/post-slice";

import {
    getAllPosts,
    getPost,
    createPost,
    deletePost,
    updatePost,
} from "../services/post.service";

const allPosts = async() => {
    console.log("Inside All post actions");
    return async(dispatch) => {
        try {
            console.log("Inside UserActions");
            const result = await getAllPosts();
            console.log(result);
            dispatch(
                postAction.loadPosts({
                    posts: result.data,
                })
            );
        } catch (error) {
            console.log(error);
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    message: "Something went wrong..",
                })
            );
        }
    };
};

const singlePost = (id) => {
    return async(dispatch) => {
        try {
            const result = await getPost(id);
            console.log(result);
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    message: "Something went wrong..",
                })
            );
        }
    };
};
const deleteSinglePost = (id) => {
    return async(dispatch) => {
        console.log("Before delte user", id);
        try {
            console.log("Before delte user", id);
            const result = await deletePost(id);
            if (result.status === 200) {
                dispatch(
                    uiActions.showNotification({
                        status: "success",
                        message: "User Deleted successfully",
                    })
                );
            }
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    message: "Something went wrong..",
                })
            );
        }
    };
};
/*const userAdd = (obj) => {
    return async(dispatch) => {
        try {
            const result = await addUser(obj);
            if (result.status === 200) {
                dispatch(
                    uiActions.showNotification({
                        status: "success",
                        message: "User added successfully",
                    })
                );
            }
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: "error",
                    message: "Something went wrong..",
                })
            );
        }
    };
};*/
export { allPosts, deleteSinglePost, singlePost };