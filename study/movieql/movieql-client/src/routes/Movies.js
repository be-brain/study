import React, { useEffect, useState } from "react";
import gql from "graphql-tag";
import { useApolloClient } from "@apollo/client";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const client = useApolloClient();
    useEffect(() => {
        client
            .query({
                query: gql`
                    {
                        allMovies {
                            id
                            title
                        }
                    }
                `,
            })
            .then((data) => setMovies(data.data.allMovies));
    }, [client]);

    return (
        <div>
            {movies.map((movie) => {
                return <li key={movie.id}>{movie.title}</li>;
            })}
        </div>
    );
};

export default Movies;
