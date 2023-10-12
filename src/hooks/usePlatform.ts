import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data: plaforms } = usePlatforms();
  return plaforms?.results.find((p) => p.id === id);
};

export default usePlatform;
