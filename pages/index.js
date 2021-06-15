import { Row, Col } from 'react-bootstrap';

import { getAllBlogs } from 'lib/api';

import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';
import FilteringMenu from 'components/FilteringMenu';
import { useState } from 'react';

export default function Home({ blogs }) {
  const [filter, setFilter] = useState({
    view: { list: 1 },
  });
  return (
    <PageLayout>
      <AuthorIntro />
      <FilteringMenu onChange={() => {}} />
      <hr />
      <Row className="mb-5">
        {blogs.map((blog) =>
          filter.view.list ? (
            <Col key={blog.slug} md="10">
              <CardListItem
                title={blog.title}
                subtitle={blog.subtitle}
                author={blog.author}
                date={blog.date}
                link={{
                  href: '/blogs/[slug]',
                  as: `/blogs/${blog.slug}`,
                }}
              />
            </Col>
          ) : (
            <Col key={blog.slug} md="4">
              {/*
               * we pass the object to link so if we need to refator
               * for example slug -> id, we only have to do it once
               * here
               */}
              <CardItem
                title={blog.title}
                subtitle={blog.subtitle}
                date={blog.date}
                image={blog.coverImage}
                author={blog.author}
                link={{
                  href: '/blogs/[slug]',
                  as: `/blogs/${blog.slug}`,
                }}
              />
            </Col>
          )
        )}
      </Row>
    </PageLayout>
  );
}

// this function is called only during build time (server side)
// Provide props to your page, used to create a `static page`
export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
