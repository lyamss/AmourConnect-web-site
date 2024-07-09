import Link from "next/link";
import Image from 'next/image';

export const Header1 = () =>
{
    return (
        <header className="bg-pink-300 text-white p-4 flex justify-center items-center sticky top-0">
            <nav className="absolute left-0 flex justify-center items-center w-1/3">
            <ul className="flex justify-centertext-white">
                    <li>
                        <Link href="/profile" className=" hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 md:text-base md:px-6 md:py-3">
                            <strong>Edit profile 😘</strong>
                        </Link>
                    </li>
                </ul>
            </nav>
            <Image
                src="/favicon.ico"
                width="100"
                height="100"
                alt="logo AmourConnect"
                className="rounded-full md:w-10 md:h-10"
            />
            <nav className="absolute right-0 flex justify-center items-center w-1/3">
                <ul className="flex justify-centertext-white">
                    <li>
                        <Link href="/request" className=" hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 md:text-base md:px-6 md:py-3">
                        <strong>Matchs 💕</strong>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );    
}