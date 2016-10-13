import React from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import styles from './Styles/TickerStyle'

export default class Ticker extends React.Component {

  // Prop type warnings
  static propTypes = {
    label: React.PropTypes.string.isRequired,
    isSelected: React.PropTypes.bool,
    onPress: React.PropTypes.func.isRequired,
      labelStyle: React.PropTypes.object,
      tickImage: React.PropTypes.any,
      tickImageStyle: React.PropTypes.any,
      checkedLabelStyle: React.PropTypes.any,
      tickContainerStyle: React.PropTypes.any
  }

  // Defaults for props
  static defaultProps = {
    isSelected: false,
      tickImage: require("./tick.png")
  }

  render () {
      const {tickImage, labelStyle, checkedLabelStyle, tickImageStyle, tickContainerStyle} = this.props;

    return (
      <TouchableHighlight underlayColor={'rgba(0,0,0,0)'} style={[styles.container, tickContainerStyle]} onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text
              id="label"
              style={[styles.label, labelStyle, this.props.isSelected?styles.tickedText:null, this.props.isSelected&&checkedLabelStyle?checkedLabelStyle:null]}
          >

              {this.props.label}

              </Text>

            {this.props.isSelected && <Image style={[styles.tick, tickImageStyle]} source={tickImage}/>}

        </View>
      </TouchableHighlight>
    )
  }
}
