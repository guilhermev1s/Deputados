import React, { useEffect, useState } from 'react'
import { Text } from 'react-native-paper'
import apiDeputados from '../services/apiDeputados'

const Detalhes = ({navigation, route}) => {

    const [deputado, setDeputado] = useState({})

    useEffect(() => {
        const id = route.params.id
        apiDeputados.get('/deputados/' + id).then(resultado => {
            setDeputado(resultado.data.dados)
        })
    }, [])

    return (
        <>
            <Text>Nome: {deputado.nomeCivil}</Text>
            <Text>Cpf: {deputado.cpf}</Text>
            <Text>Sexo: {deputado.sexo}</Text>
        </>
    )
}

export default Detalhes