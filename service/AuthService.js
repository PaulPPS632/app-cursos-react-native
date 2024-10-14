// api.js

export const login = async (email, password) => {
      try {
        const response = await fetch ( 
          "http://10.0.2.2:3000/entidad/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data); 
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};
  
export const createEntidad = async (nombre, apellido, email, password) => {
    try {
      const response = await fetch("http://10.0.2.2:3000/entidad", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          apellido,
          email,
          password,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error creating entidad:", error);
      return null;
    }
};
  
export const getEntidadById = async (id) => {
    try {
      const response = await fetch(`http://10.0.2.2:3000/entidad/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching entidad by ID:", error);
      return null;
    }
};