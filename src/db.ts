const products = [
 {
    "id": "2a089dca-d882-4305-9e25-dldfeb93fd12",
    "name": "Basketball",
    "image":"basketball-image.jpg",
    "description": "An official size basketball for both indoor and",
    "price": 29.99,
    "quantity": 30,
    "onStock": true,
    "category": "4f7f61e5-96c2-445d-80fb-79158e3d061b"
 },
 {

    "id": "73b8ca8b-ca88-483e-99ea-2fedaf2aldc1",
    "name": "Football",
    "image": "football-image.jpg",
    "description": "A standard football for casual matches and prac",
    "price": 19.99,
    "quantity": 25,
    "onStock": true,
    "category": "4f7f61e5-96c2-445d-80fb-79158e3d061b"
 } ,
 {
    "id": "2a089dca-d882-4305-9e25-dldfeb93fd13",
    "name": "Basketball",
    "image":"basketball-image.jpg",
    "description": "An official size basketball for both indoor and",
    "price": 29.99,
    "quantity": 30,
    "onStock": true,
    "category": "1b6c2e31-2003-4487-bdd-d1139c7e5571"
 },
 {

    "id": "73b8ca8b-ca88-483e-99ea-2fedaf2aldc4",
    "name": "Football",
    "image": "football-image.jpg",
    "description": "A standard football for casual matches and prac",
    "price": 19.99,
    "quantity": 25,
    "onStock": true,
    "category": "1b6c2e31-2003-4487-bdd-d1139c7e5571"
 } ,
 {
    "id": "2a089dca-d882-4305-9e25-dldfeb93fd15",
    "name": "Basketball",
    "image":"basketball-image.jpg",
    "description": "An official size basketball for both indoor and",
    "price": 29.99,
    "quantity": 30,
    "onStock": true,
    "category": "3b40b998-=38a-4cc4-b796-1fd2aea2567f"
 },
 {

    "id": "73b8ca8b-ca88-483e-99ea-2fedaf2aldc6",
    "name": "Football",
    "image": "football-image.jpg",
    "description": "A standard football for casual matches and prac",
    "price": 19.99,
    "quantity": 25,
    "onStock": true,
    "category": "3b40b998-=38a-4cc4-b796-1fd2aea2567f"
 } ,
 {
    "id": "2a089dca-d882-4305-9e25-dldfeb93fd17",
    "name": "Basketball",
    "image":"basketball-image.jpg",
    "description": "An official size basketball for both indoor and",
    "price": 29.99,
    "quantity": 30,
    "onStock": true,
    "category": "4f7f61e5-96c2-445d-80fb-79f58e3d061b"
 },
 {

    "id": "73b8ca8b-ca88-483e-99ea-2fedaf2aldc8",
    "name": "Football",
    "image": "football-image.jpg",
    "description": "A standard football for casual matches and prac",
    "price": 19.99,
    "quantity": 25,
    "onStock": true,
    "category": "4f7f61e5-96c2-445d-80fb-79f58e3d061b"
 } ,
 {
    "id": "2a089dca-d882-4305-9e25-dldfeb93fd19",
    "name": "Tabltet",
    "image":"basketball-image.jpg",
    "description": "An official size basketball for both indoor and",
    "price": 29.99,
    "quantity": 30,
    "onStock": true,
    "category": "97684b46-c116-4351-6943-174697694451"
 },
 {

    "id": "73b8ca8b-ca88-483e-99ea-2fedaf2aldd1",
    "name": "Laptop",
    "image": "football-image.jpg",
    "description": "A standard football for casual matches and prac",
    "price": 19.99,
    "quantity": 25,
    "onStock": true,
    "category": "97684b46-c116-4351-6943-174697694451"
 } 
];

const categories =[
   
    {
        "id": "4f7f61e5-96c2-445d-80fb-79158e3d061b",
        "name": "Sports"
    },
    {
        "id": "1b6c2e31-2003-4487-bdd-d1139c7e5571",
         "name": "Hobile phones"},
    {
        "id": "3b40b998-=38a-4cc4-b796-1fd2aea2567f",
        "name": "Clothing"
    },
    {
        "id": "97684b46-c116-4351-6943-174697694451",
        "name":"Furniture"

    } ];

    const reviews=[
        {
            "id": "bd23fdc4-0636-4199-ad18-7ca9870e855f",
             "review": "Great basketball for playing with friends!",
             "rating": 4.5,
              "date": "2023-10-20T23:44:24.245+06:00",
              "productId":"2a089dca-d882-4305-9e25-dldfeb93fd12"
        },
        {
            "id": "58db016e-0293-49cc-bf42-9384f8bccaef",
            "review": "The football is of good quality and lasts long",
            "rating": 4,
            "date": "2023-10-22T23:44:24.248+06:00",
            "productId":"2a089dca-d882-4305-9e25-dldfeb93fd12"
        },
        {
            "id": "bd23fdc4-0636-4199-ad18-7ca9870e855g",
             "review": "Great basketball for playing with friends!",
             "rating": 4.5,
              "date": "2023-10-20T23:44:24.245+06:00",
              "productId": "73b8ca8b-ca88-483e-99ea-2fedaf2aldc1"
        },
        {
            "id": "58db016e-0293-49cc-bf42-9384f8bccaeh",
            "review": "The football is of good quality and lasts long",
            "rating": 4,
            "date": "2023-10-22T23:44:24.248+06:00",
            "productId": "73b8ca8b-ca88-483e-99ea-2fedaf2aldc1"
        },
        {
            "id": "bd23fdc4-0636-4199-ad18-7ca9870e855l",
             "review": "Great basketball for playing with friends!",
             "rating": 4.5,
              "date": "2023-10-20T23:44:24.245+06:00",
              "productId": "2a089dca-d882-4305-9e25-dldfeb93fd13"
        },
        {
            "id": "58db016e-0293-49cc-bf42-9384f8bccaem",
            "review": "The football is of good quality and lasts long",
            "rating": 4,
            "date": "2023-10-22T23:44:24.248+06:00",
            "productId": "2a089dca-d882-4305-9e25-dldfeb93fd13"
        },
        {
            "id": "bd23fdc4-0636-4199-ad18-7ca9870e855q",
             "review": "Great basketball for playing with friends!",
             "rating": 4.5,
              "date": "2023-10-20T23:44:24.245+06:00",
              "productId": "2a089dca-d882-4305-9e25-dldfeb93fd13"
        },
        {
            "id": "58db016e-0293-49cc-bf42-9384f8bccaep",
            "review": "The football is of good quality and lasts long",
            "rating": 4,
            "date": "2023-10-22T23:44:24.248+06:00",
            "productId": "2a089dca-d882-4305-9e25-dldfeb93fd13"
        }
    ]



export const db={
    products,
    categories,
    reviews
}
    