import React from "react";

import { useGlobalContext } from "../context/context";
import Movies from "./movies/Movies";
import Search from "./Search";

function Home() {
  return (
    <>
      <Search />
      <Movies />
    </>
  );
}

export default Home;
