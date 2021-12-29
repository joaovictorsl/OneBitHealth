import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
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
    }
  })

  return (
    <View>
      <Text style={styles.text}>
        {props.classification}
      </Text>
      <Text style={styles.text}>
        {props.messageResultImc}
      </Text>
      <Text style={styles.text}>
        {props.resultImc}
      </Text>
    </View>
  )
}
