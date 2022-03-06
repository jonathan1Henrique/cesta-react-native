import React from 'react'
import { Image } from 'react-native';

import topoImg from '../../../../assets/topo.png';
import Texto from '../../../component/Texto';
import estilos from '../estilos/estilos'

export default function Topo({topo}){
    return <>
        <Image source={topoImg} style={estilos.topo}/>
        <Texto style={estilos.titulo}> { topo.titulo }</Texto>
    </>
}