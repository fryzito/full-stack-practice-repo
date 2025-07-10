import { createSlice } from '@reduxjs/toolkit'


export const moviesSlice = createSlice({

    name: 'movies',
    initialState:{
        list:[
            {id:1,title:'Pulp fiction'},
            {id:2,title:'Rambo'},
            {id:3,title:'Panda'},
            {id:4,title:'Andor'}
        ]
    },
    reducers: {
        addMovie:(state, actions)=>{

            //const newMovie = {id:5,title:'Batman'};
            state.list = [...state.list, actions.payload]

        }
    }

});

export const { addMovie } = moviesSlice.actions;
export default moviesSlice.reducer;