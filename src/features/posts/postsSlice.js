import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "First Post!",
    content: "Hello!",
    like: 0,
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: 2,
    title: "Second Post",
    content: "More text",
    like: 0,
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },

      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
          },
        };
      },
    },

    addLike: (state) => {
      state.like += 1;
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded, addLike } = postsSlice.actions;

export default postsSlice.reducer;
