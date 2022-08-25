const AtivoDesat = document.getElementById('AlterarEstado')
const Menu = document.getElementById('menu')

AtivoDesat.addEventListener('click', () => {

    if(AtivoDesat.classList.contains('BtnAtivado')){
        AtivoDesat.classList.remove('BtnAtivado')
        Menu.classList.remove('MenuAtivo')
    }else{
        AtivoDesat.classList.add('BtnAtivado')
        Menu.classList.add('MenuAtivo')
    }

})