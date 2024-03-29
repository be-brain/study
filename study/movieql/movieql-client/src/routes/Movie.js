import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const GET_MOVIE = gql`
    query getMovie($movieId: ID!) {
        movie(id: $movieId) {
            id
            title
            overview
            poster_path
            vote_average
            isLiked @client
        }
    }
`;

const Movie = () => {
    const { id } = useParams();
    const {
        data,
        error,
        loading,
        client: { cache },
    } = useQuery(GET_MOVIE, {
        variables: {
            movieId: id,
        },
    });
    const onClickToggle = () => {
        // Fragment : Type의 일부
        cache.writeFragment({
            id: `MovieDetails:${id}`,
            fragment: gql`
                fragment MovieFragment on MovieDetails {
                    title
                    isLiked
                }
            `,
            data: {
                title: "오늘의 영화",
                isLiked: !data.movie.isLiked,
            },
        });
    };
    if (error) return <h1>Something Wrong!</h1>;
    if (loading) return <h1>Loading...</h1>;

    return (
        <Container>
            <Column>
                <Title>{loading ? "Loading..." : `${data.movie?.title}`}</Title>
                <Subtitle>⭐️ {data?.movie?.vote_average}</Subtitle>
                <button onClick={onClickToggle}>
                    {data?.movie?.isLiked ? "Unlike" : "👍"}
                </button>
                <Description>{data?.movie?.overview}</Description>
            </Column>
            <Image
                bg={`https://image.tmdb.org/t/p/original/${data?.movie.poster_path}`}
            />
        </Container>
    );
};

export default Movie;

const Container = styled.div`
    height: 100vh;
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
`;

const Column = styled.div`
    margin-left: 10px;
    width: 50%;
`;

const Title = styled.h1`
    font-size: 65px;
    margin-bottom: 15px;
`;

const Subtitle = styled.h4`
    font-size: 35px;
    margin-bottom: 10px;
`;

const Description = styled.p`
    font-size: 28px;
`;

const Image = styled.div`
    width: 25%;
    height: 60%;
    background-color: transparent;
    background-image: url(${(props) => props.bg});
    background-size: cover;
    background-position: center center;
    border-radius: 7px;
`;
