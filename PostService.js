// api.js
export const fetchScreens_ByPostId = async (id) => {
  try {
    const response = await fetch(
      "http://10.0.2.2:3000/Post/Screens/"+ id,
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
export const fetchScreen = async (id) => {
  try {
    console.log("el id entrante");
    console.log(id);
    const response = await fetch(
      "http://10.0.2.2:3000/ScreenPost/"+ id,
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
export const fetchPosts= async () => {
  try {
    const response = await fetch(
      "http://10.0.2.2:3000/Post",
    );
    console.log("llama fetchPost");
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


// FormData:
export const createPost = async (title, TipoPostsId, description, image) => {
  try {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("TipoPostsId", TipoPostsId);
    formData.append("description", description);
    if (image) {
      const mimeType = image.uri.endsWith(".png") ? "image/png" : "image/jpeg";
      formData.append("image", {
        uri: image.uri,
        type: mimeType,
        name: image.uri.split('/').pop() || "image.jpg",
      });

    }

    const response = await fetch("http://10.0.2.2:3000/Post/", {
      method: "POST",
      body: formData,
    });
    

    if (!response.ok) {
      throw new Error("Error al crear el post");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creando el post:", error);
    return null;
  }
};