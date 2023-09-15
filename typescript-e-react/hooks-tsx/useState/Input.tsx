import React from "react";

type InputProps = React.ComponentProps<"input"> & {
  label: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ label, setValue, ...props }: InputProps) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor={label}>{label}</label>
      <input
        name={label}
        id={label}
        type="text"
        onChange={({ currentTarget }) => setValue(currentTarget.value)}
        {...props}
      />
    </div>
  );
};

export default Input;
