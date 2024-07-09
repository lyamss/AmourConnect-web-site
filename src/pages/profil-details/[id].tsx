import Loader1 from "@/components/Loading/Loader1";
import { UseGetUserID } from "@/Hook/customsHook/User/UseGetUserID";
import 'tailwindcss/tailwind.css';
import { useRouter } from 'next/router';
import Head1 from "@/components/Header/Head1";
import RequestMPopUpApi from "@/components/Dashboard/Request/RequestMPopUpApi";
import {useFetchRequestFriends} from '@/Hook/customsHook/RequestMatch/useFetchRequestFriends';
import { CardProfil } from "@/components/Dashboard/profilDetails/CardProfil";
import AuthRedirect from '@/services/AuthRedirect';
import { Header2 } from '@/components/Header/Header2';

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
                <div className="bg-pink-200 min-h-screen">
                <Head1/>
                <Header2
                link_href='/welcome'
                message='Welcome 💝'
                />
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