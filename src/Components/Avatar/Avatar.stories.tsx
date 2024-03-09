import React from "react";
import MuiAvatar from "./Avatar";
import { AvatarProps } from "./Avatar.types";

export default {
  title: "Core/Avatar",
  component: MuiAvatar,
  argTypes: {
    title: { control: { type: "text" } },
    summary: { control: { type: "text" } },
    src: { control: { type: "text" } },
  },
};

const Template = (args: AvatarProps) => <MuiAvatar {...args} />;

export const WithTitleSummmary: any = Template.bind({});
WithTitleSummmary.parameters = {
  controls: {
    include: ["title", "summary", "src"],
  },
};
WithTitleSummmary.args = {
  src: "https://www.svgrepo.com/show/382100/female-avatar-girl-face-woman-user-7.svg",
  title: "Hella Harward",
  summary: "Administrator",
};
