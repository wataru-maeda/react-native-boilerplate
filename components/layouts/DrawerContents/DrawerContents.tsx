import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default function DrawerContents() {
  return (
    <SafeAreaView>
      <View style={styles.root}>
        <Text>Side Menu Contents</Text>
      </View>
    </SafeAreaView>
  );
}
