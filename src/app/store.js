import { configureStore } from "@reduxjs/toolkit";
import lessonSlice from "./lessonReducer";

const store = configureStore({
  reducer: {
    lesson: lessonSlice,
  },
});

export default store;
