import Link from 'next/link';

export const HeaderLink = () =>
{
    return (
        <div className="sticky top-0 z-10 flex justify-between w-full mb-4">
        <Link
            href={`/profile`}
            className="text-white bg-pink-400 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 md:text-base md:px-6 md:py-3"
        >
            Voir mon profil
        </Link>
        <Link
            href={`/request`}
            className="text-white bg-pink-400 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 md:text-base md:px-6 md:py-3"
        >
            Voir mes matchs
        </Link>
    </div>
    );
}