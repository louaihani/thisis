import axios from "axios";
import { useState } from "react";

 function App(){
    let [name , setName] = useState();
    let password = "hani";
    function send(){
axios.post("https://backend2-gzhx.onrender.com/addUser", {name, password}).catch((e)=>{console.log("error axios",e)}).then((res)=>{alert(res.data.message)})
    }
   
    return(  
        <div>
            
            <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
            <button onClick={send}>send</button>
        </div>
    )
}
export default App;
