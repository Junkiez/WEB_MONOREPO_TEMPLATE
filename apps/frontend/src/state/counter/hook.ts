import {useEffect} from "react";
import fetcher from "../../lib/fetcher";
import {useQuery} from "@tanstack/react-query";
import {store, URL} from "./store";
import {mutations} from "./mutation";
import {ICounter} from "models";
import {useStore} from "@tanstack/react-store";

const useStoreSync = () => {
    const {isPending, error, data, refetch} = useQuery({
        queryKey: [URL],
        queryFn: () => fetcher.get<ICounter>(URL).then((res) => res.data),
    })

    const storage = useStore(store, (state) => state)

    const mut = mutations(refetch);

    useEffect(() => {
        if (data && !error) mut.set(data)
        else console.log(error)
    }, [data, error, mut]);

    return {isPending, storage, mutations: {...mut}}
};

export default useStoreSync
