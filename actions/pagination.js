import { useSWRPages } from 'swr';
import { useGetBlogs } from 'actions';

import { Col } from 'react-bootstrap';

import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';
import { useEffect } from 'react';

export const useGetBlogPages = ({ blogs, filter }) => {
  useEffect(() => {
    window.__pagination__init = true;
  }, []);

  return useSWRPages(
    'index-page',
    ({ offset, withSWR }) => {
      let initialData = !offset && blogs;

      if (typeof window !== 'undefined' && window.__pagination__init) {
        initialData = null;
      }

      const { data: paginatedBlogs } = withSWR(
        useGetBlogs({ offset, filter }, initialData)
      );

      if (!paginatedBlogs) {
        return 'loading...';
      }

      return paginatedBlogs.map((blog) =>
        filter.view.list ? (
          <Col key={`${blog.slug}-list`} md="9">
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
      );
    },
    // NOTE: here you will compute offset that will get passed into
    // the previous (above) callback functions
    // SWR : data you will get from 'withSWR' function
    // index: number of current page
    (SWR, index) => {
      if (SWR.data && SWR.data.length === 0) {
        return null;
      }
      return (index + 1) * 3;
    },
    [filter] // NOTE: dependency needed to re-execute and rerender
  );
};
