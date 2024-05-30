import { useEffect, useState } from "react";

export const Data = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://admin-stage.youtunein.com/api/v1/enterprise-client-manager-dashboard/routine-plan/list?userId=1967"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div>
        <h1>Data:</h1>
        <h1>{data}</h1>
      </div>
    </>
  );
};
