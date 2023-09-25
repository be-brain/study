import Image from "next/image";
import Link from "next/link";

async function getData() {
    const res = await fetch("http://localhost:3000/api/movies", {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const { results } = await res.json();
    return results;
}

export default async function Page() {
    const data = await getData();

    return (
        <main>
            <h1>Movies</h1>
            {data?.map((movie: any) => (
                <div key={movie.id}>
                    <Link
                        // href={`/movies/${movie.id}`}
                        href={{
                            pathname: `/movies/${movie.id}`,
                            query: {
                                id: movie.id,
                                title: movie.original_title,
                                poster: movie.poster_path,
                            },
                        }}
                        // as={`/movies/${movie.original_title}`}
                    >
                        <Image
                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                            width={100}
                            height={150}
                            alt="poster"
                            style={{
                                display: "inline",
                            }}
                        />
                        <h3
                            style={{
                                display: "inline",
                            }}
                        >
                            {movie.original_title}
                        </h3>
                    </Link>
                </div>
            ))}
        </main>
    );
}
