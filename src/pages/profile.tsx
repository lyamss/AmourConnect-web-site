import 'tailwindcss/tailwind.css';
import Loader1 from "@/components/Loading/Loader1";
import Head1 from "@/components/Header/Head1";
import AuthRedirect from '@/services/AuthRedirect';
import { CardProfile } from '@/components/Dashboard/Profile/CardProfile';
import { UseProfilEdit } from '@/Hook/customsHook/User/UseProfilEdit';

const Profile = () => {

    const { handleSubmit, handleSubmitDate, setDescription, setCity, setSex, setdate_of_birth, UserAuthDto, Description,
        sex,
        city,
        date_of_birth } = UseProfilEdit(); 

        return (
            <AuthRedirect
            LoadingComponent={<Loader1 />}
            isProtected={true}
            >
            <div className="bg-pink-200 flex flex-col items-center justify-center h-screen sm:p-6">
                <Head1/>

                <CardProfile
                handleSubmit={handleSubmit}
                handleSubmitDate={handleSubmitDate}
                setdate_of_birth={setdate_of_birth}
                UserAuthDto={UserAuthDto}
                date_of_birth={date_of_birth}
                city={city}
                setCity={setCity}
                sex={sex}
                setSex={setSex}
                Description={Description}
                setDescription={setDescription}
                >
                </CardProfile>

            </div>
            </AuthRedirect>
        );
}

export default Profile