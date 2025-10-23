"use client"
import { useRouter } from "next/navigation";

function NotFoundPage() {
    const router = useRouter();
    const handleClick=()=>{
        router.push('/');
    }
    return (
        <div className="h-screen w-auto flex flex-col items-center justify-center text-white bg-black">
            <h1 className=" text-4xl text-red-600"> The page u r looking for does not exist</h1>
            <h2 className="text-3xl ">404 Libibi</h2>
            <button onClick={handleClick} className="bg-red-500 p-2 rounded-xl">Go to Homepage</button>
        </div>
    );
}

export default NotFoundPage;