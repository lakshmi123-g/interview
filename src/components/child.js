import React, { useEffect } from "react";
 
export default function Child() {
console.log("Child render");
 
useEffect(() => {
console.log("Child useEffect");
}, []);
 
return <div>Child</div>;
}