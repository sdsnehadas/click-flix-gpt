import { createSlice } from "@reduxjs/toolkit";

const  movieSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
        trailer:null
    },
    reducers: {
        addNowPlayingMovies: (state,action) =>{
            console.log("action called", action.payload)
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo : (state,action) =>{
            state.trailer = action.payload
        }
    }
});

export const {addNowPlayingMovies, addTrailerVideo} = movieSlice.actions;
export default movieSlice.reducer 