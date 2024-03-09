import React from "react";
import { ToastProps } from "./Toast.types";
import SquareCheckFilled from "../Icons/SquareCheckFilled";
import CircleCheckFilled from "../Icons/CircleCheckFilled";
import { Box, IconButton, Slide, Typography, useTheme } from "@mui/material";
import CrossOutlined from "../Icons/CrossOutlined";
import Button from "../Button";
import AlertBellFilled from "../Icons/AlertBellFilled";
import WarningTriangleFilled from "../Icons/WarningTriangleFilled";
import Avatar from "../Avatar";

const Toast: React.FC<ToastProps> = ({
  type = "success",
  variant = "minimal",
  message,
  ctaProps,
  avatarProps = {},
  onClose,
  autoClose = true,
  autoCloseDuration,
}) => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    if (autoClose) {
      let timerId: any;
      if ((type === "success" || type === "error") && visible) {
        timerId = setTimeout(() => {
          onClose?.();
          setVisible(false);
        }, autoCloseDuration || 6000);
      }
      return () => {
        if (timerId) {
          return clearTimeout(timerId);
        }
      };
    }
  }, [visible]);

  const isMinimal = React.useMemo(() => {
    return variant === "minimal" && !ctaProps?.onClick;
  }, [variant, ctaProps]);

  const isMessage = React.useMemo(() => {
    return type === "message" || avatarProps?.title;
  }, [type, avatarProps]);

  const color = React.useMemo(() => {
    const colorType = isMessage ? "message" : type;
    switch (colorType) {
      case "success":
        return {
          text: "success.light",
          ctaBtn: "success",
          border: "success.light",
        };
      case "error":
        return {
          text: "error.light",
          ctaBtn: "error",
          border: "error.light",
        };
      case "message":
        return {
          text: "grey.500",
          ctaBtn: "#FFFF00",
          border: "secondary.light",
        };
    }
  }, [type, isMessage]);

  const Icon = React.useMemo(() => {
    switch (type) {
      case "success":
        return isMinimal ? (
          <SquareCheckFilled
            sx={{ color: "success.light", fontSize: "32px" }}
          />
        ) : (
          <Box display="flex" alignItems="center" mb="8px">
            <CircleCheckFilled
              sx={{ color: "success.light", fontSize: "18px" }}
            />
            <Typography
              fontSize="14px"
              color="success.light"
              ml="8px"
              fontWeight={600}
            >
              Success
            </Typography>
          </Box>
        );
      case "error":
        return isMinimal ? (
          <AlertBellFilled sx={{ color: "error.light", fontSize: "32px" }} />
        ) : (
          <Box display="flex" alignItems="center" mb="8px">
            <WarningTriangleFilled
              sx={{ color: "error.light", fontSize: "18px" }}
            />
            <Typography
              fontSize="14px"
              color="error.light"
              ml="8px"
              fontWeight={600}
            >
              Attention
            </Typography>
          </Box>
        );
    }
    return;
  }, [type, variant, isMinimal]);

  return (
    <Slide direction="right" in={visible} mountOnEnter unmountOnExit>
      <Box
        sx={{
          borderRadius: "6px",
          border: `1px solid`,
          borderColor: color?.border,
          p: "16px",
          display: "flex",
          alignItems: "start",
          justifyContent: "space-between",
          maxWidth: "500px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isMinimal ? "row" : "column",
            alignItems: "start",
          }}
        >
          {isMessage ? (
            <Avatar
              {...avatarProps}
              summary={
                <Box display="flex" flexDirection="column">
                  <Typography fontSize="14px" color={color?.text}>
                    {message}
                  </Typography>
                  {ctaProps?.onClick && (
                    <Button
                      variant="contained"
                      {...ctaProps}
                      sx={{
                        mt: "10px",
                        maxWidth: "fit-content",
                        backgroundColor: color?.ctaBtn,
                        color: "common.black",
                        ...(ctaProps.sx || {}),
                      }}
                      title={ctaProps?.title || "Action"}
                    />
                  )}
                </Box>
              }
            />
          ) : (
            <>
              {" "}
              {Icon}
              <Box>
                <Typography
                  fontSize="14px"
                  color={color?.text}
                  ml={isMinimal ? "10px" : "0px"}
                >
                  {message}
                </Typography>
              </Box>
              {!isMinimal && ctaProps?.onClick && (
                <Button
                  variant="contained"
                  // @ts-ignore
                  color={color?.ctaBtn}
                  {...ctaProps}
                  sx={{ mt: "10px", ...(ctaProps.sx || {}) }}
                  title={ctaProps?.title || "Action"}
                />
              )}
            </>
          )}
        </Box>

        <CrossOutlined
          sx={{
            color: color?.text,
            fontSize: "18px",
            cursor: "pointer",
            ml: "10px",
          }}
          onClick={() => {
            onClose?.();
            setVisible(false);
          }}
        />
      </Box>
    </Slide>
  );
};

export default Toast;
