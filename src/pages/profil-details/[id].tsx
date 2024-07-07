import Loader1 from "@/components/Loading/Loader1";
import { UseGetUserID } from "@/Hook/customsHook/User/UseGetUserID";
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';
import Header1 from "@/components/Header/Header1";
import RequestMPopUpApi from "@/components/Dashboard/Request/RequestMPopUpApi";
import {useFetchRequestFriends} from '@/Hook/customsHook/RequestMatch/useFetchRequestFriends';
import { CardProfil } from "@/components/Dashboard/profilDetails/CardProfil";
import AuthRedirect from '@/services/AuthRedirect';
const ProfileDetailID = () => {


    const router = useRouter();
    const { id } = router.query;
    const idNumber = Number(id);
    const userIDDto = UseGetUserID(idNumber);
    const { button_requestfriendsAdd, show, requestFriendsDto, MessageApiR } = useFetchRequestFriends();


    return (
        <AuthRedirect
        LoadingComponent={<Loader1 />}
        isProtected={true}
        >
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
    </AuthRedirect>
    );
}

export default ProfileDetailID