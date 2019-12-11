import React from 'react';
import { oneOf, string, func } from 'prop-types';
import clsx from 'clsx';
import { Link } from 'gatsby';

const colorShade = (shade) => {
  switch (shade) {
    case `light`:
      return `300`;
    case `medium`:
      return `500`;
    case `dark`:
      return `700`;
    default:
      return `800`;
  }
};

const linkVariant = (toRender, htmlTag, color, decoration, shade) => {
  const colorVariations = clsx(
    `text-${color}-${shade} hover:text-${color}-${Number(shade) -
      100} active:text-${color}-${Number(shade) + 100} hover:line-through`,
  );
  const textDecoration = clsx(decoration ? `hover:${decoration}` : `hover:no-underline`);
  switch (htmlTag) {
    case `h1`:
      return (
        <h1 className={`${colorVariations} ${textDecoration} tracking-wide text-3xl md:text-4xl`}>
          {toRender}
        </h1>
      );
    case `h2`:
      return (
        <h2 className={`${colorVariations} ${textDecoration} text-1xl md:text-3xl`}>{toRender}</h2>
      );
    case `h3`:
      return (
        <h2 className={`${colorVariations} ${textDecoration} text-1xl md:text-2xl`}>{toRender}</h2>
      );
    default:
      return <span>{toRender}</span>;
  }
};

function AppLink({ children, to, className, variant, color, shade, decoration }) {
  return (
    <Link className={className} to={to}>
      {linkVariant(children, variant, color, decoration, colorShade(shade))}
    </Link>
  );
}

AppLink.propTypes = {
  children: func.isRequired,
  to: string.isRequired,
  className: string,
  variant: oneOf([`h1`, `h2`, `h3`, `h4`, `h5`, `h6`]),
  color: string,
  shade: string,
  decoration: string,
};

export default AppLink;
