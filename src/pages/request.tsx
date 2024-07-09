import Loader1 from "@/components/Loading/Loader1";
import 'tailwindcss/tailwind.css';
import Head1 from "@/components/Header/Head1";
import { Button_link_welcome } from '@/components/Button/Button_link_welcome';
import AuthRedirect from '@/services/AuthRedirect';
import { useRequest } from "@/Hook/customsHook/RequestMatch/useRequest";
import { CardMatchSend } from "@/components/Dashboard/Request/CardMatchSend";
import { CardMatchReceived } from "@/components/Dashboard/Request/CardMatchReceived";
import { CardMatchTrue } from "@/components/Dashboard/Request/CardMatchTrue";

const RequestMatch = () => {

    const { sentRequests, friends, receivedRequests, AcceptRequestFriends, UserAuthDto } = useRequest();

        return (
            <AuthRedirect
            LoadingComponent={<Loader1 />}
            isProtected={true}
            >
            <div className="min-h-screen bg-pink-200 flex flex-col items-center justify-center sm:p-6">
                <Head1/>

                <div className="w-full max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden md:flex md:flex-row">
<CardMatchSend
sentRequests={sentRequests}
>
</CardMatchSend>

<CardMatchReceived
receivedRequests={receivedRequests}
AcceptRequestFriends={AcceptRequestFriends}
>
</CardMatchReceived>

<CardMatchTrue
friends={friends}
UserAuthDto={UserAuthDto}
>
</CardMatchTrue>
</div>
                <Button_link_welcome/>
            </div>
            </AuthRedirect>
        );
}

export default RequestMatch