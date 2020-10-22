import React from "react";
import styled from "@emotion/styled";

function Post({ players, loading }) {
  return (
    <>
      {loading && <h2>Loading...</h2>}
      {!loading && (
        // eslint-disable-next-line no-undef

        <PlayerTable>
          <tr>
            <td>Name</td>
            <td>Team Name</td>
            <td>Rating</td>
          </tr>
          {players.map((item, index) => {
            return (
              <tr key={item.index}>
                <td>{item.name}</td>
                <td>{item.team_name}</td>
                <td>{item.player_efficiency_rating}</td>
              </tr>
            );
          })}
        </PlayerTable>
      )}
    </>
  );
}

export default Post;
const PlayerTable = styled.table`
  width: 100%;
  text-align: center;

  td {
    border: 1px solid #fff;
    padding: 0.5rem 1rem;
  }
`;
