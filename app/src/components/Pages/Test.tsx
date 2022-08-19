//@ts-nocheck
import { useQuery, NetworkStatus } from "@apollo/client";
import { FC } from "react";
import { GET_CHARACTERS, GET_FILM } from "../../client/characters";
import { PeopleAll } from "../../types/types";

export const Test: FC = () => {
  const { loading, error, data, fetchMore, networkStatus } =
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
console.log(data?.allPeople.edges);
  if (networkStatus === NetworkStatus.refetch) return <> 'Refetching!' </>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div className="foo">
      <h1>Actors</h1>

      {data?.allPeople?.edges?.map((person) => (
        <div className="actor" key={person.node.id}>
          {" "}
          {person.node.name}
        </div>
      ))}
      <button onClick={ handleFetch}> refetch </button>
    </div>
  );
};
