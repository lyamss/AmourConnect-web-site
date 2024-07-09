import { GetUserDto } from "@/entities/GetUserDto";
import Image from 'next/image';
import { servicesTools } from "@/services/Tools";
import RMButton from '@/components/Dashboard/Request/RMButton';


export const CardProfil = ( props: {
    userIDDto: GetUserDto | null,
    button_requestfriendsAdd: (id_User : number) => void;
} ) =>
{
    return (
        <>
                        {props.userIDDto ? (
                    <>
                        <h1 className="text-3xl font-bold text-center sm:text-4xl text-fuchsia-500 p-14">Partenaire potentiel 😏💖</h1>
                        <div className="flex flex-col items-center justify-center sm:flex-row sm:space-x-4">
                            <div className="mb-4 sm:mb-0">
                                {props.userIDDto?.sex === 'F' && !props.userIDDto?.profile_picture && (
                                    <Image src="/assets/images/femme_anonyme.png" width="100" height="100" alt={props.userIDDto.pseudo} className="rounded-full border-4 border-fuchsia-500" />
                                )}
                                {props.userIDDto?.sex === 'M' && !props.userIDDto.profile_picture && (
                                    <Image src="/assets/images/homme_bg.png" width="100" height="100" alt={props.userIDDto.pseudo} className="rounded-full border-4 border-blue-500" />
                                )}
                                {props.userIDDto?.profile_picture && (
                                    <Image src={`data:image/jpeg;base64,${props.userIDDto.profile_picture}`} width="100" height="100" alt={props.userIDDto.pseudo} className="rounded-full border-4 border-fuchsia-500" />
                                )}
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="text-xl font-medium text-black dark:text-white">
                                    <p className="text-fuchsia-700"><span className="font-bold">{props.userIDDto.sex === 'F' ? 'Mme ' : 'Mr '}</span><span className="font-bold text-fuchsia-700">{props.userIDDto.pseudo}</span></p>
                                </div>
                                <p className="text-fuchsia-700">ID user : <span className="font-bold">{props.userIDDto.id_User}</span></p>
                                <p className="text-fuchsia-700">Description : <span className="font-bold">{props.userIDDto.description}</span></p>
                                <p className="text-fuchsia-700">Date de naissance : {new Date(props.userIDDto.date_of_birth).toLocaleDateString()}</p>
                                <div className="text-fuchsia-700">Age : {servicesTools.Tools.ConvertingADateToAge(props.userIDDto.date_of_birth)} ans</div>
                            </div>
                            <RMButton 
                            button_requestfriendsAdd={props.button_requestfriendsAdd}
                            id_User={props.userIDDto.id_User}
                            />
                        </div>
        </>
        ) : (
            <h1 className="text-3xl font-bold mb-8 text-center sm:text-4xl text-pink-500">Aucun profil trouvé...</h1>
        )}
        </>
    );
}