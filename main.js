let main = document.querySelector("main")

let container = document.createElement("main")

let h1 = document.createElement("h1")
h1.append("DOM demo")

container.append(h1)


// article > h1 > text
//         > p  > text

main.append(container)

function createPage(page, index) {
    let article = document.createElement('article')

    let p = document.createElement("p")
    p.append(page)
    let header = document.createElement("h1")
    header.id = index + 1
    header.append(`${index + 1}.`)
    article.append(header)
    article.append(p)

    return article;
}

for (let index = 0; index < pages.length; index += 1) {
    let article = createPage(pages[index], index)
    container.append(article);
}


