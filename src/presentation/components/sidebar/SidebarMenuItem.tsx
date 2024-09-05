import { NavLink } from "react-router-dom";

type SidebarMenuItemProps = {
 option: {
    to: string;
    title: string;
    component: JSX.Element;
  }
}


export default function SidebarMenuItem({ option }:SidebarMenuItemProps) {
  return (
    <> 
        <NavLink
            to={option.to}
            className={({ isActive })=>
                isActive 
                ? "flex items-center bg-gray-800 rounded-md p-2 transition-color"
                : "flex  items-center hover:bg-gray-800 rounded-md p-2 transition-colors"
        
            }
        >
            <span>{ option.title }</span>
        </NavLink>
    </>
  )
}