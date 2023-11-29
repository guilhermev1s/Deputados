import React, { useEffect, useState } from 'react'
import { Card, Text } from 'react-native-paper'
import apiDeputados from '../services/apiDeputados'
import { Image } from 'react-native'

const Deputados = ({navigation}) => {

    const [deputados, setDeputados] = useState([])

    useEffect(() => {
        apiDeputados.get('/deputados').then(resultado => {
            setDeputados(resultado.data.dados)
        })
    }, [])

    return (
        <>
            {deputados.map(item => (
                <Card style={{ marginBottom: 15 }} onPress={()=>navigation.push('detalhes', {id: item.id})} >
                    <Image
                        source={{ uri: item.urlFoto }}
                        style={{ width: 300, height: 400 }}
                    />
                    <Card.Content>
                        <Text variant="titleLarge"> {item.nome}</Text>
                        <Text variant="bodyMedium">{item.siglaPartido}</Text>
                    </Card.Content>
                </Card>
            ))}
        </>
    )
}

export default Deputados