import { theme } from "../theme";
import { StyleSheet } from "react-native";

export const textStyles = StyleSheet.create({
  big: {
    fontSize: theme.fontSize.big,
    fontWeight: "700",
    lineHeight: 31,
    letterSpacing: -0.3,
    color: theme.colors.text.default,
  },
  medium: {
    fontSize: theme.fontSize.medium,
    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: -0.3,
    color: theme.colors.text.default,
  },
  small: {
    fontSize: theme.fontSize.small,
    fontWeight: "400",
    lineHeight: 21,
    color: theme.colors.text.default,
  },
  subHeader: {
    fontSize: theme.fontSize.medium,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: -0.1,
    color: theme.colors.text.default,
  },
  bodyRegular: {
    fontSize: theme.fontSize.regular,
    fontWeight: "400",
    lineHeight: 16.5,
    color: theme.colors.text.default,
  },
});
