import Image from 'next/image';
import { Button_1Loading } from '@/components/Button/Button_1';
import { GetUserDto } from '@/entities/GetUserDto';
import { servicesTools } from "@/services/Tools";
import { LoaderCustombg } from '@/components/ui/LoaderCustombg';
import { Camera } from 'lucide-react'
import MulticolorText from '@/components/ui/MulticolorText';
import { useEffect, useRef, useState } from 'react';

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

    const [description, setDescription] = useState<string>(props.Description || (props.UserAuthDto ? props.UserAuthDto.description : ''));
    const [preview, setPreview] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (!description && props.UserAuthDto) {
          setDescription(props.UserAuthDto.description);
        }
      }, [props.UserAuthDto, description]);
    
      const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value);
        props.setDescription(e.target.value);
      };
    

      const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
          const reader = new FileReader()
          reader.onloadend = () => {
            setPreview(reader.result as string)
          }
          reader.readAsDataURL(file)
        }
      }
    
      const triggerFileInput = () => {
        fileInputRef.current?.click()
      }

      const getProfileImage = () => {
        if (preview) {
          return preview
        } else if (props.UserAuthDto?.profile_picture) {
          return `data:image/jpeg;base64,${props.UserAuthDto.profile_picture}`
        } else if (props.UserAuthDto?.sex === 'F') {
          return "/assets/images/femme_anonyme.png"
        } else if (props.UserAuthDto?.sex === 'M') {
          return "/assets/images/homme_bg.png"
        }
        return null
      }

      const getImageClasses = () => {
        let classes = "object-cover w-64 h-64 rounded-full border-4"
        if (preview) {
          classes += "border-fuchsia-500"
        } else if (props.UserAuthDto?.profile_picture) {
          classes += "border-fuchsia-500"
        } else if (props.UserAuthDto?.sex === 'F') {
          classes += "border-fuchsia-500"
        } else if (props.UserAuthDto?.sex === 'M') {
          classes += "border-blue-500"
        }
        return classes
      }
    
      const profileImage = getProfileImage()
      const imageClasses = getImageClasses()

    return (
    <>

        {props.UserAuthDto ? (
        <>
        <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-t-lg">
              <h1 className="text-2xl font-bold text-center">
              <MulticolorText text={props.UserAuthDto.sex === 'F' ? 'Mme ' : 'Mr '} />
              <MulticolorText text={props.UserAuthDto.pseudo} />❤
              </h1>
            </div>
            <div className="p-6 space-y-6">
            <div className="flex justify-center">
            <div className="relative">
            {profileImage && (
              <Image 
                src={profileImage} 
                alt={props.UserAuthDto?.pseudo || "Profile"} 
                width={100} 
                height={100} 
                className={imageClasses}
              />
            )}
              <button 
                onClick={triggerFileInput}
                className="absolute bottom-0 right-0 rounded-full bg-pink-500 hover:bg-pink-600 p-2 text-white"
                aria-label="Upload new picture"
              >
                <Camera className="h-4 w-4" />
              </button>
            </div>
          </div>


    
          <form onSubmit={props.handleSubmit} className="space-y-4">
          <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                aria-hidden="true"
                name="profile_picture"
              />
                <div className="space-y-2">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <select
                    id="city"
                    value={props.city}
                    onChange={(e) => props.setCity(e.target.value)}
                    className="bg-white w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                                <option value="">{props.UserAuthDto?.city}</option>
                                <option value="Marseille">Marseille</option>
                                <option value="Paris">Paris</option>
                                <option value="Lyon">Lyon</option>
                                <option value="Strasbourg">Strasbourg</option>
                                <option value="Toulouse">Toulouse</option>
                  </select>
                </div>
    
                <div className="space-y-2">
                  <label htmlFor="sex" className="block text-sm font-medium text-gray-700">Sex</label>
                  <select
                    id="sex"
                    value={props.sex}
                    onChange={(e) => props.setSex(e.target.value)}
                    className="bg-white w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                                <option value="">{props.UserAuthDto?.sex}</option>
                                <option value="M">Masculin</option>
                                <option value="F">Feminin</option>
                  </select>
                </div>
    
                <div className="space-y-2">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">About Me</label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={handleChange}
                    className="bg-white w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                  </textarea>
                </div>
    
                <Button_1Loading
                                        onClick={() => {props.handleSubmit}}
                                        title="Update Profile"
                                        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                />
              </form>


              <form onSubmit={props.handleSubmitDate} className='space-y-4'>
          <div className="space-y-2">
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700">{servicesTools.Tools.ConvertingADateToAge(props.UserAuthDto.date_of_birth)} ans</label>
                  <input
                    type="date"
                    id="dob"
                    value={props.date_of_birth} 
                    onChange={(e) => props.setdate_of_birth(e.target.value)}
                    className="bg-white w-full px-3 py-2 border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <Button_1Loading
                                        onClick={() => {props.handleSubmitDate}}
                                        title="Update Date"
                                        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                />
          </form>

          <span className='text-red-500'>Wait 30sec for server update your profile  & 1Mo for picture</span>


            </div>
          </div>
        </div>
            </>
                ) : (
                    <LoaderCustombg />
                )}
    </>
    );
}