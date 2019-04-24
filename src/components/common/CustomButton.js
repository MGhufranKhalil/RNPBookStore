import React from "react";
import { Text, TouchableOpacity } from "react-native";
const CustomButton = ({ onPress, children }) => {
const { buttonStyle, textStyle } = styles;
return (
// <TouchableOpacity onPress={() => console.log('pressed')} style={buttonStyle}>
<TouchableOpacity onPress={onPress} style={buttonStyle}>
<Text style={textStyle}>{children}</Text>
</TouchableOpacity>
);
};
const styles = {
buttonStyle: {
flex: 1,
alignSelf: "stretch",
backgroundColor: "#FFF",
borderRadius: 5,
borderWidth: 1,
borderColor: "#007aff",
marginLeft: 5,
magrinRight: 5
},
textStyle: {
alignSelf: "center",
color: "#007aff",
fontSize: 16,
fontWeight: "600",
paddingTop: 10,
paddingBottom: 10
}
};
// export default CustomButton;
export { CustomButton };