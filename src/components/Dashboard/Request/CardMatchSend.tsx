import { servicesTools } from '@/services/Tools';
import Link from 'next/link';
import Image from 'next/image';
import { GetRequestFriendsDto } from "@/entities/GetRequestFriendsDto";

export const CardMatchSend = (props: {
    sentRequests: GetRequestFriendsDto[]
}) =>
{
    return (
        <div className="w-full md:w-1/3 p-4">
        <div className="twhitespace-nowrap px-4 py-2 font-medium text-gray-900">
            <h2 className="text-lg font-medium text-gray-900">Match envoyés</h2>
        </div>

        <table className="w-full text-left divide-y divide-gray-200">
            <tbody className="divide-y divide-gray-200">
                {props.sentRequests.length > 0 ? (
                props.sentRequests.sort((a, b) => servicesTools.Tools.compareByProperty(a, b, 'date_of_request')).reverse().map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="ml-4">
                                    <Link href={`/profil-details/${item.id_UserReceiver}`}>
                                        <div className="text-sm font-medium text-gray-900">{item.userReceiverPseudo}</div>
                                        <div className="mb-4 sm:mb-0">
                                            {item.userReceiverSex === 'F' && !item.userReceiverPictureProfile && (
                                                <Image src="/assets/images/femme_anonyme.png" width="50" height="50" alt={item.userReceiverPseudo} className="rounded-full border-4 border-pink-500" />
                                            )}
                                            {item.userReceiverSex === 'M' && !item.userReceiverPictureProfile && (
                                                <Image src="/assets/images/homme_bg.png" width="50" height="50" alt={item.userReceiverPseudo} className="rounded-full border-4 border-blue-500" />
                                            )}
                                            {item.userReceiverPictureProfile && (
                                                <Image src={`data:image/jpeg;base64,${item.userReceiverPictureProfile}`} width="50" height="50" alt={item.userReceiverPseudo} className="rounded-full border-4 border-pink-500" />
                                            )}
                                        </div>
                                        <div className="text-pink-700">{new Date(item.date_of_request).toLocaleString()}</div>
                                    </Link>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))
                ) :
                (
                    <div className="flex justify-center">
                    <p className="text-center text-black">Rien à afficher ici 🫠</p>
                </div>
                )
                }
            </tbody>
        </table>
    </div>
    );
}