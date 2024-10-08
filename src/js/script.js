/*================================================= SHOW MENU =========================================================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')
 
 
 /* =========================================== Função da página login =============================================== */
 
 function validar(){
 
     //declarando as variaveis 
     let usuario =document.getElementById("usuario").value;
     let senha =document.getElementById("senha").value;
   
     if(usuario ==="adm@gmail.com" && senha ==="123"){
         window.open("perfil.html")
     }else{
         alert("usuario e/ou senha inválidos")
     }
   }
 
 /* =========================================== Função da página registre-se ========================================== */
 
 function validateForm() {
     var firstName = document.getElementById('first-name').value;
     var lastName = document.getElementById('last-name').value;
     var email = document.getElementById('email').value;
     var password = document.getElementById('password').value;
     var confirmPassword = document.getElementById('confirm-password').value;
     var country = document.getElementById('country').value;
 
     if (!firstName || !lastName || !email || !password || !confirmPassword || !country) {
         alert('Por favor, preencha todos os campos.');
         return false;
     }
 
     if (password !== confirmPassword) {
         alert('As senhas não coincidem.');
         return false;
     }
     
 
     window.open("acesso.html")
     alert('Registro realizado com sucesso!');
 }

/* ================================================= Função Modal =================================================== */

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

/* =============================================== Função contagem ================================================= */


function medidas(){
    const contador1 =document.getElementById("contador1");
    let valor1=0;

    //setInterval- ele define um derterminado intervalo de tempo

    let tempo1 = setInterval(()=>{
        valor1 +=1;
        contador1.innerHTML = `+${valor1}`;

        if(valor1 == 11){
            //limpa o intervalo de tempo
            clearInterval(tempo1);
        }
    })
}

  /* ================================================= MODAL DE ACESSO ============================================= */


  window.onload = function() {
    // Mostra o modal automaticamente ao carregar a página
    var modal = document.getElementById("welcome-modal");
    var closeBtn = document.getElementsByClassName("welcome-close-button")[0];

    modal.style.display = "block";

    // Fecha o modal quando o usuário clica no botão de fechar
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Fecha o modal quando o usuário clica fora do conteúdo do modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}