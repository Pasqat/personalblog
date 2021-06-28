import { useEffect, useState } from "react";
import { Row, Col, Media, Image } from "react-bootstrap";

export default function AuthorIntro() {
  useEffect;
  const [closed, setClosed] = useState(true);

  return (
    <Row>
      {!closed ? (
        <Col>
          {/* AUTHOR INTRO STARTS */}
          <Media className="mb-4 admin-intro d-flex justify-content-between">
            <Image
              roundedCircle
              width={90}
              height={90}
              className="mr-3"
              src="https://avatars.githubusercontent.com/u/48988058?v=4"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5 className="font-weight-bold mb-0 mt-0">Hello Friends,</h5>
              <div className="welcome-text">
                <p>
                  This is a blog made in <strong>Nextjs</strong> with{" "}
                  <strong>Sanity</strong> as headless CMS and react-bootstrap
                  for UI.
                </p>
                <p>
                  My name is <em>Pasquale Matarrese</em> and I am an app and
                  front-end developer. I currently live in Italy with my wife
                  and our four cute dogs. I enjoy exploring new way to make
                  beautiful and easy-to-use web-app.
                </p>
                <p>
                  Currently I'm working with React, Nextjs, React Native,
                  Nodejs, Express, MongoDb, and I will be happy to help you if
                  you need a web solution for your needs.
                </p>
                <p>You can find me on:</p>
                <div>
                  <a href="https://www.github.com/pasqat">github</a>
                  {" | "}
                  <a href="https://www.facebook.com/pasqat">facebook</a>
                  {" | "}
                  <a href="https://www.linkedin.com/in/pasquale-matarrese/">
                    linkedin
                  </a>
                </div>
              </div>
            </Media.Body>
            <p className="clickable" onClick={() => setClosed(!closed)}>
              ⬆️
            </p>
          </Media>
          {/* AUTHOR INTRO ENDS */}
        </Col>
      ) : (
        <Col>
          <Media className="mb-4 admin-intro d-flex justify-content-between">
            <Image
              roundedCircle
              width={90}
              height={90}
              className="mr-3"
              src="https://avatars.githubusercontent.com/u/48988058?v=4"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5 className="font-weight-bold mb-0 mt-0">Hello Friends!</h5>
              <p className="welcome-text">You can find me on:</p>
              <div className="welcome-text">
                <a href="https://www.github.com/pasqat">github</a>
                {" | "}
                <a href="https://www.facebook.com/pasqat">facebook</a>
                {" | "}
                <a href="https://www.linkedin.com/in/pasquale-matarrese/">
                  linkedin
                </a>
              </div>
            </Media.Body>
            <p
              style={{ color: "#999" }}
              className="clickable"
              onClick={() => setClosed(!closed)}
            >
              click me ⬇️
            </p>
          </Media>
        </Col>
      )}
    </Row>
  );
}
