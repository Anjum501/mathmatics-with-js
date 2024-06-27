
function para(){
    const base = getInputValueId('para-base');
    const hight = getInputValueId('para-hight');

    const area = base * hight;
    innerTextSet('para-area', area);
    
    
}
function getInputValueId(inputId){
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const inputValue = parseFloat(inputText);
    return inputValue;


}

function innerTextSet(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
};