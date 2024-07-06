import { UseAuth } from "@/Hook/HookApi/UseAuth";
import { useEffect } from 'react';
import { AuthStatus } from "@/entities/AuthStatus";
import { useRouter } from 'next/navigation'


export const UseAuthRedirect = () =>
{
    const { status, UserGetConnected } = UseAuth();
    const router = useRouter();

    useEffect(() => {
        UserGetConnected();
    }, [UserGetConnected]);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        if (status === AuthStatus.Unauthenticated) 
        {
            timer = setTimeout(() => {
                router.push('/login');
            }, 3000);
        }
        return () => clearTimeout(timer);
    }, [status, router]);

    return status;
}