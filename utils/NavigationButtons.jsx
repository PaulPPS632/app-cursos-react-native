// // components/NavigationButtons.jsx

// import { TouchableOpacity } from "react-native";
// import { Link } from "expo-router";
// import AntDesign from '@expo/vector-icons/AntDesign';
// import { StyleSheet, Text, View } from "react-native";
// import { CircleInfoIcon, HomeIcon } from "./Icons";

// const NavigationButtons = () => {
//   return (
//     <View style={styles.navigationButtons}>

//       <Link href="/cursos" asChild>
//         <TouchableOpacity style={styles.button}>
//           <HomeIcon/>
//           <Text style={styles.buttonText}></Text>
//         </TouchableOpacity>
//       </Link>

//       <Link href="/postCurso" asChild>
//         <TouchableOpacity style={styles.button}>
//           <AntDesign name="filetext1" size={24} color="white" />
//           <Text style={styles.buttonText}>Post Curso</Text>
//         </TouchableOpacity>
//       </Link>

//       <Link href="/about" asChild>
//           <TouchableOpacity style={styles.button}>
//           <CircleInfoIcon />
//           <Text style={styles.buttonText}></Text>
//         </TouchableOpacity>
//       </Link>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   navigationButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 10,
//     marginTop: 20,
//     marginBottom: 0,
//     backgroundColor: '#222',
//   },
//   button: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#444',
//     paddingVertical: 8,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     marginLeft: 5,
//     fontSize: 16,
//   },
// });

// export default NavigationButtons;
