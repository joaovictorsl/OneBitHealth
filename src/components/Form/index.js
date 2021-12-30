import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Vibration, Pressable, Keyboard } from 'react-native'
import { ThemeContext } from '../../context/ThemeContext'
import { ResultImc } from './ResultIMC'
import { StyledInput } from './StyledInput'
import { IMC } from '../../utils/IMC'

export const Form = () => {

  const { theme } = React.useContext(ThemeContext)

  const [height, setHeight] = React.useState(null)
  const [weight, setWeight] = React.useState(null)
  const [classification, setClassification] = React.useState(null)
  const [messageImc, setMessageImc] = React.useState("Preencha o peso e a altura.")
  const [imc, setImc] = React.useState(null)
  const [textButton, setTextButton] = React.useState("Calcular IMC")
  const [errorMessage, setErrorMessage] = React.useState(null)

  function updateText(newImc) {
    if (newImc) {
      setHeight(null)
      setWeight(null)
      setErrorMessage(null)
      setImc(newImc)
      setClassification(IMC.imcClassification(newImc))
      setMessageImc('Seu IMC é igual a:')
      setTextButton("Calcular novamente")
    }
    else {
      setImc(null)
      Vibration.vibrate([0, 150, 150, 150])
      setErrorMessage('*Campo obrigatório*')
      setClassification(null)
      setTextButton("Calcular")
      setMessageImc("Preencha o peso e a altura.")
    }
  }

  const styles = StyleSheet.create({
    calcButton: {
      backgroundColor: theme.primary,
      padding: 10,
      alignItems: 'center',
      borderRadius: 4,
    },
    calcButtonText: {
      color: '#fff',
      fontWeight: 'bold'
    },
    form: {
      width: "100%",
      height: "75%",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      backgroundColor: theme.backgroundLighter,
      justifyContent: 'space-evenly'
    }
  })

  return (
    <Pressable style={styles.form}
      onPress={Keyboard.dismiss}>
      <StyledInput
        label='Altura (m)'
        placeholder='Ex. 1.75'
        keyboardType='numeric'
        value={height}
        errorMessage={errorMessage}
        onChangeText={(e) => setHeight(e)}
      />

      <StyledInput
        label='Peso (kg)'
        placeholder='Ex. 75'
        keyboardType='numeric'
        value={weight}
        errorMessage={errorMessage}
        onChangeText={(e) => setWeight(e)}
      />

      <TouchableOpacity
        onPress={() => updateText(IMC.calcImc(height, weight))}
        style={styles.calcButton}
      >
        <Text style={styles.calcButtonText}>{textButton}</Text>
      </TouchableOpacity>
      <ResultImc
        classification={classification}
        messageResultImc={messageImc}
        resultImc={imc}
      />
    </Pressable>
  )
}
