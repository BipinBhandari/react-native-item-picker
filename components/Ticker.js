import React from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import styles from './Styles/TickerStyle'
import images from '../Themes/Images'

export default class Ticker extends React.Component {

  // Prop type warnings
  static propTypes = {
    label: React.PropTypes.string.isRequired,
    isSelected: React.PropTypes.bool,
    onPress: React.PropTypes.func.isRequired
  }

  // Defaults for props
  static defaultProps = {
    isSelected: false
  }

  render () {
    return (
      <TouchableHighlight underlayColor={'rgba(0,0,0,0)'} style={styles.container} onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text id="label" style={[styles.label, this.props.isSelected?styles.tickedText:null]}>{this.props.label}</Text>
          {this.props.isSelected && <Image style={styles.tick} source={images.tick}/>}
        </View>
      </TouchableHighlight>
    )
  }
}
