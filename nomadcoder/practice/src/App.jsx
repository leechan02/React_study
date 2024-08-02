import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState();
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/coins")
      .then((response) => response.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! ({coins?.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins?.map((coin, index) => (
          <li key={index}>{coin.name} ({coin.symbol})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
