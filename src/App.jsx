import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import Bookmarks from "./features/bookmarks/Bookmarks";
import ToDo from "./features/todo/ToDo";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Bookmarks /> },
      { path: "/todo", element: <ToDo /> },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60 * 1000 } },
});

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <ReactQueryDevtools initialIsOpen={false} />
          <div>
            <AppLayout />
          </div>
        </RouterProvider>
      </QueryClientProvider>
    </>
  );
}
