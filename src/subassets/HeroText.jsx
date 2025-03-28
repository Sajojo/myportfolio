import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroText = () => {
  return (
    <div className="p-10">
      <h1 className="text-5xl">
        {" "}
        <span style={{ color: "#FFF", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["Hi there...", "I'm Jo", "How well do you know me?"]}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default HeroText;
