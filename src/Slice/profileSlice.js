import {createSlice} from   "@reduxjs/toolkit"

const initialState ={
    user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,  
    loading:false
    // console.log("this is from profile",user)
};
console.log(" this is the initial state",initialState)
const profileSlice=createSlice({
    name:'profile',
    initialState:initialState,
    reducers:{
        setUser(state,value){
            state.user=value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
        }
    }
});
console.log(" this is the initial state",initialState.user)

export const {setUser,setLoading}=profileSlice.actions;
export default profileSlice.reducer;