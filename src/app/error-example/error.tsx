'use client'

import { useEffect } from "react";

function ErrorExample({error,reset}:{
    error:Error & {digest? : string},
    reset:()=>void
}) {
    useEffect(()=>{
        // sent a report to your logging service
        console.log("errorrr")
    },[error])

    return (
        <div>
            Error while fetching document
        </div>
    );
}

export default ErrorExample;