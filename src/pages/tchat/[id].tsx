import Loader1 from "@/components/Loading/Loader1";
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';
import Header1 from "@/components/Header/Header1";
import AuthRedirect from '@/services/AuthRedirect';
import { CardTchat } from "@/components/Dashboard/tchatID/CardTchat";
import { UseGetUserID } from "@/Hook/customsHook/User/UseGetUserID";
import { UseFetchTchat } from "@/Hook/customsHook/Tchat/UseFetchTchat";
const Tchat = () => {

    const router = useRouter();
    const { id } = router.query;
    const idNumber = Number(id);
    const userIDDto = UseGetUserID(idNumber);
    const { messageDto, UserAuthDto, isLoaderVisible, messageContent, setMessageContent, handleSendMessage, handleSendMessage2 } = UseFetchTchat(idNumber);

        return (
            <AuthRedirect
            LoadingComponent={<Loader1 />}
            isProtected={true}
            >
            <div className="bg-pink-200 flex flex-col items-center justify-center h-screen sm:p-6">
                <Header1/>

                <CardTchat
                userIDDto={userIDDto}
                messageDto={messageDto}
                UserAuthDto={UserAuthDto}
                isLoaderVisible={isLoaderVisible}
                messageContent={messageContent}
                setMessageContent={setMessageContent}
                handleSendMessage2={handleSendMessage2}
                handleSendMessage={handleSendMessage}
                >
                </CardTchat>

                <a
                    href={`/request`}
                    className="text-white bg-pink-400 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
                >
                    Voir mes matchs
                </a>
            </div>
            </AuthRedirect>
        );
}

export default Tchat;