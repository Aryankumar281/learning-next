"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Profile(){
    const router = useRouter();
    const pathName = usePathname();
    // const searchParams =useSearchParams();
    // console.log(searchParams)
    console.log(pathName);
    const handleNavigate=()=>{
        router.push('/')
    }
    return <div>
        <h1>Profile Component - Client</h1>
        <button onClick={handleNavigate} className=" p-2 rounded-xl bg-red-400 transition-all hover:shadow-[10px_5px_5px] shadow-red-600 ">Navigate to home page</button>
    </div>
}
export default Profile;