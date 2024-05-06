import React, { useState, useEffect } from "react";
import { Token } from "./marquee.dto";

let API_URL = "https://arbitrum-api.gmxinfra.io/prices/tickers";
function MarqueeData() {
  const [data, setData] = useState<Token[]>([]);

  function fetchData() {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return data;
}

export default MarqueeData;
