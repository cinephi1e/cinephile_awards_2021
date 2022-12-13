import React from "react";
import "./App.css";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import theater from "./theater.jpeg";
import Home from "./Home";
import CostumeDesign from "./nominated/CostumeDesign";
import CostumeDesignWinner from "./nominated/winner/CostumeDesignWinner";
import VisualEffect from "./nominated/VisualEffect";
import VisualEffectWinner from "./nominated/winner/VisualEffectWinner";
import Editing from "./nominated/Editing";
import EditingWinner from "./nominated/winner/EditingWinner";
import Cinematography from "./nominated/Cinematography";
import CinematographyWinner from "./nominated/winner/CinematographyWinner";
import OriginalScreenplay from "./nominated/OriginalScreenplay";
import OriginalScreenplayWinner from "./nominated/winner/OriginalScreenplayWinner";
import AdaptedScreenplay from "./nominated/AdaptedScreenplay";
import AdaptedScreenplayWinner from "./nominated/winner/AdaptedScreenplayWinner";
import Animation from "./nominated/Animation";
import AnimationWinner from "./nominated/winner/AnimationWinner";
import Animal from "./nominated/Animal";
import AnimalWinner from "./nominated/winner/AnimalWinner";
import NewDirector from "./nominated/NewDirector";
import NewDirectorWinner from "./nominated/winner/NewDirectorWinner";
import Kid from "./nominated/Kid";
import KidWinner from "./nominated/winner/KidWinner";
import Statue from "./nominated/Statue";
import StatueWinner from "./nominated/winner/StatueWinner";
import Chemistry from "./nominated/Chemistry";
import ChemistryWinner from "./nominated/winner/ChemistryWinner";
import Grammy from "./nominated/Grammy";
import GrammyWinner from "./nominated/winner/GrammyWinner";
import Emmy from "./nominated/Emmy";
import EmmyWinner from "./nominated/winner/EmmyWinner";
import Korean from "./nominated/Korean";
import KoreanWinner from "./nominated/winner/KoreanWinner";
import Dduck from "./nominated/Dduck";
import DduckWinner from "./nominated/winner/DduckWinner";
import Greenbook from "./nominated/Greenbook";
import GreenbookWinner from "./nominated/winner/GreenbookWinner";
import Nct from "./nominated/Nct";
import NctWinner from "./nominated/winner/NctWinner";
import Fashionking from "./nominated/Fashionking";
import FashionkingWinner from "./nominated/winner/FashionkingWinner";
import NamTaehyun from "./nominated/NamTaehyun";
import NamTaehyunWinner from "./nominated/winner/NamTaehyunWinner";
import Bagel from "./nominated/Bagel";
import BagelWinner from "./nominated/winner/BagelWinner";
import HanaTour from "./nominated/HanaTour";
import HanaTourWinner from "./nominated/winner/HanaTourWinner";
import SingleCandidate from "./nominated/SingleCandidate";
import SupportingActor from "./nominated/SupportingActor";
import SupportingActorWinner from "./nominated/winner/SupportingActorWinner";
import SupportingActress from "./nominated/SupportingActress";
import SupportingActressWinner from "./nominated/winner/SupportingActressWinner";
import Actor from "./nominated/Actor";
import ActorWinner from "./nominated/winner/ActorWinner";
import Actress from "./nominated/Actress";
import ActressWinner from "./nominated/winner/ActressWinner";
import Ensemble from "./nominated/Ensemble";
import EnsembleWinner from "./nominated/winner/EnsembleWinner";
import Director from "./nominated/Director";
import DirectorWinner from "./nominated/winner/DirectorWinner";
import Picture from "./nominated/Picture";
import PictureWinner from "./nominated/winner/PictureWinner";
import Title from "./Title";
import Credit_01 from "./Credit_01";
import Credit_02 from "./Credit_02";
import Credit_03 from "./Credit_03";
import TheEnd from "./TheEnd";
import NotFound from "./NotFound";

function App() {

  return (
    <div className="App" style={{
      backgroundImage: `url(${theater})`,
      backgroundSize: "cover",
      width: "100vw",
      height: "100vh",
      backgroundRepeat: "repeat",
      backgroundAttachment: "fixed",
      backgroundSize: "100% 100%",
    }}>
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/costumedesign" component={CostumeDesign} />
          <Route path="/costumedesign-winner" component={CostumeDesignWinner} />
          <Route path="/visualeffect" component={VisualEffect} />
          <Route path="/visualeffect-winner" component={VisualEffectWinner} />
          <Route path="/editing" component={Editing} />
          <Route path="/editing-winner" component={EditingWinner} />
          <Route path="/cinematography" component={Cinematography} />
          <Route path="/cinematography-winner" component={CinematographyWinner} />
          <Route path="/originalscreenplay" component={OriginalScreenplay} />
          <Route path="/originalscreenplay-winner" component={OriginalScreenplayWinner} />
          <Route path="/adaptedscreenplay" component={AdaptedScreenplay} />
          <Route path="/adaptedscreenplay-winner" component={AdaptedScreenplayWinner} />
          <Route path="/animation" component={Animation} />
          <Route path="/animation-winner" component={AnimationWinner} />
          <Route path="/animal" component={Animal} />
          <Route path="/animal-winner" component={AnimalWinner} />
          <Route path="/newdirector" component={NewDirector} />
          <Route path="/newdirector-winner" component={NewDirectorWinner} />
          <Route path="/kid" component={Kid} />
          <Route path="/kid-winner" component={KidWinner} />
          <Route path="/statue" component={Statue} />
          <Route path="/statue-winner" component={StatueWinner} />
          <Route path="/chemistry" component={Chemistry} />
          <Route path="/chemistry-winner" component={ChemistryWinner} />
          <Route path="/grammy" component={Grammy} />
          <Route path="/grammy-winner" component={GrammyWinner} />
          <Route path="/emmy" component={Emmy} />
          <Route path="/emmy-winner" component={EmmyWinner} />
          <Route path="/korean" component={Korean} />
          <Route path="/korean-winner" component={KoreanWinner} />
          <Route path="/dduck" component={Dduck} />
          <Route path="/dduck-winner" component={DduckWinner} />
          <Route path="/greenbook" component={Greenbook} />
          <Route path="/greenbook-winner" component={GreenbookWinner} />
          <Route path="/nct" component={Nct} />
          <Route path="/nct-winner" component={NctWinner} />
          <Route path="/fashionking" component={Fashionking} />
          <Route path="/fashionking-winner" component={FashionkingWinner} />
          <Route path="/namtaehyun" component={NamTaehyun} />
          <Route path="/namtaehyun-winner" component={NamTaehyunWinner} />
          <Route path="/bagel" component={Bagel} />
          <Route path="/bagel-winner" component={BagelWinner} />
          <Route path="/hanatour" component={HanaTour} />
          <Route path="/hanatour-winner" component={HanaTourWinner} />
          <Route path="/singlecandidate" component={SingleCandidate} />
          <Route path="/supportingactor" component={SupportingActor} />
          <Route path="/supportingactor-winner" component={SupportingActorWinner} />
          <Route path="/supportingactress" component={SupportingActress} />
          <Route path="/supportingactress-winner" component={SupportingActressWinner} />
          <Route path="/actor" component={Actor} />
          <Route path="/actor-winner" component={ActorWinner} />
          <Route path="/actress" component={Actress} />
          <Route path="/actress-winner" component={ActressWinner} />
          <Route path="/ensemble" component={Ensemble} />
          <Route path="/ensemble-winner" component={EnsembleWinner} />
          <Route path="/director" component={Director} />
          <Route path="/director-winner" component={DirectorWinner} />
          <Route path="/picture" component={Picture} />
          <Route path="/picture-winner" component={PictureWinner} />
          <Route path="/title" component={Title} />
          <Route path="/credit_01" component={Credit_01} />
          <Route path="/credit_02" component={Credit_02} />
          <Route path="/credit_03" component={Credit_03} />
          <Route path="/theend" component={TheEnd} />
          <Route><NotFound /></Route>
        </Switch>
      </Container>
    </div>
  );
}

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
font-family: 'DungGeunMo';
`;

export default App;
