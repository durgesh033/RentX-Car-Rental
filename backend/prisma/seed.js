
const prisma = require("../src/db");

const cars = [
    {
        name: "Model S",
        brand: "Tesla",
        pricePerDay: 5000,
        imageUrl: null,
        available: true
    },
    {
        name: "Mustang GT",
        brand: "Ford",
        pricePerDay: 7000,
        imageUrl: null,
        available: true
    },
    {
        name: "C-Class",
        brand: "Mercedes-Benz",
        pricePerDay: 8000,
        imageUrl: null,
        available: true
    },
    {
        name: "M4 Competition",
        brand: "BMW",
        pricePerDay: 9000,
        imageUrl: null,
        available: true
    },
    {
        name: "911 Carrera",
        brand: "Porsche",
        pricePerDay: 12000,
        imageUrl: null,
        available: true
    }
];

async function main() {
    console.log("Seeding cars...");

    await prisma.car.createMany({
        data: cars
    });

    console.log("Cars inserted successfully 🚗");
}

main()
    .catch((error) => {
        console.error("Seed failed:", error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });