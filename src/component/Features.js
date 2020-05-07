import React, { Component } from "react";
import "./Box.css";
import { Howl } from "howler";

// const Features = () => {
const audioClips = [
  {
    sound:
      "http://soundbible.com/mp3/Upper%20Cut-SoundBible.com-1272257235.mp3",
    label: "left hook",
  },
];
class Features extends Component {
  soundPlay = (src) => {
    const sound = new Howl({
      src,
      html5: true,
      loop: true,
    });
    sound.play();
  };

  renderButtonSound = () => {
    return audioClips.map((soundObj, index) => {
      this.soundPlay(soundObj.sound);
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Features</h1>
        <div className="grid">
          <div className="box box4"></div>
          <div className="box box1"></div>
          <div className="box box2"></div>
          <div className="box box3"></div>
        </div>
      </div>
    );
  }
}
export default Features;
// position: fixed; /* Set the navbar to fixed position */
// bottom: 0; /* Position the navbar at the bottom of the page */
// width: 100%; /* Full width */
