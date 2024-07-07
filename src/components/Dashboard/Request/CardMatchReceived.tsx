import { Button_1Loading } from '@/components/Button/Button_1';
import { servicesTools } from '@/services/Tools';
import Image from 'next/image';
import Link from 'next/link';
import { GetRequestFriendsDto } from "@/entities/GetRequestFriendsDto";
export const CardMatchReceived = (props: {
    AcceptRequestFriends: (id: number) => void;
    receivedRequests: GetRequestFriendsDto[];
}) =>
{
    return (
        <div className="w-full md:w-1/3 p-4">
        <div className="twhitespace-nowrap px-4 py-2 font-medium text-gray-900">
            <h2 className="text-lg font-medium text-gray-900">Match reçues</h2>
        </div>

        <table className="w-full text-left divide-y divide-gray-200">
            <tbody className="divide-y divide-gray-200">
                { props.receivedRequests.length > 0 ? (
                props.receivedRequests.sort((a, b) => servicesTools.Tools.compareByProperty(a, b, 'date_of_request')).reverse().map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="ml-4">
                                    <Link href={`/profil-details/${item.idUserIssuer}`}>
                                        <div className="text-sm font-medium text-gray-900">{item.userIssuerPseudo}</div>
                                        <div className="mb-4 sm:mb-0">
                                            {item.userIssuerSex === 'F' && !item.userIssuerPictureProfile && (
                                                <Image src="/assets/images/femme_anonyme.png" width="50" height="50" alt={item.userIssuerPseudo} className="rounded-full border-4 border-pink-500" />
                                            )}
                                            {item.userIssuerSex === 'M' && !item.userIssuerPictureProfile && (
                                                <Image src="/assets/images/homme_bg.png" width="50" height="50" alt={item.userIssuerPseudo} className="rounded-full border-4 border-blue-500" />
                                            )}
                                            {item.userIssuerPictureProfile && (
                                                <Image src={`data:image/jpeg;base64,${item.userIssuerPictureProfile}`} width="50" height="50" alt={item.userIssuerPseudo} className="rounded-full border-4 border-pink-500" />
                                            )}
                                        </div>
                                        <div className="text-sm text-gray-500">Date demande {new Date(item.date_of_request).toLocaleString()}</div>
                                    </Link>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                           <Button_1Loading
                            onClick={() => props.AcceptRequestFriends(item.idUserIssuer)}
                            title="Accepter"
                            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
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