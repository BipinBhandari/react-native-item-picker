# react-native-item-picker

Picker component for react-native applications

### Features:

 * Multiselect option
 * Full customisation

### Install:
```
npm i react-native-item-picker
```

### Usage:
```
import Selector from "react-native-item-picker"
```

```
        <Selector
            titleStyle={{
                fontSize: 20,
                color: "#8CC8E3"
            }}
            title="Pick your language"
                  style={
                      {
                          marginTop: 120,
                          alignSelf: "center"
                      }
                  }
            collection={[
                {
                    id: 0,
                    name: "Nepali"
                },
                {
                    id:1,
                    name: "中国"
                },
                {
                    id:2,
                    name: "नेपाली"
                }
            ]}
        />

```

### Available Props:

 * collection: array of item (must be js object)
 * title
 * onSelected: callback function
 * titleStyle
 * style
 * selectedIndex: selected index (should be int)
 * multiSelect: boolean


Issues are here -> https://github.com/BipinBhandari/react-native-item-picker/issues
