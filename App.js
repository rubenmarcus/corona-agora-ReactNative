import React from 'react';
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      dataState: {},
      loading: true
  }
  }

  componentDidMount(){
    return fetch('https://covid19.mathdro.id/api/countries/br')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({dataState: responseJson, loading: false});
      })
      .catch((error) =>{
        console.error(error);
      });
  }


  renderItem(data) {
    return <TouchableOpacity style={{backgroundColor: 'transparent'}}> <View>
                    <Text>{data.confirmed.value}</Text>
                    <Text>{data.deaths.value}</Text>
                </View>
                </TouchableOpacity>
}


render() {
  //Destruct pokeList and Loading from state.
  const { dataState, loading } = this.state;

  //keyExtractor used for giving a unique identifier for each item.
  if(!loading) {

    const val = `Confirmados: ${dataState.confirmed.value} , Mortes:${dataState.deaths.value}, recovered:${dataState.recovered.value}  `;

    return  val
  } else {
      return <ActivityIndicator />
  }
}

}