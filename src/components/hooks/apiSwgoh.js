import { useEffect, useState } from 'react';

const useSwgohApi = () => {
  const [apiSwgoh, setApiSwgoh] = useState(null);

  const fetchApiSwgoh = async () => {
    const response = await global.fetch('http://api.swgoh.gg/units/');
    const json = await response.json();
    setApiSwgoh(json);
  };

  useEffect(() => {
    fetchApiSwgoh();
  }, []);

  const repSwgoh = apiSwgoh ? apiSwgoh.data : [];

  return { apiSwgoh: repSwgoh };
};

export default useSwgohApi;
