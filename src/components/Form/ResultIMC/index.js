import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Share } from 'react-native'
import { ThemeContext } from '../../../context/ThemeContext'

export const ResultImc = (props) => {

  const { theme } = React.useContext(ThemeContext)

  const styles = StyleSheet.create({
    text: {
      color: theme.primary,
      fontWeight: '700',
      fontSize: 18,
      alignSelf: 'center',
      marginTop: 10,
    },
    btnText: {
      color: "#fff",
      fontWeight: '700',
      fontSize: 18,
      alignSelf: 'center',
    },
    shareButton: {
      backgroundColor: theme.primary,
      padding: 10,
      alignItems: 'center',
      borderRadius: 4,
      marginTop: 10
    }
  })

  const onShare = async () => {
    await Share.share({
      message: `Meu imc hoje é: ${props.resultImc} e sou classificado como: ${props.classification}`
    })
  }

  return (
    <>
      <View >
        <Text style={styles.text}>{props.classification}</Text>
        <Text style={styles.text}>{props.messageResultImc}</Text>
        <Text style={styles.text}>{props.resultImc}</Text>
      </View>
      {props.resultImc ?
        <TouchableOpacity style={styles.shareButton}
          onPress={onShare}>
          <Text style={styles.btnText}>Share</Text>
        </TouchableOpacity>
        : null}
    </>
  )
}
