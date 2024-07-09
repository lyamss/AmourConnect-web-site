import PopUp from "@/components/PopUp/pop_up1";
import PopUp2 from "@/components/PopUp/pop_up2";
import {GetRequestFriendsDto } from "@/entities/GetRequestFriendsDto";

const RequestMPopUpApi = ( props: {
    show: boolean,
    requestFriendsDto: GetRequestFriendsDto | null,
    MessageApiR: string | null, 
}, ) =>
{
    return (
        <>
        {props.show && (props.requestFriendsDto?.message) ? (
            <PopUp title="Message" description={props.requestFriendsDto?.message} />
        ) : props.show &&(props.MessageApiR) ? (
            <PopUp2 title="Attention" description={props.MessageApiR} />
        ) : null }
        </>
    );
}

export default RequestMPopUpApi