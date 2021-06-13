import { Row, Col } from 'react-bootstrap';

import { getAllBlogs } from 'lib/api';

import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';

export default function Home({ blogs }) {
  debugger;
  return (
    <PageLayout>
      <AuthorIntro />
      <hr />
      <Row className="mb-5">
        {/* 
        <Col md="10">
        <CardListItem />
        </Col>
        */}
        {blogs.map((blog) => (
          <Col md="4">
            <CardItem title={blog.title} subtitle={blog.subtitle} />
          </Col>
        ))}
      </Row>
    </PageLayout>
  );
}

// this function is called only during build time (server side)
// Provide props to your page, used to creat a `static page`
export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
