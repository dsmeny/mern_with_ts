import { CSSProperties, FC, FormEvent, ReactNode } from "react";

type Props = {
  isValid: boolean;
  submitHandler: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
};

const FormStyle: CSSProperties = {
  border: "1px solid",
  color: "grey",
};

const Form: FC<Props> = ({ children, isValid, submitHandler }: Props) => {
  return (
    <div>
      <form
        style={{ ...FormStyle, borderColor: isValid ? "green" : "red" }}
        onSubmit={submitHandler}
      >
        {children}
      </form>
    </div>
  );
};

export default Form;
