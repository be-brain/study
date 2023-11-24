import Image from "next/image";

export default async function Page({ params }) {
    const res = await fetch(
        `https://billions-api.nomadcoders.workers.dev/person/${params.id}`
    );
    const personInfo = await res.json();

    return (
        <main>
            <Image
                src={personInfo.squareImage}
                width={500}
                height={500}
                alt="face-photo"
                priority={false}
            />
            <h1>{personInfo.name}</h1>
            <p>country : {personInfo.country}</p>
        </main>
    );
}
