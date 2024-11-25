export const createLeccion = async (PostsId, title, description, content) => {
    try {
      const response = await fetch('http://10.0.2.2:3000/ScreenPost/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          PostsId,
          title,
          description,
          content,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Error al crear la lección');
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
};
  