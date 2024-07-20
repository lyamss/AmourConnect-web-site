import 'tailwindcss/tailwind.css';
import Loader1 from "@/components/Loading/Loader1";
import Head1 from "@/components/Header/Head1";
import AuthRedirect from '@/services/AuthRedirect';
import { UseRegister } from '@/Hook/customsHook/UseRegister';
import { CardRegister } from '@/components/Dashboard/Register/CardRegister';

const Register = () => {

    const { handleSubmit, city, setCity, date_of_birth, setdate_of_birth, Description, setDescription, setPseudo, pseudo, setSex,sex, MessageApiAuth } = UseRegister();

        return (
            <AuthRedirect
            LoadingComponent={<Loader1 />}
            isProtected={false}
            >
            <div className="bg-pink-200 min-h-screen flex flex-col items-center justify-center">
                <Head1/>
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-lg">
                            <h1 className="text-center text-2xl font-bold text-pink-500 sm:text-3xl">Valider votre Inscription pour lover ❤️</h1>
                        </div>

                    <CardRegister
                    handleSubmit={handleSubmit}
                setdate_of_birth={setdate_of_birth}
                date_of_birth={date_of_birth}
                city={city}
                setCity={setCity}
                sex={sex}
                setSex={setSex}
                Description={Description}
                setDescription={setDescription}
                pseudo={pseudo}
                setPseudo={setPseudo}
                MessageApiAuth={MessageApiAuth}
                    >
                    </CardRegister>

                    </div>
                </div>
                </AuthRedirect>
        );
}

export default Register