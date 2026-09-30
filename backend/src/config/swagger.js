const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
    openapi: "3.0.0",

    info: {
        title: "RentX API",
        version: "1.0.0",
        description: "Backend API documentation for RentX car rental system",
    },

    servers: [
        {
            url: "http://localhost:5000",
            description: "Local development server",
        },
    ],

    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
            },
        },

        schemas: {
            Car: {
                type: "object",
                properties: {
                    id: {
                        type: "integer",
                        example: 1,
                    },
                    name: {
                        type: "string",
                        example: "M4 Competition",
                    },
                    brand: {
                        type: "string",
                        example: "BMW",
                    },
                    pricePerDay: {
                        type: "integer",
                        example: 5000,
                    },
                    imageUrl: {
                        type: "string",
                        nullable: true,
                        example: "http://example.com/bmw-m4.jpg",
                    },
                    available: {
                        type: "boolean",
                        example: true,
                    },
                    createdAt: {
                        type: "string",
                        format: "date-time",
                    },
                },
            },

            User: {
                type: "object",
                properties: {
                    id: {
                        type: "integer",
                        example: 1,
                    },
                    name: {
                        type: "string",
                        example: "Durgesh",
                    },
                    email: {
                        type: "string",
                        format: "email",
                        example: "durgesh@example.com",
                    },
                    role: {
                        type: "string",
                        enum: [
                            "USER",
                            "ADMIN",
                        ],
                        example: "USER",
                    },
                },
            },

            Booking: {
                type: "object",
                properties: {
                    id: {
                        type: "integer",
                        example: 1,
                    },
                    userId: {
                        type: "integer",
                        example: 1,
                    },
                    carId: {
                        type: "integer",
                        example: 2,
                    },
                    pickupDate: {
                        type: "string",
                        format: "date-time",
                        example: "2026-10-10T10:00:00Z",
                    },
                    returnDate: {
                        type: "string",
                        format: "date-time",
                        example: "2026-10-13T10:00:00Z",
                    },
                    totalPrice: {
                        type: "integer",
                        example: 15000,
                    },
                    status: {
                        type: "string",
                        enum: [
                            "PENDING",
                            "CONFIRMED",
                            "CANCELLED",
                            "COMPLETED",
                        ],
                        example: "PENDING",
                    },
                    createdAt: {
                        type: "string",
                        format: "date-time",
                    },
                    car: {
                        $ref: "#/components/schemas/Car",
                    },
                    user: {
                        $ref: "#/components/schemas/User",
                    },
                },
            },
        },
    },
};

const swaggerOptions = {
    swaggerDefinition,

    apis: [
        "./src/routes/*.js",
    ],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;