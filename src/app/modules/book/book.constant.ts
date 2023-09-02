export const bookFilterableFields = ["search", "minPrice", "maxPrice", "category"];
export const bookSearchableFields = ["title", "category", "price"];

export const bookRelationalFields: string[] = ["categoryId"];
export const bookRelationalFieldsMapper: { [key: string]: string } = {
    categoryId: "category",
};
