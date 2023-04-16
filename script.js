let musicas = [
    {titulo:'Vida Loka Pt.1', artista:"Racionais MC's", src:'audio/1.mp3'},
    {titulo:'Vida Loka Pt.2', artista:"Racionais MC's", src:'audio/2.mp3'},
    {titulo:'A vida é desafio', artista:"Racionais MC's", src:'audio/3.mp3'},
    {titulo:'Nego Drama', artista:"Racionais MC's", src:'audio/4.mp3'},
    {titulo:'Estilo Cachorro', artista:"Racionais MC's", src:'audio/5.mp3'},
    {titulo:'Capítulo 4, Vesículo 3', artista:"Racionais MC's", src:'audio/6.mp3'}
];

let musica = document.querySelector('audio');
let indexMusica = 0;
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 5;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 5){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}



function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}









