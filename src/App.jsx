import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import Students from "./pages/Students";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";

import Modal from "react-modal";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

Modal.setAppElement("#root");

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route element={<AppLayout />}>
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="users" element={<Students />} />
            {/* <Route path="courses" element={<Course />} />
        
            <Route path="payment" element={<Payment />} />
            <Route path="report" element={<Report />} />
            <Route path="settings" element={<Settings />} /> */}
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
