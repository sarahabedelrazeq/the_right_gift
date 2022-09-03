import { Main } from "components/Layouts";
import { useLanguage, useTheme } from "hooks";
import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Select from "react-select";
import categories from "../../data/categories";
import tags from "../../data/tags";

function GetStart() {
  const language = useLanguage();
  const theme = useTheme();
  const [step, setStep] = React.useState(1);
  const [category, setCategory] = React.useState({});
  const [fields, setFields] = React.useState({});
  const [options, setOptions] = React.useState({});

  console.log(JSON.stringify(fields));

  const onFieldChange = (tag) => {
    setFields({ ...fields, [category.en]: tag });
  };

  React.useEffect(() => {
    setCategory(
      categories.find((element) => element.id === step)
        ? categories.find((element) => element.id === step)
        : {}
    );
  }, [step]);

  React.useEffect(() => {
    setOptions(
      tags
        .filter((element) => element.category_id === category.id)
        .map((tag) => {
          return { value: tag.id, label: tag[language.code] };
        })
    );
  }, [category, language]);

  return (
    <Main id="home_page">
      <section className="pt-5">
        <Container className="py-5">
          <Row className="justify-content-center mb-5">
            <Col xs={12}>
              <h1>
                {categories.find((element) => element.id === step)
                  ? categories.find((element) => element.id === step)[
                      language.code
                    ]
                  : language["404"]}
              </h1>
            </Col>
            <Col xs={12}>
              <Select
                key={step}
                value={fields[category]}
                options={options}
                onChange={(e) => {
                  onFieldChange(e);
                }}
                isMulti
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={2} md={4} xs={6}>
              <Button
                onClick={() => setStep(step - 1)}
                style={{ color: theme.bg }}
                className="w-100"
              >
                {language.prev}
              </Button>
            </Col>
            <Col lg={2} md={4} xs={6}>
              <Button
                onClick={() => setStep(step + 1)}
                style={{ color: theme.bg }}
                className="w-100"
              >
                {language.next}
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </Main>
  );
}

export default GetStart;
