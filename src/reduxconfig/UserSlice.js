import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : 'usr',
    initialState : {
        value : {
            islogin : false,
            name : undefined,
            role : undefined,
            token : undefined
        }
    },
    reducers : {
     setData : (state,action)=>{
        state.value = {...action.payload,islogin:true}
     },

     delData : (state, action)=>{
        state.value = {
            islogin : false,
            name : undefined,
            role : undefined,
            token : undefined
        }
       
     }
    }
})

export default slice.reducer;
export const {setData,delData} = slice.actions; 