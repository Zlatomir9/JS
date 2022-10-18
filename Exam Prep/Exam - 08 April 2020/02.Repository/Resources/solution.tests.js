let { Repository } = require("./solution.js");
const { expect } = require ("chai");

describe("Repository", () => {
    let repository;
    beforeEach(() => {
        repository = new Repository({name: "string", age: "number", birthday: "object"});
    });

    describe("Instantiation with one parameter", () => {
        it("should return corect size props", () => {
            expect(repository.count).to.equal(0);
            expect(repository.data).to.deep.equal(new Map);
            expect(repository.props).to.deep.equal({name: "string", age: "number", birthday: "object"});
            expect(repository.nextId()).to.equal(0);
        });
    });

    describe("add method tests", () => {
        it("should add entity", () => {
            let entity = {
                name: "No name",
                age: 15,
                birthday: new Date (2002, 10, 7)
            };

            let newEntity = {
                name: "Steven",
                age: 20,
                birthday: new Date (2002, 10, 7)
            };

            expect(repository.add(entity)).to.equal(0);
            expect(repository.add(newEntity)).to.equal(1);
            expect(repository.count).to.equal(2);
            expect(repository.data.get(0)).to.deep.equal({ name: "No name", age: 15, birthday: new Date (2002, 10, 7) });
        });

        it("should throw error if property is not of correct type", () => {
            let entity = {
                name: 15,
                age: 15,
                birthday: new Date (2002, 10, 7)
            };

            expect(() => repository.add(entity)).to.throw("Property name is not of correct type!");

            let newEntity = {
                name: "Steven",
                age: "213312",
                birthday: new Date (2002, 10, 7)
            };

            expect(() => repository.add(newEntity)).to.throw("Property age is not of correct type!");

            let lastEntity = {
                name: "Steven",
                age: 12,
                birthday: "new Date (2002, 10, 7)"
            };

            expect(() => repository.add(lastEntity)).to.throw("Property birthday is not of correct type!");
        });

        it("should throw error if property is missing", () => {
            let entity = {
                // name: 15,
                age: 15,
                birthday: new Date (2002, 10, 7)
            };

            expect(() => repository.add(entity)).to.throw("Property name is missing from the entity!");

            let newEntity = {
                name: "Steven",
                // age: "213312",
                birthday: new Date (2002, 10, 7)
            };

            expect(() => repository.add(newEntity)).to.throw("Property age is missing from the entity!");

            let lastEntity = {
                name: "Steven",
                age: 12,
                // birthday: "new Date (2002, 10, 7)"
            };

            expect(() => repository.add(lastEntity)).to.throw("Property birthday is missing from the entity!");
        });
    });

    describe("getId method tests", () => {
        it("should get correct id", () => {
            let entity = {
                name: "Steven",
                age: 15,
                birthday: new Date (2002, 10, 7)
            };

            let newEntity = {
                name: "Jack",
                age: 12,
                birthday: new Date (1994, 3, 1)
            };

            expect(repository.add(entity)).to.equal(0);
            expect(repository.add(newEntity)).to.equal(1);

            expect(repository.getId(0)).to.deep.equal({ name: "Steven", age: 15, birthday: new Date (2002, 10, 7) });
            expect(repository.getId(1)).to.deep.equal({ name: "Jack", age: 12, birthday: new Date (1994, 3, 1) });
        });

        it("should throw error with non-existing id", () => {

            expect(() => repository.getId(1)).to.throw(`Entity with id: 1 does not exist!`);
        });
    });

    describe("update method tests", () => {
        it("should update entity", () => {
            let entity = {
                name: "Steven",
                age: 15,
                birthday: new Date (2002, 10, 7)
            };

            let newEntity = {
                name: "Jack",
                age: 12,
                birthday: new Date (1994, 3, 1)
            };

            expect(repository.add(entity)).to.equal(0);
            repository.update(0, newEntity);
            expect(repository.getId(0)).to.deep.equal({ name: "Jack", age: 12, birthday: new Date (1994, 3, 1) });
        });

        it("should throw error if id doesn't exists", () => {
            let entity = {
                name: "Steven",
                age: 15,
                birthday: new Date (2002, 10, 7)
            };

            let newEntity = {
                name: "Jack",
                age: 12,
                birthday: new Date (1994, 3, 1)
            };

            expect(repository.add(entity)).to.equal(0);

            expect(() => { repository.update(1, newEntity) }).to.throw(`Entity with id: 1 does not exist!`);
        });

        it("should throw error if property is of incorect type", () => {
            let entity = {
                name: "Steven",
                age: 15,
                birthday: new Date (2002, 10, 7)
            };

            let newEntity = {
                name: {},
                age: 12,
                birthday: new Date (1994, 3, 1)
            };

            expect(repository.add(entity)).to.equal(0);
            expect(() => repository.update(0, newEntity)).to.throw(`Property name is not of correct type!`);

            let entity2 = {
                name: "string",
                age: "1",
                birthday: new Date (1994, 3, 1)
            };

            expect(() => repository.update(0, entity2)).to.throw(`Property age is not of correct type!`);

            let entity3 = {
                name: "string",
                age: 1,
                birthday: "string"
            };

            expect(() => repository.update(0, entity3)).to.throw(`Property birthday is not of correct type!`);
        });

        it("should throw error if property is missing", () => {
            let entity = {
                name: "Steven",
                age: 15,
                birthday: new Date (2002, 10, 7)
            };

            let newEntity = {
                //name: "Jack",
                age: "12",
                birthday: new Date (1994, 3, 1)
            };

            expect(repository.add(entity)).to.equal(0);
            expect(() => repository.update(0, newEntity)).to.throw(`Property name is missing from the entity!`);

            let entity2 = {
                name: "string",
                //age: "1",
                birthday: new Date (1994, 3, 1)
            };

            expect(() => repository.update(0, entity2)).to.throw(`Property age is missing from the entity!`);

            let entity3 = {
                name: "string",
                age: 1,
                //birthday: "string"
            };

            expect(() => repository.update(0, entity3)).to.throw(`Property birthday is missing from the entity!`);
        });
    });

    describe("delete method tests", () => {
        it("should delete entity", () => {
            let entity = {
                name: "Steven",
                age: 15,
                birthday: new Date (2002, 10, 7)
            };

            let newEntity = {
                name: "Jack",
                age: 12,
                birthday: new Date (1994, 3, 1)
            };

            expect(repository.add(entity)).to.equal(0);
            expect(repository.add(newEntity)).to.equal(1);
            repository.del(1);
            expect(repository.getId(0)).to.deep.equal({ name: "Steven", age: 15, "birthday": new Date(2002, 10, 7) });
            expect(() => { repository.getId(1) }).to.throw("Entity with id: 1 does not exist!");
        });

        it("should throw error if id doesn't exists", () => {
            let entity = {
                name: "Jack",
                age: 12,
                birthday: new Date (1994, 3, 1)
            };

            expect(repository.add(entity)).to.equal(0);

            expect(() => repository.del(1)).to.throw(`Entity with id: 1 does not exist!`);
            expect(() => repository.del(-10)).to.throw(`Entity with id: -10 does not exist!`);
        });
    });
});