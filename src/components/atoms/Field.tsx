import { CSSProperties, FC, ReactNode } from "react";

const FieldStyle: CSSProperties = {
  border: "1px solid green",
};

type FieldProps = {
  id: string;
  children: ReactNode;
};

const Field: FC<FieldProps> = ({ children, id }) => {
  return (
    <div id={id} style={FieldStyle}>
      {children}
    </div>
  );
};

export default Field;
