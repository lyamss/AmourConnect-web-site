import { UseUser } from "@/Hook/HookApi/UseUser";
import { useEffect } from 'react';


export const UseGetUserID = (id_user: number) =>
{
    const { userIDDto, UserGetUserID } = UseUser();
    useEffect(() => {
        UserGetUserID(id_user);
    }, [UserGetUserID, id_user])

    return userIDDto
}