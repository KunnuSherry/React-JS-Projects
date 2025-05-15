import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    formData:{
        title: '',
        description: '',
    },
    blogList: []
}

export const blogSlice = createSlice({
    name:'blog',
    initialState,
    reducers: {
        handleInputChange: (state, action)=>{
            console.log(action);
            let cpyFormData = {...state.formData};
            cpyFormData = {
                ...cpyFormData,
                ...action.payload,
            };
            state.formData = cpyFormData
        },
        handleAdd: (state, action)=>{
            console.log(action)
            state.blogList.push({
                id: nanoid(),
                ...state.formData,
            });
        },
        handleDelete: (state, action) => {
            const { id } = action.payload;
            state.blogList = state.blogList.filter(item => item.id !== id);
        }

            }
        })

export const {handleInputChange} = blogSlice.actions
export const {handleAdd} = blogSlice.actions
export const {handleDelete} = blogSlice.actions
export default blogSlice.reducer