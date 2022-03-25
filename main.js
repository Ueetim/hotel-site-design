// FOR LANDING PAGE SCRIPTS

//create an array of objects containing info to be displayed
const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img: "Images/person_3.jpg",
      text: "Hotel Pablo is the best. Excellent Room Service"
    },
    {
      id: 2,
      name: "john wu",
      job: "web designer",
      img: "Images/person_1.jpg",
      text: "I recommend Hotel Pablo looking for a nice place to pass the night or a couple of nights"
    },
    {
      id: 3,
      name: "ron lehmann",
      job: "product manager",
      img: "Images/person_2.jpg",
      text: "Definitely my favorite hotel. Lodged for about a week and the experience was nothing short of amazing"
    },
    {
      id: 4,
      name: "john jones",
      job: "ui/ux designer",
      img: "Images/person_7.jpg",
      text: "Hotel Pablo is the best place anyone can think of"
    },
  ]
  
  //select items
  const img = document.getElementById('person-img')
  const author = document.getElementById('author')
  const job = document.getElementById('job')
  const info = document.getElementById('info')
  
  //select btns
  const prevBtn = document.querySelector('.prev-btn')
  const nextBtn = document.querySelector('.next-btn')
  const container = document.querySelector('.img-container')
  const quotesIcon = document.querySelector('.quotes-icon')
  
  let currentItem = 0
  
  //define animation
  function animation(element) {
    element.animate([
      { opacity: '0' }, { opacity: '1' }
      ],
    {
      duration: 700,
    })
  }
  
  //load first item on page load
  window.addEventListener('DOMContentLoaded', function() {
    const item = reviews[currentItem] //currentItem will be 0 at page load 
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
  })
  
  //when next button is clicked
  nextBtn.addEventListener('click', function() {
    currentItem++
    
  //return to start position when last item is reached
    if (currentItem === reviews.length) {
      currentItem = 0
    }
  
    const item = reviews[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
    
    animation(container)
    animation(quotesIcon)
  })
  
  //when previous button is clicked 
  prevBtn.addEventListener('click', function() {
    currentItem--
  
  //return to last item after first item is reached
    if (currentItem < 0) {
      currentItem = reviews.length - 1
    }
  
    const item = reviews[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
    
    animation(container)
    animation(quotesIcon)
  })


//   FREQUENTLY ASKED QUESTIONS

const plusIcon = document.querySelectorAll('.plus')
const minusIcon = document.querySelectorAll('.minus')
const questions = document.querySelectorAll('.question')

//access each of the plus icons
plusIcon.forEach(function(btn) {
  // on click of each button, access the sibling od the parent container 
  btn.addEventListener('click', function(e) {
      e.currentTarget.style.display = 'none'//hide the plus icon
      e.currentTarget.nextElementSibling.style.display = 'flex' //display the minus icon

      const answer = e.currentTarget.parentElement.nextElementSibling
      
      if (answer.classList.contains('hide-ans')) {
        answer.classList.remove('hide-ans')
      }
      
      answer.classList.add('show-ans')
      
      //close previously open answers
      questions.forEach(function(question) {
        const icon = question.querySelector('.plus')
         //on click of the plus icon
        icon.addEventListener('click', function(){
          //iterate through the questions and check for the one being clicked
          questions.forEach(function(item) {
            if (item !== question) {
              //if it is not the question being selected, hide the answers
              item.firstElementChild.nextElementSibling.classList.remove('show-ans')
              
              //display the plus icon
              item.firstElementChild.firstElementChild.nextElementSibling.style.display = 'flex'
              
              //hide the minus icon
              item.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.style.display = 'none'
            }
          })
        })
      })
  })
})

minusIcon.forEach(function(btn) {
      // on click of each button, access the sibling od the parent container 
      btn.addEventListener('click', function(e) {
            e.currentTarget.style.display = 'none'
            e.currentTarget.previousElementSibling.style.display = 'flex' //access the sibling element

            const answer = e.currentTarget.parentElement.nextElementSibling
            // set height
            //answer.classList.remove('show-ans')
            answer.classList.add('hide-ans')
      })
})