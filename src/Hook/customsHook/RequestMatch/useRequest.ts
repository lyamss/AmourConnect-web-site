import { UseRequestFriends } from "@/Hook/HookApi/UseRequestFriends";
import { UseAuth } from "@/Hook/HookApi/UseAuth";
import { AuthStatus } from "@/entities/AuthStatus";
import { GetRequestFriendsDto } from "@/entities/GetRequestFriendsDto";
import { useEffect, useState } from 'react';

export const useRequest = () =>
{
    
    const { requestFriendsDto,  AcceptRequestFriends, GetRequestFriends } = UseRequestFriends();
    const { status, UserAuthDto, UserGetConnected } = UseAuth();
    const [sentRequests, setSentRequests] = useState<GetRequestFriendsDto[]>([]);
    const [receivedRequests, setReceivedRequests] = useState<GetRequestFriendsDto[]>([]);
    const [friends, setFriends] = useState<GetRequestFriendsDto[]>([]);

    useEffect(() => {
        UserGetConnected();
    }, [UserGetConnected]);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        if (status === AuthStatus.Authenticated) {
            const fetchData = () => {
                GetRequestFriends();
                timer = setTimeout(fetchData, 10000);
            };
    
            fetchData();
        }

        return () => clearTimeout(timer);
    }, [status, GetRequestFriends]);


    useEffect(() => {
        if (Array.isArray(requestFriendsDto)) {
            const sent: GetRequestFriendsDto[] = [];
            const received: GetRequestFriendsDto[] = [];
            const friendsList: GetRequestFriendsDto[] = [];
            requestFriendsDto.forEach((item: GetRequestFriendsDto) => {
                if (item.idUserIssuer === UserAuthDto?.id_User && item.status === 0) {
                    sent.push(item);
                } else if (item.id_UserReceiver === UserAuthDto?.id_User && item.status === 0) {
                    received.push(item);
                } else if (item.status === 1) {
                    friendsList.push(item);
                }
            });
            setSentRequests(sent);
            setReceivedRequests(received);
            setFriends(friendsList);
        }
    }, [requestFriendsDto, UserAuthDto]);

    return { sentRequests, friends, receivedRequests, AcceptRequestFriends, UserAuthDto}
}