import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './src/components/buttons/Button';
import { textStyles } from './src/theme/styles/text';

export default function App() {
  const [loaded] = useFonts({
    "sk-modernist": require('./assets/fonts/Sk-Modernist-Regular.otf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={textStyles.big}>Header 1</Text>
      <Text style={textStyles.medium}>Header 2</Text>
      <Text style={textStyles.small}>Header 3</Text>
      <Text style={textStyles.bodyRegular}>Body Regular</Text>
      <Text style={textStyles.subHeader}>Sub Header</Text>
      <StatusBar style="auto" />
      <Text style={textStyles.subHeader}>==============</Text>

      <Button type="primary" label='Create an account' />
      <Button type="secondary" label='Login' />
      <Button type="secondary" label='Login to my account' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sk-modernist'
  }
});