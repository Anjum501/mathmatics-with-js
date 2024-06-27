function calculatePentagon(){
    const pereMeter = getInputValueId('peri-meter') ;
    const apothem = getInputValueId('apothem');
    const area = 0.5 * pereMeter * apothem ;
    innerTextSet('pentagon', area);
    

}

function getInputValueId(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    const inputValueParse = parseFloat(inputValue);
    return inputValueParse;


}
function innerTextSet(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;


}