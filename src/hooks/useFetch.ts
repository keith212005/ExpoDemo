import { useEffect, useState } from "react";

// THRID PARTY IMPORTS
import axios from "axios";

export const useFetch = (url: string) => {
  const [data, setData]: any = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [url]);

  const reFetch = () => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  return { data, loading, error, reFetch };
};
