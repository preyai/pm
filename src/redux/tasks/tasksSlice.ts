import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ITask from "../../interfaces/ITask";

const initialState: ITask[] = []

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            state.push(action.payload)
        },
        removeTask: (state, action: PayloadAction<string>) => {
            state.filter(item => item.id != action.payload)
        }
    }
})

export const { addTask, removeTask } = tasksSlice.actions

export const { reducer } = tasksSlice

export default tasksSlice