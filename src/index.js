import Collection from "lkd-collection";
import dotenv from "dotenv";

dotenv.load();

var Alarms = new Collection({
    name: "alarms",
    dynamodbTableName: process.env.DYNAMODB_TABLE_NAME
});

export var handler = Alarms.consumer;
