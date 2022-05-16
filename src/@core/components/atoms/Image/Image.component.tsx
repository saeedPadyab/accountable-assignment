import React, { useState } from "react";
import type * as Stitches from "@stitches/react";
import { styled } from "../../../themes/stitches.config";
import fallback from "@core/icons/fallback.jpeg";

const StyledImage = styled("img", {
  // Reset
  verticalAlign: "middle",
  maxWidth: "100%",
});

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  css?: Stitches.CSS;
}

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ src, ...rest }, ref) => {
    const [isError, setError] = useState(false);

    const handleError = () => {
      setError(true);
    };
    return (
      <StyledImage
        ref={ref}
        {...rest}
        src={isError ? fallback : src}
        onError={handleError}
      />
    );
  }
);
export default Image;
