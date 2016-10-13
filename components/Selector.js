import React from 'react'
import { View, Text } from 'react-native'
import styles from './Styles/SelectorStyle'
import Ticker from './Ticker'

export default class Selector extends React.Component {
    constructor(props){
        super(props);
        this.state={
            collection: props.collection.map((item, index)=>{
                item._isSelected = index==this.props.selectedIndex;
                return item;
            })
        }
    }

  // Prop type warnings
  static propTypes = {
      collection: React.PropTypes.array,
      title: React.PropTypes.string.isRequired,
      onSelected: React.PropTypes.func,
      titleStyle:React.PropTypes.object,
      style: React.PropTypes.object,
      selectedIndex: React.PropTypes.number,
      multiSelect: React.PropTypes.bool
  }

  // Defaults for props
  static defaultProps = {
    collection: [],
    onSelected: ()=>{console.log("On press was ignored.")},
    titleField: "name",
      selectedIndex: -1,
      multiSelect: false
  }

  onPress = (item) => {
      console.log(item)

      this.setState({
          collection: this.state.collection.map(i => {
              if (i.id==item.id){
                i._isSelected = !i._isSelected;
                item._isSelected=i._isSelected;
                  return i;
              }else{
                  i._isSelected = i._isSelected && this.props.multiSelect;
              return i;
              }
          })
      })

      this.props.onSelected(item)
  }

  render () {
      const {titleStyle, style} = this.props;

    return (
      <View style={[styles.container, style]}>
        <Text style={[styles.title, titleStyle]}>{this.props.title}</Text>
        {
          this.props.collection.map(
              (item, i)=>
                  <Ticker
                      key={i}
                      label={item[this.props.titleField]||"undefined"}
                      isSelected={item._isSelected}
                      onPress={this.onPress.bind(null, item)}/>
          )
        }
      </View>
    )
  }
}
