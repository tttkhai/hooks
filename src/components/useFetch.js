import { useEffect, useState, useRef } from "react";

function getFullName({ first, last }) {
  return `${first} ${last}`;
}
function useFetch(url) {
  const [values, setValues] = useState({ data: null, loading: true });
  const isCurrent = useRef(true);

  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const name = getFullName(res.results[0].name);
        console.log(name);
        if (isCurrent.current) {
            setValues({ data: name, loading: false });
        }
      });
  }, [url]);
  return values;
}

export default useFetch;
