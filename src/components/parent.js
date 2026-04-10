import React, { useEffect } from "react";
import Child from "./child";
export default function Parent() {
    console.log("Parent render");

    useEffect(() => {
        console.log("Parent useEffect");
    }, []);

    return (
        <div>
            <Child />
        </div>
    );
}
