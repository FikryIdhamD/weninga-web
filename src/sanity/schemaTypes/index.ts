import { type SchemaTypeDefinition } from "sanity";
import product from "./product"; // pastikan path-nya benar

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
};
