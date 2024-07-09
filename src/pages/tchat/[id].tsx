import Loader1 from "@/components/Loading/Loader1";
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';
import Head1 from "@/components/Header/Head1";
import AuthRedirect from '@/services/AuthRedirect';
import { CardTchat } from "@/components/Dashboard/tchatID/CardTchat";
import { UseGetUserID } from "@/Hook/customsHook/User/UseGetUserID";
import { UseFetchTchat } from "@/Hook/customsHook/Tchat/UseFetchTchat";
import { Header2 } from '@/components/Header/Header2';
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
            <div className="bg-pink-200 min-h-screen">
                <Head1/>
                <Header2
                link_href="/request"
                message="Mes matchs❤️"
                />
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
            </div>
            </AuthRedirect>
        );
}

export default Tchat;