import 'tailwindcss/tailwind.css';
import { UseAuth } from "@/Hook/HookApi/UseAuth";
import Loader1 from "@/components/Loading/Loader1";
import Image from 'next/image';
import Header1 from "@/components/Header/Header1";
import { Button_1Loading } from '@/components/Button/Button_1';
import AuthRedirect from '@/services/AuthRedirect';


const LoginGoogle = () => {

    const { AuthLoginGoogle } = UseAuth();

        return (
            <AuthRedirect
            LoadingComponent={<Loader1 />}
            isProtected={false}
            >
            <div className="bg-pink-200 flex flex-col items-center justify-center h-screen sm:p-6">
                <Header1/>
                <h1 className="text-3xl font-bold mb-8 text-center sm:text-4xl text-pink-500">Connexion uniquement avec Google❤</h1>
                <div className="flex items-center mb-4 sm:mb-6">
                    <Image src="/assets/images/logo_google.png" alt="Logo Google" width={50} height={50} className="h-6 w-6 mr-2 sm:h-8 sm:w-8" />
                <Button_1Loading
                    onClick={AuthLoginGoogle}
                    title="Se connecter avec Google"
                    className="px-6 py-3 bg-pink-500 text-white font-medium rounded hover:bg-pink-600 focus:outline-none sm:px-8 sm:py-4"
                    />
                </div>
            </div>
        </AuthRedirect>
        );
}

export default LoginGoogle