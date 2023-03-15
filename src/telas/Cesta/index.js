import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import Topo from './components/Topo';
import Detalhes from './components/Detalhes';
import Botao from "../../components/Botao";
import Itens from './components/Itens';
import { ScrollView } from 'react-native-web';

export default function Cesta({topo, detalhes}) {
    return <ScrollView> 
                <Topo {...topo}/> 
                <View style={estilos.cesta}>
                    <Detalhes {...detalhes}/>
                    <Botao {...detalhes}/>
                    <Itens {...itens}/>
                </View>        
            </ScrollView>
}

const estilos = StyleSheet.create({
    cesta: {

        paddingVertical: 8,
        paddingHorizontal: 16,

    },  
});