import React from "react";
import { View, FlatList } from "react-native";
import Texto from "../../../component/Texto";

import listaItens from "./listaItens";
import Topo from "./topo";
import Detalhes from "./detalhes";
import estilos from "../estilos/estilos";

export default function Itens({ itens, topo, detalhes }) {
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={listaItens}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo topo={topo} />
              <View>
                <Detalhes detalhes={detalhes} />
                <Texto style={estilos.tituloItens}> {itens.titulo} </Texto>
              </View>
            </>
          );
        }}
      />
    </>
  );
}
