import React from 'react';
import styled from 'styled-components';
import { Components as MDComponents } from 'react-markdown';
import { HeadingComponent } from 'react-markdown/lib/ast-to-react';
import { Link } from 'react-router-dom';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const MarkdownWrapper = styled.article`
  display: flex;
  flex-direction: column;
  
  font-family: Noto Sans JP, sans-serif;

  color: white;
  padding: 1rem 1.5rem;
  padding-top: 2.8rem;
  width: 1300px;

  & *:is(h1, h2, h3, h4, h5, h6) {
    font-family: Poppins;
    line-height: 2;
  }

  @media (max-width: 1300px)  {
    align-items: flex-start;
    width: auto;
  }
`;

const HeadingLink = styled.a`
  color: white;
  text-decoration: none;
`;

function Heading(as: HeadingType): HeadingComponent {
  return ({ children, node, ...props }) => {
    const id =
      typeof children[0] === 'string'
        ? children[0]
            .toString()
            .toLowerCase()
            .normalize('NFD')
            .replace(/[^\w\s]/gi, '')
            .replace(/\s/g, '-')
        : undefined;

    return React.createElement(
      as,
      { ...props, id: id },
      <HeadingLink href={`#${id}`}>
        <>{children}</>
      </HeadingLink>
    );
  };
}

const MarkdownLink: MDComponents['a'] = ({ node, ...props }) => {
  if (props.href?.startsWith('http') || props.href?.startsWith('https')) {
    return (
      <a {...props} target={'_blank'} rel={'noreferrer'}>
        {props.children}
      </a>
    );
  }
  return (
    <Link {...props} to={props.href || '/'}>
      {props.children}
    </Link>
  );
};

const Blockquote = styled.blockquote`
  display: flex;
  flex-direction: column;
  background: #22232696;
  padding: 0.1rem 0.4rem;
  padding-left: 0;
  gap: 0.3rem;
  border-radius: 0.2rem;
  p {
    color: white;
    ::before {
      content: '※';
      margin: 0;
      display: inline-block;
      color: #ff9e1e;
      border-radius: 0.8rem;
      margin-right: 0.5rem;
    }
  }
  & a {
    color: #62ff58;
  }
  br {
    display: none;
  }
`;

export const Components: MDComponents = toComponents({
  h1: styled(Heading('h1'))`
    font-weight: 600;
    font-size: 2.2rem;
    margin-bottom: 2rem;
  `,
  h2: styled(Heading('h2'))`
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  `,
  h3: styled(Heading('h3'))`
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 2rem;
  `,
  h4: styled(Heading('h4'))`
    font-weight: 500;
    font-size: 1.1rem;
    margin: 0.5rem;
    margin-left: 0;
  `,
  h5: styled(Heading('h5'))`
    font-weight: 600;
    font-size: 1rem;
    margin: 0.5rem;
    margin-left: 0;
  `,
  p: styled.p`
    display: inline-block;
    line-height: 1.7;
  `,
  strong: styled.strong`
    font-weight: 500;
  `,
  ol: styled.ol`
    display: flex;
    flex-direction: column;
    list-style: decimal;

    gap: 0.5rem;
    padding-left: 1.8rem;
    margin-top: 0.4rem;
    padding-left: 1.8rem;
    li::marker {
      color: #bcbcbe;
    }
  `,
  ul: styled.ul`
    display: flex;
    flex-direction: column;
    list-style: disc;

    gap: 0.3rem;
    padding-left: 1.8rem;
    margin-top: 0.4rem;
    padding-left: 1.8rem;
    &.arrow {
      list-style: none;
      padding-left: 0;
      li {
        ::before {
          content: '▶';
          color: #52545a;
          font-size: 0.5rem;
          vertical-align: middle;
          display: inline-block;
          margin-bottom: 0.2rem;
          margin-right: 0.4rem;
        }
      }
    }
  `,
  li: styled.li`
    ::marker {
      color: #52545a;
    }
    color: #ffba61;
    line-height: 1.2;
  `,
  a: styled(MarkdownLink)`
    color: #77c5b9;
    font-weight: 500;
    font-family: Roboto, sans-serif;
    :hover {
      color: #4db8a8;
    }
  `,
  blockquote: (props: any) => {
    function values() {
      const childs = props.children[1].props.children as [];
      return childs.map((value, index) => {
        return typeof value === 'string' ? <p key={index}>{value}</p> : value;
      });
    }

    return <Blockquote>{values()}</Blockquote>;
  },
  code: styled.code`
    color: #ffffff;
    background-color: #333333cf;
    border-radius: 0.5rem;
    font-size: 0.98rem;
    padding: 0 0.3rem;
    font-family: 'Roboto Mono', monospace;
  `,
  table: styled.table`
    margin: 0.5rem;
    margin-bottom: 1rem;
  `,
  tr: styled.tr`
    text-align: center;
    line-height: 1.3;
  `,
});

type StyledComponents = {
  [key: string]: React.FC<any>;
};

function toComponents(components: StyledComponents) {
  return Object.entries(components)
    .map((value) => {
      var Component = value[1];
      return {
        [value[0]]: (props: any) => <Component {...props} />,
      };
    })
    .reduce((a1, a2) => ({ ...a1, ...a2 }));
}
