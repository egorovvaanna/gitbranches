import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetFilm($first: Int, $after: String) {
    allPeople(first: $first, after: $after) {
      edges {
        node {
          id
          name
          homeworld {
            name
          }
          filmConnection {
            films {
              title
              id
            }
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export const GET_FILM = gql`
  query GetFilm($filmID: ID!) {
    film(filmID: $filmID) {
      title
    }
  }
`;
