//事件
import ajaxData from "../api/ajaxData";

const event=()=>{
    let username=document.getElementById('username')
    let userpwd=document.getElementById('userpwd')

    document.getElementById('loginbtn').onclick=async()=>{
        console.log(1);
        
        let reaData=await ajaxData('/login',{
            name:username.value,
            pwd:userpwd.value
        })
        console.log(2);
        
    }
}
export default event;