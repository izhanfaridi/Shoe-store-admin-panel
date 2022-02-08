import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name:"user",
    initialState:{
        currentUser:null,
        isFetching:false,
        error:false
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching=true
        },
        loginSuccess:(state,action)=>{
            state.isFetching=false;
            state.currentUser=action.payload
            state.error=false;
        },
        loginFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
        getUserStart:(state)=>{
            state.isFetching=true;
            state.error=false;
        },
        getUserSuccess:(state,action)=>{
            state.isFetching=true;
            state.users=action.payload;
            state.error = false;
        },
        getUserFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
        deleteUserStart:(state)=>{
            state.isFetching=true;
            state.error=false;
        },
        deleteUserSuccess:(state,action)=>{
            state.isFetching=true;
            state.users.splice(state.users.findIndex(item=>item._id === action.payload),1);
            state.error=false;
        },
        deleteUserFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
        logout:(state)=>{
            state.currentUser = null;
        }
    }
})

export const {loginStart,loginFailure,loginSuccess,getUserStart,getUserSuccess,getUserFailure,deleteUserStart,deleteUserSuccess,deleteUserFailure,logout} = userSlice.actions;
export default userSlice.reducer;