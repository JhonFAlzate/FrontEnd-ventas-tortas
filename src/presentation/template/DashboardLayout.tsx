import { Outlet } from "react-router-dom";
import { menuRouter } from "../router/router";
import { SidebarMenuItem } from "../components";

export default function DashboardLayout() {
  return (
    <>
      <main className="flex flex-row h-screen overflow-x-auto">


        <nav className="h-screen w-[300px] bg-[#101010] pt-10 px-16 text-white relative">
          <h2 className="font-black text-xl">Tortas Don Jhon!!</h2>
          <ul className="flex pt-10 flex-col gap-5">
          {menuRouter.map((option) => (
              <li 
                key={option.to} 
                className="uppercase font-black text-sm text-white text-opacity-60 hover:text-opacity-100"
              >
                <SidebarMenuItem 
                    option={option}
                />
              </li>
            ))}
          </ul>
        </nav>

        <section className="p-10 flex flex-row gap-10 overflow-x-auto">
          <Outlet />
        </section>
      </main>
    </>
  );
}
