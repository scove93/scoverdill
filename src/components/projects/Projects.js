import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import "./projects.css"

import ProjectCard from "../portProjectCard/ProjectCard"

import image from "../../images/portfolio/cabin.png"

const Projects = () => (
  <React.Fragment>
    <Container fluid>
      <h3 style={{ marginBottom: "1rem" }}> Latest Projects</h3>
      {/*/Props: 
      //imageSrcPath: the path to the image used 
      //title: The title of the card/App 
      //date: The date of the card
      //description: Short description of the card 
      //sourceURL: URL to the source code of the project 
      //hostedURL: URL to the hosted version of the app*/}
      <ProjectCard
        imageSrcPath={image}
        title={"Literary Character Portfolio"}
        date={"2019-05-11"}
        description={
          "See more samples of my latest work."
        }
        sourceURL={"https://github.com/scove93/literary-character-app"}
        hostedURL={"https://scove93.github.io/literary-character-app/"}
      />
      <Link to="/projects" className="blueViolet">
        Go to Projects page ---->
      </Link>
    </Container>
  </React.Fragment>
)

export default Projects
