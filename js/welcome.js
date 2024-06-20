function addWelcomeMessage() {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.textContent = 'Bem-vindo ao nosso site!';
    welcomeDiv.style.position = 'absolute';
    welcomeDiv.style.top = '3.5%';
    welcomeDiv.style.left = '10%';
    welcomeDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    welcomeDiv.style.padding = '10px';
    welcomeDiv.style.borderRadius = '5px';
    welcomeDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';


    document.body.appendChild(welcomeDiv); //???

    setTimeout(function() {
        welcomeDiv.style.display = 'none';
    }, 10000);
}



// Adiciona um listener para ajustar a margem ao redimensionar a janela
window.addEventListener('resize', function() {
    const welcomeDiv = document.querySelector('div');
    if (welcomeDiv) {
        if (window.innerWidth < 700) {
            welcomeDiv.style.top = '3.5%';
            welcomeDiv.style.left = '30%';
        }
        else if(window.innerWidth > 700 && window.innerWidth< 1000){
                welcomeDiv.style.top = '3.5%';
                welcomeDiv.style.left = '20%';
            }
            else{
                welcomeDiv.style.top = '3.5%';
                welcomeDiv.style.left = '10%';
            }
    }
});
