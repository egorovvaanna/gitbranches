export interface People {
  id: string;
  name: string;
  homeworld: {
    name: String;
  };
  filmConnection: {
    films: {
      title: String;
      id: string;
    };
  };
}


export interface Edges {
  node: People;
}


export interface PeopleAll {
  allPeople: {
    edges: Edges[];
    pageInfo: {
        endCursor: string
        hasNextPage: boolean
    }
  };
}

export interface ActorType{
  person: {

    id: string;
    name: string;
    gender: string;
    filmConnection: {
      id: string;
      title: string;
      director: string;
      releaseDate: string
    }
  }
}