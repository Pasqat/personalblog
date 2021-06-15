import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from 'components/HighlightCode';
import { urlFor } from 'lib/api';

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => {
      return (
        <HighlightCode language={language}>
          {code}
          {/* NOTE: filename bugged if in <HighlightCode> scope wihth newer version */}
          <div className="code-filename">{filename}</div>
        </HighlightCode>
      );
    },
    image: ({ node: { alt, asset, position = 'center' } }) => {
      return (
        <div className={`blog-image blog-image-${position}`}>
          <img src={urlFor(asset).height(500).fit('max').url()} />
          <div className="image-alt">{alt}</div>
        </div>
      );
    },
  },
};

const BlogContent = ({ content }) => (
  <BlockContent
    imageOptions={{ w: 320, h: 240, fit: 'max' }}
    serializers={serializers}
    blocks={content}
  />
);

export default BlogContent;
