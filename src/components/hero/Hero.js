import React from "react"
import { Jumbotron } from "react-bootstrap"

//import custom styles
import "./hero.css"
import SocialRow from "../SocialRow/SocialRow"

const Hero = () => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <h1>Sean Coverdill : Front End Developer</h1>
      <br />
      <h3>
        Self-taught developer using Javascript, Node.js, React.js and Gatsby.js to
        design and develop responsive websites.
      </h3>
      <p>Have a project you'd like to discuss?</p>
      <p>
        Let's chat{" "}
        <a href="mailto:seancoverdill@gmail.com">
          <span style={{ color: "blueviolet" }}>seancoverdill@gmail.com</span>
        </a>
      </p>
    </div>
    <div>
      <SocialRow />
    </div>
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
}

export default Hero
