import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "./nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "업데이트",
    description: "업뎃좀그만해라",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Nav />
                {children}
            </body>
        </html>
    );
}
