// import { authActions } from "../store/auth-slice";
import { uiActions } from "../store/ui-slice";

import { getAllUsers, deleteUser, addUser } from "../services/user.service";

const getUsers = async() => {
    return async(dispatch) => {
        try {
            console.log("Inside UserActions");
            const result = await getAllUsers();
            console.log(result);
            dispatch(
                uiActions.showNotification({
                    status: "success",
                    message: "User received successfully",
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

const userDelete = (id) => {
    return async(dispatch) => {
        console.log("Before delte user", id);
        try {
            console.log("Before delte user", id);
            const result = await deleteUser(id);
            if (result.status === 200) {
                dispatch(
                    uiActions.showNotification({
                        status: "success",
                        message: "User Deleted successfully",
                    })
                );
            }
        } catch (error) {
            console.log(error);
        }
    };
};
const userAdd = (obj) => {
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
};
export { getUsers, userDelete, userAdd };