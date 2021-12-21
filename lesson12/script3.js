



let apidata;

axios.get('http://api.weatherapi.com/v1/forecast.json?key=70e82c944c434a2e86193406210712&q=Almaty&days=7&aqi=no&alerts=no')
.then((res) => {
    console.log(res.data)


    apidata = res.data;


    // Call Drow Chart 
})
.catch((err) => {
    console.log(err)
})


const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];
const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

const config = {
    type: 'line',
    data: data,
    options: {}
};


const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
