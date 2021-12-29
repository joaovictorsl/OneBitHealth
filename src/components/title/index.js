import React from 'react'
import { View, Text } from 'react-native'
import { ThemeContext } from '../../context/ThemeContext'

export const Title = () => {

  const { theme } = React.useContext(ThemeContext)

  return (
    <View>
      <Text style={{ color: theme.primary, ...theme.title }}>
        OneBitHealth
      </Text>
    </View>
  )
}
