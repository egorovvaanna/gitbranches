import { FC } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ACTOR } from "../../client/characters";
import { ActorType } from "../../types/types";

export const Actor: FC = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<ActorType>(GET_ACTOR, {
    variables: { id },
  });
  if (loading) return <h2>loading...</h2>;
  if (error) return <h2>error..</h2>;
  return <>{data?.person.name}</>;
};
