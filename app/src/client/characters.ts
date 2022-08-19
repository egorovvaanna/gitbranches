import { gql} from '@apollo/client';

export const GET_CHARACTERS = gql`
query Some{
  allPeople {

    totalCount
   people{
      name
      filmConnection{
        films{
          title
          releaseDate
        }
      }
    }
  }

}
`;

export const GET_FILM = gql`
query GetFilm($filmID: ID!) {
  film( filmID: $filmID) {
    title
  }
}
`