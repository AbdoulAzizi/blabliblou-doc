<meta charset="utf-8"/>

### Lister les admins N

<br />

#### 1. Resource description

Cette ressource permet de récupérer les admins N enreistrés sur la BDD,

#### 2. La route
```
url: /api/admins_n
```

::: warning Rappel
Methode:  `GET`
:::

<br />


#### 3. Paramètres

| paramettre | Type | regle de validation | Description |
| -------------------- | :---------: | ------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| admin_n_id | integer | Optionnel | Récupérer seulement l'objet Admin N que son ID correspond à celui ci |
| include | array | Optionnel | Les objets relatifs à inclure dans la réponse, valeur autorisées: `profile` |


<br />

#### 3. Requête réussie (Code: 200)


::: warning Note
L'objet `profile` ne sera pas inclut si l'argument `include` n'est pas présent dans l'URL ou ne contient pas la vauleur `profile`
:::


``` JSON
[
    {
        "id": 74,
        "reference": "C.211105.73",
        "created_at": "2021-11-05",
        "creation_date": "2021-11-05",
        "readable_created_at": "Vendredi 05/11/2021 16H43",
        "phone": "0604050504",
        "email": "sam@gmail.com",
        "display_name": "samm",
        "username": "sam",
        "status": "OFFRE",
        "role": "admin_n",
        "profile": {
            "id": 40,
            "entry_date": "2021-11-11",
            "exercice_entry_date": "2021-11-18",
            "exercice_date": "2021-11-11",
            "mail_address": null,
            "name": "sam",
            "business_name": "buiss",
            "phone": null,
            "client_status": "SARL",
            "siret": "06402566",
            "address": null,
            "website": "https://google.com",
            "comment": "comtt",
            "capital": null,
            "tax_regime": "test",
            "tax_periode": "test",
            "tax_system": "M",
            "income_tax": "IR",
            "last_balance_sheet_entry": "testjjj",
            "user_id": 74
        }
    },
    ...
    {
        "id": 3,
        "reference": "C.210921.3",
        "created_at": "2021-09-21",
        "creation_date": "2020-11-11",
        "readable_created_at": "Mardi 21/09/2021 13H32",
        "phone": "21669081745",
        "email": "abdelilah.dev@wobyweb.coms",
        "display_name": "Abdelilah Dev",
        "username": "ddes",
        "status": "OFFRE",
        "role": "admin_n",
        "profile": []
    }
]
```
