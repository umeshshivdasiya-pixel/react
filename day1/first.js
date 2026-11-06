//create element throught js

// const header1=document.createElement('h1');
// header1.innerHTML="hello coder army";
// header1.style.backgroundColor="blue";
// header1.style.fontSize="30px";
// header1.style.color="white";

// const header2=document.createElement('h2');
// header2.innerHTML="to kese hai aap log";
// header2.style.backgroundColor="black";
// header2.style.fontSize="25px";
// header2.style.color="white";


//React:object
//ReactDOM:object
const React={
    createElement:function(tag,style,children){
        const element=document.createElement(tag);
         if(typeof children==='object'){
             for(let val of children){
                element.append(val);
             }
         }
        else element.innerText=children;
        for(let key in style){
            element.style[key]=style[key];

        }
        return element;
    }
}

const ReactDOM={
    render:function(element,root){
        root.append(element);
    }
}

const header3=React.createElement('h1',{fontSize:"30px",backgroundColor:"blue",color:"white"},"hello coder army");
const header4=React.createElement('h1',{fontSize:"25px",backgroundColor:"black",color:"white"},"tu samjha samjha na");

//mujhe root me unordered list dalni hai 
//content like HTML CSS JS
const li1=React.createElement('li',{},"HTML");
const li2=React.createElement('li',{},"CSS");
const li3=React.createElement('li',{},"JS");

const ul=React.createElement('ul',{fontSize:"30px",backgroundColor:"blue",color:"white"},[li1,li2,li3]);

ReactDOM.render(header3,document.getElementById('root'));
ReactDOM.render(header4,document.getElementById('root'));
ReactDOM.render(ul,document.getElementById('root'));



// const root=document.getElementById('root');
// // root.append(header1);
// // root.append(header2);
// root.append(header3);
// root.append(header4);

