import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function List() {
  const [List, GetList] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        console.log("hello", response.data.results);
        GetList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="character-list">
      <h2>Stolarscy Lista Postaci</h2>
      {List.map((chars, id) => {
        return <CharacterCard key={id} chars={chars} />;
      })}
    </section>
  );
}
