import { Suspense, use } from "react";

interface User{
    id:number;
    firstName:string;
    lastName:string;
}

interface UserResponse{
    users:User[]
}
function getUsers():Promise<UserResponse>{
    return fetch('https://dummyjson.com/users').then(res=>res.json())
}



function UseHookExample(){
    const usersPromise = getUsers()
    return(
        <div>
            <h1>Use Hook Exmaple</h1>
            <Suspense fallback={
                <div>Loading....</div>
            }>
                <UsersList usersPromise={usersPromise} />
            </Suspense>
        </div>
    )
}

function UsersList({usersPromise}:{usersPromise:Promise<UserResponse>}){
    const getUserList = use(usersPromise)
    return (
        <div>
            {
                getUserList.users.map(user=>(
                    <div key={user.id}>
                        <p>{user.firstName} - {user.lastName}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default UseHookExample;