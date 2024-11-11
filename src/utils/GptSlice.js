import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice(
    {name:"gpt",
    initialState:{
            showGPTSearch : false
        }
    ,
    reducers:{
        toggleGPTSearch :(state) =>{
            state.showGPTSearch = !state.showGPTSearch;
        }

    }
})

export const {toggleGPTSearch}= GptSlice.actions
export default GptSlice.reducer;