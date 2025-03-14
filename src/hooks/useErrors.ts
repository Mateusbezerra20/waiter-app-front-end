import { useCallback, useState } from "react";

interface IError {
  field: string;
  message: string;
}

export function useErrors() {
  const [errors, setErrors] = useState<IError[]>([]);

  const addError = useCallback(
    ({ field, message }: IError) => {
      const errorAlreadyExists = errors.find((error) => error.field === field);

      if (errorAlreadyExists) {
        return;
      }

      setErrors((prevState) => [...prevState, { field, message }]);
    },
    [errors],
  );

  const removeError = useCallback((fieldname: string) => {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== fieldname),
    );
  }, []);

  const getErrorMessageByFieldName = useCallback(
    (fieldname: string) => {
      return errors.find((error) => error.field === fieldname)?.message;
    },
    [errors],
  );

  return {
    addError,
    removeError,
    getErrorMessageByFieldName,
    errors,
  };
}
