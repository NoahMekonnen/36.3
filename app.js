// let url = "http://numbersapi.com"

// // Part 1.1 v2
// async function getCard(){
//     let res = await axios.get(`${url}/1?json`)
//     console.log(res.data)
//     return res.data
// }

// getCard().then(res => res.data)


// // Part 1.2 v2
// async function addCards(){
//     let res = await axios.get(`${url}/1,2,3,5,6?json`)
//     const li1 = $('<li></li>')
//     li1.append(res.data[1])
//     const li2 = $('<li></li>')
//     li2.append(res.data[2])
//     const li3 = $('<li></li>')
//     li3.append(res.data[3])
//     const li4 = $('<li></li>')
//     li4.append(res.data[5])
//     const li5 = $('<li></li>')
//     li5.append(res.data[6])
//     const ul = $('ul')
//     ul.append(li1)
//     ul.append(li2)
//     ul.append(li3)
//     ul.append(li4)
//     ul.append(li5)
    
//     return res.data
// }

// getCard().then(res => res.data)


// // Part 1.3 v2
// async function getCard(){
//     let res = await axios.get(`${url}/1?json`)
//     console.log(res.data)
//     return res.data
// }

// getCard().then(res => res.data)
// getCard().then(res => res.data)
// getCard().then(res => res.data)
// getCard().then(res => res.data)


// let url2 = "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
// // Part 2.1 v2
// async function getCard(){
//     let res = await axios.get(`${url2}`)
//     console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
//     return res.data
// }

// // getCard().then(res => res.data)

// // Part 2.2 v2
// let deck_id;
// async function getCard(url){
//     let res = await axios.get(`${url}`)
//     console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
//     deck_id = res.data.deck_id
//     return res.data
// }

// getCard(url2).then(res => {
//     return getCard(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
// })
// .then(res => res.data)


// // Part 2.3 v2

// const button = $('button')
// const ul = $('ul')
// let count = 0
// let deckId;

// async function getCard(url){
//     let res = await axios.get(`${url}`)
//     console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`)
//     deckId = res.data.deck_id
//     return res.data
// }

// button.on('click',function(e){
//     e.preventDefault()
//     if (count == 0){
//         final = getCard(url2)
//         .then(res => {
//             const li = $("<li></li>")
//             const img = $(`<img src=${res.cards[0].image}>`)
//             li.append(img)
//             ul.append(li)
//             deckId = res.deck_id
//         })
//     }
//     else{
//         getCard(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
//         .then(res => {
//             const li = $("<li></li>")
//             const img = $(`<img src=${res.cards[0].image}>`)
//             li.append(img)
//             ul.append(li)
//     })
//     }
//     count+=1
// })

