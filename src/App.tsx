import { RouterProvider } from "react-router-dom";
import { router } from "./presentation/router/router";
import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  )
}