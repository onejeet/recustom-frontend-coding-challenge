import React from "react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

export default {
  title: "Core/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        default: "contained",
        options: ["contained", "outlined", "text"],
      },
    },
    color: {
      control: {
        type: "select",
        default: "primary",
        options: ["primary", "secondary", "success", "info"],
      },
    },
    size: {
      control: {
        type: "select",
        default: "medium",
        options: ["small", "medium", "large"],
      },
    },
    loading: { control: { type: "boolean" } },
    sx: { control: { type: "object" } },
    disabled: { control: { type: "boolean" } },
    fullWidth: { control: { type: "boolean" } },
    href: { control: { type: "string" } },
    startIcon: { control: { type: "text" } },
    endIcon: { control: { type: "text" } },
  },
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Primary: any = Template.bind({});
Primary.parameters = {
  controls: {
    include: ["variant", "color", "disabled", "size", "loading", "fullWidth"],
  },
};
Primary.args = {
  color: "primary",
  variant: "contained",
  title: "Primary",
};

export const Secondary: any = Template.bind({});
Secondary.parameters = {
  controls: {
    include: ["variant", "color", "disabled", "size", "loading", "fullWidth"],
  },
};
Secondary.args = {
  color: "secondary",
  variant: "contained",
  title: "Secondary",
};

export const Error: any = Template.bind({});
Error.parameters = {
  controls: {
    include: ["variant", "color", "disabled", "size", "loading", "fullWidth"],
  },
};
Error.args = {
  color: "error",
  variant: "contained",
  title: "Button",
};

export const Success: any = Template.bind({});
Success.parameters = {
  controls: {
    include: ["variant", "color", "disabled", "size", "loading", "fullWidth"],
  },
};
Success.args = {
  color: "success",
  variant: "contained",
  title: "Button",
};

export const Warning: any = Template.bind({});
Warning.parameters = {
  controls: {
    include: ["variant", "color", "disabled", "size", "loading", "fullWidth"],
  },
};
Warning.args = {
  color: "warning",
  variant: "contained",
  title: "Button",
};
