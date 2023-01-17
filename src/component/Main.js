import React from "react";
import Header from "./Header";
import { Container } from "reactstrap";
import ServingStudent from "./ServingStudent";
import AreasOfServices from "./AreasOfServices";
import Story from "./Story";
import AimSet from "./AimSet";
import Featured from "./Featured";
import SkipRoom from "./SkipRoom";
import { InfoVideos } from "./InfoVideos";
import WhatSay from "./WhatSay";
import Footer from "./Footer";
import "../App.css";

const main = () => {
  return (
    <div>
      <Container fluid className="main-css">
        <Header></Header>
        <ServingStudent></ServingStudent>
        <AreasOfServices></AreasOfServices>
        <Story></Story>
        <AimSet></AimSet>
        <Featured></Featured>
        <SkipRoom></SkipRoom>
        <InfoVideos></InfoVideos>
        <WhatSay></WhatSay>
        <Footer></Footer>
        

      </Container>
    </div>
  );
};

export default main;
