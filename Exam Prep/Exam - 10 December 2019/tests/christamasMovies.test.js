const { expect } = require("chai");
const ChristmasMovies = require("../02. Christmas Movies_Resources");

describe("ChristmasMovies", () => {
    let movie;
        beforeEach(() => {
            movie = new ChristmasMovies();
        });

    describe("create new instance", () => {
        it("should return empty collections", () => {
            expect(movie.movieCollection).to.deep.equal([]);
			expect(movie.movieCollection.length).to.deep.equal(0);
			expect(movie.watched).to.deep.equal({});
			expect(movie.actors).to.deep.equal([]);
			expect(movie.actors.length).to.deep.equal(0);
        });
    });

    describe("buyMovie method tests", () => {

        it("should add movie to the collection", () => {
            expect(movie.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']))
                .to.equal('You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!');
        });

        it("should add a movie and remove actors duplicates", () => {
            expect(movie.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Joe Pesci']))
                .to.equal('You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci are taking part!');
        });

        it("should throw error if the movie is already in the collection", () => {
            movie.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            expect(() => movie.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']).to.throw(`You already own Home Alone in your collection!`));
        });
    });

    describe("discardMovie method tests", () => {

        it("should remove movie from collection if is watched", () => {
            movie.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movie.watchMovie('Home Alone');

            expect(movie.discardMovie('Home Alone')).to.equal('You just threw away Home Alone!')
        });

        it("should throw error if movie is not in the collection", () => {
            expect(() => movie.discardMovie('Home Alone')).to.throw('Home Alone is not at your collection!');
        });

        it("should throw error if movie is not watched", () => {
            movie.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);

            expect(() => movie.discardMovie('Home Alone')).to.throw('Home Alone is not watched!')
        });
    });

    describe("watchMovie method tests", () => {

        it("should add movie to watched array", () => {
            movie.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movie.watchMovie('Home Alone');

            expect(movie.watched['Home Alone']).to.equal(1);
        });

        it("should increase watch counter if movie is already in the watched list", () => {
            movie.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movie.watchMovie('Home Alone');
            movie.watchMovie('Home Alone');
            movie.watchMovie('Home Alone');
            movie.watchMovie('Home Alone');

            expect(movie.watched['Home Alone']).to.equal(4);
        });

        it("should throw error if movie is not in watched collection", () => {
            expect(() => movie.watchMovie('Home Alone')).to.throw('No such movie in your collection!');
        });
    });

    describe("favouriteMovie method tests", () => {

        it("should return most watched movie", () => {
            movie.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movie.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Rashida Jones']);
            movie.watchMovie('Home Alone');
            movie.watchMovie('Home Alone');
            movie.watchMovie('Home Alone');
            movie.watchMovie('Home Alone');
            movie.watchMovie('The Grinch');

            expect(movie.favouriteMovie()).to.equal('Your favourite movie is Home Alone and you have watched it 4 times!');
        });

        it("should throw error if there is no favourite movie", () => {
            expect(() => movie.favouriteMovie()).to.throw('You have not watched a movie yet this year!');
        });
    });

    describe("mostStarredActor method tests", () => {

        it("should return the most starred actor", () => {
            movie.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            movie.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Rashida Jones']);
            movie.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            movie.buyMovie('Home Alone 3', ['Macaulay Culkin']);

            expect(movie.mostStarredActor()).to.equal('The most starred actor is Macaulay Culkin and starred in 3 movies!');
        });

        it("should throw error if there is no watched movies in array", () => {
            expect(() => movie.mostStarredActor()).to.throw('You have not watched a movie yet this year!');
        });
    });
});