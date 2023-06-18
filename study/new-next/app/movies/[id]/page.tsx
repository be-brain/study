// export default function Detail({ params }: { params: { id: string } }) {
//     console.log(params);
//     return (
//         <>
//             <h1>Detail</h1>
//             <h3>movie Id : {params.id}</h3>
//         </>
//     );
// }

import Image from "next/image";

async function fetchData(params: { id: string }) {
    const res = await fetch(`http://localhost:3000/api/movies/${params.id}`, {
        cache: "no-store",
    });
    const data = await res.json();
    return data;
}

export default async function Page({
    params,
}: {
    params?: any;
    children?: React.ReactNode;
}) {
    const data = await fetchData(params);

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-medium">{data.original_title}</h1>
            <Image
                src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                width={500}
                height={500}
                alt="poster"
            />
        </div>
    );
}
