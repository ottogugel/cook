import { supabase } from "./supabase";

export async function findAll() {
  const { data } = await supabase
  .from("ingredients")
  .select()
  .order("name")
  .returns<{ ingredients: IngredientResponse }[]>()

  return data
}