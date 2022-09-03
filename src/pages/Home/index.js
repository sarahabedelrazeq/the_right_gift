import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { addCategory, addTag } from "store/app";
// import { icons, images } from "../../assets";
import { Main } from "../../components/Layouts";
import {Slider} from "../../components";
import slides from "../../data/slides";
import { useLanguage, useTheme } from "../../hooks";
import { Link } from "react-router-dom";

const Home = () => {
  const language = useLanguage();
  const theme = useTheme();
  // const [category, setCategory] = useState({ en: "", ar: "" });
  // const [tag, setTag] = useState({ en: "", ar: "" });
  // const dispatch = useDispatch();

  // const addCategoryHand = () => {
  //   dispatch(addCategory(category));
  // };
  // const addTagHand = () => {
  //   dispatch(addTag({ category, tag }));
  // };

  return (
    <Main id="home_page">
      <section className="pt-5">
        <Container className="py-5">
          <Slider>
            {slides.map((slide, index) => (
              <div key={index}>
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
              <Link to="/getStart"
                style={{ color: theme.bg }}
                className="btn btn-primary w-100"
              >
                {language.startNow}
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section className="pt-5">
        <Container className="py-5">
          <Row className="justify-content-center">
            <Col xs={12}>
              <h2>category:</h2>
            </Col>
            <Col xs={6}>
              <label className="d-block h4 ">ar:</label>
              <input
                type="text"
                onChange={(e) =>
                  setCategory({ ...category, ar: e.target.value })
                }
              />
            </Col>
            <Col xs={6}>
              <label className="d-block h4 ">en:</label>
              <input
                type="text"
                onChange={(e) =>
                  setCategory({ ...category, en: e.target.value })
                }
              />
            </Col>
            <Col xs={12}>
              <button onClick={addCategoryHand}>submit</button>
            </Col>
            <hr className="mt-5" />
            <Col xs={12}>
              <h2>tag:</h2>
            </Col>
            <Col xs={6}>
              <label className="d-block h4 ">ar:</label>
              <input
                type="text"
                onChange={(e) => setTag({ ...tag, ar: e.target.value })}
              />
            </Col>
            <Col xs={6}>
              <label className="d-block h4 ">en:</label>
              <input
                type="text"
                onChange={(e) => setTag({ ...tag, en: e.target.value })}
              />
            </Col>
            <Col xs={12}>
              <button onClick={addTagHand}>submit</button>
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Container>
      </section> */}
    </Main>
  );
};

export default Home;
