import fetcher from "../../lib/fetcher";
import {store, URL} from "./store";
import {ICounter} from "models";

export const mutations = (refetch: () => void) => {
    return {
        increment: (counter: "counterOne" | "counterTwo", count: number) => {
            store.setState((state) => {
                const newState = {
                    ...state,
                    [counter]: state[counter] + count,
                };
                fetcher.put(URL, newState).then((res) => {
                    if (res && res.status === 200) {
                        this.set(newState);
                    } else {
                        this.set(state);
                    }
                }).catch((error) => {
                    console.error("Network error:", error);
                    store.setState(() => state);
                    refetch();
                });
                return newState;
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
}
