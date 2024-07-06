import { AuthStatus } from "@/entities/AuthStatus";
import Loader1 from "@/components/Loading/Loader1";
import { UseGetUserID } from "@/Hook/customsHook/UseGetUserID";
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';
import Header1 from "@/components/Header/Header1";
import RequestMPopUpApi from "@/Dashboard/Request/RequestMPopUpApi";
import {useFetchRequestFriends} from '@/Hook/customsHook/useFetchRequestFriends';
import { UseAuthRedirect } from "@/Hook/customsHook/UseAuthRedirect";
import { CardProfil } from "./CardProfil";
const ProfileDetailID = () => {


    const router = useRouter();
    const { id } = router.query;
    const idNumber = Number(id);
    const userIDDto = UseGetUserID(idNumber);
    const status = UseAuthRedirect();
    const { button_requestfriendsAdd, show, requestFriendsDto, MessageApiR } = useFetchRequestFriends();


    if (status === AuthStatus.Authenticated) 
    {
        return (
                <div className="bg-pink-200 flex flex-col items-center justify-center h-screen sm:p-6">
                <Header1/>
                <RequestMPopUpApi
                show={show}
                requestFriendsDto={requestFriendsDto}
                MessageApiR={MessageApiR}
                />
                <CardProfil
                userIDDto={userIDDto}
                button_requestfriendsAdd={button_requestfriendsAdd}
                />
            </div>
        );
    }

    return <Loader1 />
}

export default ProfileDetailID