import { ButtonProps } from "@mui/material";
import { AvatarProps } from "../Avatar/Avatar.types";

export interface ToastProps {
    type: 'error' | 'success' | 'info' | 'message';
    variant?: 'minimal' | 'expanded';
    message?: string;
    ctaProps?: ButtonProps;
    avatarProps?: Omit<AvatarProps, 'summary'>;
    onClose?:() => void;
    autoClose?: boolean;
    autoCloseDuration?: number
}