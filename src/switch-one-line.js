const estiloComentado = '/*html, img, video, iframe, button {filter: invert(0.90) hue-rotate(180deg)}*/';
const estiloDescomentado = 'html, img, video, iframe, button {filter: invert(0.90) hue-rotate(180deg)}';
let estiloAtivo = false;
let indexEstilo = 0;

let styles = document.getElementsByTagName('style')
for (let index = 0; index < styles.length; index++) {

    let styleToCheck = document.getElementsByTagName('style')[index].innerHTML;
    if(styleToCheck.includes(estiloComentado))
    {
        indexEstilo = index;
    }
}

function recuperaDarkModeCssEtoggle()
{
    if(!estiloAtivo)
    {
        let darkMode = document.getElementsByTagName('style')[indexEstilo].innerHTML
        console.log(darkMode)
        darkMode = darkMode.replace(estiloComentado, estiloDescomentado)
        document.getElementsByTagName('style')[indexEstilo].innerHTML = darkMode

        estiloAtivo = !estiloAtivo;
    }
    else
    {
        let darkModeDescomentado = document.getElementsByTagName('style')[indexEstilo].innerHTML
        console.log(darkModeDescomentado)
        darkModeDescomentado = darkModeDescomentado.replace(estiloDescomentado, estiloComentado)
        document.getElementsByTagName('style')[indexEstilo].innerHTML = darkModeDescomentado

        estiloAtivo = !estiloAtivo;
    }
}

function adicionaDarkMode()
{
    let darkMode =  recuperaDarkModeCssEtoggle()()
    darkMode = darkMode.replace(styleComent, styleToAdd)
}

function removeDarkMode()
{
    let darkMode =  recuperaDarkModeCssEtoggle()()
    darkMode = darkMode.replace(styleToAdd, styleComent)
}

document.getElementById('darkSwitch').addEventListener('click', function() {

    recuperaDarkModeCssEtoggle()

})
