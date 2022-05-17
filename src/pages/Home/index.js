import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { icons, images } from "../../assets";
import { Main } from "../../components/Layouts";
import { useLanguage, useTheme } from "../../hooks";

const Home = () => {
  const language = useLanguage();
  const theme = useTheme();

  return (
    <Main id="home_page">
      <section className="pt-5">
        <Container className="py-5">
          <Row>
            <Col xs={12} className="text-center mb-4 mb-lg-4">
              <h1 style={{ color: theme.text }}>
                Designer, Front-end Developer & Mentor
              </h1>
            </Col>
            <Col xs={12} className="text-center mb-4 mb-lg-4">
              <p style={{ color: theme.text }}>
                I design and code beautifully simple things, and I love what I
                do.
              </p>
            </Col>
            <Col xs={12} className="">
              <Row className="justify-content-center">
                <Col md={3} xs={6}>
                  <img
                    className="w-100 rounded-circle"
                    src={images.me}
                    alt="my-pic"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-5">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col xs={12} className="text-center mb-4 mb-lg-4">
              <h3 style={{ color: theme.bg }}>
                Designer, Front-end Developer & Mentor
              </h3>
            </Col> 
            <Col xs={12} className="text-center mb-4 mb-lg-4">
              <p style={{ color: theme.bg }}>
                I design and code beautifully simple things, and I love what I
                do.
              </p>
            </Col>
            <Col lg={4} md={6} xs={8} className="text-center mb-4 mb-lg-4">
              <Container
                style={{ background: theme.bg }}
                className="rounded-3 py-4 py-lg-5"
              >
                <Row>
                  <Col xs={12} className="mb-4">
                    <h4 style={{ color: theme.text }}>
                      {" "}
                      {language.languages}{" "}
                    </h4>
                  </Col>
                </Row>
                <Row className="justify-content-center px-4">
                  <Col xs={4}>
                    <img className="w-100" alt="html" src={icons.html} />
                  </Col>
                  <Col xs={4}>
                    <img className="w-100" alt="js" src={icons.js} />
                  </Col>
                  <Col xs={4}>
                    <img className="w-100" alt="css" src={icons.css} />
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col lg={4} md={6} xs={8} className="text-center mb-4 mb-lg-4">
              <Container
                style={{ background: theme.bg }}
                className="rounded-3 py-4 py-lg-5"
              >
                <Row>
                  <Col xs={12} className="mb-4">
                    <h4 style={{ color: theme.text }}>
                      {" "}
                      {language.frameWorks}{" "}
                    </h4>
                  </Col>
                </Row>
                <Row className="justify-content-center px-4">
                  <Col xs={4}>
                    <img className="w-100" alt="react" src={icons.react} />
                  </Col>
                  <Col xs={4}>
                    <img className="w-100" alt="sass" src={icons.sass} />
                  </Col>
                  <Col xs={4}>
                    <img className="w-100" alt="redux" src={icons.redux} />
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col lg={4} md={6} xs={8} className="text-center mb-4 mb-lg-4">
              <Container
                style={{ background: theme.bg }}
                className="rounded-3 py-4 py-lg-5"
              >
                <Row>
                  <Col xs={12} className="mb-4">
                    <h4 style={{ color: theme.text }}> {language.tools} </h4>
                  </Col>
                </Row>
                <Row className="justify-content-center px-4">
                  <Col xs={4}>
                    <img className="w-100" alt="github" src={icons.github} />
                  </Col>
                  <Col xs={4}>
                    <img className="w-100" alt="adobe xd" src={icons.xd} />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    </Main>
  );
};

export default Home;
