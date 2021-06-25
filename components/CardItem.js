import Link from 'next/link';
import { urlFor } from 'lib/api';

import { Card } from 'react-bootstrap';

const CardItem = ({
  title,
  subtitle,
  date,
  image,
  author,
  link,
  mode = 'normal',
}) => {
  return (
    // NOTE: href here serve as a default for placeholder card
    <Link href="#" {...link}>
      <div className="card-wrapper">
        <Card className={`fj-card ${mode}`}>
          <div className="view overlay">
            {mode === 'placeholder' ? (
              <div className="image-placeholder" />
            ) : (
              <Card.Img
                variant="top"
                src={urlFor(image).height(300).crop('center').fit('clip').url()}
                alt="Card image cap"
              />
            )}
          </div>
          <Card.Body>
            <div className="card-body-wrapper">
              {mode === 'placeholder' ? (
                <>
                  <Card.Text className="card-date">Placeholder date</Card.Text>
                  <Card.Title className="card-main-title">
                    Placeholder title
                  </Card.Title>
                  <Card.Text>Placeholder subtitel</Card.Text>
                </>
              ) : (
                <>
                  <Card.Text className="card-date">{date}</Card.Text>
                  <Card.Title className="card-main-title">
                    {title.length > 40 ? title.substr(0, 40) + '...' : title}
                  </Card.Title>
                  <Card.Text>
                    {subtitle.length > 60
                      ? subtitle.substr(0, 60) + '...'
                      : subtitle}
                  </Card.Text>
                </>
              )}
            </div>
          </Card.Body>
          {/*
<Link {...link}>
<a className="card-button">Read More</a>
</Link>
        */}
        </Card>
      </div>
    </Link>
  );
};

export default CardItem;
