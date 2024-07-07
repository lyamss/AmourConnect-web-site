import React, { useState } from 'react';
import { servicesTools } from "@/services/Tools";
import {SetUserDto} from '@/entities/SetUserDto';
import { UseAuth } from "@/Hook/HookApi/UseAuth";
export const UseRegister = () =>
{
    const { AuthRegister, MessageApiAuth } = UseAuth();
    const [pseudo, setPseudo] = useState('');
    const [Description, setDescription] = useState('');
    const [sex, setSex] = useState('');
    const [city, setCity] = useState('');
    const [date_of_birth, setdate_of_birth] = useState('');


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!servicesTools.Tools.isValidDate(date_of_birth)) {
            alert('Veuillez entrer une date de naissance valide.');
            return;
        }
        const user: SetUserDto = {
            pseudo: pseudo,
            description: Description,
            sex: sex,
            city: city,
            date_of_birth: new Date(date_of_birth)
        };
        AuthRegister(user);
    };

    return { handleSubmit, city, setCity, date_of_birth, setdate_of_birth, Description, setDescription, setPseudo, pseudo, setSex,sex, MessageApiAuth }
}