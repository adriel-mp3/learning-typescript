/**
1 - Crie um componente Input
2 - Ele deve retornar <label> e <input>, dentro de uma <div>
3 - Recebe uma propriedade chamada label
4 - A propriedade deve ser usada como htmlFor (label), name (input), id (input) e como conteúdo de <label>
5 - Permita o uso de qualquer propriedade de input no componente Input.
6 - Adicione 1rem de marginBottom na <div>
*/

import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
};

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor={label}>{label}</label>
      <input name={label} id={label} type="text" {...props} />
    </div>
  );
};

export default Input;
