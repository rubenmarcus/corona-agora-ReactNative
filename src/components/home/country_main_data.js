import React from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import { TextInput, List , Text} from 'react-native-paper';


export default class CountryMainData extends React.Component {

  constructor(props){
    super(props);
  }

 componentDidMount(){


  }


viewObj(data){

    return (
                <View style={{width:150}} >
              <List.Subheader  style={{fontSize:22,fontWeight:"bold",width:"100%",marginBottom:"-30px"}}>{data.title}</List.Subheader>

                 <List.Item
                    title= {data.data}
                    titleStyle={data.style}
                   left={() => <List.Icon color="red" icon={data.icon} />}
                />
                </View>

    )
}




render() {

    const data = this.props.data;

    return  this.viewObj(data)
  
}
}
