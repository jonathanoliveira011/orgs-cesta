import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Topo from './components/Topo';
import Detalhes from './components/Detalhes';
import Botao from "../../components/Botao";

export default function Cesta({topo, detalhes}) {
    return <> 
            <Topo {...topo}/> 
            <View style={estilos.cesta}>
            <Detalhes {...detalhes}/>
            <Botao {...detalhes}/>
        </View>        
    </>
}

const estilos = StyleSheet.create({
    cesta: {

        paddingVertical: 8,
        paddingHorizontal: 16,

    },  
});