const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '746d8face8mshab0e39a4c671f10p11674ajsn20780d54ee10',
        'X-RapidAPI-Host': 'animi.p.rapidapi.com'
    }
};

fetch('https://animi.p.rapidapi.com/name?name=Levi', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));