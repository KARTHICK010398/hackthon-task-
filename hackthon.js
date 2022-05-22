const gteresult = async () => {
    const  BaseUrl = " https://api.nationalize.io";
    const inputValue = document.getElementById("inp-text").value;
    const response = await fetch(`${BaseUrl}/?name=${inputValue}`);
    const responsedata = await response.json();
    console.log(responsedata);
    const {country:{country_id,probability}} = responsedata;
    const divelement = document.createElement('div');
    divelement.style.height = '100px';
    divelement.style.width = '300px';
    divelement.style.border = '3px solid black';
    divelement.style.margin = '30px';
    divelement.style.padding = '16px';

    divelement.innerText = `
    country_id:${country_id},
    probability:${probability}`

    const personDa = document.getElementById('preson_data')
    personDa.innerHTML = " ";
    personDa.append(divelement)
    

}

gteresult();

const getbtn = document.getElementById('get-btn');
     getbtn.addEventListener("click",()=>{

});     





