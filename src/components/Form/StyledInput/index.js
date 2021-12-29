import React from 'react'
import { Text, TextInput } from 'react-native'
import { ThemeContext, ThemeProvider } from '../../../context/ThemeContext'

export const StyledInput = ({ label, placeholder, keyboardType, value, onChangeText }) => {

  const { theme } = React.useContext(ThemeContext)

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
    </>
  )
}