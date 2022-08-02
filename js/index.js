let letsSnokButton = document.getElementById('letsSnokButton');
let hittaButton = document.getElementById('hittaButton');
let eniroButton = document.getElementById('eniroButton');
let googleName = document.getElementById('googleName');
let lastName = document.getElementById('lastName');
let googlePlace = document.getElementById('googlePlace');
let infoHit = document.getElementById('infoHit');
let mySearchId = document.getElementById('mySearchId');
let site = 'site:'

//gritacademys:
let rapidKey1 = '3f9bd85274msh385703fb1051c43p18fbefjsn727a304158bc';
//hawkhbgs:
let rapidKey2 = 'd736dfd4c8mshc48f0e64ce8adb7p127683jsn38f664fc3f3c';

let rapidKeyArray = [rapidKey1, rapidKey2];
let randomNumber1or2 = Math.floor(Math.random()*2);
console.log(rapidKeyArray[randomNumber1or2])

//Fetch google

//gritacademys mail //
// const options = {
//     method: 'GET',
//     headers: {
//         'X-User-Agent': 'desktop',
//         'X-Proxy-Location': 'EU',
//         'X-RapidAPI-Key': '3f9bd85274msh385703fb1051c43p18fbefjsn727a304158bc',
//         'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
//     }
// };

// hawkhbg //
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-User-Agent': 'desktop',
// 		'X-Proxy-Location': 'EU',
// 		'X-RapidAPI-Key': 'd736dfd4c8mshc48f0e64ce8adb7p127683jsn38f664fc3f3c',
// 		'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
// 	}
// };

// Random api from grit och hawkhbg every loadscreen: //
const options = {
	method: 'GET',
	headers: {
		'X-User-Agent': 'desktop',
		'X-Proxy-Location': 'EU',
		'X-RapidAPI-Key': rapidKeyArray[randomNumber1or2],
		'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
	}
};



letsSnokButton.onclick = function (e) {
    let firstInfo = document.getElementById('firstInfo');
    firstInfo.style.display = 'none'
    console.log(site + " " + mySearchId.value + " " + googleName.value + " " + googlePlace.value + " ")
    e.preventDefault();
    infoHit.textContent = "";
    console.log(mySearchId.value)

    const nattaSnokDiv = document.getElementById('nattaSnokDiv');

    nattaSnokDiv.textContent = "";

    let NattaSnokBild = document.createElement('img');
    NattaSnokBild.setAttribute('src', 'img/gif/Nattagif.gif');
    NattaSnokBild.setAttribute('height', '150')
    nattaSnokDiv.append(NattaSnokBild);

    let NattaSnokBild2 = document.createElement('img');
    NattaSnokBild2.setAttribute('src', 'img/gif/giphy.gif');
    NattaSnokBild2.setAttribute('height', '150')

    
    setTimeout(() => nattaSnokDiv.removeChild(NattaSnokBild), 5000);
    setTimeout(() => nattaSnokDiv.textContent = `Nu ska vi hitta den jäveln på www.${mySearchId.value}!`, 5000);
    setTimeout(() => nattaSnokDiv.append(NattaSnokBild2), 5000);


    let clearButton = document.createElement('button');
    let clearButtonTex = document.createTextNode('Ny sökning')
    clearButton.setAttribute('id', 'clearButton');
    clearButton.append(clearButtonTex);

    setTimeout(() => nattaSnokDiv.append(clearButton), 5000);
    clearButton.onclick = function (e){
        location.reload();
    };

// TheFetch:
    let url = `https://google-search3.p.rapidapi.com/api/v1/search/q=site:+${mySearchId.value}+${googleName.value}+${lastName.value}+${googlePlace.value}=100&lr=lang_se&hl=se&cr=SE`

    fetch(url, options)
        .then(response => response.json())
        .then(
            function (response) {
                console.log(response)
                for (let i = 0; i < response.results.length; i++) {
                    pDiv = document.createElement('p');
                    let anchor = document.createElement('a');
                    anchor.setAttribute('target', '_blank');
                    pDiv2 = document.createAttribute('p');
                    pDiv.style.borderBottom = "1px solid white";
                    infoHit.append(pDiv);
                    pDiv.innerText +=  i + 1 + '. ' + `${response.results[i].title}
                     ${response.results[i].description}
                     `
                    anchor.href = response.results[i].link
                    anchor.innerText = response.results[i].link
                    pDiv.append(anchor);
                    pDiv.setAttribute('id', "link" + [i])
                    console.log(response.results[i]);
                    console.log(url)
                };
            }
        )
        .catch(err => console.error(err));
}
