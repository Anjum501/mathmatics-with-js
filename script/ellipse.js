function ellCalculate(){
    const a = getInputValueId('a');
    const b = getInputValueId('b');
    const area =3.1 * a * b
    getInnerText('ell-area',area)

}
function getInputValueId(elementId){
    const inputField = document.getElementById(elementId);
    const inputText = inputField.value ;
    const inputValueParse = parseFloat(inputText);
    return inputValueParse;

}

function getInnerText(inner,area){
    const element = document.getElementById(inner);
    element.innerText = area;


}