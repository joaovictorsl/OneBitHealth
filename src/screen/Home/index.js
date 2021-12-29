import React from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar as RNStatusBar } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { ThemeContext } from "../../context/ThemeContext";
import { Title } from '../../components/title'
import { Main } from '../../components/Main'
import { ThemeSwitcher } from "../../components/ThemeSwitch";

export const Home = () => {

  const { theme } = React.useContext(ThemeContext)

  const isDarkMode = theme.name == 'Dark'

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : null
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ThemeSwitcher />
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <Title />
      <Main />
    </SafeAreaView>
  )
}
