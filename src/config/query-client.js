import {QueryClient} from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            networkMode: "always"
        }
    }
});

export default queryClient;