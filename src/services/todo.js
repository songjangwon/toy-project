import axios from 'axios';
 
export function getTodos() {
    // return axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
    return axios.get('http://localhost:8000/todo/');
    
}

export function addTodo(data) {
  // return axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
  return axios.post('http://localhost:8000/todo/',data);
  
}

export function removeTodo(id) {
  // return axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
  return axios.delete('http://localhost:8000/movies/'+id);
  
}

export function modifyTodo(id) {
  // return axios.get('https://jsonplaceholder.typicode.com/posts/' + postId);
  return axios.put('http://localhost:8000/movies/'+id);
  
}