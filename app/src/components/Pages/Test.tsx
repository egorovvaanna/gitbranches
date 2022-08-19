
import { useQuery } from "@apollo/client";
import { FC } from "react";
import { Link } from "react-router-dom";
import { GET_CHARACTERS} from "../../client/characters";
import { PeopleAll } from "../../types/types";

export const Test: FC = () => {
  const {  error, data, fetchMore, networkStatus } =
    useQuery<PeopleAll>(GET_CHARACTERS, {
      notifyOnNetworkStatusChange: true,
      variables: {
        first: 3,
        after: null,
      },
    });

  const handleFetch = () => {
    const endCursor = data?.allPeople.pageInfo.endCursor;

    fetchMore({
      variables: { after:  endCursor } ,
      updateQuery: (prevResult, { fetchMoreResult }) => {
        fetchMoreResult.allPeople.edges = [
          ...prevResult.allPeople.edges,
          ...fetchMoreResult.allPeople.edges,
        ];
        return fetchMoreResult
      },
    });
  };



  if (error) return <p>Error :(</p>;
  return (
    <div className="foo">
      <h1>Actors</h1>

      {data?.allPeople?.edges?.map((person) => (
        <Link to={`/actor/${person.node.id}`} className="actor" key={person.node.id}>

          {person.node.name}
        </Link>

      ))}
      {networkStatus === 3 ? <h3> loading  </h3> : ""}
      <button onClick={ handleFetch}> refetch </button>
    </div>
  );
};
