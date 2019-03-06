import React from 'react';


function Home({directory, changeroute, delinfo}){
    return(
        <div>
            <h1>Phone Directory</h1>
            <div class="button-container">
            <button class="addpage" onClick={()=>{changeroute('/add')}}>Add</button>
            </div>
            <table>
            <tbody>
            {directory.map((element,i) => {
                return (
                    <tr id={i} key={i}>
                        <td>{element.contactname}</td>
                        <td>{element.contactnumber}</td>
                        <td><button class="delbutton" onClick={()=>delinfo(i)}>Delete</button></td>
                    </tr>
                );
            })}
            </tbody>
            </table>
        </div>
    );
}

export default Home;