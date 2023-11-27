import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";

const GET_ALL_MOVIES = gql`
    query getAllMovies {
        allMovies {
            id
            title
            poster_path
        }
    }
`;

const Movies = () => {
    /* Imperative(명령형) code */
    // const [movies, setMovies] = useState([]);
    // const client = useApolloClient();
    // useEffect(() => {
    //     client
    //         .query({
    //             query: gql`
    //                 {
    //                     allMovies {
    //                         id
    //                         title
    //                     }
    //                 }
    //             `,
    //         })
    //         .then((data) => setMovies(data.data.allMovies));
    // }, [client]);

    /* Declarative(선언형) code */
    const { loading, data, error } = useQuery(GET_ALL_MOVIES);

    return (
        <>
            <Container>
                <Header>
                    <Title>Apollo Movies</Title>
                </Header>
                {error && <h1>Something Wrong!</h1>}
                {loading && <Loading>Loading...</Loading>}
                <MoviesGrid>
                    {data?.allMovies?.map((movie) => (
                        <PosterContainer key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>
                                <PosterBg
                                    background={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                />
                            </Link>
                        </PosterContainer>
                    ))}
                </MoviesGrid>
            </Container>
        </>
    );
};

export default Movies;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Header = styled.header`
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);
    height: 45vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Title = styled.h1`
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 20px;
`;

const Loading = styled.div`
    font-size: 18px;
    opacity: 0.5;
    font-weight: 500;
    margin-top: 10px;
`;

const MoviesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 25px;
    width: 60%;
    position: relative;
    top: -50px;
`;

const PosterContainer = styled.div`
    height: 400px;
    border-radius: 7px;
    width: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    background-color: transparent;
`;

const PosterBg = styled.div`
    background-image: url(${(props) => props.background});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
    border-radius: 7px;
`;
