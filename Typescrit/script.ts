document.addEventListener("DOMContentLoaded", () => {
    const registerBtn = document.getElementById("register");

        if(registerBtn) {
            registerBtn.addEventListener("click", () => {
        
                const url = "..//src/point.html";
               
                // Calcula as coordenadas para o centro da tela
                const screenWidth = window.screen.width;
                const screenHeight = window.screen.height;
                const windowWidth = 400; // Largura da janela
                const windowHeight = 300; // Altura da janela
                const left = (screenWidth - windowWidth) / 2;
                const top = (screenHeight - windowHeight) / 2;
    
                // Opções da nova janela
                const options = `width=${windowWidth},height=${windowHeight},left=${left},top=${top}`;
    
                // Abre a nova janela no centro da tela
                window.open(url, "_blank", options);
            });
        }
        

    function formatarDataHora(data) {
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0');
        const ano = data.getFullYear();
        const hora = String(data.getHours()).padStart(2, '0');
        const minutos = String(data.getMinutes()).padStart(2, '0');
        const segundos = String(data.getSeconds()).padStart(2, '0');

        return `${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`;
    }

    function atualizarDataHora() {
        const dataAtual = new Date();
        const dataHoraFormatada = formatarDataHora(dataAtual);

        const elementoDataHora = document.getElementById("data-hora");
        if (elementoDataHora) {
            elementoDataHora.textContent = dataHoraFormatada;
        }
    }

    setInterval(atualizarDataHora, 1000); // Atualiza a cada segundo
});