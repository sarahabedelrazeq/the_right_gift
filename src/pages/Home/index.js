import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { icons, images } from "../../assets";
import { Main } from "../../components/Layouts";
import Slider from "../../components/Slider";
import { useFetch, useLanguage, useTheme } from "../../hooks";

const Home = () => {
  const language = useLanguage();
  const theme = useTheme();
  const [slder, sliderR] = useFetch("../../data/slider.json")

  return (
    <Main id="home_page">
      <Slider>
        <section className="pt-5">
          <Container className="py-5">
            <Row>
              <Col md={6}>test</Col>
              <Col md={6}>test</Col>
            </Row>
          </Container>
        </section>
        <section className="pt-5">
          <Container className="py-5">
            <Row>
              <Col lg={6}>test</Col>
              <Col lg={6}>test</Col>
            </Row>
          </Container>
        </section>
        <section className="pt-5">
          <Container className="py-5">
            <Row>
              <Col lg={6}>test</Col>
              <Col lg={6}>test</Col>
            </Row>
          </Container>
        </section>
      </Slider>
    </Main>
  );
};

export default Home;
