import { Icon, Box } from "@mui/material";
import { Children } from "react";
import { BaseProps } from "@mui/types";
import { DataType } from "csstype";

interface IconBoxProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}
export default function IconBox({ icon, children }: IconBoxProps) {}
