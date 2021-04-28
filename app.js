// DOM elements
const chackBoxs = document.querySelectorAll('.progress-form-wrapper input[type="checkbox"]')
const progressLabel = document.querySelector('.progress-label')

//Progress label counter
var counter = 0

//chack box dynamic counter 
chackBoxs.forEach(element => 
  element.addEventListener("click", function (e) {
    const val = Math.floor(e.target.value);
    if (element.checked) counter += val
    else counter -= val
    progressLabel.style.width = counter + "%"
  })
)
