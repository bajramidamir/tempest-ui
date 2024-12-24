import React, { FC, ReactNode, FormEventHandler } from "react";
import "./Form.css";

interface FormProps {
  children: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

const Form: FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export { FormProps };
export default Form;
