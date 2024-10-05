import { useCallback, useState } from "react";
import {GetRequestFriendsDto } from "@/entities/GetRequestFriendsDto";
import { apiClient, ApiError } from "@/services/apiClient";

export const UseRequestFriends = () =>
{
    const [requestFriendsDto, setRequestFriendsDto] = useState<GetRequestFriendsDto | null>(null);
    const [MessageApiR, setMessageApiR] = useState<string | null>(null);
    const [BoolApiR, setBoolApiR] = useState<boolean | null>(null);


    const GetRequestFriends = useCallback(() => {
        apiClient.FetchData<{result: GetRequestFriendsDto}>("/RequestFriends/GetRequestFriends")
            .then(response => setRequestFriendsDto(response.result))
            .catch(() => setRequestFriendsDto(null))
    }, []);


    const RequestFriendsAdd = useCallback((Id_User :number) => {
        apiClient.FetchData<{success: boolean, message: string, result: GetRequestFriendsDto}>("/RequestFriends/AddRequest/" + Id_User, { method: 'POST' })
            .then(response => {
                setMessageApiR(response.message);
                setBoolApiR(response.success);
            })
            .catch(error => {
                if (error instanceof ApiError) {
                    setMessageApiR(error.message);
                    setBoolApiR(error.success);
                }
                setRequestFriendsDto(null);
            });
    }, []);
  

    const AcceptRequestFriends = useCallback((Id_User: number) => {
        apiClient.FetchData<{message: string, result: GetRequestFriendsDto}>("/RequestFriends/AcceptRequestFriends/" + Id_User, { method: 'PATCH' })
            .then(response => {
                setMessageApiR(response.message);
            })
            .catch(() => setRequestFriendsDto(null))
    }, []);

    return {
        AcceptRequestFriends,
        RequestFriendsAdd,
        GetRequestFriends,
        requestFriendsDto,
        MessageApiR,
        BoolApiR
    }
} 