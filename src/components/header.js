import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import Link from './Link';

function randomColorFromDate() {
  const rnd = Date.now()
    .toString()
    .slice(-1);
  const colors = [
    `gray`,
    `red`,
    `orange`,
    `yellow`,
    `green`,
    `teal`,
    `blue`,
    `indigo`,
    `purple`,
    `pink`,
  ];
  return colors[rnd];
}

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-white">
      <div className="flex flex-wrap items-center justify-between mx-auto p-2 md:p-6">
        <Link
          className="flex items-center"
          color={randomColorFromDate()}
          decoration="line-through"
          shade="medium"
          to="/"
          variant="h1"
        >
          {site.siteMetadata.title}
        </Link>

        <button
          className="block md:hidden border border-gray flex items-center px-3 py-2 rounded text-gray-700"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/`,
              title: `Accueil`,
            },
            {
              route: `/artistes`,
              title: `Artistes`,
            },
          ].map((link) => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:ml-6"
              color="gray"
              decoration="underline"
              key={link.title}
              to={link.route}
              variant="h2"
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
