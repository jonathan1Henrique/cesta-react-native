import React from "react";
import { View } from "react-native";
import Itens from "./component/itens";

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <>
      <View>
        <Itens itens={itens} topo={topo} detalhes={detalhes}/>
      </View>
    </>
  );
}
