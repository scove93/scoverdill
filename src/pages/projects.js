import React from "react"
import Layout from "../components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"
import MyJumbo from "../components/myJumbo/MyJumbo"
import ProjectCard from "../components/portProjectCard/ProjectCard"

import "./index.css"

import project1Picture from "../images/portfolio/cabin.png"
import project2Picture from "../images/portfolio/cake.png"
import project3Picture from "../images/portfolio/game.png"

/*######### PROJECT OBJECTS TEMPLATE################
import projectPicture from ""
const projectProject = {
  title: "",
  date: "",
  decription: "",
  sourceURL: "",
  hostedURL: "",
}
#####################################################
*/

//TODO: Make this into an array with objects and map through them instead down below.

//Project 1

const project1 = {
  title: "Literary Character Profiles",
  date: "2019-04-15",
  decription:
    "A Node.js website with Express and Pug that displays famous nineteenth century literary characters. ",
  sourceURL: "https://github.com/scove93/literary-character-app",
  hostedURL: "https://https://scove93.github.io/literary-character-app/",
}

//Project 2

const project2 = {
  title: "Weather Scanner",
  date: "2019-04-15",
  decription:
    "A React.js project that uses stateless functional components and openweathermap api",
  sourceURL: "https://github.com/scove93/weather-scanner/",
  hostedURL: "https://scove93.github.io/weather-scanner/",
}

//Project 3

const project3 = {
  title: "Tech News API",
  date: "2019-04-15",
  decription:
    "React.js app using newsapi.org",
  sourceURL: "https://codepen.io/scove93/pen/zXjJdz",
  hostedURL: "https://codepen.io/scove93/pen/zXjJdzm",
}

//Project 4

const project4 = {
  title: "Dream Dogs",
  date: "2019-03-03",
  decription:
    "Responsive flexbox small business landing page",
  sourceURL: "https://codepen.io/scove93/pen/rbNvOy",
  hostedURL: "https://codepen.io/scove93/pen/rbNvOy",
}

export default () => (
  <div className="App">
    <Layout>
      {/*########### MyJumbo PROPS ##########
    title: The title of the jumbotron
    body: The body of the Jumbotron
    */}
      <MyJumbo
        title={"Projects Portfolio"}
        body={"Sample work from Codepen"}
      />
      <hr />

      {/* TODO: Move the project objects into an array and map through them below. DRY is better. */}

      <Container style={{ marginTop: "2.5rem" }}>
        {/*/Props: 
      //imageSrcPath: the path to the image used 
      //title: The title of the card/App 
      //date: The date of the card
      //description: Short description of the card 
      //sourceURL: URL to the source code of the project 
      //hostedURL: URL to the hosted version of the app*/}
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={project1Picture}
              title={project1.title}
              date={project1.date}
              description={project1.decription}
              sourceURL={project1.sourceURL}
              hostedURL={project1.hostedURL}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectCard
              imageSrcPath={project2Picture}
              title={project2.title}
              date={project2.date}
              description={project2.decription}
              sourceURL={project2.sourceURL}
              hostedURL={project2.hostedURL}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  </div>
)
