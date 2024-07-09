import Link from "next/link";
import Image from 'next/image';

export const Header2 = (props: {
    link_href: string;
    message: string; 
}) =>
{
    return (
        <header className="bg-pink-300 text-white p-4 flex justify-center items-center sticky top-0">
            <nav className="absolute left-0 flex justify-center items-center w-1/3">
            <ul className="flex justify-centertext-white">
                    <li>
                        <Link href={props.link_href} className=" hover:bg-fuchsia-500 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700 dark:focus:ring-fuchsia-800 md:text-base md:px-6 md:py-3">
                            <strong>{props.message}</strong>
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
        </header>
    );    
}