import { useState } from "react";
import { Row, Button } from "react-bootstrap";

import { getPaginatedBlogs } from "lib/api";
import { useGetBlogPages } from "actions/pagination";
import PageLayout from "components/PageLayout";
import AuthorIntro from "components/AuthorIntro";
import FilteringMenu from "components/FilteringMenu";
import PreviewAlert from "components/PreviewAlert";

export default function Home({ blogs, preview }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });

  const { pages, isLoadingMore, isReachingEnd, loadMore } = useGetBlogPages({
    blogs,
    filter,
  });

  return (
    <PageLayout>
      {preview && <PreviewAlert />}
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          setFilter({ ...filter, [option]: value });
        }}
      />
      <hr />
      <Row className="mb-5 justify-content-md-center">{pages}</Row>
      <div style={{ textAlign: "center" }}>
        <Button
          size="lg"
          onClick={loadMore}
          disabled={isReachingEnd || isLoadingMore}
          variant="outline-secondary"
        >
          {isLoadingMore
            ? "..."
            : isReachingEnd
            ? "No more blogs"
            : "More Blogs"}
        </Button>
      </div>
    </PageLayout>
  );
}

// this function is called only during build time (server side)
// Provide props to your page, used to create a `static page`
export async function getStaticProps({ preview = false }) {
  const blogs = await getPaginatedBlogs({ offset: 0, date: "desc" });
  return {
    props: {
      blogs,
      preview,
    },
    revalidate: 1,
  };
}
