import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/authSlice";
import { counterReducer } from "./features/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
