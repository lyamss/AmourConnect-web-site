import PopUp from "@/components/PopUp/pop_up1";
import PopUp2 from "@/components/PopUp/pop_up2";
import {GetRequestFriendsDto } from "@/entities/GetRequestFriendsDto";

const RequestMPopUpApi = ( props: {
    show: boolean,
    requestFriendsDto: GetRequestFriendsDto | null,
    MessageApiR: string | null, 
    BoolApiR: boolean | null,
}, ) =>
{
    console.log(props.BoolApiR + "value bool");

    return (
        <>
        {props.show && (props.BoolApiR === true) ? (
            <PopUp title="Message" description={props.MessageApiR} />
        ) : props.show &&(props.BoolApiR === false) ? (
            <PopUp2 title="Attention" description={props.MessageApiR} />
        ) : null}
        </>
    );
}

export default RequestMPopUpApi