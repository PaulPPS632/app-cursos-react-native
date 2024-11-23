// Obtener los tipos de posts
export const fetchTipoPosts = async () => {
    try {
      const response = await fetch("http://10.0.2.2:3000/TipoPost/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Tipos de posts obtenidos:", data);
      return data;
    } catch (error) {
      console.error("Error fetching tipos de posts:", error);
      return [];
    }
  };
  