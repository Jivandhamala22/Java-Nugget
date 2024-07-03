//simple vayo yiniharu
// const person = {
//     name: 'jivan',
//     place: 'dresden',
//     degree: ['BSc. CSIT', 'Technomathematics']
// }

// console.log(person['name'] + ' '+ person.degree);
// console.log(person['degree']);


//dynamic kasari banauney 
let result ='grade' 
const type = 'background'
const state = {
    completed : null,
    degree: '',
    name: '',
    university: '',
    [result] : 2.0
}

state[type] = 'international student'

const changeState = function(key, value){
    state[key] = value
}

changeState('completed', 'true')
changeState('university', 'TU Dortmund')
changeState('name', 'j10')
changeState('degree', 'Master in Computer Science')
changeState('working', 'same domain')

console.log(state);