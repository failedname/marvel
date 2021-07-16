import Header from "./Header";
import ListItem from "./listitem";
import Search from "./search";
import md5 from "md5";
import { publicKey, secrectkey, ts, url } from "./apikey";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [hero, setHero] = useState([]);

  useEffect(() => {
    const resData = async () => {
      await axios
        .get(url, {
          params: {
            ts: ts,
            apikey: publicKey,
            hash: md5(`${ts}${secrectkey}${publicKey}`),
          },
        })

        .then((json) => setHero(json.data.data));
    };

    resData();
  }, []);
  function newList() {
    const newL = async () => {
      await axios
        .get(url, {
          params: {
            ts: ts,
            apikey: publicKey,
            hash: md5(`${ts}${secrectkey}${publicKey}`),
            limit: 20,
            offset: hero.offset + 20,
          },
        })
        .then((json) => setHero(json.data.data));
    };
    newL();
  }
  function searchHandler(data) {
    const newDat = async () => {
      await axios
        .get(url, {
          params: {
            nameStartsWith: data,
            ts: ts,
            apikey: publicKey,
            hash: md5(`${ts}${secrectkey}${publicKey}`),
          },
        })
        .then((json) => setHero(json.data.data));
    };
    newDat();
  }

  return (
    <div>
      <Header></Header>
      <Search onUpdate={newList} searchHandler={searchHandler}></Search>
      <ListItem data={hero}></ListItem>
    </div>
  );
}

export default App;
