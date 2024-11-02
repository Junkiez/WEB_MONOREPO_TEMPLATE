import { Outlet } from "@tanstack/react-router"
import Navbar from "../../ui/Navbar"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"

const Root = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            {import.meta.env.VITE_DEV && <TanStackRouterDevtools />}
        </>
    )
}

export default Root