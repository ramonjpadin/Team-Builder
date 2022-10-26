const Team = require('../lib/employee');

describe("Employee", () => {

    describe("Initialization", () => {
        it("Should make an object with entered name, id, and email address", () => {
            const teammember = new Team("Ramon Padin", 100, "ramonjpadin@gmail.com");

            expect(teammember.name).toEqual("Ramon Padin");
            expect(teammember.id).toEqual(100);
            expect(teammember.email).toEqual("ramonjpadin@gmail.com");
        })
    })

    describe("Name", () => {
        it("Should record a name whenever it is entered", () => {
            const input = "Ramon Padin";
            const expected = { "name": "Ramon Padin", "id": 100, "email": "ramonjpadin@gmail.com" };

            const result = new Team(input, 100, "ramonjpadin@gmail.com");

            expect(result).toEqual(expected);
        });
    });

    describe("Employee ID", () => {
        it("Should record an ID whenever entered", () => {
            const input = 100;
            const expected = { "name": "Ramon Padin", "id": 100, "email": "ramonjpadin@gmail.com" };

            const result = new Team("Ramon Padin", input, "ramonjpadin@gmail.com");

            expect(result).toEqual(expected);
        });
    });

    describe("Email", () => {
        it("Should record an ID whenever entered", () => {
            const input = "ramonjpadin@gmail.com";
            const expected = { "name": "Ramon Padin", "id": 100, "email": "ramonjpadin@gmail.com" };

            const result = new Team("Ramon Padin", 100, input);

            expect(result).toEqual(expected);
        });
    });
});