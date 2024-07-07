import React, { useState, useEffect } from 'react';
import { UseUser } from "@/Hook/HookApi/UseUser";
import { servicesTools } from "@/services/Tools";
import { UseAuth } from '@/Hook/HookApi/UseAuth';

export const UseProfilEdit = () =>
{

    const { UserGetConnected, UserAuthDto } = UseAuth();

    useEffect(() => {
        UserGetConnected();
    }, [UserGetConnected]);

        const { UserPatch } = UseUser();

        const [sex, setSex] = useState('');
        const [Description, setDescription] = useState('');
        const [city, setCity] = useState('');
        const [date_of_birth, setdate_of_birth] = useState('');

        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const inputElement = event.currentTarget.elements.namedItem("profile_picture") as HTMLInputElement;
            const formData = new FormData();
            let file;
            if (inputElement)
            {
                file = inputElement.files?.[0];
            }
            if (file)
            {
                formData.append("profile_picture", file);
            }
            formData.append("city", city);
            formData.append("sex", sex);
            formData.append("Description", Description);
            UserPatch(formData);
        };


        const handleSubmitDate = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            if (!servicesTools.Tools.isValidDate(date_of_birth)) {
                alert('Veuillez entrer une date de naissance valide.');
                return;
            }
            let d = new Date(date_of_birth);
            const formData = new FormData();
            formData.append("date_of_birth", d.toISOString());
            UserPatch(formData);
        };

        return { handleSubmit, 
        handleSubmitDate, 
        setDescription, 
        setCity, 
        setSex, 
        setdate_of_birth, 
        UserAuthDto,
        Description,
        sex,
        city,
        date_of_birth }
}