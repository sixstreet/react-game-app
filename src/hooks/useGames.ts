import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    // Add initialPageParam here (assuming a sensible default value)
    initialPageParam: 1,
    // Add getNextPageParam function if needed
    getNextPageParam: (lastPage, allPages) => {
      // Implement logic to get the next page parameter
      // Return undefined if there are no more pages
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    // Add other options as needed
  });

export default useGames;
