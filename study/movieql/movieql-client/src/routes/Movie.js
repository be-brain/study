import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";

const GET_MOVIE = gql`
    query getMovie($movieId: ID!) {
        movie(id: $movieId) {
            id
            title
            vote_average
        }
    }
`;

const Movie = () => {
    const { id } = useParams();
    const { data, error, loading } = useQuery(GET_MOVIE, {
        variables: {
            movieId: id,
        },
    });
    if (error) return <h1>Something Wrong!</h1>;
    if (loading) return <h1>Loading...</h1>;

    return (
        <>
            {data && (
                <div>
                    <h3>{data.movie.title}</h3>
                    <p>vote : {data.movie.vote_average}</p>
                </div>
            )}
        </>
    );
};

export default Movie;
