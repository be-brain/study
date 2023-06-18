"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Detail(params: any) {
    const searchParams = useSearchParams();
    const searchTitle = searchParams.get("title");
    const searchPoster = searchParams.get("poster");

    console.log(params);

    return (
        <>
            <h1>Detail</h1>
            <h3>movie Id : {params.id}</h3>
            <p>Title : {searchTitle}</p>
            <Image
                src={`https://image.tmdb.org/t/p/original/${searchPoster}`}
                width={300}
                height={450}
                alt="poster"
                style={{
                    display: "inline",
                }}
            />
        </>
    );
}
