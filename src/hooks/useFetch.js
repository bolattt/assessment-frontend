import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${API}${url}`)
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.statusText);
        }
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [url, API]);
  return { data, loading, error };
};

export default useFetch;
