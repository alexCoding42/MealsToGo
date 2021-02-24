import React from "react";
import styled, { useTheme } from "styled-components/native";

interface ISpacerProps {
  position: string;
  size: string;
  children: React.ReactNode;
  theme?: string;
}

type SizeVariantOptions = {
  [key: string]: number;
};

type PositionVariantOptions = {
  [key: string]: string;
};

const sizeVariant: SizeVariantOptions = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant: PositionVariantOptions = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position: string, size: string, theme: any) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

export const Spacer = ({ position, size, children }: ISpacerProps) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};
