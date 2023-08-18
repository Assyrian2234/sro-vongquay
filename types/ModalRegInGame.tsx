import { useMyReducer } from "@/store/Provider";
import { AccountUpdateInfoParam, AccountVerificationUpdateParam } from "@/type/paramTypes";
import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { accountVerifyUpdate, getNicknameList, getServerList, putAccountInfo } from "@/services/client-side/servicesApi/serviceApi";
import ModalRegSucces from "./ModalRegSucces";
import { AccountVerify } from "@/type/apiTypes";
import ModalMessage from "./ModalMessage";
interface OptionProps {
    value:any;
    label:string;
}
const ModalRegInGame = () => {
    const { updateModalState, loadingCallAPI, finishLoad, refreshAPI } = useMyReducer();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const form:any = useForm();
    const [phone,setPhone] = useState<string>("");
    const [idnumber,setIdnumber] = useState<string>("");
    const [address,setAddress] = useState<string>("");
    const [serverOption,setServerOption] = useState<OptionProps[]>([]);
    const [nickOption,setNickOption] = useState<OptionProps[]>([]);
    const [message,setMessage] = useState<string>("");
    const [server,setServer] = useState<number>(0);
    const [nick,setNick] = useState<number>(0);
    const handleSubmitForm = () =>{
        if (!server){
            setMessage("Vui lòng chọn server")
            return;
        }
        if (!nick){
            setMessage("Vui lòng chọn nhân vật")
            return;
        }
    const data: AccountUpdateInfoParam ={
        rolerName:nickOption.find(e => e.value === nick)?.value || "",
        serverName:serverOption.find(e => e.value === server)?.value || "",
        serverID:server,
        roleID:nick
    }
    loadingCallAPI();
        putAccountInfo(data).then(res => {
        if (res && res.data.code > 0){
            //thành công
            updateModalState(<ModalMessage message={res.data.mess}/>)
        }else {
            updateModalState(<ModalMessage message={res.data.mess}/>)
        }
    }).finally(() => finishLoad())

    }
    useEffect(() => {
       const id =  setTimeout(() => {
            setMessage("");
        },5000)
        return () => clearTimeout(id);
    },[message])

    useEffect(()=>{
        getServerList().then(res => {
            if (res && res.data.code > 0){
                setServerOption(res.data.data.list.map(e => {
                    return {
                        label:e.serverName,
                        value:e.serverID,
                    }
                }))
            }
        })
    },[])
    useEffect(() => {
        const data:{serverID:number} ={
            serverID:server
        }
        getNicknameList(data).then(res => {
            if (res && res.data.code > 0){
                setNickOption(res.data.data.list.map(e => {
                    return {
                        label:e.roleName,
                        value:e.roleID,
                    }
                }))
            }
        })
        setNick(() => 0);
    },[server]);


    return (
        <div className="bg_allpop">
        <div className="bgall_khungpop">
        <a className="btn_closepop" onClick={() => updateModalState(<></>)} style={{
            cursor:"pointer"
        }}> <img src="/assets/images/btn_clo.png" alt=""/></a>
        <span className="tx_tdall_pop">Đăng ký xác nhận thông tin</span>
        <img className="bg_khungpo_top" src="/assets/images/bg_khungpo_top.png" alt=""/>
        <img className="bg_khungpo_btom" src="/assets/images/bg_khungpo_btom.png" alt=""/>
        <ul className="ls_formal_dktt">
            <form id="myform_id" >
            <li>
                <span>Server:</span>
                <select id="server_select" {...register("server_select",{required:"Vui lòng chọn server"})} onChange={(e:any) => {
                    setServer(e.target.value);
                }} value={server} placeholder="Chọn server" >
                    <option value={0} disabled selected>Chọn server</option>
                    {serverOption.map(e=> {
                        return <option value={e.value}>{e.label}</option>
                    })}
                </select>
            </li>
            <li>
                <span>Tên nhân vật:</span>
                <select id="nickname_select" {...register("nickname_select",{required:"Vui lòng chọn tên nhân vật"})} onChange={(e:any) => {
                    setNick(e.target.value)
                }} value={nick} placeholder="Chọn nhân vật">
                    <option value={0} disabled selected>Chọn nhân vật</option>
                    {nickOption.map(e=> {
                        return <option value={e.value}>{e.label}</option>
                    })}
                </select>
            </li>
            {<div style={{
                color:'red'
            }}>{message}</div>}
            <li>
                <a className="btn_dhuong_pop" onClick={() => handleSubmitForm()}>đăng ký</a>
            </li>
            </form>
        </ul>
    </div>
    </div>
    )
}

export default ModalRegInGame;