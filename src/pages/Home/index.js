import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { icons, images } from "../../assets";
import { Main } from "../../components/Layouts";
import Slider from "../../components/Slider";
import slides from "../../data/slides";
import { useLanguage, useTheme } from "../../hooks";

const Home = () => {
  const language = useLanguage();
  const theme = useTheme();

  return (
    <Main id="home_page">
      <section className="pt-5">
        <Container className="py-5">
          <Slider>
            {slides.map((slide, index) => (
              <div>
                <Row className="align-items-center" dir={language.dir}>
                  <Col
                    md={6}
                    style={{ color: theme.text, height: "300px" }}
   
                    className="d-flex align-items-center"
                  >
                    <Row>
                      <Col xs={12}>
                        <h1 className="">{slide.title[language.code]}</h1>
                      </Col>
                      <Col xs={12}>
                        <p>{slide.text[language.code]}</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    md={6}
                    style={{ height: "300px" }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <img
                      className="mw-100 mh-100"
                      src={slide.image}
                      alt={slide.title.en}
                    />
                  </Col>
                </Row>
              </div>
            ))}
          </Slider>
        </Container>
      </section>

      <section className="pt-5">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col lg={2} md={4} xs={6}>
              <button
                style={{ color: theme.bg }}
                className="btn btn-primary w-100"
              >
                {language.startNow}
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </Main>
  );
};

export default Home;
