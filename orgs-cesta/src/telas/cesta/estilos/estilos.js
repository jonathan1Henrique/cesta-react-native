import React from "react";
import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("screen").width;

export default StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
    // altura / largura (da imagem) * width ( gerado pelo Dimensions)
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    padding: 16,
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imageFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 16,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  botao: {
      marginTop: 16,
      backgroundColor: "#2A9F85",
      paddingVertical: 16,
      borderRadius: 6,
  },
  textoBotao: {
      textAlign: "center",
      color: "#FFFFFF",
      fontSize: 16,
      lineHeight: 26,
      fontWeight: "bold"
  },
  tituloItens:{
    color:"#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize:20,
    lineHeight: 32,
  },
  item:{
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center"
  },
  imageItens:{
    width: 46,
    height: 46,
  },
  nomeItens:{
      fontSize: 16,
      lineHeight: 26,
      marginLeft: 11,
      color:"#464646"
  },
});
