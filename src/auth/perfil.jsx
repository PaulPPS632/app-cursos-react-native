import React from 'react';
import { Text, ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'; 
import { Link } from 'expo-router'; 

export default function Perfil() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.profileContainer}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>W</Text>
          </View>
          <View style={styles.userInfoContainer}>
            <Text style={styles.username}>williams456</Text>
            <Text style={styles.userHandle}>@williams456</Text>
          </View>
        </View>

        <View style={styles.optionsContainer}>
          <View style={styles.optionGroup}>
            {[
              { name: 'Login', icon: 'log-in-outline', link: '/login' },
              { name: 'My Perfil', icon: 'person-outline' },
              { name: 'Favoritos', icon: 'heart-outline' }
            ].map((option, index, array) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.option,
                  index === array.length - 1 && { borderBottomWidth: 0 }
                ]}
                onPress={option.link ? null : () => { /* Acciones para las opciones que no son link */ }}
              >
                {option.link ? (
                  <Link href={option.link} style={styles.linkOption}>
                    <View style={styles.optionContent}>
                      <Ionicons name={option.icon} size={24} color="white" />
                      <Text style={styles.optionText}>{option.name}</Text>
                    </View>
                  </Link>
                ) : (
                  <View style={styles.optionContent}>
                    <Ionicons name={option.icon} size={24} color="white" />
                    <Text style={styles.optionText}>{option.name}</Text>
                  </View>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.optionsContainer}>
          <View style={styles.optionGroup}>
            {[
              { name: 'Settings', icon: 'settings-outline' },
              { name: 'Notifications', icon: 'notifications-outline' }
            ].map((option, index, array) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.option,
                  index === array.length - 1 && { borderBottomWidth: 0 }
                ]}
              >
                <View style={styles.optionContent}>
                  <Ionicons name={option.icon} size={24} color="white" />
                  <Text style={styles.optionText}>{option.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.optionsContainer}>
          <View style={styles.optionGroup}>
            <TouchableOpacity style={styles.logoutOption}>
              <SimpleLineIcons name="logout" size={20} color="red" />
              <Text style={styles.logoutText}>Cerrar Sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>v1.1.1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#333',
  },
  scrollViewContent: {
    paddingBottom: 50,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    backgroundColor: '#76c7c0',
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    fontSize: 30,
    color: '#fff',
  },
  userInfoContainer: {
    flexDirection: 'column',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  userHandle: {
    fontSize: 14,
    color: '#ccc',
  },
  optionsContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#1a1a2e',
    borderColor: '#000',
    borderWidth: 1,
    padding: 5,
    borderRadius: 7,
    marginBottom: 10,
  },
  optionGroup: {
    marginBottom: 5,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  linkOption: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start', // Cambia esto
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Cambia esto
    width: '100%',
  },
  optionText: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 10,
    flex: 1, // Añade esta propiedad
  },
  rightIcon: {
    marginLeft: 'auto', // Asegúrate de que este estilo esté presente
  },
  logoutOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  logoutText: {
    fontSize: 14,
    color: 'red',
    marginLeft: 10,
  },
  versionContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  versionText: {
    fontSize: 12,
    color: '#fff',
  },
});