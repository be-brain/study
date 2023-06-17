import Image from "next/image";

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
            <h1>Home</h1>
            {data?.map((movie: any) => (
                <div key={movie.id}>
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        width={100}
                        height={150}
                        alt="poster"
                    />
                    <h3>{movie.original_title}</h3>
                </div>
            ))}
        </main>
    );
}
