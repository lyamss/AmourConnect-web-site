import { useCallback, useState } from "react";
import { AuthStatus } from "@/entities/AuthStatus";
import {GetUserDto } from "@/entities/GetUserDto";
import { apiClient, ApiError } from "@/services/apiClient";
import { servicesTools } from "@/services/Tools";
import {SetUserDto} from '@/entities/SetUserDto';
import { useRouter } from 'next/navigation';

export const UseAuth = () =>
{
    const [UserAuthDto, setUserAuthDto] = useState<GetUserDto | null>(null);
    const [UserRegisterDto, setUserRegisterDto] = useState<GetUserDto | null>(null);
    const [MessageApiAuth, setMessageApiAuth] = useState<string | null>(null);
    const router = useRouter();

    let status: AuthStatus;

    switch (UserAuthDto) 
    {
        case null:
          status = AuthStatus.Unauthenticated;
          break;
        default:
          status = AuthStatus.Authenticated;
          break;
    }

    const AuthLoginGoogle = useCallback(() => {
        window.location.href = servicesTools.Tools.GOOGLE_LOGIN_URL;
    }, []);


    const UserGetConnected = useCallback(() => {
        apiClient.FetchData<{message: string, result: GetUserDto}>("/User/GetUserConnected")
            .then(response => {
                    setUserAuthDto(response.result)
            })
            .catch(() => setUserAuthDto(null))
    }, []);


    const AuthRegister = useCallback((SetUserDto: SetUserDto) => {
        apiClient.FetchData<GetUserDto>("/Authentification/register", { json: SetUserDto })
            .then(response => {
                    router.push("/welcome");
            })
            .catch(error => {
                if (error instanceof ApiError) {
                    setMessageApiAuth(error.message);
                }
                setUserRegisterDto(null)
            });
    }, []);

    return {
        UserGetConnected,
        AuthLoginGoogle,
        AuthRegister,
        UserAuthDto,
        MessageApiAuth,
        UserRegisterDto,
        status
    }
}