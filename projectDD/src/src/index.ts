import axios from 'axios';

// import './main.tsx';
function fetchData() {
  axios.get('/api/data')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}
greet("fsd");
fetchData();
console.log("MAximmmm");

function greet(name: string) {
    console.log(`aa, ${name}!`);
  }
  
  greet("po letsgoo");

