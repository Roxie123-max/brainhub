import { useState } from "react";

export default function App() {
  const [tab, setTab] = useState("home");
  const [xp, setXp] = useState(120);
  const [level, setLevel] = useState(1);

  const addXp = (amount) => {
    let newXp = xp + amount;
    let newLevel = level;

    if (newXp >= 200) {
      newLevel += 1;
      newXp = newXp - 200;
    }

    setXp(newXp);
    setLevel(newLevel);
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>🧠 BrainHub</h1>
      <p>Level: {level} | XP: {xp}/200</p>

      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        <button onClick={() => setTab("home")}>Home</button>
        <button onClick={() => setTab("study")}>Study</button>
        <button onClick={() => setTab("games")}>Games</button>
        <button onClick={() => setTab("market")}>Market</button>
      </div>

      {tab === "home" && (
        <div>
          <h2>Welcome 🚀</h2>
          <button onClick={() => addXp(20)}>Start Mission (+20 XP)</button>
        </div>
      )}

      {tab === "study" && (
        <div>
          <h2>📚 Study Zone</h2>
          <button onClick={() => addXp(10)}>Math (+10 XP)</button>
          <button onClick={() => addXp(10)}>Physics (+10 XP)</button>
        </div>
      )}

      {tab === "games" && (
        <div>
          <h2>🎮 Games</h2>
          <button onClick={() => addXp(15)}>Play Quiz (+15 XP)</button>
        </div>
      )}

      {tab === "market" && (
        <div>
          <h2>🛒 Market</h2>
          <button onClick={() => addXp(5)}>View Item (+5 XP)</button>
        </div>
      )}
    </div>
  );
      }
