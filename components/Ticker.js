import React from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import styles from './Styles/TickerStyle'

export default class Ticker extends React.Component {

  // Prop type warnings
  static propTypes = {
      label: React.PropTypes.string.isRequired,
      isSelected: React.PropTypes.bool,
      onPress: React.PropTypes.func.isRequired,

      itemLabelStyle: React.PropTypes.object,
      itemTickImage: React.PropTypes.any,
      itemTickImageStyle: React.PropTypes.any,
      itemCheckedLabelStyle: React.PropTypes.any,
      itemTickContainerStyle: React.PropTypes.any
  }

  // Defaults for props
  static defaultProps = {
    isSelected: false,
      itemTickImage: require("./tick.png")
  }

  render () {
      let {itemTickImage, itemLabelStyle, itemCheckedLabelStyle, itemTickImageStyle, itemTickContainerStyle, isSelected} = this.props;

    return (
      <TouchableHighlight underlayColor={'rgba(0,0,0,0)'} style={[styles.container, itemTickContainerStyle]} onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text
              id="label"
              style={[styles.label, itemLabelStyle, this.props.isSelected?styles.tickedText:null, this.props.isSelected&&itemCheckedLabelStyle?itemCheckedLabelStyle:null]}
          >

              {this.props.label}

              </Text>

            {this.props.isSelected && <Image style={[styles.tick, itemTickImageStyle]} source={itemTickImage}/>}

        </View>
      </TouchableHighlight>
    )
  }
}
