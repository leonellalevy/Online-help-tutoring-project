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
greet("lololololof");
fetchData();
console.log("Fsdfsfsf");

function greet(name: string) {
    console.log(`grtgrjijjiji, ${name}!`);
  }
  
  greet("po favo");