import { db } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => db.products,
        categories: () => db.categories,
        categorie: (parent, args, context) => {
            const result = db.categories.find((categorie) => categorie.id === args.categorieId);
            return result;
        },
        product: (parent, args, context) => {
            const result = db.products.find((pd) => pd.id === args.productId);
            return result;
        }
    },
    Product: {
        category: (parent, args, context) => {
            const result = db.categories.find((categorie) => categorie.id === parent.category);
            return result;
        },
        reviews: (parent, args, context) => {
            return db.reviews.filter((review) => review.productId === parent.id);
            // return db.reviews.filter((review)=>review.productId===parent.id);
        }
    },
    Categorie: {
        products: (parent, args, context) => {
            return db.products.filter((product) => product.category === parent.id);
        }
    }
};
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
