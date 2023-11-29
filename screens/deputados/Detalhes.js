import React, { useEffect, useState } from 'react'
import { Button, Card, Modal, PaperProvider, Portal, Text } from 'react-native-paper'
import apiDeputados from '../../services/apiDeputados'
import {  ScrollView, StyleSheet, View } from 'react-native'
import {  VictoryChart, VictoryBar, VictoryTheme } from 'victory';





function soma(despesas) {
    let soma = 0
    {
      despesas.map(item => {
        soma += item.valorLiquido
      })
      return soma
    }
  }
  
  
  for(let i=1; i<6; i++){

    const desp = await apiDeputados.get(`/deputados/${id}/despesas?ano=2023&mes=${i}`)
    dep['despesas'].push(desp.data.dados)
  }

const Detalhes = ({ navigation, route}) => {
    
    const [deputado, setDeputado] = useState({})
    const [visible, setVisible] = useState(false);
    const [despesas, setGastos] = useState([])
    




    useEffect(() => {
        const id = route.params.id
        apiDeputados.get('/deputados/' + id).then(resultado => {
            setDeputado(resultado.data.dados)
        })
        apiDeputados.get(`/deputados/${id}/despesas?itens=100`).then(resultado => {
            const despesas = resultado.data.dados.map(item => ({
                nome: item.valorDocumento,
                despesas: item.tipoDespesa,
            }))
            setGastos(despesas)
        })
    }, [])
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };


    return (
        <>
            {deputado.id &&
                <ScrollView>

                    <Card style={styles.Card}>
                        <Card.Cover
                            source={{ uri: deputado.ultimoStatus.urlFoto }}
                        />
                        <Card.Content>
                            <Text variant="titleLarge">{deputado.ultimoStatus.nome}</Text>
                        </Card.Content>
                    </Card>

                    <Text>Informações</Text>

                    <Card style={{ marginBottom: 15 }} mode='outlined'>
                        <Card.Content style={{ marginBottom: 15 }} mode='outlined'>
                            <Text variant="bodyMedium">Email: {deputado.ultimoStatus.gabinete.email}</Text>
                            <Text variant="bodyMedium">Data de nascimento: {deputado.dataNascimento}</Text>
                            <Text variant="bodyMedium">Telefone: {deputado.ultimoStatus.gabinete.telefone}</Text>
                            <Text variant="bodyMedium">Situação: {deputado.ultimoStatus.situacao}</Text>
                        </Card.Content>
                    </Card>

                    <PaperProvider>
                        <Portal>
                            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                <Text>Example Modal.  Click outside this area to dismiss.</Text>
                                <VictoryPie
                            colorScale={["tomato"]}
                            data={gastos}
                            x="gastos"
                            y="nome"
                            labelRadius={70}
                            labelComponent={<VictoryTooltip />}

                        />

                                
                            </Modal>
                        </Portal>
                        <Button style={{ marginTop: 30 }} onPress={showModal}>Gastos</Button>
                    </PaperProvider>

                    <View>
                    </View>


                </ScrollView>
            }

        </>
    )
}

export default Detalhes

const styles = StyleSheet.create({
    Card: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: 200,




    },

})

