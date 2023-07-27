## Mid Term Project GIGIH (Fullstack Engineer)

## Table Of Content

* [Database Structure](#database-structure)
    * [Products Collection](#products-collection)
	* [Videos Collection](#videos-collection)
	* [Comments Collection](#comments-collection)
* [API Structure](#api-structure)
* [API Request Response](#api-request-response)
* [How To Run](#how-to-run-in-local)

## Database Structure
This project have 3 collection, products, videos and comments. 

### Products Collection

```
{
    productId: Number,
    productName: String,
    productQty: Number,
    productPrice: String,
    productLink: String,
    description: String, 
    },{
    timestamps: true
}
 ```

### Videos Collection

```
{
    {
     videoId: Number,
     title: String,
     urlThumbnail: String,
     productId: [Number],
    },{
    timestamps: true
    }
}
 ```

### Comment Collection

```
{
    commentId: Number,
    username: String,
    comment: String,
    videoId: Number,
},{
    timestamps: true
}
```

## API Structure

Endpoint ready to use

#Products
```
POST    /api/products
GET     /api/products
GET     /api/products/:productId
PUT     /api/products/:productId
DELETE  /api/comment/:productId
```

#Videos & Comments
```
POST    /api/videos/create
POST    /api/videos/:videoId/comment
GET     /api/videos
GET     /api/videos/:videoId
PUT     /api/videos/:videoId
GET     /api/videos/:videoId/product
GET     /api/videos/:videoId/comment
DELETE  /api/comment/:productId
```

**GET /api/products**
----
  Returns all products in the system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  "product": [
        {
            "_id": "ObjectId",
            "productName": "String",
            "productQty": Number,
            "description": "String",
            "createdAt": "timestamp",
            "updatedAt": "timestamp",
            "productId": number,
            "productLink": "String",
            "productPrice": "Number"
        },
    ]
}
```

**GET /api/products/:productId**
----
  Returns the specified product.
* **URL Params**  
  *Required:* `productId=[number]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
 **Content:**  `{ <product_object> }` 
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ message: "Product not found" }`  
  OR  
  * **Code:** 505  
  **Content:** `{ error: error.message }`


**PUT /api/products/:productId**
----
  Updates fields on the specified product and returns the updated object.
* **URL Params**  
  *Required:* `productId=[number]`
* **Data Params**  
```
  {
  	productId : Number
  }
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  `{ <product_object> }`  
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Product not found" }`  
  OR  
  * **Code:** 500  
  **Content:** `{ error: error.message }`

**DELETE /api/products/:productId**
----
  Deletes the specified product.
* **URL Params**  
  *Required:* `productId=[number]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
  * **Code:** 200
   **Content:** `{ message : "Product deleted successfully" }`  
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Product not found" }`  
  OR  
  * **Code:** 500  
  **Content:** `{ error: error.message }`

**POST /api/products/**
----
  Creates a new Order and returns the new object.
* **URL Params**  
  None
* **Data Params**  
```
  {
    _id: ObjectId,
    productId: Number,
    productName: String,
    productQty: Number,
    productPrice: String,
    productLink: String,
    description: String, 
}
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ <order_object> }` 
