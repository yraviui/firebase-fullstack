import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TodosApp from "./todosapp/TodosApp";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/todos' element={
            <ProtectedRoute>
              <TodosApp />
            </ProtectedRoute>
          } />
        </Routes>
        <Toaster position="top-center" reverseOrder={false} />
      </AuthContextProvider>
    </>
  );
}

export default App;
