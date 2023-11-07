import { createSlice } from "@reduxjs/toolkit";



const initialState ={
  adminStatus : null,
  loading:false,
  error:false
}

const adminSlice=createSlice({
  name:'admin',
  initialState,
  reducers:{
    signInStart:(state)=>{
      state.loading=true
    },
    signInSuccess :(state,action)=>{
      state.adminStatus = action.payload,
      state.loading = false,
      state.error = false

    },
    signInFailure:(state , action)=>{
           
      state.loading = false,
      state.error = action.payload
    },
    signOut:(state)=>{
      state.adminStatus = null,
      state.loading=false;
      state.error = false;
      }
  }
})

export const {signInFailure,signInStart,signInSuccess,signOut} = adminSlice.actions;

export default adminSlice.reducer;