
import React from 'react';
import ReactDOM from 'react-dom/client';


const Heading=()=> {
    return ( <h1 className='head'>
    First REact project
    </h1>
);
}

const Child=()=>{return <h3>I m from the child</h3>}

const Parent=()=>{
  return  <div>
    <Child/>
     <h1 id="container">I am from the parent </h1>
    </div>
}

 //console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root")); 
root.render(<Parent/>);