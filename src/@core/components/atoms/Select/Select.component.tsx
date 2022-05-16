import React from "react";
import Flex from "../Flex";
import Text from "../Text";
import StyledInput from "./styled";

interface ISelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  helper?: string;
}
const Select = React.forwardRef<any, ISelectProps>(
  ({ helper, ...rest }, forwardedRef) => {
    return (
      <Flex direction="column" css={{ mb: "$3" }}>
        <StyledInput {...rest} ref={forwardedRef} />
        {helper && (
          <Flex css={{ mt: "$1", flex: 1 }}>
            {helper && (
              <Text size="1" css={{ color: "$gray", flex: 1 }}>
                {helper}
              </Text>
            )}
          </Flex>
        )}
      </Flex>
    );
  }
);

export default Select;
