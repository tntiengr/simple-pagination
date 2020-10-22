import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./components/Post";
import Pagination from "./components/Pagination";

export default function App() {
  const BASE_URL = "https://nba-players.herokuapp.com";

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentListPlayer = players.slice(indexOfFirstPost, indexOfLastPost);

  function paginate(number) {
    setCurrentPage(number);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      const listPlayer = await axios.get(`${BASE_URL}/players-stats`);
      setPlayers(listPlayer.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Post players={currentListPlayer} loading={loading} />
      <Pagination
        paginate={paginate}
        postPerPage={postPerPage}
        totalPost={players.length}
      />
    </>
  );
}
