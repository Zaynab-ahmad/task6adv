import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { posts } from "../../Data/data";

type Post = (typeof posts) [0];

interface PostsState {
  allPosts: Post[];
  recentPosts: Post[];
  selectedPost: Post | null;
  paginatedPosts: Post[];
  currentPage: number;
  postsPerPage: number;
}

const initialState: PostsState = {
  allPosts: posts,
  recentPosts: [],
  selectedPost: null,
  paginatedPosts: [],
  currentPage: 1,
  postsPerPage: 6, 
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getRecentPosts(state, action: PayloadAction<number>) {
      const count = action.payload;  
      state.recentPosts = state.allPosts
        .filter((post) => !!post.createdAt) 
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, count);
    },
    

    getPostById(state, action: PayloadAction<string>) {
      state.selectedPost =
        state.allPosts.find((post) => post.id === action.payload) || null;
    },

    paginatePosts(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
      const start = (state.currentPage - 1) * state.postsPerPage;
      const end = start + state.postsPerPage;
      state.paginatedPosts = state.allPosts.slice(start, end);
    },
    
  },
});

export const { getRecentPosts, getPostById, paginatePosts } =
  postSlice.actions;

export default postSlice.reducer;
