import request from "./Request";

export async function testGet(params) {
  return await request("get", params, "testGet");
}
