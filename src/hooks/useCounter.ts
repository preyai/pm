import { useSelector, useDispatch } from "react-redux";
import { setCounter } from "../redux/counter/counterSlice";
import { RootState } from "../redux/store";

const useCounter = () => {
    const counter = useSelector((state: RootState) => state.counter);

    const dispatch = useDispatch();

    const dispatchCounter = (value: number) => dispatch(setCounter(value))

    return { counter, dispatchCounter }
}

export default useCounter