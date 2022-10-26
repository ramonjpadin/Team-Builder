const Engineer = require('../lib/engineer');

describe("Engineer", () => {

    describe("Initialization", () => {
        it("Should make an object with entered name, id, and email address and Github", () => {
            const engineer = new Engineer("Ramon Padin", 100, "ramonjpadin@gmail.com", "ramonjpadin");

            expect(engineer.name).toEqual("Ramon Padin");
            expect(engineer.id).toEqual(100);
            expect(engineer.email).toEqual("ramonjpadin@gmail.com");
            expect(engineer.github).toEqual("ramonjpadin");
            expect(engineer.role).toEqual("Engineer");
        })
    })
});

describe("Github", () => {
    it("Should record Github username whenever it is entered", () => {
        const input = "ramonjpadin";
        const result = new Engineer("Ramon Padin", 100, "ramonjpadin@gmail.com", input).getGithub();

        expect(input).toEqual(result);
    })
});