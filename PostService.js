// api.js
export const fetchScreens_ByPostId = async (id) => {
  try {
    const response = await fetch(
      "http://appcursosbackexpress-production.up.railway.app/Post/Screens/"+ id,
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
      "http://appcursosbackexpress-production.up.railway.app/ScreenPost/"+ id,
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
        "http://appcursosbackexpress-production.up.railway.app/Post",
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
