<meta charset="utf-8"/>

### Récupération des salariés

<br />

#### 1. Resource description

Cette ressource permet de lister tous les salairés d'un client donné

#### 2. La route
```
url: /api/employee?client_id={client_id}
```

::: danger Rappel
Methode:  `GET`
:::

<br />

#### 3. Paramètres

| paramettre | Type | regle de validation | Description |
| -------------------- | :---------: | ------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| client_id | integer | Obligatoire | Passé dans l'URL, c'est l'ID du client dont vous voulez lister ses salariés|

<br />

#### 4. Requête réussie (Code: 200)

Ci-dessous un exemple de rêquete passer avec succès:

``` JSON
[
    {
        "id": 1,
        "first_name": "Muhammad",
        "last_name": "Abdallah",
        "address": "Medine Mounawara",
        "reference": 1231,
        "phones": [
            "063905342"
        ],
        "mails": [
            "muhammad@gmail.com"
        ],
        "status": "TNS",
        "relationship": "employee",
        "created_at": "2021-10-07 13:33:46"
    },
    {
        "id": 2,
        "first_name": "Muhammad",
        "last_name": "Abdallah",
        "address": "Medine Mounawara",
        "reference": 1231,
        "phones": [
            "063905342"
        ],
        "mails": [
            "muhammad@gmail.com"
        ],
        "status": "TNS",
        "relationship": "employee",
        "created_at": "2021-10-21 17:24:40"
    },
    {
        "id": 3,
        "first_name": "Muhammad",
        "last_name": "Abdallah",
        "address": "Medine Mounawara",
        "reference": 1231,
        "phones": [
            "063905342"
        ],
        "mails": [
            "muhammad@gmail.com"
        ],
        "status": "TNS",
        "relationship": "employee",
        "created_at": "2021-10-21 17:24:59"
    },
    {
        "id": 4,
        "first_name": "Muhammad",
        "last_name": "Abdallah",
        "address": "Medine Mounawara",
        "reference": 1231,
        "phones": [
            "063905342"
        ],
        "mails": [
            "muhammad@gmail.com"
        ],
        "status": "TNS",
        "relationship": "employee",
        "created_at": "2021-10-21 17:25:10"
    },
    {
        "id": 5,
        "first_name": "Muhammad",
        "last_name": "Abdallah",
        "address": "Medine Mounawara",
        "reference": 1231,
        "phones": [
            "063905342"
        ],
        "mails": [
            "muhammad@gmail.com"
        ],
        "status": "TNS",
        "relationship": "employee",
        "created_at": "2021-10-21 17:25:18"
    },
    {
        "id": 6,
        "first_name": "Muhammad",
        "last_name": "Abdallah",
        "address": "Medine Mounawara",
        "reference": 1231,
        "phones": [
            "063905342"
        ],
        "mails": [
            "muhammad@gmail.com"
        ],
        "status": "TNS",
        "relationship": "employee",
        "created_at": "2021-10-22 15:37:36"
    },
    {
        "id": 7,
        "first_name": "salah",
        "last_name": "momo",
        "address": "rue des champignons",
        "reference": 125465,
        "phones": null,
        "mails": [],
        "status": "TNS",
        "relationship": "employee",
        "created_at": "2021-10-22 16:10:47"
    },
    {
        "id": 12,
        "first_name": "Muhammad",
        "last_name": "Abdallah",
        "address": "Medine Mounawara",
        "reference": 1231,
        "phones": [
            "063905342"
        ],
        "mails": [
            "muhammad@gmail.com"
        ],
        "status": "TNS",
        "relationship": "employee",
        "created_at": "2021-10-29 13:07:21"
    },
    {
        "id": 21,
        "first_name": "Muhammad",
        "last_name": "Abdallah",
        "address": "Medine Mounawara",
        "reference": 1231,
        "phones": [
            "063905342"
        ],
        "mails": [
            "muhammad@gmail.com"
        ],
        "status": "TNS",
        "relationship": "employee",
        "created_at": "2021-11-01 14:34:15"
    },
    {
        "id": 31,
        "first_name": "Muhammad",
        "last_name": "Abdallah",
        "address": "Medine Mounawara",
        "reference": 1231,
        "phones": [
            "063905342"
        ],
        "mails": [
            "muhammad@gmail.com"
        ],
        "status": "TNS",
        "relationship": "employee",
        "created_at": "2021-11-08 17:07:48"
    }
]
```

