import { Alert, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import { Ingredient } from "@/components/Ingredient";
import { Selected } from "@/components/Selected";
import { services } from '@/services'

export default function Index() {

  const [selected, setSelected] = useState<String[]>([])
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])

  // Selecionar o ingrediente
  function handleToggleSelected(value: string) {
    if(selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value))
      // Faz um filtro e retorna só que o valor do item que é diferente
    }
    setSelected((state) => [...state, value])
    console.log(selected);
  }

  // Limpar o que for selecionado.
  function handleClearSelected() {
    Alert.alert("Clear", "Do you want to clean up?", [
      { text: "No", style: "cancel" },
      { text: "Yes", onPress: () => setSelected([]) },
    ]);
  }

  function handleSearch() {
    router.navigate("/recipes/" + selected)
  }

  useEffect(() => {
    services.ingredients.findAll().then(setIngredients)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Choose {"\n"}
        <Text style={styles.subtitle}>your products</Text>
      </Text>

      <Text style={styles.message}>
        Discover recipes based on the products you have chosen.
      </Text>

      <ScrollView
        contentContainerStyle={styles.ingredients}
        showsVerticalScrollIndicator={false}
      >
        {ingredients.map((item) => (
          <Ingredient
            key={item.id}
            name={item.name}
            image={`${services.storage.imagePath}/${item.image}`}
            selected={selected.includes(item.id)}
            onPress={() => handleToggleSelected(item.id)}
          />
        ))}
      </ScrollView>

      {selected.length > 0 && (
        <Selected
          quantity={selected.length}
          onClear={handleClearSelected}
          onSearch={handleSearch}
        />
      )}
    </View>
  );
}