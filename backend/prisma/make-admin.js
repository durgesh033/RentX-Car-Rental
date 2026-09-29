const prisma = require("../src/db");

const makeAdmin = asynce () => {
    const email = "testuser@example.com";

    const user = await prisma.user.update({
        where: {
            email,
        },
        data: {
            role: "ADMIN",
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
        },
    });

    console.log("User updated:", user);
};

