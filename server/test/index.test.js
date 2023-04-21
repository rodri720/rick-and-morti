const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  const character1 = { id: 1, name: "Feli" };
  const character2 = { id: 2, name: "Raul" };
  describe("GET /rickandmorty/character/:id", () => {
    it("GET Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const { body } = await agent.get("/rickandmorty/character/1");
      expect(body).toHaveProperty("id");
      expect(body).toHaveProperty("name");
      expect(body).toHaveProperty("species");
      expect(body).toHaveProperty("gender");
      expect(body).toHaveProperty("status");
      expect(body).toHaveProperty("origin");
      expect(body).toHaveProperty("image");
    });
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/unmalid").expect(500);
    });
  });
  describe("GET /rickandmorty/login", () => {
    it("validando el access, debe responder con true si las credenciales son correctas", async () => {
      const { body } = await agent.get(
        "/rickandmorty/login/?email=fmontoya@soyhenry.com&password=feli123"
      );
      expect(body.access).toBe(true);
    });
    it("validando el access, debe responder con false si las credenciales son incorrectas", async () => {
      const { body } = await agent.get(
        "/rickandmorty/login/?email=fmontoya@soyhenry.com&password=feli12"
      );
      expect(body.access).toBe(false);
    });
  });
  describe("POST /rickandmorty/fav", () => {
    it("Debe responder con un array y el usuario que se manda por body", async () => {
      const { body } = await agent.post("/rickandmorty/fav").send(character1);
      expect(body).toBeInstanceOf(Array);
    });
    it("Debe responder con un array y los usuarios que se mandaron por body", async () => {
      const { body } = await agent.post("/rickandmorty/fav").send(character2);
      expect(body).toContainEqual(character1);
      expect(body).toContainEqual(character2);
    });
  });
  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si no encuentra un personaje para borrar, debe devolver todos los personajes", async () => {
      const { body } = await agent.delete("/rickandmorty/fav/3");
      expect(body).toContainEqual(character1);
      expect(body).toContainEqual(character2);
    });
    it("Se elimina corractamente el personaje", async ()=>{
        const { body } = await agent.delete("/rickandmorty/fav/1");
        expect(body).not.toContainEqual(character1);
    })
  });
});
