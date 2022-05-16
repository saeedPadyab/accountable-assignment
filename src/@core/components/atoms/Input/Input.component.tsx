//@ts-nocheck
import React, { useRef } from "react";
import Flex from "../Flex";
import Text from "../Text";
import StyledInput from "./styled";

interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  helper?: string;
  isError?: string | boolean;
  errorMessage?: string;
}
const Input = React.forwardRef<any, IInputProps>(
  ({ helper, isError, errorMessage, ...rest }, forwardedRef) => {
    const { maxLength, required, placeholder } = rest;
    const countRef = useRef(null);

    return (
      <Flex direction="column" css={{ mb: "$3" }}>
        <StyledInput
          {...rest}
          ref={forwardedRef}
          onChange={(e) => {
            //@ts-ignore
            rest.onChange?.(e);
            if (countRef.current)
              countRef.current.innerText = e.target.value.length;
          }}
          as={!maxLength || maxLength < 100 ? "input" : "textarea"}
          placeholder={
            placeholder && required ? `${placeholder} *` : placeholder
          }
          isError={isError}
        />
        {(isError || helper || rest.maxLength) && (
          <Flex css={{ mt: "$1", flex: 1 }}>
            {helper && (
              <Text
                size="1"
                css={{ color: isError ? "$red" : "$gray", flex: 1 }}
              >
                {isError ? errorMessage : helper}
              </Text>
            )}
            {rest.maxLength && (
              <Flex css={{ ml: "auto" }}>
                <Text size="1" css={{ color: "$gray" }} ref={countRef}>
                  0
                </Text>

                <Text size="1" css={{ color: "$gray", ml: "auto" }}>
                  /{rest.maxLength}
                </Text>
              </Flex>
            )}
          </Flex>
        )}
      </Flex>
    );
  }
);

export default Input;
