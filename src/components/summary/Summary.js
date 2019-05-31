import React from "react"

import { Container, Row, Col } from "react-bootstrap"

import "../../fontawesome/css/all.min.css"

import "./summary.css"

const Summary = () => (
  <Container className="content" fluid>
    <h3>Technology I use:</h3>
    <br />
    <Row className="text-center tech_icons">
      <Col>
        <i className="fab fa-js hover_effect" />
        <br />
        <span>JavaScript</span>
      </Col>
      <Col>
        <i className="fab fa-react hover_effect" />
        <br />
        <span>React.js</span>
      </Col>
      <Col>
        <i className="fab fa-html5 hover_effect" />
        <br />
        <span>HTML5</span>
      </Col>
      <Col>
        <i className="fab fa-css3 hover_effect" />
        <br />
        <span>CSS3</span>
      </Col>
    </Row>
    <br />

    <h4 className="goal_text text-center">
      As a Front End Developer, I'm interested in software architecture, specifically in modular and scalable design and development
    </h4>
    <Row style={{ marginTop: "1.8rem" }}>
      <Col>
        <h4 className="hover_effect">CSS Architecture</h4>
        <p>
          Experienced with a variety of CSS architecture systems, inluding BEM, CSS-in-JS, and CSS Modules
        </p>
      </Col>
      <Col>
        <h4 className="hover_effect">JAMstack and MERN stack</h4>
        <p>
          Proficient building scalable web apps with SSG's, such as Gatsby, deploying with Netlify, and headless CMS systems, including NetlifyCMS, Contentful, and Sanity.  
      </Col>
    </Row>
    <br />
    <Row>
      <Col>
        <h4 className="hover_effect">Component Driven Design</h4>
        <p>
          Well-versed in developing modular and scalable web apps with React and UI libaries, including Bit.
        </p>
      </Col>
  </Container>
)

export default Summary
