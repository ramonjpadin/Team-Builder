const Intern = require('../lib/intern');

describe("Intern", () => {

    describe("Initialization", () => {
        it("Should make an object with entered name, id, and email address and school", () => {
            const intern = new Intern("Ramon Padin", 100, "ramonjpadin@gmail.com", "Case Western");

            expect(intern.name).toEqual("Ramon Padin");
            expect(intern.id).toEqual(100);
            expect(intern.email).toEqual("ramonjpadin@gmail.com");
            expect(intern.school).toEqual("Case Western");
            expect(intern.role).toEqual("Intern");
        })
    })
});

describe("School", () => {
    it("Should record the school interns are attending", () => {
        const input = "Case Western";
        const result = new Intern("Ramon Padin", 100, "ramonjpadin@gmail.com", input).getSchool();

        expect(input).toEqual(result);
    })
});