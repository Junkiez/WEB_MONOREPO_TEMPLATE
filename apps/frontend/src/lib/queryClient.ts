import { QueryCache, QueryClient } from "@tanstack/react-query"

const queryClient = new QueryClient({
    queryCache: new QueryCache({}),
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5,
        },
    },
})

export default queryClient