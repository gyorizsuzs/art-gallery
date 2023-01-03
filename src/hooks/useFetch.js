import { useCallback, useEffect, useState } from "react";

const useFetch = (page, keyword) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [info, setInfo] = useState();
  const [records, setRecords] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
      await setLoading(true);
      const res = await fetch(
        `https://api.harvardartmuseums.org/object?apikey=d4804e23-2922-4e68-91cc-4d37a4a87d82&keyword=${keyword}&size=15&page=${page}&hasimage=1&sort=random`
      );
      const data = await res.json();
      await setInfo(data.info);
      await setRecords((records) =>
        records.concat(data.records).filter((record) => record.images[0])
      );
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [page, keyword]);

  useEffect(() => {
    setRecords([]);
  }, [keyword]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery, page]);

  return { loading, error, info, records };
};

export default useFetch;
