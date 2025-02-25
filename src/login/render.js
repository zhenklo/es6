const rander =(opit)=>{
    
    opit.main.innerHTML=`<form onsubmit='return false'>
		<input type="text" placeholder="${opit.loginname}" id='username'>
		<input type="password" placeholder="${opit.loginpwd}" id='userpwd'>
		<input type="submit" placeholder="${opit.loginsub}" id='loginbtn'>
	</form>
    `
    
}

export default rander;
