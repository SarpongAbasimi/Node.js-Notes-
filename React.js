/*
This is how I understand React.js

In React jsx , which is a javascript extension is used.
A good example is const name = <span> Hello World</span> 
const name is javascript whiles (<span> Hello World</span> ) is the jsx part.

Variables can be injectd into the jsx systax ,
these variable are injected into them  between {}.

Attributes can be passed to the jxs systax just like normal html.
However, it is important to not that attributes such as
class and event names are slightly different in react.

class = className
onclick = onClick 

see react documentation for further detail.

React uses something called the virtual dom,this what makes it very fast.
To cut the long story short , at the point of rendering the DOM elements,
react takes a snapshot of the Dom and then compares it each time a change is made.
If a change is made, only that part that the change was made is updated.

*/

//Creating a react component.

import React form 'react';
import ReactDOM from 'react-dom';

/*
what is going on ?.

Well we imported a react library which is an object with properties
and stored it inside React. This will enable us to use React.(property of react).
The same thing applies to the ReactDOM variable.
ReactDOM allows us to manipulate the DOM.

*/


//We created a class component called MyHello and inherited from React.component
//React.component is like a mother that gives birth to a component.
//Then there is a render methed which is a method inside of the class component
//The render method spits out a jsx which says Hello World
//ReactDOM. render takes two argument , the first one is a jxs or a component and the second argument is who to render the jsx
//When  the ReactDOM.render is called , it looks to the MyHello class component and verify if it has a render method
//If it does it calls the render method and output the jsx to the specified locatio.

class MyHello extends React.component{

render(){
    return <h1> Hello World </h1>;
  }
}

ReactDOM.render(<MyHello/>,document.getElementById('where to render');



/*  How Props Work In React     */




