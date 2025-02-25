let ajaxData=(url,obj)=>{
    //fetch是一个函数
    return fetch(url,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json' // 设置请求头，表明发送的是 JSON 数据
        },
        params:obj
    }).then(data=>{
        return data.json();
    })
}

export default ajaxData