import {useEffect} from "react";
import fetcher from "../../lib/fetcher";
import {useQuery} from "@tanstack/react-query";
import {store, URL} from "./store";
import {mutations} from "./mutation";
import {ICounter} from "models";
import {useStore} from "@tanstack/react-store";

function useStoreSync(): { isPending: boolean, storage: ICounter, mutations: typeof mutations } {
    const {isPending, error, data} = useQuery({
        queryKey: [URL],
        queryFn: () => fetcher.get<ICounter>(URL).then((res) => res.data),
        staleTime: 10000,
        refetchInterval: 5000,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
    })

    const storage = useStore(store, (state) => state)

    useEffect(() => {
        if (data && !error) mutations.set(data)
        else console.log(error)
    }, [data, error]);

    useEffect(() => {
        sessionStorage.setItem('Counter', JSON.stringify(storage));
    }, [storage]);

    return {isPending, storage, mutations}
}

export default useStoreSync;
