import fetchMock from "fetch-mock";

fetchMock.mock('/login',(url,params)=>{
    console.log(params);
    
    let param= params.params

    if(param.name=='admin'){
       
        if(param.pwd=='123456'){
            return{
                code:200,
                msg:'输入正确'
            }
        }else{
            return{
                code:400,
                msg:'密码错误'
            }
        }
    }else{
        return{
            code:400,
            msg:'用户名错误'
        }
    }
    
   
})

