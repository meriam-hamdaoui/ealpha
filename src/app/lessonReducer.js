import { createSlice } from "@reduxjs/toolkit";

const lessonSlice = createSlice({
  name: "lesson",
  initialState: [],
  reducers: {
    createLesson: (state, action) => action.payload,
  },
});

export const { createLesson } = lessonSlice.actions;
export default lessonSlice.reducer;
