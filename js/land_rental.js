let range_element=document.querySelectorAll('.range-container input');
let progress_element=document.querySelector('.slider .progress');
let input_conatiner=document.querySelectorAll('.input-field input');

let gap=50000;

range_element.forEach((range_input)=>{

  range_input.addEventListener('input',(e)=>{

    let min_value=parseInt(range_element[0].value);
    let max_value=parseInt(range_element[1].value);

    if(max_value-min_value < gap)
    {
      if(e.target.className === 'min')
      {
        range_element[0].value=max_value-gap;
      }
      else
      {
        range_element[1].value=min_value+gap;
      }
    }
    else{
      input_conatiner[0].value=min_value;
      input_conatiner[1].value=max_value;
      progress_element.style.left = (min_value/range_element[0].max)*100+'%';
      progress_element.style.right = 100-(max_value/range_element[1].max)*100+'%';
    }

  })
  
})
