
import React from 'react';
import ReactDOM from 'react-dom/client';

const parent=React.createElement("div",{},[React.createElement("h1",{},"Im h1 tag"),React.createElement("h2",{},"Im h2t ag")]);
 const root=ReactDOM.createRoot(document.getElementById("root"));

 console.log(parent);
 
root.render(parent);