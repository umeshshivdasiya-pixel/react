const element=React.createElement("h1",{id:"first",className:"rahul",style:{backgroundColor:"blue",fontSize:"30px",color:"pink"}},"Hello coder army");

const element2=React.createElement("h2",{id:"second",className:"rahul",style:{backgroundColor:"black",fontSize:"30px",color:"pink"}},"to kese hai aap log");

const div1=React.createElement('div',{},[element,element2]);

// ReactDOM.render(element,document.getElementById('root'));
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(div1);

//JSX