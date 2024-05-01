import { Button,  StyleSheet, Text, View } from 'react-native';
import React from "react";

export const Todo = ({ todo })=>{
    return (
        <View style = {styles.todo}>
         
          <Text >{todo.title}</Text>
         
        </View>
      );
    }
    
     const styles = StyleSheet.create({
      todo: {
        flexDirection: 'row',
        alignItems:'center',
        padding: 15,
        borderWidth: 1,
        borderColor: "#eee",
        borderRadius: 5, 
        
        justifyContent: "space-between",
        marginTop: 10
      },
      /*input:{
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#4657bd',
        width: '80%',
        padding: 10,
        fontSize: 16
      }*/ 
    });
    