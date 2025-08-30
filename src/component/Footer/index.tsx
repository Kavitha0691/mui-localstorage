import React from "react";
import { FooterProps } from "@/utils/types";
import { Box, Typography } from "@mui/material";

const Footer = ({ developer = "Kavi", version = "1.0.0" }: FooterProps) => {
  return (
    <Box
      component="footer"
      data-testid="footer"
      role="contentinfo"
      sx={{
        width: "100%",
        py: 3,
        mt: "auto",
        backgroundColor: "grey.100",
        textAlign: "center",
        color: "text.secondary",
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} {developer} | Version {version}
      </Typography>
    </Box>
  );
};

export default Footer;
