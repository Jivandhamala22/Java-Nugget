
// const laptop = [
//     {
//         brand: 'dell',
//         size: 14,
//         color: 'black'
//     },
//     {
//         brand: 'hp',
//         size: 15,
//         color: 'silver'
//     },
//     {
//         brand: 'macbook',
//         size: 14,
//         color: 'white'
//     },
//     {
//         brand: 'lenovo',
//         size: 16,
//         color: 'mate black'
//     },
// ]

const degree = [
    {
        name:'isc',
        students: 44
    },
    {
        name: 'bsc',
        students: 122
    },
    {
        name: 'msc',
        students: 149
    }]

const newDegree = degree.map((x) => `<h2> ${'there are ' + x.students + ' in ' + x.name }  </h2>`)

const res = document.querySelector('#demo')
res.innerHTML = newDegree.join('')
let result = ''
for(let x of degree)
    {
        if(x.students > 100)
            {
                result += x.name +' '
            }
    }

    document.querySelector('#demo1').innerHTML = result

//console.log(newDegree);

//de.......
//onst fname = {
 //   name: 'hello',
 //   time: 'guten tag'
//}

//const {name: name1} = fname
//console.log(name1);
