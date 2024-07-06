const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Seljukly Döwletiniň gurujysy kimdir?',
    answers: [
      { text: 'Seljuk Beg', correct: true },
      { text: 'Togrul Beg', correct: false }
    ]
  },
  {
  question: 'Mangollaryň gurujysy kim?',
  answers: [
    { text: 'Muhammet han', correct: false },
    { text: 'Tuluy', correct: false },
    { text: 'Çagataý', correct: false },
    { text: 'Çingiz han', correct: true }
  ]
},
{
  question: '2+2x2=?',
  answers: [
    { text: '6', correct: true },
    { text: '8', correct: false },
    { text: '4', correct: false },
    { text: '10', correct: false }
  ]
},
{
  question: 'Azyk dükanyndaky önümiň arzanladylan bahasy adaty bahasyndan 20 göterim ýokary. Adaty bahasy 80 Manat bolan bu önümiň arzanladylan bahasy nämeden ybarat?',
  answers: [
    { text: '88', correct: true },
    { text: '96', correct: false },
    { text: '92', correct: false },
    { text: '100', correct: false }
  ]
},
{
  question: 'Awtoulagyň tizligi sagatda 60 km. Maşyn bir nokatdan başlaýar we bu tizlikde 2 sagat dowam edýär. Bu döwrüň ahyrynda awtoulag näçe kilometre barar?',
  answers: [
    { text: '100', correct: false },
    { text: '120', correct: true },
    { text: '140', correct: false },
    { text: '160', correct: false }
  ]
},
{
  question: '2+3x4=?',
  answers: [
    { text: '10', correct: false },
    { text: '14', correct: true },
    { text: '20', correct: false },
    { text: '24', correct: false }
  ]
},
{
  question: 'Gönüburçlugyň uzyn tarapy 12 sm, gysga tarapy 8 sm bolsa, bu gönüburçlugyň meýdany cm² näçe?',
  answers: [
    { text: '40', correct: false },
    { text: '64', correct: false },
    { text: '96', correct: true },
    { text: '104', correct: false }
  ]
},
{
  question: 'Üçburçlugyň içki burçlarynyň derejesi näçe?',
  answers: [
    { text: '90', correct: true },
    { text: '180', correct: false },
    { text: '270', correct: false },
    { text: '360', correct: false }
  ]
},
{
  question: 'Üçburçlugyň içki burçlarynyň derejesi näçe?',
  answers: [
    { text: '90', correct: true },
    { text: '180', correct: false },
    { text: '270', correct: false },
    { text: '360', correct: false }
  ]
},
{
  question: '24:4x3=?',
  answers: [
    { text: '12', correct: false },
    { text: '36', correct: false },
    { text: '24', correct: false },
    { text: '18', correct: true }
  ]
},
{
  question: '127-64+29=?',
  answers: [
    { text: '92', correct: true },
    { text: '82', correct: false },
    { text: '102', correct: false },
    { text: '112', correct: false }
  ]
},
{
  question: '5-iň kuby näçe?',
  answers: [
    { text: '325', correct: false },
    { text: '25', correct: false },
    { text: '625', correct: false },
    { text: '125', correct: true }
  ]
},
{ question: '3x+7=16?',
answers: [
  { text: '3', correct: true },
  { text: '5', correct: false },
  { text: '6', correct: false },
  { text: '9', correct: false }
]
},
{
    question: 'Osmanly Imperýasynyň 2-nji soltany kimdir?',
    answers: [
      { text: 'Myrat han', correct: false },
      { text: 'Aladdin beg', correct: false },
      { text: 'Orhan beg', correct: true },
      { text: 'Fatyh Soltan Mehmed han', correct: false }
    ]
  },
  {
    question: '(2x+3)(x−4)?',
    answers: [
      { text: '2x2-5x-12', correct: true },
      { text: '2x2-5x-6', correct: false },
      { text: '2x2-x-12', correct: false },
      { text: '2x2-x-6', correct: false }
    ]
  },
  {
    question: '55-12+38x12=?',
    answers: [
      { text: '1123', correct: false },
      { text: '871', correct: false },
      { text: '972', correct: true },
      { text: '544', correct: false }
    ]
  },
  {
    question: '17x2:10-10+87=?',
    answers: [
      { text: '77', correct: false },
      { text: '345', correct: false },
      { text: '922', correct: false },
      { text: '80.4', correct: true }
    ]
  },
  {
    question: 'Napolyon Bonapart haçan dogulýar?',
    answers: [
      { text: '1769', correct: true },
      { text: '1789', correct: false },
      { text: '1804', correct: false },
      { text: '1821', correct: false }
    ]
  },
  {
    question: 'Amerikanyň Birleşen Ştatlarynyň garaşsyzlyk jarnamasyna haýsy ýylda gol çekildi?',
    answers: [
      { text: '1776', correct: true },
      { text: '1787', correct: false },
      { text: '1791', correct: false },
      { text: '1800', correct: false }
    ]
  },
  {
    question: 'Fransuz rewolýusiýasynyň başlanan senesi haýsy?',
    answers: [
      { text: '1830', correct: true },
      { text: '1789', correct: false },
      { text: '1804', correct: false },
      { text: '1815', correct: false }
    ]
  },
  {
    question: 'Birinji jahan urşunyň başlanýan senesi näme?',
    answers: [
      { text: '1912', correct: false },
      { text: '1914', correct: true },
      { text: '1916', correct: false },
      { text: '1918', correct: false }
    ]
  },
  {
    question: 'Türkiýe Respublikasyny esaslandyryjy kim?',
    answers: [
      { text: 'Mustafa Kemal Atatürk', correct: true },
      { text: 'İsmet İnönü', correct: false },
      { text: 'Enver Paşa', correct: false },
      { text: 'Fevzi Çakmak', correct: false }
    ]
  },
  {
    question: 'Haýsy söweşde Napoleon Bonapartyň ýeňilip, sürgün edilendigi belli?',
    answers: [
      { text: 'Waterlo söweşi', correct: true },
      { text: 'Austerlitz söweşi', correct: false },
      { text: 'Marengo söweşi', correct: false },
      { text: 'Borodino söweşi', correct: false }
    ]
  },
  {
    question: 'Öýjükde DNK nirede ýerleşýär?',
    answers: [
      { text: 'Sitoplazmada', correct: true },
      { text: 'ýadroda', correct: false },
      { text: 'mitokondriýada', correct: false },
      { text: 'endoplazmatiki retikulumda', correct: false }
    ]
  },
  {
    question: 'Fotosintez haýsy organda ýüze çykýar?',
    answers: [
      { text: 'Mitokondriýa', correct: false },
      { text: 'Hloroplast', correct: true },
      { text: 'Golgi enjamy', correct: false },
      { text: 'lizozoma', correct: false }
    ]
  },
  {
    question: 'Noýba haýsy maşgala degişli?',
    answers: [
      { text: 'Kösükliler maşgalasy', correct: true },
      { text: 'Üzümler maşgalasy', correct: false },
    ]
  },
  {
  question: 'Gökdepe urşy haçan bolup geçýär?',
  answers: [
    { text: '1887-1889', correct: false },
    { text: '1879-1881', correct: true },
    { text: '1875-1879', correct: false },
    { text: '1879-1996', correct: false }
  ]
},
{
    question: 'Mangollar döwleti näçe-nji ýylda guruldy?',
    answers: [
      { text: '1211', correct: false },
      { text: '1206', correct: true },
      { text: '1199', correct: false },
      { text: '1201', correct: false }
    ]
  },
  {
    question: 'Osmanly Imperýasy haçan gurulýar?',
    answers: [
      { text: '1299', correct: true },
      { text: '1316', correct: false }
    ]
  }
]

