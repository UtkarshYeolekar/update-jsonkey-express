# update-jsonkey-express
In Many Scenario's we need to update a existing json key value with the new one. I have written a api, where we needs to provide a path of the key to update from the root.

## To run the application

- npm install
- npm start
- browse it at http://localhost:4000


### Sample Json Provided

- In this example, i have provided a sample json initally, you can replace the content with your json, or by modifying the api you can pass dynamic json also.

- Sample Json 
```{
 "testing":{
        "test1":{
            "a":11,
            "b":232
        },
        "test2":{
            "xy":233,
            "zz":"abc xyz",
            "json":{
                "msm":"sds",
                "abc":"weuewo"
                }
            }
    }
}

```
- How to use the Api

- Example 1: 

    > Suppose if need to update the value of the key "json" in "test2" node i.e testing->test2->json. 

    > Here root key is "testing" the node in which, we need to find the child key.

    > "json" is the end child node, which we need to update.

    > The path param value will be "/testing/test2/json".

    > The Api Format is: 
    
    POST http://localhost:4000/api/json?path=testing/test2/json
    
    and in the body we can pass the new value, value can be anything (String, Number, Json)
    
    Example :
    {"data":"utkarsh"}
    {"data":{"add":"number"}}

    > In response it will return the full updated json.


- Example 2:

    > Suppose if need to update the value of the root key "testing" itself.

    > Here root key is "testing" the node itself is the parent & child.

    > The path param value will be "/testing".

    ![PostMan Screen Shot Image](https://github.com/UtkarshYeolekar/update-jsonkey-express/images/sc1.png)