

>db.COLLECTION_NAME.find().limit(NUMBER).skip(NUMBER)

>db.mycol.find({},{"title":1,_id:0}).limit(1).skip(1)
{"title":"NoSQL Overview"}
>

Apart from limit() method, there is one more method skip() which 
also accepts number type argument and is used to skip the number of documents.