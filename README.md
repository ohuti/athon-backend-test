# athon-backend-test
Athon interview test

# Introduction
This is an API of a fictional international police department where you can register, read and delete crimes.
A complete structure of a crime is:

```
{
  "crimeId": 2, //numeric reference to the crime registered in the database
  "victims": [ //list of victims of that crime
    "Harry Potter",
    "Goku",
    "Hyoga"
  ],
  "weapons": [ //list of weapons used to commit that crime
    {
      "weapon": "AK-47",
      "weapon_type": "Firearm"
    },
    {
      "weapon": "Medieval Sword",
      "weapon_type": "Melee"
    }
  ],
  "criminals": [ //list of criminals that commited the crime
    "Ronaldinho (Wizard)"
  ],
  "crimeTypes": [ //list of crime types that the crime fits
    "ideological falsehood"
  ],
  "country": "Brasil",
  "crimeDate": "2019-02-22T03:00:00.000Z"
}
```

# Status Codes
| Status Code | Description |
| --- | --- |
| 200 | successful operation |
| 201 | data successfully stored in database |
| 400 | wrong request format |
| 404 | no information was found in database |
| 500 | internal server error |

# API Endpoint
## Used Weapons
``` GET /weapon/used ``` 

### Parameters
none

### response exemples
#### 200:
```
"status": 200,
"response": "OK",
"weapons": [
  {
    "weapon": "AK-47",
    "weapon_type": "Firearm"
  }
]
```

#### 400:
```
"status": 400,
"response": "bad_request",
"message": request error message
```

#### 404:
```
"status": 404,
"response": "used_weapons_not_found",
"message": "no used weapon were found in database."
```

## Get Crimes
``` GET /crime ``` 

### Parameters
**query:**
```
start_date //Start date of a date range filter
end_date //End date of a date range filter
weapons[] //array of weapons to filter
criminals [] //array of criminals to filter
```

### response exemples
#### 200:
```
"status": 200,
"response": "OK",
"crime": [
  crimes list
]
```

#### 400:
```
"status": 400,
"response": "bad_request",
message: request error message
```

#### 404:
```
"status": 404,
"response": "crime(s)_not_found",
"message": "crimes not found in database with desired filters"
```

## Get Crime
``` GET /crime/:crimeId ``` 

### Parameters
crimeId: Database numeric reference to a stored crime

### response exemples
#### 200:
```
"status": 200,
"response": "OK",
"crime": {
  crime object
}
```

#### 400:
```
"status": 400,
"response": "bad_request",
"message": request error message
```

#### 404:
```
"status": 404,
"response": "crime(s)_not_found",
"message": "crime :crimeId not found in database"
```

## Add Crime
``` POST /crime ``` 

### Parameters
**body:**
```
{
  "victims": [], //list of victims (array of string)
  "weapons": [], //list of weapons (array of object { weapon, weapon_type })
  "criminals": [], //list of criminals (array of string)
  "crime_type": [], //list of crime types (array of string)
  "country": "" //location where the crime happened
}
```

### response exemples
#### 201:
```
"status": 201,
"response": "created",
"crimeId": 1 //crime numeric reference in database
```

#### 400:
```
"status": 400,
"response": "bad_request",
message: request error message
```

#### 500:
```
"status": 500,
"response": "internal_server_error"
```

## Delete Crime
``` DELETE /crime ``` 

### Parameters
**query:**
```
country //where crime happened
or
date //when crime happened
```

### response exemples
#### 200:
```
"status": 200,
"response": "ok",
"message": "crime(s) (one or more crime id) successfully deleted."
```

#### 400:
```
"status": 400,
"response": "bad_request",
message: request error message
```

#### 500:
```
"status": 500,
"response": "internal_server_error"
```