function solve() {
    let movieInfo = document.getElementById("container");
    let moviesList = document.getElementById("movies");
    let archive = document.getElementById("archive");
    let addBtn = movieInfo.children[3];
    let clearBtn = archive.children[2];
    let name = "";
    let hall = "";
    let ticketPrice = "";

    addBtn.addEventListener("click", addMovie);
    clearBtn.addEventListener("click", clearAll);

    function addMovie(e) {
        e.preventDefault();
        name = movieInfo.children[0].value;
        hall = movieInfo.children[1].value;
        ticketPrice = movieInfo.children[2].value;

        if (name.length == 0 || hall.length == 0 || ticketPrice.length == 0 || isNaN(ticketPrice)) {
            return;
        }

        ticketPrice = Number(ticketPrice);
        let list = document.createElement("li");
        let innerHTML = `<span>${name}</span>` +
            `<strong>Hall: ${hall}</strong>` +
            `<div>` +
            `<strong>${ticketPrice.toFixed(2)}</strong>` +
            `<input placeholder="Tickets sold">` +
            `<button>Archive</button>` +
            `</div>`;
        list.innerHTML = innerHTML;

        moviesList.children[1].appendChild(list);
        movieInfo.children[0].value = "";
        movieInfo.children[1].value = "";
        movieInfo.children[2].value = "";

        let addedMovies = Array.from(moviesList.getElementsByTagName("li"));

        addedMovies.forEach(movie => {
            movie.children[2].children[2].addEventListener("click", archiveMovie);
        });
    }

    function archiveMovie(e) {
        let ticketsQuantity = e.target.parentElement.children[1].value;

        if(isNaN(ticketsQuantity) || ticketsQuantity == ""){
            return;
        };
        ticketsQuantity = Number(ticketsQuantity);
        let archivedList = document.createElement("li");
        let archivedMovie = e.target.parentElement.parentElement.children[0].innerText;
        let archivedMoviePrice = Number(e.target.parentElement.children[0].innerText);
        let totalAmount = archivedMoviePrice * ticketsQuantity;
        let innerHTML = `<span>${archivedMovie}</span>` +
                        `<strong>Total amount: ${totalAmount.toFixed(2)}</strong>` +
                        `<button>Delete</button>`;
        archivedList.innerHTML = innerHTML;

        archive.children[1].appendChild(archivedList);

        e.target.parentElement.parentElement.remove();

        let deleteArchived = Array.from(archive.getElementsByTagName("li"));

        deleteArchived.forEach(archive => {
            archive.children[2].addEventListener("click", deleteMovie);
        });
    }

    function deleteMovie(e) {
        e.target.parentElement.remove();
    }

    function clearAll() {
        archive.children[1].innerHTML = "";
    }
}