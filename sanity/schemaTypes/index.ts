import { blockContentType } from "./blockContent";
import { type SchemaTypeDefinition } from "sanity";
import { post } from "./post";
import { author } from "./author";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContentType, author],
};
