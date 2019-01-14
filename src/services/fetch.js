import axios from "axios";

export async function getAllImages(url) {
    const result = await axios.get(url);
    console.log(result);
}

export async function uploadImage(url, payload) {
    const result = await axios.get(url, payload);
    console.log(result);
}