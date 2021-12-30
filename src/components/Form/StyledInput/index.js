import React from 'react'
import { StyleSheet, Text, TextInput } from 'react-native'
import { ThemeContext } from '../../../context/ThemeContext'

export const StyledInput = ({ label, placeholder, keyboardType, value, onChangeText, errorMessage }) => {

  const { theme } = React.useContext(ThemeContext)

  const styles = StyleSheet.create({
    errorMessage: {
      fontSize: 14,
      color: 'red',
      fontWeight: 'bold'
    }
  })

  return (
    <>
      <Text style={{ color: theme.textColor, fontWeight: '700', fontSize: 16 }}>
        {label}
      </Text>
      <TextInput
        placeholderTextColor='#949494'
        placeholder={placeholder}
        keyboardType={keyboardType}
        style={{ color: theme.textColor, borderBottomColor: theme.primary, borderBottomWidth: 1 }}
        value={value}
        onChangeText={e => onChangeText(e)}
      />
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
    </>
  )
}