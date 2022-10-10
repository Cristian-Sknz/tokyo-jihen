import React from 'react';

import rehypeRaw from 'rehype-raw';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import ReactMarkdown, { Options } from 'react-markdown';
import { MarkdownWrapper, Components } from './styles';

const Markdown: React.FC<Options> = ({ ...props }) => {
  return (
    <ReactMarkdown
      {...props}
      components={{ ...Components, ...props.components }}
      remarkPlugins={[remarkBreaks, remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    >
      {props.children as string}
    </ReactMarkdown>
  );
};

export { MarkdownWrapper };
export default Markdown;
