import React from 'react';

import rehypeRaw from 'rehype-raw';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import ReactMarkdown, { Options } from 'react-markdown'
import { MarkdownWrapper, Components } from './styles';

type MarkdownProps = Options;

const Markdown: React.FC<MarkdownProps> = (props) => {
  return (
    <MarkdownWrapper>
      <ReactMarkdown {...props} 
        components={Components}
        remarkPlugins={[remarkBreaks, remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        >
        {(props.children as string)}
      </ReactMarkdown>
    </MarkdownWrapper>
  );
};

export default Markdown; 