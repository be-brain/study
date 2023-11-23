import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_ALL_MOVIES = gql`
    query getAllMovies {
        allMovies {
            id
            title
        }
        allUsers {
            id
            fullName
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
            {loading && <h1>Loading...</h1>}
            {error && <h1>Something Wrong!</h1>}
            <h3>Movie list</h3>
            {data?.allMovies.map((movie) => {
                return (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                );
            })}
            <h3>User list</h3>
            {data?.allUsers.map((user) => {
                return <li key={user.id}>{user.fullName}</li>;
            })}
        </>
    );
};

export default Movies;
