function getArticleGenerator(articles) {
    let copy = Array.from(articles);
    let content = document.getElementById('content');

    return () =>{
        if(!copy.length){
            return;
        }
        let currentArticle = copy.shift();
        content.innerHTML += `<article>${currentArticle}</article>`;
    }
}
