// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `

type Product {
    id:ID!
    name:String
    image:String
    description:String,
    price:Float
    quantity:Int
    onStock:Boolean
    category: Categorie
    reviews: [Review]

},
type Categorie {
    id:ID!
    name:String
    products: [Product]
},
type Review {
    id:ID!
    review:String
    date:String
    rating:Float
    productId:String
}

  
type Query {
    products:[Product]
    product(productId:ID!):Product
    categories:[Categorie]
    categorie(categorieId:ID!):Categorie

  }
`;
