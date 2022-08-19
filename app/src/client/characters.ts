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

export const GET_ACTOR = gql`
  query GetActor($id: ID!) {
    person(id: $id) {
      name
      gender
      id
      filmConnection {
        films {
          title
          director
          releaseDate
        }
      }
    }
  }
`;
