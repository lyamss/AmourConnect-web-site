import 'tailwindcss/tailwind.css';
import { AuthStatus } from "@/entities/AuthStatus";
import Loader1 from "@/components/Loading/Loader1";
import Header1 from "@/components/Header/Header1";
import CardMatch from "./CardMatch";
import {useFetchRequestFriends} from '@/Hook/customsHook/useFetchRequestFriends';
import { UseAuthRedirect } from "@/Hook/customsHook/UseAuthRedirect";
import { HeaderLink } from "./HeaderLink"; 
import { useUsersToMatch } from "@/Hook/customsHook/useUsersToMatch";
const WelcomePage = () => {


    const status = UseAuthRedirect();
    const usersDto = useUsersToMatch();
    const { button_requestfriendsAdd, show, requestFriendsDto, MessageApiR } = useFetchRequestFriends();

    
    if (status === AuthStatus.Authenticated) 
    {
        return (
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
        );
    }

    return <Loader1 />
}

export default WelcomePage