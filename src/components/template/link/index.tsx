import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

export type LinkElementProps = LinkProps & React.RefAttributes<HTMLAnchorElement> & {
  external: boolean;
};

const LinkElement: React.FC<LinkElementProps> = (props) => {
  if (props.external) {
    return (
      <a {...props} 
        href={props.to as string} 
        target={'_blank'} 
        rel={'noreferrer'}>
        {props.children}
      </a>
    );
  }

  return <Link {...props} />;
};

export default LinkElement;