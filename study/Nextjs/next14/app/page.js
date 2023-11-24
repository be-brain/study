import Link from "next/link";

async function getData() {
    const res = await fetch("https://billions-api.nomadcoders.workers.dev/");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function Home() {
    const data = await getData();

    return (
        <main>
            {data.map((person) => (
                <li key={person.id}>
                    <Link href={`/person/${person.id}`}>{person.name}</Link>
                </li>
            ))}
        </main>
    );
}
