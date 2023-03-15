import React from "react";
import {Image,View, StyleSheet} from "react-native"
import Texto from "../../../components/Texto"

export default function Itens({titulo, lista}){

return <>

    <Texto style={estilos.titulo}>{ titulo }</Texto>
    { lista.map(({nome, imagem}) => {

        return <View key={nome}>
                <Texto>{ nome }</Texto>
                <Image source={imagem}/>
            </View>

    }) }

</>
}

const estilos = StyleSheet.create({

titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
}

})