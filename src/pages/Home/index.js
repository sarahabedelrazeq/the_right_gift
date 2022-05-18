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
          </Row>
        </Container>
      </section>
    </Main>
  );
};

export default Home;
