import Image from 'next/image';
import { Button_1Loading } from '@/components/Button/Button_1';

export const CardRegister = (props: {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    MessageApiAuth: string | null;
    setdate_of_birth: (Date: string) => void;
    date_of_birth: string;
    city: string;
    setCity: (city: string) => void;
    sex: string;
    setSex: (sex: string) => void;
    Description: string;
    setDescription: (descr: string) => void;
    pseudo: string;
    setPseudo: (pseudo: string) => void;
}) =>
{
    return (
        <form onSubmit={props.handleSubmit} className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">

        {props.MessageApiAuth && <p style={{ color: "red" }}>{props.MessageApiAuth}</p>}

            <div>
                <label htmlFor="pseudo" className="sr-only">Pseudo</label>

                <div className="relative">
                    <input
                        type="text"
                        id="pseudo"
                        value={props.pseudo}
                        onChange={(e) => props.setPseudo(e.target.value)}
                        className="bg-white w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Enter Pseudo"
                        required
                    />

                   <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <Image
                        src="/assets/svg/circle-user-round.svg"
                        alt="Pseudo icon"
                        width={20}
                        height={20}
                        />
                    </span>
                </div>
            </div>



        <div>
            <label htmlFor="sex" className="sr-only">Sex</label>

            <div className="relative">
                <select
                    id="sex"
                    value={props.sex}
                    onChange={(e) => props.setSex(e.target.value)}
                    className="bg-white w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                    >
                    <option value="">Choose your sex...</option>
                    <option value="M">Masculin</option>
                    <option value="F">Feminin</option>
                </select>

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <Image
                        src="/assets/svg/dna.svg"
                        alt="Sex icon"
                        width={20}
                        height={20}
                    />
                </span>
            </div>
        </div>



        <div>
            <label htmlFor="city" className="sr-only">City</label>

            <div className="relative">
                <select
                    id="city"
                    value={props.city}
                    onChange={(e) => props.setCity(e.target.value)}
                    className="bg-white w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                >
                    <option value="">Choose your city...</option>
                    <option value="Marseille">Marseille</option>
                    <option value="Paris">Paris</option>
                    <option value="Lyon">Lyon</option>
                    <option value="Strasbourg">Strasbourg</option>
                    <option value="Toulouse">Toulouse</option>
                </select>

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <Image
                        src="/assets/svg/home.svg"
                        alt="City icon"
                        width={20}
                        height={20}
                    />
                </span>
            </div>
        </div>


        <div>
                <label htmlFor="description" className="sr-only">Description</label>

                <div className="relative">
                    <input
                        type="text"
                        id="descripton"
                        value={props.Description}
                        onChange={(e) => props.setDescription(e.target.value)}
                        className="bg-white w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                        placeholder="Enter Description"
                        required
                    />

                   <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <Image
                        src="/assets/svg/tchat_icon.svg"
                        alt="Tchat icon"
                        width={20}
                        height={20}
                        />
                    </span>
                </div>
            </div>


        <div>
            <label htmlFor="date_of_birth" className="sr-only">date_of_birth</label>

            <div className="relative">
                <input
                    type="date"
                    id="date_of_birth"
                    value={props.date_of_birth}
                    onChange={(e) => props.setdate_of_birth(e.target.value)}
                    className="bg-white w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    required
                />
                {/* <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <Image
                        src="/assets/svg/calendar-days.svg"
                        alt="Calendar icon"
                        width={20}
                        height={20}
                    />
                </span> */}
            </div>
        </div>
        <Button_1Loading
                        onClick={() => props.handleSubmit}
                        title="Valider 😍"
                        className="block w-full rounded-lg bg-pink-500 hover:bg-pink-600 px-5 py-3 text-sm font-medium text-white"
         />
        </form>
    );
}