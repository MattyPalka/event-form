const MongoClient = require('mongodb').MongoClient;
const assert = require('assert')



function dbCreate(collection, object) {
    return new Promise((resolve, reject) => {

        MongoClient.connect(process.env.MONGODB_URI, { useUnifiedTopology: true }, (err, client) => {
            assert.equal(null, err);
            const db = client.db(process.env.DB_NAME);
            db.collection(collection).insertOne(object, (err, done) => {
                if (err) { reject(err) }
                if (done) { resolve(done) }
                client.close()
            })
        })
    })
}

function dbFindOne(collection, item) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(process.env.MONGODB_URI, { useUnifiedTopology: true }, (err, client) => {
            assert.equal(null, err);
            const db = client.db(process.env.DB_NAME);

            db.collection(collection).findOne(item, (err, data) => {
                if (err) { reject(err) }
                if (!data) { resolve(false) }
                if (data) { resolve(data) }
                client.close()
            })
        })
    })
}

function dbFind(collection, query) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(process.env.MONGODB_URI, { useUnifiedTopology: true }, (err, client) => {
            assert.equal(null, err);
            const db = client.db(process.env.DB_NAME);

            db.collection(collection).find(query).toArray((err, data) => {
                if (err) { reject(err) }
                if (!data) { resolve(false) }
                if (data) { resolve(data) }
                client.close()
            })
        })
    })
}

function dbUpdateOne(collection, query, updatedValue) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(process.env.MONGODB_URI, { useUnifiedTopology: true }, (err, client) => {
            assert.equal(null, err);
            const db = client.db(process.env.DB_NAME);

            db.collection(collection).updateOne(query, updatedValue, (err, r) => {
                if (err) { reject(err) }
                if (!r) { resolve(false) }
                if (r) { resolve(r) }
                client.close()
            })
        })
    })
}

function dbDeleteOne(collection, item) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(process.env.MONGODB_URI, { useUnifiedTopology: true }, (err, client) => {
            assert.equal(null, err);
            const db = client.db(process.env.DB_NAME);

            db.collection(collection).deleteOne(item, (err, r) => {
                if (err) { reject(err) }
                if (!r) { resolve(false) }
                if (r) { resolve(r) }
                client.close()
            })
        })
    })
}

module.exports = {dbCreate, dbFindOne, dbFind, dbUpdateOne, dbDeleteOne}