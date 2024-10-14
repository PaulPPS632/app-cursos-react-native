import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = 'user';
const TOKEN_KEY = 'token';

export const saveUserAndToken = async (datos) => {
  try {
    await AsyncStorage.multiSet([
      [USER_KEY, JSON.stringify(datos.usuario)],
      [TOKEN_KEY, datos.token]
    ]);
  } catch (error) {
    console.error('Error guardando usuario y token:', error);
  }
};

export const getUserAndToken = async () => {
    try {
      const values = await AsyncStorage.multiGet([USER_KEY, TOKEN_KEY]);
      const user = JSON.parse(values[0][1]); // Obtener y parsear el valor de 'user'
      const token = values[1][1]; // Obtener el valor de 'token'
      return { user, token };
    } catch (error) {
      console.error('Error obteniendo usuario y token:', error);
      return null;
    }
};

export const clearUserAndToken = async () => {
  try {
    await AsyncStorage.multiRemove([USER_KEY, TOKEN_KEY]);
    console.log('Usuario y token eliminados correctamente');
  } catch (error) {
    console.error('Error eliminando usuario y token:', error);
  }
};
