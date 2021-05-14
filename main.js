// let container = document.querySelector("#container")

// // let pagesArray = []

// for (let index = 0; index <= pages.length; index += 1) {
//     let page = document.createElement('p')
    
//     // page.append(pages[index])
//     page.append(pages[index])

//     //page.style.margin = '30px'
//     page.classList.add('page')
     
//     console.log(page)

//     container.append(page)
// }

let container = document.querySelector("#container")

for (let index = 0; index <= pages.length; index += 1) {
    let page = document.createElement('article')

    let pageNumber = document.createElement('h1')

    // if we want to use innerHTML be wary that element.innerHTML will replace ALL child elements.
    // let htmlString = `<h1>Page: ${index + 1}<h1>`
    // htmlString += `Page: ${pages[index]}`
    // pageNumber.innerHTML += htmlString

    pageNumber.append(`Page: ${index + 1}`)
    page.append(pageNumber)

    let pageText = document.createElement('p')
    pageText.append(pages[index])

    page.append(pageText)
    container.append(page)

    // console.log(pageNumber)
}
// console.log(container)
// console.log(pages)
