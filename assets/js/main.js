const url = 'assets/data.json'
const chartBars = document.getElementById('chartBars')
const chartLegend = document.getElementById('chartLegend')

fetch(url)
.then(resp => resp.json())
.then(chartData => chartData.map(item => {
    if('amount' in item && 'day' in item){
      chartBars.appendChild(createBar('span', item.amount))
      chartLegend.appendChild(createLabel('span', item.day))
    }
  })
)

function createBar(element, amount){
  let bar = document.createElement(element)
  bar.style.height = (amount * 1.8)+ '%';

  if(amount >= 50){
    bar.classList.add('high')
  }

  return bar
}

function createLabel(element, title){
  let label = document.createElement(element)
  label.innerHTML = title
  return label
}