import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter/counterSlice";
import { reducer as tasks } from "./tasks/tasksSlice";

const store = configureStore({
    reducer: {
        counter,
        tasks
    },
})

export type RootState = ReturnType<typeof store.getState>

export default store