import { useEffect, useState } from "react";

export const useQuery = ({ fetcher, init = [] }) => {
  console.log("[useQueryUrl]", "entered", { fetcher, init });

  const [data, setData] = useState(init);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();

  const effect = async () => {
    console.log("[effect]");

    try {
      const data_ = await fetcher();
      console.log("[effect]", { data_ });

      setData(data_);
    } catch (error) {
      console.log("[effect]", { error });

      setIsError(true);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    effect();
  }, []);

  return { data, isLoading, isError, error };
};

export const useQueryUrl = ({ url, init = [], method = "GET" }) => {
  console.log("[useQueryUrl]", "entered", { url, init, method });

  return useQuery({
    fetcher: async () => {
      try {
        const response = await fetch(url, { method });
        console.log("[fetch]", { response });

        const data_ = await response.json();
        return data_;
      } catch (error) {
        console.log("[fetcher]", { error });
      }
    },

    init,
  });
};
