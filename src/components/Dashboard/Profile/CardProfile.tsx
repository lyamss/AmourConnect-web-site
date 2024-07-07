import Image from 'next/image';
import { Button_1Loading } from '@/components/Button/Button_1';
import { Button_link_welcome } from '@/components/Button/Button_link_welcome';
import { GetUserDto } from '@/entities/GetUserDto';
import { servicesTools } from "@/services/Tools";
import { LoaderCustombg } from '@/components/ui/LoaderCustombg';


export const CardProfile = (props: {
    UserAuthDto: GetUserDto | null;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleSubmitDate: (event: React.FormEvent<HTMLFormElement>) => void;
    setdate_of_birth: (Date: string) => void;
    date_of_birth: string;
    city: string;
    setCity: (city: string) => void;
    sex: string;
    setSex: (sex: string) => void;
    Description: string;
    setDescription: (descr: string) => void;
}) =>
{
    return (
        <>
                        {props.UserAuthDto ? (
                    <>
                        <h1 className="text-3xl font-bold mb-8 text-center sm:text-4xl text-pink-500">Mets en valeur tes atouts pour séduire sur notre site ❤</h1>
                        <div className="flex flex-col items-center justify-center sm:flex-row sm:space-x-4">
                            <div className="mb-4 sm:mb-0">
                                {props.UserAuthDto?.sex === 'F' && !props.UserAuthDto?.profile_picture && (
                                    <Image src="/assets/images/femme_anonyme.png" width="100" height="100" alt={props.UserAuthDto.pseudo} className="rounded-full border-4 border-pink-500" />
                                )}
                                {props.UserAuthDto?.sex === 'M' && !props.UserAuthDto.profile_picture && (
                                    <Image src="/assets/images/homme_bg.png" width="100" height="100" alt={props.UserAuthDto.pseudo} className="rounded-full border-4 border-blue-500" />
                                )}
                                {props.UserAuthDto?.profile_picture && (
                                    <Image src={`data:image/jpeg;base64,${props.UserAuthDto.profile_picture}`} width="100" height="100" alt={props.UserAuthDto.pseudo} className="rounded-full border-4 border-pink-500" />
                                )}
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="text-xl font-medium text-black dark:text-white">
                                    <p className="text-pink-700"><span className="font-bold">{props.UserAuthDto.sex === 'F' ? 'Mme ' : 'Mr '}</span><span className="font-bold text-pink-700">{props.UserAuthDto.pseudo}</span></p>
                                </div>
                                <p className="text-pink-700">ID user : <span className="font-bold">{props.UserAuthDto.id_User}</span></p>
                                <p className="text-pink-700">Description : <span className="font-bold">{props.UserAuthDto.description}</span></p>
                                <p className="text-pink-700">Date de naissance : {new Date(props.UserAuthDto.date_of_birth).toLocaleDateString()}</p>
                                <div className="text-pink-700">Age : {servicesTools.Tools.ConvertingADateToAge(props.UserAuthDto.date_of_birth)} ans</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center sm:flex-row sm:space-x-4">
                            <form onSubmit={props.handleSubmit} className="w-full sm:w-auto">
                                <input type="file" name="profile_picture" accept="image/*" />
                                <p className="text-sm text-red-500">Veuillez télécharger une image de maximum de 1 Mo.</p>
                                <Button_1Loading
                                            onClick={() => {props.handleSubmit}}
                                            title="Update Picture Profile"
                                            className="bg-pink-500 text-white px-4 py-2 rounded mt-2"
                                />
                            </form>
                            <form onSubmit={props.handleSubmitDate} className="w-full sm:w-auto">
                                <input type="date" value={props.date_of_birth} onChange={(e) => props.setdate_of_birth(e.target.value)} className="p-2 border rounded mt-2" />
                                <Button_1Loading
                                            onClick={() => {props.handleSubmitDate}}
                                            title="Update Date"
                                            className="bg-pink-500 text-white px-4 py-2 rounded mt-2"
                                />
                            </form>
                            <form onSubmit={props.handleSubmit} className="w-full sm:w-auto">
                                <select
                                    id="city"
                                    value={props.city}
                                    onChange={(e) => props.setCity(e.target.value)}
                                    className="bg-white w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                >
                                    <option value="">{props.UserAuthDto?.city}</option>
                                    <option value="Marseille">Marseille</option>
                                    <option value="Paris">Paris</option>
                                    <option value="Lyon">Lyon</option>
                                    <option value="Strasbourg">Strasbourg</option>
                                    <option value="Toulouse">Toulouse</option>
                                </select>
                                <Button_1Loading
                                            onClick={() => {props.handleSubmit}}
                                            title="Update City"
                                            className="bg-pink-500 text-white px-4 py-2 rounded mt-2"
                                />
                            </form>
                            <form onSubmit={props.handleSubmit} className="w-full sm:w-auto">
                                <select
                                    id="sex"
                                    value={props.sex}
                                    onChange={(e) => props.setSex(e.target.value)}
                                    className="bg-white w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                >
                                    <option value="">{props.UserAuthDto?.sex}</option>
                                    <option value="M">Masculin</option>
                                    <option value="F">Feminin</option>
                                </select>
                                <Button_1Loading
                                            onClick={() => {props.handleSubmit}}
                                            title="Update Sex"
                                            className="bg-pink-500 text-white px-4 py-2 rounded mt-2"
                                />
                            </form>
                            <form onSubmit={props.handleSubmit} className="w-full sm:w-auto">
                                    <label htmlFor="description" className="sr-only">Description</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="descripton"
                                            value={props.Description}
                                            onChange={(e) => props.setDescription(e.target.value)}
                                            className="bg-white w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                            placeholder="Enter Description"
                                            required
                                        />
                                    </div>
                                <Button_1Loading
                                            onClick={() => {props.handleSubmit}}
                                            title="Update Description"
                                            className="bg-pink-500 text-white px-4 py-2 rounded mt-2"
                                />
                            </form>
                        </div>
                        <Button_link_welcome/>
                    </>
                ) : (
                    <LoaderCustombg />
                )}
        </>
    );
}