import React from "react";
import SubHeader from "../components/SubHeader";
import MatchCard from "../components/MatchCard";

const Home = () => {
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
        <MatchCard />
      </div>
    </div>
  );
};

export default Home;
