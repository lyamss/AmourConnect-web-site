import Image from 'next/image';
import Link from "next/link";
import { motion } from 'framer-motion';
import { servicesTools } from "@/services/Tools";
import { GetUserDto } from "@/entities/GetUserDto";
import RequestMPopUpApi from "@/components/Dashboard/Request/RequestMPopUpApi";
import {GetRequestFriendsDto } from "@/entities/GetRequestFriendsDto";
import RMButton from '@/components/Dashboard/Request/RMButton';
const CardMatch = ( props: { 
    show: boolean, 
    requestFriendsDto: GetRequestFriendsDto | null,
    MessageApiR: string | null, 
    usersDto: GetUserDto | null, 
    button_requestfriendsAdd: (id_user: number) => void; 
    }) =>
{
    return (
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <RequestMPopUpApi
                show={props.show}
                requestFriendsDto={props.requestFriendsDto}
                MessageApiR={props.MessageApiR}
                />
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                {Array.isArray(props.usersDto) && props.usersDto.length > 0 ? (
                    props.usersDto.map((account: GetUserDto) => (
                        <motion.div
                            key={account.id_User}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center space-y-4 p-4 border border-gray-300 rounded-lg dark:border-gray-700 md:space-y-6 md:p-6 sm:w-full"
                        >
                            {account.sex === "F" && !account.profile_picture && (
                                <Image
                                    src="/assets/images/femme_anonyme.png"
                                    width="100"
                                    height="100"
                                    alt={account.pseudo}
                                    className="rounded-full md:w-20 md:h-20"
                                />
                            )}
                            {account.sex === "M" && !account.profile_picture && (
                                <Image
                                    src="/assets/images/homme_bg.png"
                                    width="100"
                                    height="100"
                                    alt={account.pseudo}
                                    className="rounded-full md:w-20 md:h-20"
                                />
                            )}
                            {account.profile_picture && (
                                <Image
                                    src={`data:image/jpeg;base64,${account.profile_picture}`}
                                    width="100"
                                    height="100"
                                    alt={account.pseudo}
                                    className="rounded-full md:w-20 md:h-20"
                                />
                            )}
                            <div className="text-xl font-medium text-black dark:text-white md:text-2xl">
                            <Link href={`/profil-details/${account.id_User}`}>
                                {account.sex === "F" ? "Mme " : "Mr "}
                                {account.pseudo}
                            </Link>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 md:text-base">
                                Âge : {servicesTools.Tools.ConvertingADateToAge(account.date_of_birth)} ans
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 md:text-base">
                                Description : {account.description}
                            </div>
                            <RMButton 
                            button_requestfriendsAdd={props.button_requestfriendsAdd}
                            id_User={account.id_User}
                            />
                        </motion.div>
                    ))
                ) : (
                    <div className="text-sm text-gray-500 dark:text-gray-400 md:text-base">
                        Aucun utilisateur à afficher à cause de vos critères (ville, âge, sexe...) modifier votre profil
                    </div>
                )}
            </div>
        </div>
    );
}

export default CardMatch