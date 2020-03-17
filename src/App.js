import React from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import { TextInput, List , Text} from 'react-native-paper';
import { apiCall } from './api/calls'
import { API_PATHS } from './api/const'
import styles from './style'
import CountryMainData from './components/home/country_main_data'

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      dataState: {},
      loading: true
  }
  }

 componentDidMount(){
    // return fetch('https://covid19.mathdro.id/api/countries/br')
      // .then((response) => response.json())
      // .then((responseJson) => {

      //   this.setState({dataState: responseJson, loading: false});
      // })
      // .catch((error) =>{
      //   console.error(error);
      // });

    return apiCall(API_PATHS.apiBr).then((response) => response.json())
    .then((responseJson) => {
      this.setState({dataState: responseJson, loading: false});
    })
    .catch((error) =>{
      console.error(error);
    });

  }


  renderItem(data) {

    const mainData = {
      tested: {
        style: styles.infectedTitle,
        title: 'Testados',
        data: data.totalTested,
        icon: 'emoticon-cool-outline'
      },
      testedNotInfected: {
        style: styles.testedNotInfected,
        title: 'Testados e Não Infectados',
        data: data.testedNotInfected,
        icon: 'emoticon-cool-outline'
      }
    }

  
    return    <List.Section>
                <Text style={{fontSize:32,}}>Brasil</Text>
                <View style={styles.flexDiv} >
                  <CountryMainData  data={mainData.tested} />
                  <CountryMainData  data={mainData.testedNotInfected} />
                </View>
                <View style={styles.flexDiv} >
                </View>

                <View style={{width:150}} >
              <List.Subheader  style={styles.titleBox}>Testados e Não Infectados</List.Subheader>

                 <List.Item
                    title= {data.testedNotInfected}
                    titleStyle={styles.notInfectedTitle}
                    style={{backgroundColor:"#f4f4f4",width:"100%"}}
                   left={() => <List.Icon  color="#00b33e" icon="emoticon-cool-outline" />}
                />
        </View>
                

        <View style={{width:150}} >
                 <List.Subheader  style={{fontSize:12,fontWeight:"bold",marginBottom:"-30px",width:"35%"}}>Confirmados</List.Subheader>
                 <List.Item
                   title= {data.infected}
                   titleStyle={{fontSize:22,fontWeight:"bold", color:"red"}}
                   left={() => <List.Icon icon="emoticon-neutral-outline" />}
                />

</View>

<View style={{width:150}} >
              <List.Subheader  style={{fontSize:22,fontWeight:"bold",width:"35%",marginBottom:"-30px"}}>Mortes</List.Subheader>

                 <List.Item
                    title= {data.deceased}
                   left={() => <List.Icon color="red" icon="emoticon-dead-outline" />}
                />
                     </View>
              </List.Section>
}


render() {
  //Destruct pokeList and Loading from state.
  const { dataState, loading } = this.state;

  //keyExtractor used for giving a unique identifier for each item.
  if(!loading) {

    const val = `Confirmados:  ${dataState.testedNotInfected}   `;

    return  this.renderItem(dataState)
  } else {
      return <ActivityIndicator />
  }


//   if (!this.state.loading) {
//     return 'aaa';
//   }

//   return (
//     <TextInput
//       label='Email'
//       value='aaaaaaa'
//     />
//   );
// }
}
}
