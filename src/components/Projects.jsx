import { Col, Container, Nav, Row, Tab, TabContent } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/img1.png"
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.PNG";


export const Projects = () => {
  const projects = [
  
    {
      title: "Events App",
      description: "This application is for registered users who can register, delete and add Clients to the Events. Project is done using React, NodeJS, Express, MySQL and Bootstrap.",
      imgUrl: projImg2,
    },
    {
      title: "Bootstrap Page Replica",
      description: "One of the firsts work, page replica using only HTML and CSS",
      imgUrl: projImg1,
    },
    {
      title: "Google Split Bill",
      description: "This project allows registered users to join groups and share bills. It's done using JavaScript, MySQL, HTML and CSS",
      imgUrl: projImg3,
    },
  ]


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>I have created a few projects using various technologies including back-end and servers. Please check out my Git to see all projects!</p>
            <Tab.Container id='projects-tabs' defaultActiveKey={"first"}>
              <Nav variant='pills' className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
              </Nav>
              <TabContent>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
              </TabContent>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}


