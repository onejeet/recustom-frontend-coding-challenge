import React from "react";
import JSToast from "./Toast";
import { ToastProps } from "./Toast.types";

export default {
  title: "Core/Toast",
  component: JSToast,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["success", "error", "info", "message"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["minimal", "expanded"],
      },
    },
    message: { control: { type: "text" } },
  },
};

const Template = (args: ToastProps) => <JSToast {...args} />;

export const successToast: any = Template.bind({});
successToast.parameters = {
  controls: {
    include: ["type", "variant", "message"],
  },
};
successToast.args = {
  type: "success",
  variant: "minimal",
  autoClose: false,
  message:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
};

export const SuccessToastWithCTA: any = Template.bind({});
SuccessToastWithCTA.parameters = {
  controls: {
    include: ["type", "variant", "message"],
  },
};
SuccessToastWithCTA.args = {
  type: "success",
  variant: "minimal",
  autoClose: false,
  ctaProps: {
    title: "Save",
    onClick: () => null,
  },
  message:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
};

export const errorToast: any = Template.bind({});
errorToast.parameters = {
  controls: {
    include: ["type", "variant", "message"],
  },
};
errorToast.args = {
  type: "error",
  variant: "minimal",
  autoClose: false,
  message:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
};

export const errorToastWithCTA: any = Template.bind({});
errorToastWithCTA.parameters = {
  controls: {
    include: ["type", "variant", "message"],
  },
};
errorToastWithCTA.args = {
  type: "error",
  variant: "minimal",
  autoClose: false,
  ctaProps: {
    title: "Action",
    onClick: () => null,
  },
  message:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
};

export const messageToast: any = Template.bind({});
messageToast.parameters = {
  controls: {
    include: ["type", "variant", "message"],
  },
};
messageToast.args = {
  type: "error",
  variant: "minimal",
  autoClose: false,
  avatarProps: {
    title: "Jeet S",
  },
  message:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
};

export const messageToastWithCTA: any = Template.bind({});
messageToastWithCTA.parameters = {
  controls: {
    include: ["type", "variant", "message"],
  },
};
messageToastWithCTA.args = {
  type: "error",
  variant: "minimal",
  autoClose: false,
  ctaProps: {
    title: "Action",
    onClick: () => null,
  },
  avatarProps: {
    title: "Jeet S.",
    src: "https://avatars.githubusercontent.com/u/13834745?v=4",
  },
  message:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
};
