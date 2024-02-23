import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false, 
    userData : null,
    username :"user"

}

const authSlice  = createSlice({
    name :"auth",
    initialState,
    reducers :{
        login: (state,  action) => {
            state.status = true,
            state.userData = action.payload.userData;
            // state.username = action.payload.username;

        },
        logout : (state)=>{
            state.status = false,
            state.userData = null
            // state.username = null ;
        }
    }
})

export const {login , logout} = authSlice.actions;
//reducer ke andar ke actions h ye

export default authSlice.reducer;
