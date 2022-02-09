const detallesAlergenos = "http//localhost:5000/api/allergens";


export const Allergens = async (item) => {

    const res = await fetch(`${detallesAlergenos}${item.id}`);
    if (res.ok) {

        return res.json();

    } else {

        return [];

    }
  };