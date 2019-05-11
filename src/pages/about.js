import React from "react"
import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import MyButton from "../components/myButton/MyButton"

import "../fontawesome/css/all.min.css"
import "./index.css"

import { Container, Row, Col } from "react-bootstrap"

import CV from "/" //Import you CV file here!
import other from "/" //Import other downloadable here

export default () => (
  <div className="App">
    <Layout>
      <MyJumbo
        body={
          "Front End Developer with an interest in software architecture and design patterns."
        }
        body2={""}
        title={"About me."}
      />
      <hr />
      <Container fluid>
        <Row style={{ marginTop: "2rem", marginBottom: "1.5rem" }}>
          <MyButton text={"CV download"} URL={CV} />
          <MyButton text={"Other Downloadable"} URL={other} />
        </Row>
        <Row>
          <Col>
            <h3>Summary</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <br />
            <p>
              Freelance Developer seeking a full-time programming position
            </p>
          </Col>
        </Row>
        <hr />
        {/* This is the beginning of the career section*/}
        <Row>
          <Col>
            <h3>Programming Experience and Education</h3>
          </Col>
        </Row>
        {/* Position number 1*/}
        <Row>
          <Col>
            <h5>Javascript Fundamentals</h5>
          </Col>
        </Row>
        <Row>
          <Col>You Don't Know JS</Col>
          <Col>2019.03-2019.05</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
            </p>
          </Col>
        </Row>
        <hr />
        {/* SW intern Position*/}
        <Row>
          <Col>
            <h5>Software Engineer Intern</h5>
          </Col>
        </Row>
        <Row>
          <Col>Mip Mip Co LTD, Roadrunner City, US&A</Col>
          <Col>2014.06 - 2014.09</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              ullam eius nihil porro itaque nobis facere. Impedit eos minima
              porro. Culpa, laboriosam! Qui quo provident aperiam et ullam odio
              ex.
            </p>
          </Col>
        </Row>
        <hr />
        {/* This is the beginning of the education section*/}
        <Row>
          <Col>
            <h3>Education</h3>
          </Col>
        </Row>
        {/* Masters Degreee*/}
        <Row>
          <Col>
            <h5>MA English</h5>
          </Col>
        </Row>
        <Row>
          <Col>SUNY Buffalo, Buffalo, NY</Col>
          <Col>2016.08 - 2018.08</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              <strong>Specialization:</strong>
              <br /> 19th Century American Literature, Digital Media
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  </div>
)
