const form = document.querySelector('form')
const name = document.querySelector('.name')
const introduce = document.querySelector('.introduce')
const photo = document.querySelector('.photo')
const cardPhoto = document.querySelector('#cardphoto')
const cardName = document.querySelector('.cardname')
const cardIntroduce = document.querySelector('.info')
const theme = document.querySelector('#inlineRadio1')
const card = document.querySelector('.mycard')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  if (name.value.length === 0) {
    name.nextElementSibling.innerHTML = '請輸入姓名!'
    name.classList.add('border-danger')
  } else {
    name.classList.remove('border-danger')
    name.nextElementSibling.innerHTML = ''
  }

  if (introduce.value.length === 0) {
    introduce.nextElementSibling.innerHTML = '請輸入自我介紹!'
    introduce.classList.add('border-danger')
  } else {
    introduce.classList.remove('border-danger')
    introduce.nextElementSibling.innerHTML = ''
  }

  if (photo.value === '') {
    photo.placeholder = 'https://assets-lighthouse.s3.amazonaws.com/uploads/user/photo/1221/thumb_dojo_test.001.jpeg'
    cardPhoto.src = 'https://assets-lighthouse.s3.amazonaws.com/uploads/user/photo/1221/thumb_dojo_test.001.jpeg'
  } else {
    cardPhoto.src = photo.value
  }

  if (name.value.length > 0 && introduce.value.length > 0) {
    cardIntroduce.innerHTML = introduce.value
    cardName.innerHTML = name.value
  }

  if (!theme.checked) {
    card.className = 'dark2'
  } else {
    card.className = 'light2'
  }

  name.value = ''
  introduce.value = ''
  photo.placeholder = ''
  photo.value = ''
})

form.addEventListener('input', function (event) {
  let count = event.target.value.length
  if (event.target.id === 'introduce') {
    event.target.nextElementSibling.innerHTML = `${200 - count} remain.`
  }
})