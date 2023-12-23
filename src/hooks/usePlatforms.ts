import { useQuery } from "@tanstack/react-query";
import platforms from "../assets/data/platforms";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>("/platforms/lists/parent");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents')
// const usePlatforms = () => ({data: platforms, isLoading: false, error: null})
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24hours
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
