//import React from "react";
import SubHeader from "../components/SubHeader";
import MatchCard from "../components/MatchCard";
import App from "../components/playerslist";
import React, { useState } from "react";
import TwoColumns from "../components/two_columns";
import App1 from "../components/playerlist2";
const Home = () => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  // Define your handlePlayerSelection function
  const handlePlayerSelection = (playerId) => {
    if (selectedPlayers.includes(playerId)) {
      setSelectedPlayers(selectedPlayers.filter((id) => id !== playerId));
    } else {
      setSelectedPlayers([...selectedPlayers, playerId]);
    }
  };

  // Define your extra player data
  const extras = [
    { id: 101, name: "Extra Player 1" },
    { id: 102, name: "Extra Player 2" },
    // Add your extra player data here
  ];

  const playersData = [
    { id: 1, name: "Player 1" },
    { id: 2, name: "Player 2" },
    // Add your player data here
  ];
  return (
    <div className="page">
      <div id="fb-root" />
      <div
        id="page-wrapper"
        className="container"
        style={{ display: "inline-block" }}
      >
        <div
          id="shosh"
          className="ad-unit shosh-embed"
          style={{
            height: "0px",
            width: "980px",
            textAlign: "center",
            display: "block",
          }}
          render_on_load="true"
        />
        <span
          id="skin_left"
          className="ad-unit"
          style={{
            overflow: "hidden",
            position: "fixed",
            top: 0,
            left: "calc(50% - 635px)",
            marginRight: "3px",
            zIndex: -99,
          }}
        />


        <SubHeader />

        {/* <TwoColumns
          leftComponent={<App />}
          rightComponent={<App1 />}
        /> */}
        <App />
        <App1 />
        <MatchCard />

      </div>
    </div>
  );
};

export default Home;
