// 建立一個DB跟Collection(必須要建立)
db.getSiblingDB('Test').createCollection("delete_me");  

//Test建立一個使用者
db.getSiblingDB('admin').createUser(  
    {
        user: "Test",
        pwd: "1qaz2wsx123",
        roles: [
            { role: "readWrite", db: "Test"}
        ]
    }
);