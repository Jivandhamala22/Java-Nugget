const vehicle = [
    {
        name: 'tramp',
        type: 'inside-Dresden'
    },
    {
        name: 'regional train',
        type: 'outside-dresden'
    },
    {
        name: 'S-bahn',
        type: 'inside-saxony'
    },
    {
        name: 'ICE',
        type: 'outside-saxony'
    },
    {
        name: 'bus',
        type: 'inside-Dresden'
    }
]
//set le unique values matrai dinxa 
const catg = new Set(vehicle.map((x) =>
{
    return x.type
    
}))

//set le object return garxa ani teslai array ma convert garya
//const newcatg = [... catg]
// newcatg ma naya value add garnu paro vaney
const newcatg = ['whole-deutschland', ... catg]
console.log(newcatg);

//aba website ma dekhauda

document.querySelector('.demo').innerHTML = newcatg.map((item) =>
    {
       return  `<h1> <button> ${item} </button></h1>`
    }).join('')