import Link from "next/link";
import { urlFor } from "lib/api";

import { Card } from "react-bootstrap";

const CardItem = ({
  title,
  subtitle,
  date,
  image,
  author,
  link,
  mode = "normal",
}) => {
  return (
    // NOTE: href here serve as a default for placeholder card
    <Link href="#" {...link}>
      <Card className={`fj-card ${mode}`}>
        <div className="card-body-wrapper">
          <Card.Header className="d-flex flex-row">
            <img
              src={author?.avatar || "https://via.placeholder.com/150"}
              className="rounded-circle mr-3"
              height="50px"
              width="50px"
              alt="avatar"
            />
            <div>
              {mode === "placeholder" ? (
                <>
                  <Card.Title className="font-weight-bold mb-1">
                    Placeholder Name
                  </Card.Title>
                  <Card.Text className="card-date">Placeholder date</Card.Text>
                </>
              ) : (
                <>
                  <Card.Title className="font-weight-bold mb-1">
                    {author?.name}
                  </Card.Title>
                  <Card.Text className="card-date">{date}</Card.Text>
                </>
              )}
            </div>
          </Card.Header>
          <div className="view overlay">
            {mode === "placeholder" ? (
              <div className="image-placeholder" />
            ) : (
              <Card.Img
                src={urlFor(image).height(300).crop("center").fit("clip").url()}
                alt="Card image cap"
              />
            )}
          </div>
          <Card.Body>
            {mode === "placeholder" ? (
              <>
                <Card.Title className="card-main-title">
                  Placeholder title
                </Card.Title>
                <Card.Text>Placeholder subtitel</Card.Text>
              </>
            ) : (
              <>
                <Card.Title className="card-main-title">
                  {title.length > 40 ? title.substr(0, 40) + "..." : title}
                </Card.Title>
                <Card.Text>
                  {subtitle.length > 40
                    ? subtitle.substr(0, 40) + "..."
                    : subtitle}
                </Card.Text>
              </>
            )}
          </Card.Body>
        </div>
        {/*
<Link {...link}>
<a className="card-button">Read More</a>
</Link>
        */}
      </Card>
    </Link>
  );
};

export default CardItem;
