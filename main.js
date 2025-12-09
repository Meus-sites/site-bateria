function carregar(){

    document.getElementById("barCarregar").classList.add("carregar")
    
    document.querySelector(".carregarBtn").classList.add("ativa")
    document.querySelector(".descarregarBtn").classList.add("ativa")

    document.getElementById("barCarregar").classList.remove("descarregar")

}

function descarregar(){

    document.getElementById("barCarregar").classList.remove("carregar")
    
    document.querySelector(".carregarBtn").classList.remove("ativa")
    document.querySelector(".descarregarBtn").classList.remove("ativa")

    document.getElementById("barCarregar").classList.add("descarregar")

}
