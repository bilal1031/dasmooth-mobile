import React, { Children } from "react";
import { Button } from "react-native-paper";
import { colors } from "../../utilities/colors";

export default function Selectable({
  bgColor = null,
  onPress,
  icon = null,
  isActive = false,
  textColor = null,
  style,
  contentStyle,
  labelStyle,
  disabled = false,
  children,
}) {
  return (
    <Button
      disabled={disabled}
      style={{
        width: "100%",
        height: 60,
        backgroundColor: isActive || !bgColor ? colors.teal100 : bgColor,
        color: isActive ? "white" : "black",
        justifyContent: "flex-start",
        marginVertical: 5,
        borderColor: "#D9D9D9",
        borderWidth: 0.5,
        ...style,
      }}
      contentStyle={{
        width: "100%",
        height: 60,
        justifyContent: "flex-start",
        ...contentStyle,
      }}
      labelStyle={{
        color: textColor ? textColor : isActive ? "white" : colors.teal100,
        ...labelStyle,
      }}
      onPress={onPress}
      icon={() => icon}
    >
      {children}
    </Button>
  );
}
