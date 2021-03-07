import React from "react";
import styled, { useTheme } from "styled-components/native";

type SpacerProps = {
  position: string;
  size: string;
  children: React.ReactNode;
  theme?: string;
};

type SizeVariantProps = {
  [key: string]: number;
};

type PositionVariantProps = {
  [key: string]: string;
};

const sizeVariant: SizeVariantProps = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant: PositionVariantProps = {
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

type SpacerViewProps = {
  variant: string;
};

const SpacerView = styled.View<SpacerViewProps>`
  ${({ variant }) => variant};
`;

export const Spacer = ({
  position = "top",
  size = "small",
  children,
}: SpacerProps) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};
