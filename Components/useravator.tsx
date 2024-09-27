import { useUser } from "@clerk/nextjs";

export const userAvator=()=>{
    
    const {user} =useUser();
    return(
<div></div>
    )
}