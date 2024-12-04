const closeBtn = document.querySelector('#rent-form-close')
const rentForm = document.querySelector('#rent-form')
const rentNow = document.querySelectorAll("#rent-now");
closeBtn.onclick = () => {
  rentForm.classList.remove('active')
}
rentNow.forEach(item => {
    item.onclick = () => {
        rentForm.classList.add('active')
      }
})