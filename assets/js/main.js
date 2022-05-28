const url = 'assets/data.json'
const chartBars = document.getElementById('chartBars')
const chartLegend = document.getElementById('chartLegend')

fetch(url)
.then(resp => resp.json())
.then(chartData => chartData.map(item => {
    if('amount' in item && 'day' in item){
      chartBars.appendChild(createBar('span', item))
      chartLegend.appendChild(createLabel('span', item.day))
    }
  })
)

document.addEventListener('DOMContentLoaded', function(){
  increaseNumberAnimation('totalAmount', '$')
  increaseNumberAnimation('totalBalance', '$')
})

function createBar(element, item){
  let bar = document.createElement(element)
  bar.style.height = (item.amount * 1.6)+ '%';
  bar.dataset.amount = item.amount

  if(item.amount >= 50){
    bar.classList.add('high')
  }

  return bar
}

function createLabel(element, title){
  let label = document.createElement(element)
  label.innerHTML = title
  return label
}

function increaseNumberAnimation(idElement, decorator=''){
  let element = document.getElementById(idElement)

  if(element != null){
    let limit = Number((element.innerHTML).replace(/[^\d.-]/g, ''))
    incrementNumber(0, limit, element, decorator)
  }
}

function incrementNumber(index, limit, element, decorator=''){
  if(index <= limit){
    element.innerHTML = `${decorator}${index}`
    setTimeout(() => incrementNumber(index + 15, limit, element, decorator), 10)
  }else{
    element.innerHTML = `${decorator}${limit}`
  }
}