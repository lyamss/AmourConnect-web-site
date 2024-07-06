import { UseRequestFriends } from "@/Hook/HookApi/UseRequestFriends";
import { useEffect, useState } from 'react';

export const useFetchRequestFriends = () =>
{
    const { RequestFriendsAdd, MessageApiR, requestFriendsDto } = UseRequestFriends();
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (show && MessageApiR || requestFriendsDto) {
            const timer = setTimeout(() => {
                setShow(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [show, MessageApiR, requestFriendsDto]);


    const button_requestfriendsAdd = (id_user: number): void =>
    {
        RequestFriendsAdd(id_user);
        setShow(true);
    }

    return { button_requestfriendsAdd, show, requestFriendsDto, MessageApiR }
}