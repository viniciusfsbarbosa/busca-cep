import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Layout } from '@ui-kitten/components';

export default function App() {
  return (
    <Layout style={styles.container} level='1'>

    <Button style={styles.button}>
      ACTIVE
    </Button>

    <Button style={styles.button} disabled={true}>
      DISABLED
    </Button>

  </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
