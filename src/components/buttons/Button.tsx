import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

interface IButton {
  type?: '1' | '2' | '3';
  label?: string;
  action?: () => {};
}



// color: string,
// borderRadius: number,
// tamañoBoton : number,
// tipo de boton: son 5
// background
// underline
export const Button = ({ type, label, action }: IButton) => {


  //crear theme los estilos de los diferentes tipos de boton
  switch (type) {
    case '1':

      break;
    case '2':

      break;

    default:
      break;
  }


  return (
    <TouchableOpacity>
      <View style={{ backgroundColor: "#1B2" }}>
        <Text>Button</Text>
      </View>
    </TouchableOpacity>
  );
};