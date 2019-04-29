import React, { useState, useEffect } from "react";
import "../App.css";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /*I'm sure this example can be improved on. Feel free to make a PR if you wish :)*/
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const [item] = data.results;
    setData(item);
    setLoading(false);
  };

  return { data, loading };
};

const UseEffectExample = props => {
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch("https://randomuser.me/api/");

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {loading ? <div>...loading</div> : data && <div>{data.name.first}</div>}
    </div>
  );
};

export default UseEffectExample;
