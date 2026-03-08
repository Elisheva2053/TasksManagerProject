import { createSlice } from "@reduxjs/toolkit"

const GLOBAL_USER={
    
        name:"E&S",
        password:"Eli72053*&saryya52889"
}

const checkUserDetails = (name, password) => {
  return name === GLOBAL_USER.name && password === GLOBAL_USER.password;
}

const initialValue={
    isLoggedIn:false
}

const userSlice=createSlice({
    name:"user",
    initialState:initialValue,
    reducers:{
        login:(state,actions)=>{
            if(checkUserDetails(actions.payload.name,actions.payload.password)===true) {
                state.isLoggedIn=true
            }
           
        }
    }
})


export const {login}= userSlice.actions
export default userSlice.reducer

