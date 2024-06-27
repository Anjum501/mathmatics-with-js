function rhombusCalculate(){
    const b1 = getInputValueId('b1');
    const b2 = getInputValueId('b2');
    const area = 0.5 * b1 * b2;
    setInnerText('rom-area',area);

}

function getInputValueId(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = inputField.value;
    const inputValueParse = parseFloat(inputValue);
    return inputValueParse;

}

function setInnerText(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area ;


}