import {StyleSheet} from 'react-native'

 const styles = StyleSheet.create({
flexDiv: {
    flex: 1, flexDirection: 'row',
    width:350
},
titleBox:{
    fontSize:12,
    fontWeight:"bold",
    width:"45%",
    color:'green',
    marginBottom:"-1px"

},
infectedTitle: {

    fontSize:22,fontWeight:"bold", color:"red"
},
notInfectedTitle: {
    fontSize:22,fontWeight:"bold", color:"#00b33e"
}

});


export default styles;
