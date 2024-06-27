function calculate(){
  const base = document.getElementById('triangle-base');
  const baseText = base.value ;
  const parseBase = parseFloat(baseText);
  console.log(parseBase)

  const hight = document.getElementById('triangle-hight');
  const hightText = hight.value ;
  const parseHight = parseFloat(hightText);
  console.log(parseHight)
  const area = 0.5 * parseBase * parseHight;

                     
  const triangleArea = document.getElementById('triangle-area');
  triangleArea.innerText = area;




}