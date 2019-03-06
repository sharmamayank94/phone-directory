import React from 'react';

function loadname(e){
   document.querySelector('#showname').innerHTML = e.target.value;
}

function loadnumber(e){
    document.querySelector('#shownumber').innerHTML = e.target.value;
 }

 
function Add({enterinfo, changeroute}){
    return(
        <div>
            <h1>Phone Directory</h1>
            <div class="card">
                <h3>Add Contact Information</h3>
                <label htmlFor="Name">Enter Name:</label><br/>
                <input type="text" name="Name" id="Name" onInput={loadname}/><span id = "showname"></span><br/><br/>
                <label htmlFor="cellphone" >Enter number:</label><br/>
                <input type="text" name="cellphone" id="cellphone" onInput={loadnumber}/><span id = "shownumber"></span><br/><br/>
                <button class="addinfo" onClick={()=>{
                            enterinfo(document.querySelector('#Name').value, document.querySelector('#cellphone').value)
                        }}>
                   Save
                </button>
            </div>
        </div>
        
    );
}

export default Add;