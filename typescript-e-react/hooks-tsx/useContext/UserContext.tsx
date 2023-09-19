import React, { PropsWithChildren } from "react";
import useFetch from "./useFetch";

// interface de User que irá vir da API
type User = {
  id: number;
  nome: string;
  idade: number;
  aulas: number;
  cursos: number;
  preferencias: {
    playback: number;
    volume: number;
    qualidade: string;
  };
};

// interface do que o contexto irá receber
type IUserContext = {
  data: User | null;
  loading: boolean;
  error: string | null;
};

// definir como parâmetro a interface criada
const UserContext = React.createContext<IUserContext | null>(null);

// não é uma boa prática exportar o contexto puro então iremos criar uma função
export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) throw new Error('useContext deve estar dentro do Provider');
  return context
}

// exportar provider com o estado reativo definido
export const UserStorage = ({ children }: PropsWithChildren) => {
  const { data, loading, error } = useFetch<User>(
    "https://data.origamid.dev/usuarios/1"
  );
  return (
    <UserContext.Provider value={{ data, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
