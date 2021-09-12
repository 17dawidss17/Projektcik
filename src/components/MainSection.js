import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./MainSection.css";
import TextField from "@material-ui/core/TextField";

const MainSection = () => {
  return (
    <div className="main-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1> Zacznij przygodę z naszą firmą </h1>
      <p>Zadzwoń dzisiaj, zgarniesz 20% off na nasze usługi</p>
      <div className="main-btns">
        <form noValidate autoComplete="off">
          <TextField
            className="btns"
            id="outlined-basic"
            label="Wyszukaj"
            variant="outlined"
            color="primary"
          />
        </form>
      </div>
      <Button
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
      >
        Wyszukaj
      </Button>
    </div>
  );
};

export default MainSection;
