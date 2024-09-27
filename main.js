window.addEventListener('scroll', onScroll)

function onScroll (){
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}


function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha
  // quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetline = sectionEndsAt <= targetLine

  // limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}




function showNavOnScroll () {
  const navigation = document.getElementById('navigation')
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll () {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}



function openMenu() {
  document.body.classList.add('menu-expended')
}

function closeMenu() {
  document.body.classList.remove('menu-expended')
}

function cardOpen (){
  const openCard = document.querySelectorAll('.Card');
  
  openCard.forEach(function(open) {
    open.addEventListener('click', function() {
      open.classList.add('card-expended');
    });

  });
}

function closeCard() {
  const closeCard = document.querySelectorAll('.Card')

  closeCard.forEach(function(close) {
    close.addEventListener('click', function() {
      close.classList.remove('card-expended')
    })
  })
}

ScrollReveal({delay: 200 }).reveal(`#home, .content, .stats, #services, .observation, .cards, .Card, .about, #photos, #convenios, #contact, .form`);

