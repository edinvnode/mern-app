import { WorkoutContext } from "../context/WorkoutContext";
import { useContext} from "react";

export const useWorkoutsContext  = ()=>{
    const context = useContext(WorkoutContext);

    if(!context) {
        throw Error("useContextHook must be used withing context provider")
    }

    return context 
}