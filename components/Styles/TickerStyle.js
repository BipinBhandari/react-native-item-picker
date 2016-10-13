import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
      // backgroundColor: "green",
      marginTop: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
  },
  label:{
      // backgroundColor: "yellow",
    textAlign: 'center',
    color: "#C5E4F2",
    fontWeight: "300",
    fontSize: 20,

      width: 100
  },
  tick:{
      position: "absolute",
      // backgroundColor: "grey",
    height: 16,
      marginTop:4,
    resizeMode: "contain",
      marginLeft: -30
  },
  tickedText:{
    color: "white"
  }
})
