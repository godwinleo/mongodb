MongoDB Save() Method
The save() method replaces the existing document with the new document passed in the save() method.

Syntax
The basic syntax of MongoDB save() method is shown below −

>db.COLLECTION_NAME.save({_id:ObjectId(),NEW_DATA})
Example
Following example will replace the document with the _id '5983548781331adf45ec5'.

>db.mycol.save(
   {
      "_id" : ObjectId(5983548781331adf45ec5), "title":"Tutorials Point New Topic",
      "by":"Tutorials Point"
   }
)
>db.mycol.find()
{ "_id" : ObjectId(5983548781331adf45ec5), "title":"Tutorials Point New Topic",
   "by":"Tutorials Point"}
{ "_id" : ObjectId(5983548781331adf45ec6), "title":"NoSQL Overview"}
{ "_id" : ObjectId(5983548781331adf45ec7), "title":"Tutorials Point Overview"}
>