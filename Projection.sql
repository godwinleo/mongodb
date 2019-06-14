projection means selecting only the necessary data rather than selecting whole of the data of a document. 
If a document has 5 fields and you need to show only 3, then select only 3 fields from them.

>db.COLLECTION_NAME.find({},{KEY:1})

{ "_id" : ObjectId(5983548781331adf45ec7), "title":"Tutorials Point Overview"}
{ "_id" : ObjectId(5983548781331adf45ec5), "title":"MongoDB Overview"}

>db.mycol.find({},{"title":1,_id:0})
{"title":"MongoDB Overview"}
{"title":"NoSQL Overview"}
{"title":"Tutorials Point Overview"}
>

Please note _id field is always displayed while executing find() method, 
if you dont want this field, then you need to set it as 0.