// src/pages/LoginPage.jsx
import React, { useState } from "react";
import Title from "../components/Text/Title";
import InputModal from "../components/Text/InputModal";
import ButtonModal from "../components/Button/ButtonModal";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const STATIC_USERNAME = "admin";
  const STATIC_PASSWORD = "admin";

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    setTimeout(() => {
      if (username === STATIC_USERNAME && password === STATIC_PASSWORD) {
        localStorage.setItem("user_token", "static-admin-token");
        navigate("/");
      } else {
        setError("Usuário ou senha inválidos. Tente novamente.");
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <Title>LOGIN</Title>
        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <InputModal
            placeholder="Nome de Usuário"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <InputModal
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && (
            <div className="p-3 text-sm text-red-700 bg-red-100 border border-red-400 rounded">
              {error}
            </div>
          )}
          <ButtonModal
            bgColor={"bg-blue-600 hover:bg-blue-700"}
            type="submit"
            disabled={loading}
          >
            {loading ? "Verificando..." : "Entrar"}
          </ButtonModal>
        </form>
      </div>
    </div>
  );
}

export default Login;
