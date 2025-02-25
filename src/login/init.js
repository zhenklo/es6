//初始化

import rander from './render'
import event from './event'

const login=(opit)=>{

    let obj={
        loginname:'请输入用户名',
        loginpwd:'请输入密码',
        loginsub:'登录'
    }

    //让对象合并
    let newobj=Object.assign(obj,opit)

    //调用渲染数据的函数
    rander(newobj)

    //调用事件
    event()
    
}



export default login;