
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 10 + 1);  // getRandomNumber a kadar bir random sayi tutup uzerine 1 ekleme fonksiyonu

  }

  const data = [{ 
    id: 1,
    title: "Liverpool",
    color: "orange",
    textColor: "black",
    value: getRandomNumber(),
    maxValue: 3200

  },
  {
    id: 2,
    title: "Real Madrdid",
    color: "violet",
    textColor: "white",
    value: getRandomNumber(),
    maxValue: 4200

  },
  {
    id: 3,
    title: "Milan",
    color: "black",
    textColor: "red",
    value: getRandomNumber(),
    maxValue: 5200

  },
  {
    id: 5,
    title: "PSG",
    color: "blue",
    textColor: "white",
    value: getRandomNumber(),
    maxValue: 3900

  },
  {
    id: 1,
    title: "Bayern Munich",
    color: "red",
    textColor: "black",
    value: getRandomNumber(),
    maxValue: 6200

  },
  ]

  const setBarDataRandom = () => {
    let data = [...barData];

    data.map((item) => {
      //console.log(item.value);
      return (item.value += getRandomNumber())   // consolda get random aldik siraladik
    })
    setbarData(data)  // yukarda verdigimiiz value degerinin max olani degistirme islemi
  }

  function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'asc') ? (comparison * -1) : comparison
      );
    };
  }

  useEffect(() => {

    const arr = [...barData];
    let timer;
    timer = setInterval(() => {

      arr.forEach((item, index) => {

        if (item.value > item.maxValue) {
          let data = [...barData];
          data.map((item) => {
            return (item.value = item.maxValue);

          })
          setbarData(data)

          clearInterval(timer);
        } else {
          setBarDataRandom();
        }


      })

    }, 300)
  }, [])


  const [barData, setbarData] = useState(data)

  return (
    <div className="App">
      <h1>React Yarisan Barlar Uygulamasi </h1>
      {
        barData.sort(compareValues("value", "asc")).map((item, index) => {
          return (
            <div key={index} className='chart' style={{ backgroundColor: item.color, color: item.textColor, width: item.value >= item.maxValue ? "100%" : (item.value * 100) / item.maxValue + "%" 
       ,     transform:`translateY(${index*62+20+ "px"})`
            
            }}>
              { "En degerli" +  " " + (index+1)+ ". " + ".sirkettir." + " " + item.title + " " + "Sirket Degeri : " + item.value}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
//rastgele sayi tanimlayip valuleri random yaptik getRandomnumber ile
// barData.sort islemi ile siralamayi gerceklestirdik bu yapiyi https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/ sitesinden aldik
// transform ozelligi ile aralarinda olan bosluk ozelligi uyguladik index degerine gore