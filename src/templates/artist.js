import React from 'react';
import { Link, graphql } from 'gatsby';

const ArtistTemplate = ({ data }) => (
  <div>
    <h1 className="text-6xl text-teal-700">{data.strapiArtist.name}</h1>
    {/* <p>by <Link to={`/authors/${data.strapiArticle.author.id}`}>{data.strapiArticle.author.username}</Link></p> */}
    <ul>
      {data.strapiArtist.songs.map(({ lyrics, title }) => (
        <li className="flex flex-col">{title}</li>
      ))}
    </ul>
  </div>
);

export default ArtistTemplate;

export const query = graphql`
  query ArtistTemplate($id: String!) {
    strapiArtist(id: { eq: $id }) {
      name
      songs {
        lyrics
        title
      }
    }
  }
`;
