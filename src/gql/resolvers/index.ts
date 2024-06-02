import { db } from "../../db.js";

export const resolvers = {
    Query: {
        products:()=> db.products,
        categories:()=>db.categories,
        categorie:(parent:any,args:{categorieId:string},context:any)=>{

           const result=db.categories.find(( categorie:any)=>categorie.id===args.categorieId);
           return result;

        },
        product:(parent:any,args:{
            productId:string
        },context:any)=>{

            const result=db.products.find((pd:any)=>pd.id===args.productId);
            return result;
        }
    },
    Product:{
        category:(parent:any,args:any,context:any)=>{
            const result= db.categories.find((categorie)=>categorie.id===parent.category);
            return result;
        },
        reviews:(parent:any,args:any,context:any)=>{

            return db.reviews.filter((review)=>review.productId===parent.id);
          
           // return db.reviews.filter((review)=>review.productId===parent.id);
        }
    },
    Categorie:{
        products:(parent:any,args:any,context:any)=>{
           return db.products.filter((product)=>product.category===parent.id);
           
        }
    }

   
  };
  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.