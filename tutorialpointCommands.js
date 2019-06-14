sample document

{
   _id: ObjectId(7df78ad8902c)
   title: 'MongoDB Overview', 
   description: 'MongoDB is no sql database',
   by: 'tutorials point',
   url: 'http://www.tutorialspoint.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 100, 
   comments: [	
      {
         user:'user1',
         message: 'My first comment',
         dateCreated: new Date(2011,1,20,2,15),
         like: 0 
      },
      {
         user:'user2',
         message: 'My second comments',
         dateCreated: new Date(2011,1,25,7,45),
         like: 5
      }
   ]
}



Advantages of MongoDB over RDBMS

    Schema less − MongoDB is a document database in which one collection holds different documents. Number of fields, content and size of the document can differ from one document to another.
    Structure of a single object is clear.
    No complex joins.
    Deep query-ability. MongoDB supports dynamic queries on documents using a document-based query language that's nearly as powerful as SQL.
    Tuning.
    Ease of scale-out − MongoDB is easy to scale.
    Conversion/mapping of application objects to database objects not needed.
    Uses internal memory for storing the (indowed) working set, enabling faster access of data.


/*------------------------------------------------------------------------------*/
starting the database
/*------------------------------------------------------------------------------*/

mongod.exe --dbpath "d:\set up\mongodb\data" 

D:\set up\mongodb\bin>mongo.exe
MongoDB shell version: 2.4.6
connecting to: test
>db.test.save( { a: 1 } )
>db.test.find()
{ "_id" : ObjectId(5879b0f65a56a454), "a" : 1 }
>


/*------------------------------------------------------------------------------*/
help
/*------------------------------------------------------------------------------*/
db.help()
db.stats()


use databasename;
show dbs;
db.movie.insert({"name":"tutorials point"})

db.dropdatabase()
-------------------create collection------------------------------

db.createCollection(name, options)
options - capped 	Boolean
options - autoIndexId Boolean
options - size 	number
options - max 	number

eg - db.createCollection("mycol", { capped : true, autoIndexId : true, size :  6142800, max : 10000 } )

-------------------drop collection------------------------------

db.COLLECTION_NAME.drop()

>db.mycollection.drop()
true


-------------------data types------------------------------


    String − This is the most commonly used datatype to store the data. String in MongoDB must be UTF-8 valid.
    Integer − This type is used to store a numerical value. Integer can be 32 bit or 64 bit depending upon your server.
    Boolean − This type is used to store a boolean (true/ false) value.
    Double − This type is used to store floating point values.
    Min/ Max keys − This type is used to compare a value against the lowest and highest BSON elements.
    Arrays − This type is used to store arrays or list or multiple values into one key.
    Timestamp − ctimestamp. This can be handy for recording when a document has been modified or added.
    Object − This datatype is used for embedded documents.
    Null − This type is used to store a Null value.
    Symbol − This datatype is used identically to a string; however, it's generally reserved for languages that use a specific symbol type.
    Date − This datatype is used to store the current date or time in UNIX time format. You can specify your own date time by creating object of Date and passing day, month, year into it.
    Object ID − This datatype is used to store the document’s ID.
    Binary data − This datatype is used to store binary data.
    Code − This datatype is used to store JavaScript code into the document.
    Regular expression − This datatype is used to store regular expression.

-------------------Insert Document------------------------------
>db.COLLECTION_NAME.insert(document)


>db.mycol.insert({
   _id: ObjectId(7df78ad8902c),
   title: 'MongoDB Overview', 
   description: 'MongoDB is no sql database',
   by: 'tutorials point',
   url: 'http://www.tutorialspoint.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 100
})


db.post.insert([
   {
      title: 'MongoDB Overview', 
      description: 'MongoDB is no sql database',
      by: 'tutorials point',
      url: 'http://www.tutorialspoint.com',
      tags: ['mongodb', 'database', 'NoSQL'],
      likes: 100
   },
	
   {
      title: 'NoSQL Database', 
      description: "NoSQL database doesn't have tables",
      by: 'tutorials point',
      url: 'http://www.tutorialspoint.com',
      tags: ['mongodb', 'database', 'NoSQL'],
      likes: 20, 
      comments: [	
         {
            user:'user1',
            message: 'My first comment',
            dateCreated: new Date(2013,11,10,2,35),
            like: 0 
         }
      ]
   }
])


------------------MongoDB - Query Document------------------------


The find() Method
>db.COLLECTION_NAME.find()
>db.mycol.find().pretty()

>db.mycol.find().pretty()
{
   "_id": ObjectId(7df78ad8902c),
   "title": "MongoDB Overview", 
   "description": "MongoDB is no sql database",
   "by": "tutorials point",
   "url": "http://www.tutorialspoint.com",
   "tags": ["mongodb", "database", "NoSQL"],
   "likes": "100"
}
>


-------------AND in MongoDB-------------

>db.mycol.find(
   {
      $and: [
         {key1: value1}, {key2:value2}
      ]
   }
).pretty()


>db.mycol.find({$and:[{"by":"tutorials point"},{"title": "MongoDB Overview"}]}).pretty() {
   "_id": ObjectId(7df78ad8902c),
   "title": "MongoDB Overview", 
   "description": "MongoDB is no sql database",
   "by": "tutorials point",
   "url": "http://www.tutorialspoint.com",
   "tags": ["mongodb", "database", "NoSQL"],
   "likes": "100"
}


-------------OR in MongoDB-------------

To query documents based on the OR condition, you need to use $or keyword. Following is the basic syntax of OR −

>db.mycol.find(
   {
      $or: [
         {key1: value1}, {key2:value2}
      ]
   }
).pretty()

>db.mycol.find({$or:[{"by":"tutorials point"},{"title": "MongoDB Overview"}]}).pretty()
{
   "_id": ObjectId(7df78ad8902c),
   "title": "MongoDB Overview", 
   "description": "MongoDB is no sql database",
   "by": "tutorials point",
   "url": "http://www.tutorialspoint.com",
   "tags": ["mongodb", "database", "NoSQL"],
   "likes": "100"
}
>



-------------Using AND and OR Together-------------

The following example will show the documents that have likes greater than 10 and whose title is either 'MongoDB Overview' or by is 'tutorials point'. Equivalent SQL where clause is 'where likes>10 AND (by = 'tutorials point' OR title = 'MongoDB Overview')'

>db.mycol.find({"likes": {$gt:10}, $or: [{"by": "tutorials point"},
   {"title": "MongoDB Overview"}]}).pretty()
{
   "_id": ObjectId(7df78ad8902c),
   "title": "MongoDB Overview", 
   "description": "MongoDB is no sql database",
   "by": "tutorials point",
   "url": "http://www.tutorialspoint.com",
   "tags": ["mongodb", "database", "NoSQL"],
   "likes": "100"
}
>








