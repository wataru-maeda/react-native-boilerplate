import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import useColorScheme from '@/hooks/useColorScheme';
import { colors } from '@/theme';

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
  const { isDark } = useColorScheme();
  return (
    <SafeAreaView>
      <View style={[styles.root, isDark && { backgroundColor: colors.blackGray }]}>
        <Text style={{ color: isDark ? colors.white : colors.black }}>Side Menu Contents</Text>
      </View>
    </SafeAreaView>
  );
}
