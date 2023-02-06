import React, { useEffect } from "react";
import Karakter from "./components/Karakter";
import Search from "./components/Search";
import { useState } from "react";
import axios from "axios";
import Loading from "./components/Loading";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [arama, setArama] = useState("");
  const [veri, setVeri] = useState();

  useEffect(() => {
    if (arama.length > 0) {
      setVeri(() => [
        ...veri.filter((item) =>
          item.name.toLowerCase().includes(arama.toLowerCase())
        ),
      ]);
    } else {
      axios
        .get("https://swapi.dev/api/people/")
        .then((response) => setVeri(() => response.data));
    }
  }, [arama]);

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      {!veri ? (
        <>
          <Loading></Loading>
        </>
      ) : (
        <>
          <Search setArama={setArama} arama={arama} veri={veri}></Search>
          <Karakter veri={veri}></Karakter>
        </>
      )}
    </div>
  );
};

export default App;
