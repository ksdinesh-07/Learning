# JSON and XML

## Introduction

JSON (JavaScript Object Notation) and XML (Extensible Markup Language) are text-based formats used to represent, store, and exchange structured data between different applications and systems.

When a frontend application communicates with a backend API, the backend needs a structured format to send data back to the frontend. JSON and XML can both be used for this purpose.

```text
Frontend
   ↓
HTTP Request
   ↓
Backend
   ↓
Database
   ↓
Backend
   ↓
JSON / XML Response
   ↓
Frontend
```

## What is JSON?

JSON (JavaScript Object Notation) is a lightweight data-interchange format used to represent and exchange structured data.

JSON is widely used in modern web applications and REST APIs.

```json
{
    "user_id": 101,
    "user_name": "Dinesh",
    "email": "dinesh@example.com",
    "age": 21
}
```

JSON represents data using:

* Objects
* Arrays
* Strings
* Numbers
* Boolean values
* `null`

## JSON Object

A JSON object is represented using curly braces `{}`.

```json
{
    "user_id": 101,
    "user_name": "Dinesh"
}
```

Each property contains a key and a value.

```text
"key": value
```

Example:

```json
{
    "user_name": "Dinesh"
}
```

Here:

```text
"user_name" → key
"Dinesh"    → value
```

## JSON Data Types

JSON supports several basic data types.

### String

```json
{
    "user_name": "Dinesh"
}
```

### Number

```json
{
    "age": 21,
    "salary": 45000
}
```

### Boolean

```json
{
    "is_active": true
}
```

### Null

```json
{
    "middle_name": null
}
```

### Array

```json
{
    "skills": [
        "JavaScript",
        "Node.js",
        "AWS"
    ]
}
```

### Object

```json
{
    "address": {
        "city": "Coimbatore",
        "state": "Tamil Nadu"
    }
}
```

## Nested JSON

JSON objects can contain other objects.

```json
{
    "user_id": 101,
    "user_name": "Dinesh",
    "address": {
        "city": "Coimbatore",
        "state": "Tamil Nadu",
        "country": "India"
    }
}
```

The structure can be visualized as:

```text
user
 ├── user_id
 ├── user_name
 └── address
      ├── city
      ├── state
      └── country
```

## JSON Arrays

An array contains multiple values.

```json
{
    "skills": [
        "JavaScript",
        "Node.js",
        "AWS"
    ]
}
```

An array can also contain objects.

```json
{
    "employees": [
        {
            "employee_id": 101,
            "employee_name": "Dinesh"
        },
        {
            "employee_id": 102,
            "employee_name": "Arun"
        }
    ]
}
```

This structure is very common in APIs.

## JSON in APIs

A REST API can return structured data using JSON.

For example:

```json
{
    "success": true,
    "message": "Employees fetched successfully",
    "data": [
        {
            "employee_id": 101,
            "employee_name": "Dinesh"
        },
        {
            "employee_id": 102,
            "employee_name": "Arun"
        }
    ]
}
```

The frontend can receive and process this data.

```text
Frontend
    ↓
GET /api/employees
    ↓
Backend
    ↓
Database
    ↓
Backend
    ↓
JSON Response
    ↓
Frontend
```

## Reading JSON Using fetch()

The Fetch API can parse a JSON response using `response.json()`.

```javascript
const response = await fetch(url);

const data = await response.json();

console.log(data);
```

`response.json()` reads the response body and converts the JSON data into JavaScript data.

Because `response.json()` returns a Promise, it is normally used with `await`.

```javascript
const data = await response.json();
```

## JSON.stringify()

`JSON.stringify()` converts JavaScript data into a JSON string.

```javascript
const user_data = {
    user_id: 101,
    user_name: "Dinesh"
};

const json_data = JSON.stringify(user_data);

console.log(json_data);
```

Output:

```text
{"user_id":101,"user_name":"Dinesh"}
```

The conversion is:

```text
JavaScript Object
       ↓
JSON.stringify()
       ↓
JSON String
```

This is useful when data needs to be converted into JSON text before being sent or stored.

## JSON.parse()

`JSON.parse()` converts a JSON string into JavaScript data.

```javascript
const json_data = '{"user_id":101,"user_name":"Dinesh"}';

const user_data = JSON.parse(json_data);

console.log(user_data.user_name);
```

Output:

```text
Dinesh
```

The conversion is:

```text
JSON String
    ↓
JSON.parse()
    ↓
JavaScript Object
```

## JSON.stringify() vs JSON.parse()

| Method             | Purpose                       |
| ------------------ | ----------------------------- |
| `JSON.stringify()` | JavaScript data → JSON string |
| `JSON.parse()`     | JSON string → JavaScript data |

```text
JavaScript Object
       ↓
JSON.stringify()
       ↓
JSON String
       ↓
JSON.parse()
       ↓
JavaScript Object
```

## What is XML?

XML (Extensible Markup Language) is a text-based markup language used to represent structured data.

XML represents data using tags.

```xml
<user>
    <user_id>101</user_id>
    <user_name>Dinesh</user_name>
    <email>dinesh@example.com</email>
</user>
```

Unlike JSON, XML does not use `{}` and `[]` to represent its structure.

Instead, XML uses opening and closing tags.

## XML Elements

An XML element normally contains an opening tag, a value, and a closing tag.

```xml
<user_name>Dinesh</user_name>
```

Here:

```text
<user_name>       → opening tag
Dinesh            → value
</user_name>      → closing tag
```

Another example:

```xml
<age>21</age>
```

## XML Hierarchical Structure

XML data is organized in a hierarchical structure.

```xml
<employee>
    <employee_id>101</employee_id>
    <employee_name>Dinesh</employee_name>

    <address>
        <city>Coimbatore</city>
        <state>Tamil Nadu</state>
    </address>
</employee>
```

The structure is:

```text
employee
 ├── employee_id
 ├── employee_name
 └── address
      ├── city
      └── state
```

## XML Attributes

XML supports attributes.

```xml
<employee employee_id="101">
    <employee_name>Dinesh</employee_name>
</employee>
```

Here:

```text
employee_id="101"
```

is an attribute of the `employee` element.

JSON does not have a separate attribute concept.

## XML Repeated Elements

XML does not have a dedicated array syntax like JSON.

Repeated elements are commonly used to represent multiple values.

```xml
<employee>
    <skill>JavaScript</skill>
    <skill>Node.js</skill>
    <skill>AWS</skill>
</employee>
```

The repeated `<skill>` elements represent multiple values.

## Reading XML in JavaScript

When an API returns XML, the response can be read as text.

```javascript
const response = await fetch(url);

const xml_text = await response.text();
```

The XML text can then be parsed using `DOMParser`.

```javascript
const parser = new DOMParser();

const xml_document = parser.parseFromString(
    xml_text,
    "application/xml"
);
```

An XML element can then be accessed using DOM methods.

```javascript
const user_name = xml_document
    .querySelector("user_name")
    .textContent;

console.log(user_name);
```

## JSON and XML Representing the Same Data

JSON:

```json
{
    "user_id": 101,
    "user_name": "Dinesh",
    "email": "dinesh@example.com"
}
```

XML:

```xml
<user>
    <user_id>101</user_id>
    <user_name>Dinesh</user_name>
    <email>dinesh@example.com</email>
</user>
```

Both represent:

```text
User ID    → 101
User Name  → Dinesh
Email      → dinesh@example.com
```

The main difference is how the data is represented.

## JSON vs XML

| Feature          | JSON                               | XML                                         |
| ---------------- | ---------------------------------- | ------------------------------------------- |
| Full form        | JavaScript Object Notation         | Extensible Markup Language                  |
| Structure        | Objects and arrays                 | Tags and elements                           |
| Syntax           | `{}` and `[]`                      | `<tag></tag>`                               |
| Size             | Usually more compact               | Usually more verbose                        |
| Arrays           | Built-in                           | Usually represented using repeated elements |
| Attributes       | No separate attribute concept      | Supports attributes                         |
| JavaScript usage | Very easy                          | Requires XML parsing                        |
| Parsing          | `JSON.parse()` / `response.json()` | `DOMParser` / XML parser                    |
| Comments         | No standard comments               | Supports comments                           |
| REST APIs        | Very common                        | Less common                                 |
| SOAP             | Not normally used                  | Common                                      |

## Why JSON is Common in Modern Web Applications

JSON is widely used because:

* It is relatively compact.
* It is easy to read.
* It maps naturally to JavaScript objects and arrays.
* It supports arrays directly.
* It is easy to parse.
* It is supported by almost every modern programming language.
* It works well with REST APIs.
* It works well with frontend and backend applications.

A typical application can look like:

```text
Vue / React / Angular
          ↓
        JSON
          ↓
Node.js / Java / Python / .NET
          ↓
       Database
```

## Why XML is Still Used

XML is still used in some systems because it provides features such as:

* Attributes
* Namespaces
* Document-oriented structures
* XML validation
* SOAP web services
* Compatibility with existing enterprise systems

XML is especially common in systems that were designed around XML-based technologies.

## JSON and XML Are Not Programming Languages

JSON and XML are data representation formats.

They do not execute instructions like programming languages do.

Programming languages such as:

```text
JavaScript
Python
Java
C#
C++
```

can read and manipulate JSON or XML data.

## When JSON is Commonly Used

JSON is commonly used for:

* REST APIs
* Frontend applications
* Backend APIs
* Mobile application APIs
* HTTP data exchange
* Communication between different applications
* Configuration and structured data

Example:

```text
Frontend
   ↓
REST API
   ↓
JSON
   ↓
Backend
   ↓
Database
```

## When XML is Commonly Used

XML may be encountered when working with:

* SOAP APIs
* Enterprise systems
* Legacy applications
* XML-based integrations
* Systems requiring XML-specific features
* Document-oriented data

## Important JavaScript Methods

For JSON:

```javascript
JSON.parse()
```

Converts JSON text into JavaScript data.

```javascript
JSON.stringify()
```

Converts JavaScript data into a JSON string.

For HTTP responses:

```javascript
response.json()
```

Reads and parses a JSON response.

```javascript
response.text()
```

Reads the response body as text. This can be useful when the response contains XML.

For XML:

```javascript
DOMParser
```

Can be used to parse XML text into a document that JavaScript can work with.

## Simple Memory Trick

```text
JSON
 ↓
Objects + Arrays
 ↓
Compact
 ↓
JavaScript-friendly
 ↓
Common in REST APIs
```

```text
XML
 ↓
Tags + Elements
 ↓
More verbose
 ↓
Supports Attributes
 ↓
Common in SOAP / Enterprise Systems
```

## Final Summary

JSON and XML are both formats used to represent and exchange structured data.

JSON uses:

```text
Objects → {}
Arrays  → []
```

XML uses:

```text
Elements → <tag></tag>
```

JSON is generally compact and maps naturally to JavaScript objects and arrays.

XML is more verbose but supports features such as attributes, namespaces, and XML-specific document structures.

The fundamental purpose of both is the same:

```text
Represent structured data
        ↓
Exchange data between systems
        ↓
Allow different applications
to understand the data
```

The appropriate format depends on the application's requirements, existing systems, communication protocol, and integration requirements.
