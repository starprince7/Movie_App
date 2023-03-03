import tmdb from "@/config/tmdbApi";
import { useEffect, useCallback, useState } from "react";

export const useTmdb = (urlPath: string) => {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const data = await tmdb?.get(urlPath);
    if (urlPath === "/movie/latest") {
      setData(data?.data);
    } else setData(data?.data.results);
  }, [urlPath]);

  useEffect(() => {
    fetchData();
  }, [urlPath]);

  return { data, reloadData: fetchData };
};
