import axios from 'axios';
const URL="http://localhost:8200";

export const getPosts=() =>axios.get(URL);