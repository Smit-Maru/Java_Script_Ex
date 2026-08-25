const printBtn = document.getElementById('print');
const loadBtn = document.getElementById('load')

printBtn.addEventListener('click',function(){
  window.print();
})

loadBtn.addEventListener('click',function(){
  const script = document.createElement('script')

  script.src = 'second.js';

  document.body.appendChild(script);
})