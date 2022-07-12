const request = require("supertest");
const app = require("../../app");

describe("test index api", () => {
  it("return 200 ok", (done) => {
    request(app)
      .get("/")
      .expect("Content-Type", "text/html; charset=UTF-8")
      .expect(200, done);
  });
});

describe("test api get all products", () => {
  it("return 200 ok", (done) => {
    request(app)
      .get("/products")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, done);
  });
});

describe("test api add product", () => {
  it("return 201 created", async () => {
    const loginAuth = {
      user_email: "seller01@gmail.com",
      user_password: "1234",
    };

    const response = await request(app).post("/users/login").send(loginAuth);

    const token = `Bearer ${response.body.token}`;

    const productPayload = {
      product_name: "Honda",
      product_price: 1000000,
      product_description: "murah banget",
      product_image: "https://res.cloudinary.com/dallchrvc/image/upload/v1656080269/The_North_Face_Outdoor_Jacket_fdpm8y.jpg",
      product_available: true,
      category_id: 1,
      user_id: 1,
    };

    await request(app)
      .post("/products")
      .set("Authorization", token)
      .send(productPayload)
      .expect(201)
      .expect("Content-Type", "application/json; charset=utf-8");
  });

  it("return 401 unauthorized access", async () => {
    const registerAuth = {
      user_name: "boy",
      user_email: "boy@gmail.com",
      user_role: 2,
      user_password: "1234",
    };

    const loginAuth = {
      user_email: "boy@gmail.com",
      user_password: "1234"
    };

    await request(app).post("/users").send(registerAuth);

    const response = await request(app).post("/users/login").send(loginAuth);

    const token = `Bearer ${response.body.token}`;

    const productPayload = {
      product_name: "Honda",
      product_price: 1000000,
      product_description: "murah banget",
      product_image:
        "https://res.cloudinary.com/dallchrvc/image/upload/v1656080269/The_North_Face_Outdoor_Jacket_fdpm8y.jpg",
      product_available: true,
      category_id: 1,
      user_id: 1,
    };

    await request(app)
      .post("/products")
      .set("Authorization", token)
      .send(productPayload)
      .expect(401)
      .expect("Content-Type", "application/json; charset=utf-8");
  });
});

describe("test get product by id", () => {
  it("return 200 using valid id", () => {
    request(app)
      .get("/products/1")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8");
  });

  it("return 404 using invalid id", () => {
    request(app)
      .get("/products/1000")
      .expect(404)
      .expect("Content-Type", "application/json; charset=utf-8");
  });
});
