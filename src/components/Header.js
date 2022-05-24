import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLanguage, useTheme } from "../hooks";
import { switchLanguage, switchTheme } from "../store/app";

const Header = () => {
  const language = useLanguage();
  const theme = useTheme();
  const dispatch = useDispatch();
  const themeName = useSelector((state) => state.app.theme);

  return (
    <header>
      <Container>
        <Row>
          <Col xs={6}>
            <img
              style={{ color: theme.text }}
              src="f"
              alt="Sarah Abed Elrazeq"
            />
          </Col>
          <Col xs={6}>
            <nav>
              <ul className="list-group list-group-horizontal bg-transparent justify-content-end">
                <li className="list-group-item bg-transparent border-0">
                  <Link style={{ color: theme.text }} to="#home">
                    {language.home}
                  </Link>
                </li>
                <li className="list-group-item bg-transparent border-0">
                  <Link style={{ color: theme.text }} to="#about">
                    {language.about}
                  </Link>
                </li>
                <li className="list-group-item bg-transparent border-0">
                  <button
                    className="btn p-0"
                    onClick={() =>
                      dispatch(switchLanguage(language.x_lang_short))
                    }
                    style={{ color: theme.text }}
                  >
                    {language.x_lang}
                  </button>
                </li>
                <li className="list-group-item bg-transparent border-0">
                  <button
                    className="btn p-0"
                    onClick={() =>
                      dispatch(
                        switchTheme(themeName === "light" ? "dark" : "light")
                      )
                    }
                    style={{ color: theme.text }}
                  >
                    <FontAwesomeIcon icon={faCircleHalfStroke} />
                  </button>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
