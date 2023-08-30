document.addEventListener("DOMContentLoaded", function () {
    var registerBtn = document.getElementById("register");
    if (registerBtn) {
        registerBtn.addEventListener("click", function () {
            var url = "..//src/point.html";
            // Calcula as coordenadas para o centro da tela
            var screenWidth = window.screen.width;
            var screenHeight = window.screen.height;
            var windowWidth = 400; // Largura da janela
            var windowHeight = 300; // Altura da janela
            var left = (screenWidth - windowWidth) / 2;
            var top = (screenHeight - windowHeight) / 2;
            // Opções da nova janela
            var options = "width=".concat(windowWidth, ",height=").concat(windowHeight, ",left=").concat(left, ",top=").concat(top);
            // Abre a nova janela no centro da tela
            window.open(url, "_blank", options);
        });
    }
    function formatarDataHora(data) {
        var dia = String(data.getDate()).padStart(2, '0');
        var mes = String(data.getMonth() + 1).padStart(2, '0');
        var ano = data.getFullYear();
        var hora = String(data.getHours()).padStart(2, '0');
        var minutos = String(data.getMinutes()).padStart(2, '0');
        var segundos = String(data.getSeconds()).padStart(2, '0');
        return "".concat(dia, "/").concat(mes, "/").concat(ano, " ").concat(hora, ":").concat(minutos, ":").concat(segundos);
    }
    function atualizarDataHora() {
        var dataAtual = new Date();
        var dataHoraFormatada = formatarDataHora(dataAtual);
        var elementoDataHora = document.getElementById("data-hora");
        if (elementoDataHora) {
            elementoDataHora.textContent = dataHoraFormatada;
        }
    }
    setInterval(atualizarDataHora, 1000); // Atualiza a cada segundo
});
