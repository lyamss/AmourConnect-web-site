import 'tailwindcss/tailwind.css';
import Header1 from "@/components/Header/Header1";
import CardMatch from "@/Dashboard/Welcome/CardMatch";
import {useFetchRequestFriends} from '@/Hook/customsHook/useFetchRequestFriends';
import { HeaderLink } from "@/Dashboard/Welcome/HeaderLink"; 
import { useUsersToMatch } from "@/Hook/customsHook/useUsersToMatch";
import AuthRedirect from '@/services/AuthRedirect';
import Loader1 from "@/components/Loading/Loader1";
const WelcomePage = () => 
{
    const usersDto = useUsersToMatch();
    const { button_requestfriendsAdd, 
    show, 
    requestFriendsDto, 
    MessageApiR } = useFetchRequestFriends();

    return (
    <AuthRedirect
    LoadingComponent={<Loader1 />}
    isProtected={true}
    >
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Header1/>
                <HeaderLink/>
                <CardMatch
                    show={show}
                    requestFriendsDto={requestFriendsDto}
                    MessageApiR={MessageApiR}
                    usersDto={usersDto}
                    button_requestfriendsAdd={button_requestfriendsAdd}
                 />
            </div>
    </AuthRedirect>
    );
}

export default WelcomePage