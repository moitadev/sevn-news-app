import axios from "axios";

export const fetchMainArticles = async () => {
    console.log("fetching main articles");
    const response = await axios.get("http://localhost:3000/home/main-articles");
    const mainArticles = response.data;

    console.log("main articles: ", mainArticles);
    return mainArticles;
}