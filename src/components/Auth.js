import React from 'react';
const {Zilliqa} = require('@zilliqa-js/zilliqa'); 
const zilliqa = new Zilliqa('https://dev-api.zilliqa.com');




class Auth extends React.Component {


authZilliqa (e){

    e.preventDefault();

let formData= new FormData (e.target);
let pp= formData.get('pp');

let ks= formData.get('keystore');

let fr= new FileReader();
fr.readAsText(ks,'UTF-8');
fr.onload = async function(e){

let json=e.target.result;

const address=await zilliqa.wallet.addByKeystore(json,pp).catch((err)=>{

});

alert(address);


};





}

    
render (){

return (

<div>

<form id='authForm' onSubmit={this.authZilliqa}>

<input type="file" name="keystore"/>
<input type="password"  name="pp"  />

<button>Restore Wallet</button>
 
</form>

</div>

);

}


}

export default Auth;