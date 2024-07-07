import { UseAuth } from "@/Hook/HookApi/UseAuth";
import { useEffect } from 'react';
import { AuthStatus } from "@/entities/AuthStatus";
import { useRouter } from 'next/navigation'


export const UseAuthRedirect = (isProtected: boolean) =>
{
    const { status, UserGetConnected } = UseAuth();
    const router = useRouter();

    useEffect(() => {
        UserGetConnected();
    }, [UserGetConnected]);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        if (isProtected && status === AuthStatus.Unauthenticated) {
          timer = setTimeout(() => {
            router.push("/login");
          }, 3000);
        } else if (!isProtected && status === AuthStatus.Authenticated) {
          timer = setTimeout(() => {
            router.push("/welcome");
          }, 3000);
        }
        return () => clearTimeout(timer);
      }, [status, isProtected, router]);

    return status;
}