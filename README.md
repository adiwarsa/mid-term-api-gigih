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

### Comments Collection

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
## API Request Response
# Products

**POST /api/products/**
----
  Creates a new Product and returns the new object.
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
  **Content:**  `{ <product_object> }` 

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
----
  # Videos & Comments
**POST /api/videos/create**
----
  Creates a new video and returns the new object.
* **URL Params**  
  None
* **Data Params**  
```
  {
    videoId: Number,
    title: String,
    urlThumbnail: String,
    productId: [Number],
  }
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ <video_object> }` 

**GET /api/videos**
----
  Returns all videos in the system.
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
  "video": [
        {
            _id: ObjectId,
            title: String,
            urlThumbnail: String,
            productId: [Number]
            createdAt: timestamp,
            updatedAt: timestamp,
            videoId: [Number]
        },
    ]
}
```

**GET /api/videos/:videoId/product**
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

**POST /api/videos/:videoId**
----
  Creates a new comment on a video and returns the new object.
* **URL Params**  
  None
* **Data Params**  
```
  {
    commentId: Number,
    username: String,
    comment: String,
    videoId: Number,
  }
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  `{ <comment_object> }` 

**GET /api/videos/:videoId/comment**
----
  Returns the specified comment.
* **URL Params**  
  *Required:* `commentId=[number]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
 **Content:**  `{ <comment_object> }` 
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ message: "Comment not found" }`  
  OR  
  * **Code:** 505  
  **Content:** `{ error: error.message }`

**GET /api/videos/:videosId**
----
  Returns the specified video.
* **URL Params**  
  *Required:* `videosId=[number]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
 **Content:**  `{ <video_object> }` 
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ message: "Video not found" }`  
  OR  
  * **Code:** 505  
  **Content:** `{ error: error.message }`

**PUT /api/videos/:videoId**
----
  Updates fields on the specified video and returns the updated object.
* **URL Params**  
  *Required:* `videoId=[number]`
* **Data Params**  
```
  {
  	videoId : Number
  }
```
* **Headers**  
  Content-Type: application/json  
* **Success Response:** 
* **Code:** 200  
  **Content:**  `{ <video_object> }`  
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Video not found" }`  
  OR  
  * **Code:** 500  
  **Content:** `{ error: error.message }`

**DELETE /api/videos/:videoId**
----
  Deletes the specified video.
* **URL Params**  
  *Required:* `videoId=[number]`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
  * **Code:** 200
   **Content:** `{ message : "Video deleted successfully" }`  
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Video not found" }`  
  OR  
  * **Code:** 500  
  **Content:** `{ error: error.message }`

## How to run in local

1. Clone this repository

```
git clone https://github.com/adiwarsa/mid-term-api-gigih.git
```

2. Install dependencies

```
npm install
```

3. Copy .env.example to .env

```
copy .env.example .env
```

4. Open .env file and put your database connection url:

```
DB_URL = mongodb://127.0.0.1:27017/{yourdatabasename}
```

5. Run the server

```
npm start
or
nodemon
```

6. Server is running on port 8000

```
http://localhost:8000

you can also change the port in server node.js line 23

const PORT = process.env.PORT || {port};
```

