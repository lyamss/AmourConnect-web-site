import Image from 'next/image';
import Link from 'next/link';
import { Button_1Loading } from '@/components/Button/Button_1';
import { GetMessageDto } from "@/entities/GetMessageDto";
import { LoaderCustombg } from '@/components/ui/LoaderCustombg';
import { servicesTools } from '@/services/Tools';
import { GetUserDto } from '@/entities/GetUserDto';

export const CardTchat = ( props: {
    userIDDto: GetUserDto | null;
    messageDto: GetMessageDto | null;
    UserAuthDto: GetUserDto | null;
    isLoaderVisible: boolean;
    messageContent: string;
    setMessageContent: (msg: string) => void;
    handleSendMessage2: () => void;
    handleSendMessage: () => void;
}, ) =>{
    return (
        <div className="w-full max-w-xl mx-auto p-14">
        <div className="h-[60vh] overflow-y-auto px-4"> {/* Chat container with scrollable feature */}
        <Link href={`/profil-details/${props.userIDDto?.id_User}`}>
        <div className="mb-4 sm:mb-0">
            {props.userIDDto?.sex === 'F' && !props.userIDDto.profile_picture && (
                <Image src="/assets/images/femme_anonyme.png" width="50" height="50" alt={props.userIDDto.pseudo} className="rounded-full border-4 border-pink-500" />
            )}
            {props.userIDDto?.sex === 'M' && !props.userIDDto.profile_picture && (
                <Image src="/assets/images/homme_bg.png" width="50" height="50" alt={props.userIDDto.pseudo} className="rounded-full border-4 border-blue-500" />
            )}
            {props.userIDDto?.profile_picture && (
                <Image src={`data:image/jpeg;base64,${props.userIDDto.profile_picture}`} width="50" height="50" alt={props.userIDDto.pseudo} className="rounded-full border-4 border-pink-500" />
            )}
        </div>
        </Link>
            {Array.isArray(props.messageDto) && props.messageDto.length > 0 ? (
                props.messageDto
                    .sort((a, b) => servicesTools.Tools.compareByProperty(a, b, 'date_of_request'))
                    .reverse()
                    .map((messagedto: GetMessageDto) => (
                        <div
                            key={messagedto.id_Message}
                            className={`flex items-center p-2 ${messagedto.idUserIssuer === props.UserAuthDto?.id_User
                                ? 'justify-end'
                                : 'justify-start'
                                }`}
                        >
                            <div
                                className={`mx-2 max-w-[70%] p-2 rounded-lg ${messagedto.idUserIssuer === props.UserAuthDto?.id_User
                                    ? 'bg-pink-400 text-white'
                                    : 'bg-gray-200'
                                    }`}
                            >
                                <a
                                    href={`/profil-details/${messagedto.idUserIssuer === props.UserAuthDto?.id_User 
                                        ? props.UserAuthDto?.id_User 
                                        : messagedto.idUserIssuer }`}
                                >
                                    <p>
                                        <strong>
                                            {messagedto.idUserIssuer === props.UserAuthDto?.id_User
                                                ? props.UserAuthDto?.pseudo
                                                : messagedto.userIssuerPseudo}
                                        </strong>
                                    </p>
                                </a>
                                <p>{messagedto.message_content}</p>
                                <p className="text-xs text-gray-500">
                                    {new Date(messagedto.date_of_request).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    ))
            ) : (
                <div className="flex justify-center">
                    <p className="text-center text-black">Rien à afficher ici 🫠</p>
                </div>
            )}
        </div>
        <div className="flex items-center p-2">
        {props.isLoaderVisible && <LoaderCustombg />}
            <input
                type="text"
                value={props.messageContent}
                onChange={(e) => props.setMessageContent(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      props.handleSendMessage2();
                    }
                  }}
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
            />
            <Button_1Loading
                onClick={() => {
                    props.handleSendMessage();
                }}                              
                title="Envoyer"
                className="ml-2 px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600"
            />
        </div>
    </div>
    );
}