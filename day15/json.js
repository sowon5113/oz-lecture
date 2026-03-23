const jsonString = `{
    "name": "John",
    "age": 30
}`;
console.log(jsonString);

const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

const jsonStringified = JSON.stringify(jsonObject);
console.log(jsonStringified);