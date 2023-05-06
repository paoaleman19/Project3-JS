
const CompanyId = 338;
​
fetch('http://127.0.0.1:5000/data?CompanyId=' + CompanyId)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // hacer algo con los datos recibidos
  })
  .catch(error => console.error(error));