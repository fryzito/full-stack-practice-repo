import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async(id, thunkAPI) => {
        try {
            console.log(thunkAPI.getState());
            thunkAPI.dispatch(testAsyncDispatch());
            let url = `https://jsonplaceholder.typicode.com/users`;
            if (id) url += `/${id}`;

            const res = await axios.get(url).
            then(Response => Response.data);
            if(id) {
                return [res];
            } else {
                return res;
            }
        } catch(err){
            throw err;
        }
    }
)

export const usersSlice = createSlice ({
    name:'users',
    initialState:{
        type:'Guess',
        users:[],
        loading: false,
        user:[]
    },
    reducers:{
        setType: (state,action) => {
            state.type = action.payload || 'Guess'
        },
        testAsyncDispatch:((state)=>{
            state.test = true
        })
    },
    extraReducers:(builder)=> {
        builder
        .addCase(fetchUsers.pending,(state)=>{
            //console.log('pending');
            state.loading = true;
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            console.log('fulfilled');
            //console.log(action.payload)
            action.payload.length === 1 ?
                state.user = action.payload
            :
                state.users = action.payload
                
            state.loading = false;
        })
        .addCase(fetchUsers.rejected,(state)=>{
            console.log('REJECTED');
            state.loading = false;
        })
    }
})

export const { testAsyncDispatch, setType } = usersSlice.actions;
export default usersSlice.reducer;