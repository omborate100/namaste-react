import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React!!!"
);

// creating a nested structure
/*
<div id="parent">
    <div id="child">
        <h1> I'm a h1 tag! </h1>
        <h2> I'm a h2 tag! </h2>
    </div>
    <div id="child2">
        <h1> I'm a h1 tag! </h1>
        <h2> I'm a h2 tag! </h2>
    </div>
</div>        
*/

// it's to much complex so jsx makes it easy for developers 
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "This is namaste react "),
//     React.createElement("h2", {}, "I'm a h2 tag"),
//   ]),
//   ,
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm a h1 tag"),
//     React.createElement("h2", {}, "I'm a h2 tag"),
//   ]),
// ]);

console.log(heading); // its object
const root = ReactDOM.createRoot(document.getElementById("root"));

const JsxElement=() => (<h1>Namaste React from jsx 🚀</h1>);

const HeadingComponent = () => (
    <div>
		<JsxElement/>
  		<h1>Namaste React from functional component </h1>
    </div>
);
root.render(<HeadingComponent/>);
