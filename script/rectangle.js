function rectangle(){
    const rectangleBase = document.getElementById('rectangle-base');
    const rectangleBaseText = rectangleBase.value;
    const rectangleBaseTextParse = parseFloat(rectangleBaseText);

    const rectangleHight = document.getElementById('rectangle-hight');
    const rectangleHightText = rectangleHight.value;
    const rectangleHightTextParse = parseFloat(rectangleHightText);

    const area = rectangleBaseTextParse * rectangleHightTextParse;

    const areaCalculate = document.getElementById('rectangle-area');
    areaCalculate.innerText = area;


}