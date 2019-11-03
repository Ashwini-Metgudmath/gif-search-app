// Giphy gifs search app

// Giphy api to fetch gifs
const baseUrl = 'https://api.giphy.com/v1/gifs/search?api_key=cTrL9tqLStNGFinNfym4XmJjTeKPhZNS';

// calling Giphy search api
function getGiphyGifs(url)
{
    return fetch(url).then(response =>{
        return response.json();
    });
}

const searchTerm = "Smile";
const limit = 8;
const searchUrl = `${baseUrl}&q=${searchTerm}&limit=${limit}`;

// for default display
getGiphyGifs(searchUrl).then(data =>{
           return renderData(data.data);
        });


// search gifs based on keywords given in input field
const searchButton = document.querySelector('button');
console.log(searchButton);
searchButton.addEventListener('click', () => {
    const inputText = document.querySelector('#searchKey');
    const inputNumber = document.querySelector('#limit')
    console.log(inputText.value);
    console.log(inputNumber.value);
    if(inputText.value && inputNumber.value){
        const searchTerm = inputText.value;
        const limit = inputNumber.value;
        const searchUrl = `${baseUrl}&q=${searchTerm}&limit=${limit}`;
        getGiphyGifs(searchUrl).then(data =>{
            return renderData(data.data);
         });
    }else if(inputText.value){
        const searchTerm = inputText.value;
        const searchUrl = `${baseUrl}&q=${searchTerm}`;
        getGiphyGifs(searchUrl).then(data =>{
            return renderData(data.data);
         });
    }else if(inputNumber.value){
        const limit = inputNumber.value;
        const searchUrl = `${baseUrl}&q=${searchTerm}&limit=${limit}`;
        getGiphyGifs(searchUrl).then(data =>{
            return renderData(data.data);
         });
    }
})

// bind data to list
function renderData(data){
    const ul = document.querySelector('ul');
    ul.classList.add('container');
    ul.innerHTML = '';
    data.forEach(element => {
        const li = document.createElement('li');
        li.classList.add('giphy-dim');
        console.log(li);
        li.innerHTML = `<div><embed src="${element.images.downsized.url}"></div>`;
        ul.appendChild(li);
    });
     
}

