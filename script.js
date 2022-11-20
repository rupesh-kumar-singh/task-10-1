const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1fc633802cmshc2de7bdfe6f2a4ap1d1fe5jsn538aac1315d4',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};

let tbody = document.querySelector("tbody");
let h1 = document.querySelector(".h1");
let btn_1 = document.querySelector('.btn-1')	
let btn_2 = document.querySelector('.btn-2')	



let counter = 0;
let plus = 1;
   async function cronedata(){
         let covid = await fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options)
         let responce = await covid.json()
        let output = responce.countries_stat;
        

        output.slice(counter,plus).forEach((res)=>{
            const{active_cases,cases,country_name,deaths,deaths_per_1m_population
,   tests_per_1m_population,total_cases_per_1m_population,total_recovered,total_tests

              }=res;


                  
let crete_tr = document.createElement("tr");
 h1.textContent=country_name;
let crete_td_1 = document.createElement("td")
          crete_td_1.textContent=active_cases;
let crete_td_2 = document.createElement("td")
crete_td_2.textContent = cases;
let crete_td_3 = document.createElement("td")
crete_td_3.textContent = deaths;
let crete_td_4 = document.createElement("td")
crete_td_4.textContent=deaths_per_1m_population;
let crete_td_5 = document.createElement("td");
crete_td_5.textContent=tests_per_1m_population;
let crete_td_6 = document.createElement("td");
crete_td_6.textContent=total_cases_per_1m_population;
let crete_td_7 = document.createElement("td");
crete_td_7.textContent=total_recovered;
let crete_td_8 = document.createElement("td");
crete_td_8.textContent=total_tests;


crete_tr.append(crete_td_1,crete_td_2,crete_td_3,crete_td_4,crete_td_5,crete_td_6,crete_td_7,crete_td_8);
tbody.appendChild(crete_tr)

        })
    }

    cronedata()


btn_2.addEventListener('click',()=>{
    tbody.innerHTML=""
counter++;
plus++
cronedata()
})

btn_1.addEventListener('click',()=>{
    tbody.innerHTML=""
    counter--;

    plus--;
    cronedata();
})