import { configureStore } from "@reduxjs/toolkit";
import { reducer as tasks } from "./tasks/tasksSlice";

const store = configureStore({
    reducer: {
        tasks
    },
})

export type RootState = ReturnType<typeof store.getState>

export default store