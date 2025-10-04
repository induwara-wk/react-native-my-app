import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../assets/img/logo_2.png'
import {Link} from 'expo-router' 

const Home = () => {
  return (
    <View style={styles.container}>
        <Image source={Logo} style={styles.image}/>
        <Text style={[styles.title, {color: 'black'}]}> The Number 01 </Text>
        <Text style={{marginTop: 10, marginBottom: 30}}> Reading List App </Text>

        <Link style={styles.link} href='/about'> About Page </Link>
        <Link style={styles.link} href='/contact'> Contact Page </Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18
    },
    image:{
      height: 150,
      width: 150,
      margin: 30
    },
    link:{
        marginVertical: 10,
        borderBottomWidth: 1
    }
})