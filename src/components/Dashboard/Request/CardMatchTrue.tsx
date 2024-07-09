import Image from 'next/image';
import Link from 'next/link';
import { GetRequestFriendsDto } from "@/entities/GetRequestFriendsDto";
import { GetUserDto } from '@/entities/GetUserDto';


export const CardMatchTrue = (props: {
    friends: GetRequestFriendsDto[];
    UserAuthDto: GetUserDto | null
}) =>
{
    return (
        <div className="w-full md:w-1/3 p-4">
            <div className="flex items-center justify-between px-4 py-2 font-medium text-gray-900">
            <h2 className="text-lg font-medium text-gray-900"><strong>Matchs💞</strong></h2>
        </div>

        <table className="w-full text-left divide-y divide-gray-200">
            <tbody className="divide-y divide-gray-200">
                { props.friends.length > 0 ? (
                props.friends.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="ml-4">
                                    <Link href={`/profil-details/${item.idUserIssuer === props.UserAuthDto?.id_User ? item.id_UserReceiver : item.idUserIssuer}`}>
                                        <div className="text-sm font-medium text-gray-900">{item.userIssuerPseudo === props.UserAuthDto?.pseudo ? item.userReceiverPseudo : item.userIssuerPseudo}</div>
                                        <div className="mb-4 sm:mb-0">
                                            {item.idUserIssuer !== props.UserAuthDto?.id_User && item.userIssuerSex === 'F' && !item.userIssuerPictureProfile && (
                                                <Image src="/assets/images/femme_anonyme.png" width="50" height="50" alt={item.userIssuerPseudo} className="rounded-full border-4 border-pink-500" />
                                            )}
                                            {item.idUserIssuer !== props.UserAuthDto?.id_User && item.userIssuerSex === 'M' && !item.userIssuerPictureProfile && (
                                                <Image src="/assets/images/homme_bg.png" width="50" height="50" alt={item.userIssuerPseudo} className="rounded-full border-4 border-blue-500" />
                                            )}
                                            {item.userIssuerPictureProfile && (
                                                <Image src={`data:image/jpeg;base64,${item.userIssuerPictureProfile}`} width="50" height="50" alt={item.userIssuerPseudo} className="rounded-full border-4 border-pink-500" />
                                            )}
                                            {item.id_UserReceiver !== props.UserAuthDto?.id_User && item.userReceiverSex === 'F' && !item.userReceiverPictureProfile && (
                                                <Image src="/assets/images/femme_anonyme.png" width="50" height="50" alt={item.userReceiverPseudo} className="rounded-full border-4 border-pink-500" />
                                            )}
                                            {item.id_UserReceiver !== props.UserAuthDto?.id_User && item.userReceiverSex === 'M' && !item.userReceiverPictureProfile && (
                                                <Image src="/assets/images/homme_bg.png" width="50" height="50" alt={item.userReceiverPseudo} className="rounded-full border-4 border-blue-500" />
                                            )}
                                            {item.userReceiverPictureProfile && (
                                                <Image src={`data:image/jpeg;base64,${item.userReceiverPictureProfile}`} width="50" height="50" alt={item.userReceiverPseudo} className="rounded-full border-4 border-pink-500" />
                                            )}
                                        </div>
                                    </Link>
                                    <Link href={`/tchat/${item.idUserIssuer === props.UserAuthDto?.id_User ? item.id_UserReceiver : item.idUserIssuer}`}>
                                        <Image
                                            src="/assets/svg/tchat_icon.svg"
                                            alt="Tchater"
                                            width={30}
                                            height={30}
                                        />
                                    </Link>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))
                )   : (
                    <div className="flex justify-center">
                    <p className="text-center text-black">Rien à afficher ici 🫠</p>
                </div>
                    )}
            </tbody>
        </table>
    </div>
    );
}