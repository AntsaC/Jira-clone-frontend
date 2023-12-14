import {QueryClient} from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            networkMode: "always",
            staleTime: Infinity
        }
    }
});

export default queryClient;