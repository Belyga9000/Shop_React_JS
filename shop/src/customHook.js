import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

export const useGraphQl = (query) => {
  const [queryData, setQueryData] = useState([]);
  const [queryError, setQueryError] = useState([]);
  const { data, loading, error } = useQuery(query);

  useEffect(() => {
    if (!loading && !error) {
      setQueryData(data);
    }
    if (error) {
      setQueryError(error.message);
    }
  }, [data]);

  return queryData;
};
