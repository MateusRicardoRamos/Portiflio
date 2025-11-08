let check = document.getElementById("check")

function dark() {
    if(check.checked){
        document.body.classList.add("darkmode")
        localStorage.setItem("modo", "escuro")
    }
else{
    document.body.classList.remove("darkmode")
    localStorage.setItem("modo", "claro")
}

}

addEventListener("DOMContentLoaded", ()=>{
    let status = localStorage.getItem("modo")
    if (status === "escuro"){
        check.checked = true
    }
    else {
        check.checked = false
    }
    dark()
})

function Mascara_Nome()
        {
            var nome = document.getElementById("Nome").value
            console.log(nome)
            nome=nome.slice(0,40)
            console.log(tel)
                document.getElementById("Nome").value=nome
                nome=document.getElementById("Nome").value.slice(0,40)
                console.log(nome)
        }

        function Mascara_Email()
        {
            var email = document.getElementById("Email").value
            console.log(email)
            email=email.slice(0,25)
            console.log(email)
                document.getElementById("Email").value=email
                email=document.getElementById("Email").value.slice(0,25)
                console.log(email)
        }

        function Mascara_Assunto()
        {
            var assunto = document.getElementById("Assunto").value
            console.log(assunto)
            assunto=assunto.slice(0,30)
            console.log(tel)
                document.getElementById("Assunto").value=assunto
                assunto=document.getElementById("Assunto").value.slice(0,30)
                console.log(assunto)
        }

        function Mascara_Mensagem()
        {
            var mensagem = document.getElementById("Mensagem").value
            console.log(mensagem)
            mensagem=mensagem.slice(0,100)
            console.log(tel)
                document.getElementById("Mensagem").value=mensagem
                nome=document.getElementById("Mensagem").value.slice(0,100)
                console.log(mensagem)
        }