import { Button,  StyleSheet, TextInput, View, Alert } from 'react-native';
import {useState} from 'react';


export const AddTodo = ({ onSubmit })=>{
 const [value, setValue] = useState([]);

   const pressHandler = () => {
    
    if (value) {
    onSubmit(value);
    setValue('');
  } else {
    Alert.alert('Error', 'Name todo is empty')
     
  }
  } 

    return (
        <View style={styles.block}>
         
          <TextInput style={styles.input} 
           onChangeText={text=> setValue(text)}
          value={value}
          placeholder={"Edit name todo..."} 
          />
          <View>
              <Button title={"Додати"}  onPress={pressHandler} />
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      block: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center'
      },
      input:{
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#4657bd',
        width: '80%',
        padding: 10        
      }
    });
    
