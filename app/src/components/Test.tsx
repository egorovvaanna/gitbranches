import { useQuery,NetworkStatus } from "@apollo/client";
import { FC } from "react";
import { GET_CHARACTERS, GET_FILM } from "../client/characters";

export const Test:FC=()=>{
const {loading, error, data, refetch, networkStatus} = useQuery(GET_CHARACTERS, {notifyOnNetworkStatusChange: true})
// console.log(data);

// const {loading, error, data} =useQuery(GET_FILM,{
//     variables: {filmID: 2}
// })
console.log(data);
if (networkStatus === NetworkStatus.refetch) return <> 'Refetching!' </>;
if (loading) return <p>Loading...</p>;
if (error) return <p>Error :(</p>;
    return(
        <div className="foo">
            Test Page
            {/* <button onClick={()=>refetch()}> refetch </button> */}
        </div>
    )
}