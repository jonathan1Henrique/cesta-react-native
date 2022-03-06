import React from "react";
import { View, Image } from "react-native";

import Texto from "../../../component/Texto";
import estilos from "../estilos/estilos";

export default function ({ item: { nome, imagem} }) {
  return (
    <>
      <View key={nome} style={estilos.item}>
        <Image source={imagem} style={estilos.imageItens} />
        <Texto style={estilos.nomeItens}>{nome}</Texto>
      </View>
    </>
  );
}
