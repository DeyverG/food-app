import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { theme } from '../../theme/theme';
import { textStyles } from '../../theme/styles/text';

interface IButton {
  type?: 'primary' | 'secondary' | 'small-primary' | 'white' | "small-secondary";
  label?: string;
  action?: () => {};
}



// color: string,
// borderRadius: number,
// tamañoBoton : number,
// tipo de boton: son 5
// background
// underline
const width = Dimensions.get("window").width;
export const Button = ({ type, label, action }: IButton) => {


  //crear theme los estilos de los diferentes tipos de boton
  switch (type) {
    case 'primary':
      return (
        <LinearGradient
          colors={['#F9881F', '#FF774C']}
          locations={[0.23, 0.79]}
          start={[0, 0]}
          end={[1, 0.08]}
          style={styles.primary}
        >
          <Text style={[textStyles.subHeader, styles.textPrimary]}>{label}</Text>
        </LinearGradient>
      )
    case 'secondary':

      return (
        <View style={styles.secondary}>
          <Text style={[textStyles.subHeader, styles.textSecondary]} >{label}</Text>
        </View>
      )

    default:
      return <Text>asdasd</Text>
  }
};

const styles = StyleSheet.create({
  primary: {
    width: width * 0.9,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  textPrimary: {
    color: theme.colors.white.light,
    textAlign: "center"
  },
  secondary: {
    width: width * 0.9,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  textSecondary: {
    color: theme.colors.primaryColor.dark,
    textAlign: "center"
  }
});