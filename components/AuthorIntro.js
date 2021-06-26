import { Row, Col, Media, Image } from "react-bootstrap";

export default function AuthorIntro() {
  return (
    <Row>
      <Col md="8">
        {/* AUTHOR INTRO STARTS */}
        <Media className="mb-4 admin-intro">
          <Image
            roundedCircle
            width={64}
            height={64}
            className="mr-3"
            src="https://avatars.githubusercontent.com/u/48988058?v=4"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
            <p className="welcome-text">
              This is a blog made in Nextjs with Sanity as headless CMS and
              react-bootstrap for UI.
              <p>
                My name is Pasquale Matarrese and I am an app and front-end
                developer. I currently live in Italy with my wife and our four
                cute dogs. I enjoy exploring new way to make beautiful and
                easy-to-use web-app.
              </p>
            </p>
            <p className="welcome-text">
              Currently I'm working with React, Nextjs, React Native, Nodejs,
              Express, MongoDb, and I will be happy to help you if you need a
              web solution for your needs.
            </p>
            <p className="welcome-text">.</p>
          </Media.Body>
        </Media>
        {/* AUTHOR INTRO ENDS */}
      </Col>
    </Row>
  );
}
