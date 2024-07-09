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
        className="bg-pink-500 rounded text-white hover:bg-pink-700"
        />
    );
}

export default RMButton