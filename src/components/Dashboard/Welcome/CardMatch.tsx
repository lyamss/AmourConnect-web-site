"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image';
import Link from "next/link";
import { servicesTools } from "@/services/Tools";
import { GetUserDto } from "@/entities/GetUserDto";
import RequestMPopUpApi from "@/components/Dashboard/Request/RequestMPopUpApi";



const CardMatch = ( props: { 
    show: boolean, 
    MessageApiR: string | null, 
    usersDto: GetUserDto[] | null,
    BoolApiR: boolean | null,
    button_requestfriendsAdd: (id_user: number) => void; 
    }) => {


        const [currentIndex, setCurrentIndex] = useState(0)
        const [direction, setDirection] = useState<null | "left" | "right">(null)

        if (!props.usersDto || props.usersDto.length === 0) {
            return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 p-4">
                        <div className="text-sm text-black ">
                            <strong>Aucun utilisateur à afficher à cause de vos critères (âge, sex) mettez à jour votre profil</strong>
                        </div>
            </div>
            )
            ;
        }
      
        const currentUser = props.usersDto[currentIndex];
      
        const handleSwipe = (swipeDirection: "left" | "right") => {
          setDirection(swipeDirection)
          setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (props.usersDto ? props.usersDto.length : 0))
            setDirection(null)
          }, 300)
        }

        
    return (
        <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 p-4">

        <div className="z-10">
        <RequestMPopUpApi
                        show={props.show}
                        MessageApiR={props.MessageApiR}
                        BoolApiR={props.BoolApiR}
        />
        </div>

      <h1 className="text-3xl font-bold mb-4 text-pink-700">Find Your Perfect Match ❤️</h1>
      <AnimatePresence>
        {currentUser && (
          <motion.div
            key={currentUser.id_User}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ 
              opacity: 0, 
              x: direction === "left" ? -300 : direction === "right" ? 300 : 0,
              transition: { duration: 0.3 }
            }}
            className="w-full max-w-sm"
          >
            <Card className="overflow-hidden border-4 border-pink-300 shadow-lg">
              <CardContent className="p-0">
                <div className="relative">
              <Link href={`/profil-details/${currentUser.id_User}`}>
                {currentUser.sex === "F" && !currentUser.profile_picture && (
                    <Image
                        src="/assets/images/femme_anonyme.png"
                        width="300"
                        height="700"
                        alt={currentUser.pseudo}
                        className="w-full h-80 object-cover"
                    />
                )}
                {currentUser.sex === "M" && !currentUser.profile_picture && (
                    <Image
                        src="/assets/images/homme_bg.png"
                        width="300"
                        height="700"
                        alt={currentUser.pseudo}
                        className="w-full h-80 object-cover"
                    />
                )}
                {currentUser.profile_picture && (
                    <Image
                        src={`data:image/jpeg;base64,${currentUser.profile_picture}`}
                        width="300"
                        height="700"
                        alt={currentUser.pseudo}
                        className="w-full h-80 object-cover"
                    />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pink-500 to-transparent p-4">
                    <h2 className="text-2xl font-semibold text-white">
                        {currentUser.sex === "F" ? "Mme " : "Mr "}
                        {currentUser.pseudo}, {servicesTools.Tools.ConvertingADateToAge(currentUser.date_of_birth)}
                 </h2>
                </div>

                </Link>
                </div>
                <Link href={`/profil-details/${currentUser.id_User}`}>
                            <div className="p-4 bg-white">
                                <p className="text-gray-600 mt-2">{currentUser.description}</p>
                            </div>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex justify-center mt-6 space-x-4">
        <Button
          variant="outline"
          size="icon"
          className="w-16 h-16 rounded-full bg-white text-pink-500 border-2 border-pink-500 hover:bg-pink-100 hover:text-pink-600 transition-colors duration-300"
          onClick={() => handleSwipe("left")}
        >
          <X className="h-8 w-8" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="w-16 h-16 rounded-full bg-white text-pink-500 border-2 border-pink-500 hover:bg-pink-100 hover:text-pink-600 transition-colors duration-300"
          onClick={() => {
              handleSwipe("right")
              props.button_requestfriendsAdd(currentUser.id_User)
          }}
        >
          <Heart className="h-8 w-8" />
        </Button>
      </div>
    </div>
</>
);
}

export default CardMatch