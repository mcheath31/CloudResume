window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})
const functionApiUrl = ''
const localfunctionApi = 'http://localhost:7071/api/mcheathresume';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("website called function API.");
        count = response.resumeCounter;
        document.getElementById("1").innerText = count;
    }).catch(function(error){
        console.log(error);
    })
    return count;
}