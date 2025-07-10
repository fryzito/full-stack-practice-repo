import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async(thunkAPI) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users').
        then(Response => Response.data);
        return res;
    }
)

export const usersSlice = createSlice ({
    name:'users',
    initialState:{
        type:'Guess',
        users:[],
    },
    reducers:{
        setType: (state,action) => {
            state.type = action.payload || 'Guess'
        }
    },
    extraReducers:(builder)=> {
        builder
        .addCase(fetchUsers.pending,(state)=>{
            console.log('pending');
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            console.log('fulfilled');
            console.log(action.payload)
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected,(state)=>{
            console.log('Rejected');
        })
    }
})

export const { setType } = usersSlice.actions;
export default usersSlice.reducer;