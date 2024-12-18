import { Navigate } from "react-router-dom"

import { useAtom } from "jotai"
import { PropsWithChildren } from "react"
import { Outlet } from "react-router-dom"
import { userAtom } from "../../../store/auth"


const AuthGuard: React.FC <PropsWithChildren> = ({children}) =>{
    const [user]= useAtom(userAtom)
   

     if(!user) {
        console.log('cant axees dashboard')
          return  <Navigate to='/' />
         
        }


    return children || <Outlet />
}

export default AuthGuard