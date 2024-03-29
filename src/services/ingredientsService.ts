import { supabase } from "./supabase"

// Buscar o ingrediente por id
async function findByIds(ids: string[]) {
  const { data } = await supabase
    .from("ingredients")
    .select()
    .in("id", ids)
    .order("name")
    .returns<IngredientResponse[]>()

  return data ?? []
}

// Buscar a receita pelo id
async function findByRecipeId(id: string) {
  const { data } = await supabase
    .from("recipes_ingredients")
    .select("ingredients (id, name, image)")
    .eq("recipe_id", id)
    .returns<{ ingredients: IngredientResponse }[]>()

  return data ? data.map((item) => item.ingredients) : []
}

async function findAll() {
  const { data } = await supabase
    .from("ingredients")
    .select()
    .order("name")
    .returns<IngredientResponse[]>()

  return data ?? []
}

export { findAll, findByIds, findByRecipeId }
