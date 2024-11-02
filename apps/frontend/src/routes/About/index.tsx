import { createRoute } from "@tanstack/react-router"
import About from "./About"
import Root from "../Root"

const route = createRoute({
    getParentRoute: () => Root,
    path: '/about',
    component: About,
  })

export default route