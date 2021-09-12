import React, { useState } from "react";

function Licznik() {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "120vh",
      }}
    >
      <h1>Licznik</h1>
      <p>Kliknięto {count} razy </p>
      <button onClick={() => setCount(count + 1)}>
        Kliknij mnie, a zwiększysz o jeden
      </button>
      <button onClick={() => setCount(count - 1)}>
        Kliknij mnie, a zmniejszysz o jeden
      </button>
      <button onClick={() => setCount(0)}> Resecik</button>
    </div>
  );
}

export default Licznik;
