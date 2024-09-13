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
export const fetchPosts= async () => {
    try {
      const response = await fetch(
        "http://10.0.2.2:3000/Post",
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