// const darkMode =  document.querySelector('.dark-mode');
const checkbox = document.querySelector('.checkbox');

if (window.matchMedia('(prefers-color-scheme)').media == 'not all') {
  alert('🎉 Dark mode is supported');
}


checkbox.addEventListener('change',function (event){
  if(this.checked){
    document.body.classList.remove('is-light-mode');
    document.body.classList.add('is-dark-mode');
    console.log("Agregando modo dark")
  }else{
    console.log("Quitando modo dark")
    document.body.classList.remove('is-dark-mode');
    document.body.classList.add('is-light-mode');
  }
})
