import Loader1 from "@/components/Loading/Loader1";
import 'tailwindcss/tailwind.css';
import Head1 from "@/components/Header/Head1";
import { Header2 } from '@/components/Header/Header2';
import AuthRedirect from '@/services/AuthRedirect';
import { useRequest } from "@/Hook/customsHook/RequestMatch/useRequest";
import { CardMatchSend } from "@/components/Dashboard/Request/CardMatchSend";
import { CardMatchReceived } from "@/components/Dashboard/Request/CardMatchReceived";
import { CardMatchTrue } from "@/components/Dashboard/Request/CardMatchTrue";
import { useFetchRequestFriends } from "@/Hook/customsHook/RequestMatch/useFetchRequestFriends";

const RequestMatch = () => {

    const { sentRequests, friends, receivedRequests, UserAuthDto} = useRequest();

    const { show, 
        MessageApiR,
        BoolApiR, button_AcceptRequestFriend } = useFetchRequestFriends();

        return (
            <AuthRedirect
            LoadingComponent={<Loader1 />}
            isProtected={true}
            >
            <div className="min-h-screen bg-pink-200">
                <Head1/>
                <Header2
                link_href='/welcome'
                message='Welcome 💖'
                />
                <div className="w-full max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden md:flex md:flex-row">
                <CardMatchSend
                sentRequests={sentRequests}
                >
                </CardMatchSend>

                <CardMatchReceived
                receivedRequests={receivedRequests}
                AcceptRequestFriends={button_AcceptRequestFriend}
                MessageApiR={MessageApiR}
                BoolApiR={BoolApiR}
                show={show}
                >
                </CardMatchReceived>

                <CardMatchTrue
                friends={friends}
                UserAuthDto={UserAuthDto}
                >
                </CardMatchTrue>
                </div>
            </div>
            </AuthRedirect>
        );
}

export default RequestMatch