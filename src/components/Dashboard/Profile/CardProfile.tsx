import Image from 'next/image';
import { Button_1Loading } from '@/components/Button/Button_1';
import { GetUserDto } from '@/entities/GetUserDto';
import { servicesTools } from "@/services/Tools";
import { LoaderCustombg } from '@/components/ui/LoaderCustombg';
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { CalendarIcon, Camera } from 'lucide-react'

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






    const [date, setDate] = useState<Date>()

    return (
        <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-t-lg">
              <h1 className="text-2xl font-bold text-center">Your Profile</h1>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-pink-200 flex items-center justify-center overflow-hidden border-4 border-pink-500">
                    <img src="/placeholder.svg?height=128&width=128" alt="Profile picture" className="w-full h-full object-cover" />
                  </div>
                  <button className="absolute bottom-0 right-0 rounded-full bg-pink-500 hover:bg-pink-600 p-2 text-white">
                    <Camera className="h-4 w-4" />
                    <span className="sr-only">Upload new picture</span>
                  </button>
                </div>
              </div>
    
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    id="dob"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
    
                <div className="space-y-2">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    id="city"
                    placeholder="Enter your city"
                    className="w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
    
                <div className="space-y-2">
                  <label htmlFor="sex" className="block text-sm font-medium text-gray-700">Sex</label>
                  <select
                    id="sex"
                    className="w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="">Select your sex</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
    
                <div className="space-y-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">About Me</label>
                  <textarea
                    id="description"
                    placeholder="Tell us about yourself..."
                    className="w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 min-h-[100px]"
                  ></textarea>
                </div>
    
                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                >
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      )






    return (
        <>
                        {props.UserAuthDto ? (
                    <>
                        <h1 className="text-3xl font-bold text-center sm:text-4xl text-fuchsia-500 p-14">Mets en valeur tes atouts pour séduire sur notre site ❤</h1>
                        <div className="flex flex-col items-center justify-center sm:flex-row sm:space-x-4">
                            <div className="mb-4 sm:mb-0">
                                {props.UserAuthDto?.sex === 'F' && !props.UserAuthDto?.profile_picture && (
                                    <Image src="/assets/images/femme_anonyme.png" width="100" height="100" alt={props.UserAuthDto.pseudo} className="rounded-full border-4 border-fuchsia-500" />
                                )}
                                {props.UserAuthDto?.sex === 'M' && !props.UserAuthDto.profile_picture && (
                                    <Image src="/assets/images/homme_bg.png" width="100" height="100" alt={props.UserAuthDto.pseudo} className="rounded-full border-4 border-blue-500" />
                                )}
                                {props.UserAuthDto?.profile_picture && (
                                    <Image src={`data:image/jpeg;base64,${props.UserAuthDto.profile_picture}`} width="100" height="100" alt={props.UserAuthDto.pseudo} className="rounded-full border-4 border-fuchsia-500" />
                                )}
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="text-xl font-medium text-black dark:text-white">
                                    <p className="text-fuchsia-700"><span className="font-bold">{props.UserAuthDto.sex === 'F' ? 'Mme ' : 'Mr '}</span><span className="font-bold text-fuchsia-700">{props.UserAuthDto.pseudo}</span></p>
                                </div>
                                <p className="text-fuchsia-700">ID user : <span className="font-bold">{props.UserAuthDto.id_User}</span></p>
                                <p className="text-fuchsia-700">Description : <span className="font-bold">{props.UserAuthDto.description}</span></p>
                                <p className="text-fuchsia-700">Date de naissance : {new Date(props.UserAuthDto.date_of_birth).toLocaleDateString()}</p>
                                <div className="text-fuchsia-700">Age : {servicesTools.Tools.ConvertingADateToAge(props.UserAuthDto.date_of_birth)} ans</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center sm:flex-row sm:space-x-4">
                            <form onSubmit={props.handleSubmit} className="w-full sm:w-auto">
                                <input type="file" name="profile_picture" accept="image/*" />
                                <p className="text-sm text-red-500">Veuillez télécharger une image de maximum de 1 Mo.</p>
                                <Button_1Loading
                                            onClick={() => {props.handleSubmit}}
                                            title="Update Picture Profile"
                                            className="bg-fuchsia-500 text-white px-4 py-2 rounded mt-2"
                                />
                            </form>
                            <form onSubmit={props.handleSubmitDate} className="w-full sm:w-auto">
                                <input type="date" value={props.date_of_birth} onChange={(e) => props.setdate_of_birth(e.target.value)} className="p-2 border rounded mt-2" />
                                <Button_1Loading
                                            onClick={() => {props.handleSubmitDate}}
                                            title="Update Date"
                                            className="bg-fuchsia-500 text-white px-4 py-2 rounded mt-2"
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
                                            className="bg-fuchsia-500 text-white px-4 py-2 rounded mt-2"
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
                                            className="bg-fuchsia-500 text-white px-4 py-2 rounded mt-2"
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
                                            className="bg-fuchsia-500 text-white px-4 py-2 rounded mt-2"
                                />
                            </form>
                        </div>
                    </>
                ) : (
                    <LoaderCustombg />
                )}
        </>
    );
}