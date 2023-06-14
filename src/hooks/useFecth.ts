import {useEffect, useState} from 'react';

export default function (url: string) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>();
  const [error, setError] = useState();

  useEffect(() => {
    const controller = new AbortController();
    fetch(url, {signal: controller.signal})
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}
