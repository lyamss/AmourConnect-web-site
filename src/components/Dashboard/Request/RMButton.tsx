import { Button_1Loading } from '@/components/Button/Button_1';

const RMButton = ( props: {
    button_requestfriendsAdd: (id_User : number) => void;
    id_User: number;
}) =>
{
    return (
        <Button_1Loading
        onClick={() => props.button_requestfriendsAdd(props.id_User)}
        title="Demander un match 🥰"
        className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 md:text-base md:px-6 md:py-3"
        />
    );
}

export default RMButton