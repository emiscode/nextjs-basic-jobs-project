import React from "react";
import NextLink from "next/link";

const StyledLink = React.forwardRef(({ onClick, href, children }, ref) => {
  return (
    <span href={href} onClick={onClick} ref={ref} style={{ color: "#653CAD" }}>
      {children}
    </span>
  );
});

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href}>
      <StyledLink {...props}>{children}</StyledLink>
    </NextLink>
  );
}
