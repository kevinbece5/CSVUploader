# CSVUploader
## CRUD operations 

### GET
#### Route
    /csv/:name
  - returns a csv formatted string of a selected file  
* **URL Params**: `name` _(String)_ - name of file being selected 
* **Success**: 
  * Code: 200
  * data: `{
  "body": string
}`
* **Error**
  * Code: 404 File not found
### POST 
#### Route
    /csv/:name
  - uploads a csv formated string and returns a link to file
  * **URL Params**: `name` _(String)_ - name of file being uploaded 
#### Body
  *     body{
            body: string,
        }
* **Success**: 
  * Code: 200
  * data: `{
  "body": string
}`
  * **Error**
  * Code: 400 File not uploaded
    }
    
### GET
#### Route
    /json/:name
  - returns an array of JSON objects formatted as a string of a selected file  
* **URL Params**: `name` _(String)_ - name of file being selected 
* **Success**: 
  * Code: 200
  * data: `{
  "body": string
}`
* **Error**
  * Code: 404 File not found
### POST 
#### Route
    /json/:name
  - uploads a csv formated string and converts to a JSON format inside an array  and returns a link to file
  * **URL Params**: `name` _(String)_ - name of file being uploaded 
#### Body
  *     body{
            body: string,
        }
* **Success**: 
  * Code: 200
  * data: `{
  "body": string
}`
  * **Error**
  * Code: 400 File not uploaded
    }
