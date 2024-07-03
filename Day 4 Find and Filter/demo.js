

const comp = [
    {name: 'dell', model:'inspiron', price:799, color:'silver'},
    {name: 'hp', model:'spectre', price:999, color:'white'},
    {name: 'apple', model:'macbook pro', price:1999, color:'space grey'},
    {name: 'lenovo', model:'thinkpad', price:999, color:'black'}
]

//filtering data with matched data
const lowPriceComp = comp.filter((item) => {
   return  item.price < 999
        //if (item.price <999)
        //{
        //   return item
        //}
})
console.log(lowPriceComp);
const blackcomp = comp.filter((item)=> item.color === 'space grey')
console.log(blackcomp);

// filtering data without matched value------ if it doesnot get matched value, it return empty array
const whiteComp = comp.filter((item) => {
    return  item.color === 'weiß'
 })
 console.log(whiteComp);

//finding data
// finding with matched data
const dellComp = comp.find((item) => {
    return  item.name === 'dell'
 })
 console.log(dellComp);

// finding with unmatched data
const acerComp = comp.find((item) => {
    return  item.name === 'acer'
 })
 console.log(acerComp);

 // finding with multiple matched data
const samePriceComp = comp.find((item) => {
    return  item.price === 999
 })
 console.log(samePriceComp);