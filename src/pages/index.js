import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Link from '../components/Link';
// import catAndHumanIllustration from '../images/cat-and-human-illustration.svg';

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]} title="🎙️" />

      <section className="text-center">
        <ul>
          {data.allStrapiArtist.edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={`/${node.id}`} variant="h3">
                {node.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArtist {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
