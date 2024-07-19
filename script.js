let i = document.querySelector('img');
let p = document.getElementById('j');
let c = 1;
function gen() //Function for generating a random joke
{
    p.innerText=''
    i.style.display = 'block';
    fetch('https://icanhazdadjoke.com/', //Api for random joke
        {
            method: 'GET', //since we are requesting for jokes
            headers:
            {
                'Accept': 'application/json' //we are accepting json format
            }
        })
        .then(res => res.json()) //converting the data into json format
        .then(data => {
            i.style.display = 'none';
            p.innerText = data.joke;
        })
}
