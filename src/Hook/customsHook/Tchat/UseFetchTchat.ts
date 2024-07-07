import { useEffect, useState } from "react";
import { AuthStatus } from "@/entities/AuthStatus";
import { SetMessageDto } from "@/entities/SetMessageDto";
import { UseMessage } from "@/Hook/HookApi/UseMessage";
import { UseAuth } from "@/Hook/HookApi/UseAuth";
export const UseFetchTchat = (idNumber: number) =>
{
    const [messageContent, setMessageContent] = useState('');
    const [isLoaderVisible, setIsLoaderVisible] = useState(false);
    const { SendMessage, GetTchatID, messageDto } = UseMessage();
    const { status, UserGetConnected, UserAuthDto } = UseAuth();

    useEffect(() => {
        UserGetConnected();
    }, [UserGetConnected]);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        if (status === AuthStatus.Authenticated) {
            const fetchData = () => {
                GetTchatID(idNumber);
                timer = setTimeout(fetchData, 3000);
            };
            fetchData();
        }

        return () => clearTimeout(timer);
    }, [status, GetTchatID, idNumber]);

    const messageObject: SetMessageDto = {
        idUserReceiver: idNumber,
        messageContent: messageContent
    }

    const handleSendMessage = () => {
        SendMessage(messageObject);
        setMessageContent('');
    };

    const handleSendMessage2 = () => {
        setIsLoaderVisible(true);
        SendMessage(messageObject);
        setMessageContent('');
        setTimeout(() => {
            setIsLoaderVisible(false);
          }, 2000);
    };

    return { handleSendMessage, handleSendMessage2, isLoaderVisible, messageDto, UserAuthDto, messageContent, setMessageContent }
}