import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/SelectorStyle'
import Ticker from './Ticker'

export default class Selector extends React.Component {

  // Prop type warnings
  static propTypes = {
    collection: React.PropTypes.array,
    title: React.PropTypes.string.isRequired,
    onPress: React.PropTypes.func,
      titleStyle:React.PropTypes.object,
      style: React.PropTypes.object
  }

  // Defaults for props
  static defaultProps = {
    collection: [],
    onPress: ()=>{console.log("On press was ignored.")},
    titleField: "name",
  }

  render () {
      const {titleStyle, style} = this.props;

    return (
      <View style={[styles.container, style]}>
        <Text style={[styles.title, titleStyle]}>{this.props.title}</Text>
        {
          this.props.collection.map((item, i)=> <Ticker key={i} label={item[this.props.titleField]||"undefined"} isSelected={item.isSelected} onPress={this.props.onPress.bind(null, item)}/>)
        }
      </View>
    )
  }
}
