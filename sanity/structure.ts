import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // list all document types except 'siteSettings'
      ...S.documentTypeListItems(),
      S.divider(),
    ]);
