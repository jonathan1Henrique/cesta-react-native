import React from "react";
import estilos from "../estilos/estilos";
import { Image, View, TouchableOpacity } from "react-native";
import Texto from "../../../component/Texto";

export default function Detalhes({ detalhes }) {
  return (
    <View style={estilos.cesta}>
      <Texto style={estilos.nome}> {detalhes.nome} </Texto>
      <View style={estilos.fazenda}>
        <Image style={estilos.imageFazenda} source={detalhes.imageFazenda} />
        <Texto style={estilos.nomeFazenda}> {detalhes.nomeFazenda} </Texto>
      </View>
      <Texto style={estilos.descricao}>{detalhes.descricao}</Texto>
      <Texto style={estilos.preco}>{detalhes.preco}</Texto>

      <TouchableOpacity style={estilos.botao} onPress={() => {}}>
        <Texto style={estilos.textoBotao}>{detalhes.botao}</Texto>
      </TouchableOpacity>
    </View>
  );
}
