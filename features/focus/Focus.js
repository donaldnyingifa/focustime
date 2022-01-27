import React, {useState} from 'react';
import { View, Text, StyleSheet,  Alert  } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton} from '../../components/RoundedButton'
import {fontSizes, spacing } from "../../utils/sizes";
import {colors} from '../../utils/colors';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null)

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What will you like to focus on? </Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.text} onSubmitEditing={
            ({ nativeEvent }) => {
              setSubject(nativeEvent.text)
            }
          }/>
          <RoundedButton size={50} title="+"  onPress={() => addSubject(subject)}
           />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    //padding: 50,
  },
  innerContainer: {
    flex:1,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    flex: 1,
    marginRight: 20
  }
});


