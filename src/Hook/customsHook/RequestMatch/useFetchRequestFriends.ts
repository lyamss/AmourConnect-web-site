import { UseRequestFriends } from "@/Hook/HookApi/UseRequestFriends";
import { useEffect, useState } from 'react';

export const useFetchRequestFriends = () =>
{
    const { RequestFriendsAdd, MessageApiR, BoolApiR, AcceptRequestFriends } = UseRequestFriends();
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (show && MessageApiR || BoolApiR) {
            const timer = setTimeout(() => {
                setShow(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [show, MessageApiR, BoolApiR]);


    const button_requestfriendsAdd = (id_user: number): void =>
    {
        RequestFriendsAdd(id_user);
        setShow(true);
    }

    const button_AcceptRequestFriend = (id_user: number): void =>
    {
        AcceptRequestFriends(id_user);
        setShow(true);
    }

    return { button_requestfriendsAdd, show, MessageApiR, BoolApiR, button_AcceptRequestFriend }
}