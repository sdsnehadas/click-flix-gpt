import { createSlice } from "@reduxjs/toolkit";

const  movieSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
        trailer:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        popularTV:null,
        gptSearchMovies:null
    },
    reducers: {
        addNowPlayingMovies: (state,action) =>{
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo : (state,action) =>{
            state.trailer = action.payload
        },
        addPopularMovies: (state,action) =>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state,action) =>{
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state,action) =>{
            state.upcomingMovies = action.payload
        },
        addPopularTV:(state,action) =>{
            state.popularTV = action.payload
        },
        searchMoviesByName:(state,action) =>{
            state.gptSearchMovies = action.payload
        },
        removeGptSearchResults:(state)=>{
            state.gptSearchMovies = null;
        }
    }
});

export const {addNowPlayingMovies, addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies, addPopularTV, searchMoviesByName, removeGptSearchResults} = movieSlice.actions;
export default movieSlice.reducer 