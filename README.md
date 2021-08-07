1-qadam 
doim proekt bajarilganda:
{import React from 'react';
import ReactDOM from 'react-dom'} - lar yozilishi kerak va ular tagidan
ReactDOM.render(
  <React.StrictMode>
    <App \>
  </React.StrictMode>,
  document.getElementById('root')
); lar yoziladi va proekt bajariladi
2-qadam 
ReacrDOM.render - malumotni index.js faylini ichiga joylaydi;
documnet.getElementById('root)
public faylini ichidan index.html faylini ichidan id si root bo'lgan div fayllarni olib keladi 
3-qadam
 reactda export, import qilishni o'rgandik;
export qilganda importda xoxlagan nom bersa bo'ladi,
msalan: {export defult pdp;
import first from './App'}-shunday yozsa bo'ladi
4-qadam
export ikki xil bo'ladi:export defult ... bilan export{frist-name,last-name} 
1)faylda export defultni faqat bir marta bersa bo'ladi;
bitta funksiya kelsa export defultdan ... foydalansa yaxshi;
bir nechta funksiya kelsa export{...,...,...} dan foydalanish kerak;
5-qadam
propslar haqida o'rgandik;
html tagi ichida {this.props.title} berib 
inex.js fayli ichida  
  <React.StrictMode>
  <App title='..'> ichiga birorta nom bersa html tagidagi {this.props.title} o'rniga borib joylashadi;
6-qadam
react da class dan foydalanish uchun manabunday yoziladi 
class ... extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}
export default ...;