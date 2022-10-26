const Manager = require('../lib/manager');

describe("Manager", () => {

    describe("Initialization", () => {
        it("Should make an object with entered name, id, and email address and Office #", () => {
            const manager = new Manager("Ramon Padin", 100, "ramonjpadin@gmail.com", 5);

            expect(manager.name).toEqual("Ramon Padin");
            expect(manager.id).toEqual(100);
            expect(manager.email).toEqual("ramonjpadin@gmail.com");
            expect(manager.officeNumber).toEqual(5);
            expect(manager.role).toEqual("Manager");
        })
    })
});

describe("officeNumber", () => {
    it("Should record the office number whenever it is entered", () => {
        const input = 5;
        const result = new Manager("Ramon Padin", 100, "ramonjpadin@gmail.com", input).getOfficeNumber();

        expect(input).toEqual(result);
    })
});