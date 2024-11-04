import fetcher from "../../lib/fetcher";
import {store, URL} from "./store";
import {ICounter} from "models";

export const mutations = {
    increment: (counter: "counterOne" | "counterTwo", count: number) => {
        const prevState = {...store.state}
        const newState = {
            ...store.state,
            [counter]: store.state[counter] + count,
        };

        store.setState(() => newState)

        fetcher.put(URL, newState).then((res) => {
            if (!(res && res.status === 200)) {
                store.setState(() => prevState)
            }
        }).catch((error) => {
            console.error("Network error:", error)
            store.setState(() => prevState)
        });
    },
    set: (newState: ICounter) => {
        store.setState((state) => {
            return {
                ...state,
                ...newState,
            }
        });
    }
}
