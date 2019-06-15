import req from "supertest";
import server from '../src/config/server';

test("[GET] /", async () => {
  const res = await req(server).get("/");
  expect(res.text).toBe("Hello ts-node!");
});
