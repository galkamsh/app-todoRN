import { StyleSheet, Text, View, StatusBar } from 'react-native';

export const Navbar = () => {
 
    return (
        <View style={styles.navbar}>
         
          <Text style = {styles.text}>Todo App</Text>
        
        </View>
      );
    }
    
    const styles = StyleSheet.create({
        navbar: {
            height: 70,
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor:'#4657bd',
            paddingBottom: 10 
          },
          text:{
            color: '#fff',
            fontSize: 26
          }
    });
    