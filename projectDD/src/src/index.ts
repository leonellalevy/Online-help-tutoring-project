import axios from 'axios';

function fetchData() {
  axios.get('/api/data')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}
greet("mmhvhjvghvhgamamam");
fetchData();
console.log("pabo");

function greet(name: string) {
    console.log(`aa, ${name}!`);
  }
  
  greet("po favo");