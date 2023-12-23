import { useQuery } from "@tanstack/react-query";
import platforms from "../assets/data/platforms";
import apiClient, { FetchResponse } from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents')
// const usePlatforms = () => ({data: platforms, isLoading: false, error: null})
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((resp) => resp.data),
    staleTime: 24 * 60 * 60 * 1000, // 24hours
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
