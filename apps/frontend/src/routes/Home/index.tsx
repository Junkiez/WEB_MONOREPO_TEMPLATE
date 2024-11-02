import { createRoute } from "@tanstack/react-router"
import Home from "./Home"
import Root from "../Root"

const route = createRoute({
    getParentRoute: () => Root,
    path: '/',
    component: Home,
  })

export default route