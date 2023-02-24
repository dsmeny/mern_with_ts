import Field from "../atoms/Field";
import Form from "../molecules/Form";

import { useState, FormEvent } from "react";

const MessageForm = () => {
  const [isValid, setIsValid] = useState(false);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsValid(() => !isValid);
  };
  return (
    <Form isValid={isValid} submitHandler={submitHandler}>
      <Field id="message">
        <input name="message" type="text" />
      </Field>
      <Field id="submit">
        <input type="submit" />
      </Field>
    </Form>
  );
};

export default MessageForm;
