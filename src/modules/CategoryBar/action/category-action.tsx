import { instance } from "@/services";

export async function fetchCategories() {
  const { data } = await instance.get(`/category`);

  return data;
}
