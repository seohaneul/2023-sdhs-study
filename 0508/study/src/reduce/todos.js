import { createSlice } from "@reduxjs/toolkit";                   

const initialState = {
    todos: [],
};

// reducer
const todosSlice = createSlice({
    // reducer name
    name: 'todos',
    // reducer의 초기값
    initialState,
    // reducer의 action들
    // todos의 데이터를
    reducers: {
        setTodos: (state, action) => {
            const {payload} = action;
            // payload = [{id: 'asdfasdf}, name: 'adsdf', {},{}}] => localStorage에서 가져온 값
            state.todos = payload
        },
        createTodo: (state, action) =>{
            const { type, payload } = action;
            // payload: {id: 'asdfjk;al', name: 'test1'}
            state.todos = [...state.todos, payload];
        },
        deleteTodo: (state, action)=>{
            const {payload} = action;
            state.todos = state.todos.filter(todo => todo.id !== payload);
        },
        deleteSelectedTodos: (state, action)=>{
            const { payload } = action;
            state.todos = state.todos.filter(todo => !payload.includes(todo));
        },

    },
})

export const {createTodo,deleteTodo,deleteSelectedTodos} = todosSlice.actions;
export default todosSlice.reducer;