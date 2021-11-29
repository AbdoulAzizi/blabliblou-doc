<meta charset="utf-8"/>

### Lister les admins N

<br />

#### 1. Resource description

Cette ressource permet de récupérer les admins N d'un client donné,

#### 2. La route
```
url: /api/{client_id}/admins_n
```

::: warning Rappel
Methode:  `GET`
:::

<br />


#### 3. Paramètres

| paramettre | Type | regle de validation | Description |
| -------------------- | :---------: | ------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| admin_n_id | integer | Optionnel | Récupérer seulement l'objet Admin N qui correspond l'ID fourni |
| include | array | Optionnel | Les objets relatifs à inclure dans la réponse, valeur autorisées: `profile` |


<br />

#### 3. Requête réussie (Code: 200)


::: warning Note
L'objet `profile` ne sera pas inclut si l'argument `include` n'est pas présent dans l'URL ou ne contient pas la vauleur `profile`
:::


``` JSON
[
    {
        "id": 2,
        "reference": "C.210921.2",
        "created_at": "2021-09-21",
        "creation_date": "2020-11-11",
        "readable_created_at": "Mardi 21/09/2021 13H25",
        "phone": "212669081748",
        "email": "abdelilah.dev@wobyweb.co",
        "display_name": "Abdelilah Dev",
        "username": "abdelilah.dev@wobyweb.co",
        "status": "OFFRE",
        "role": "admin_n",
        "profile": {
            "id": 57,
            "entry_date": "2021-09-01",
            "exercice_entry_date": "2021-10-01",
            "exercice_date": "2021-10-01",
            "mail_address": "abdelilahh.e@wobyweb.com2",
            "name": "test",
            "business_name": "test",
            "phone": "2126690817529",
            "client_status": "OFFRE",
            "siret": "6GDERST",
            "address": {
                "num": 4,
                "street": "Laadir, Ikram",
                "comp": "Nouakchoute",
                "code": 16200,
                "ville": "Ouazzane"
            },
            "website": "https://bbb-link.com",
            "comment": "test",
            "capital": "9.00",
            "tax_regime": "100",
            "tax_periode": "test",
            "tax_system": "M",
            "income_tax": "IR",
            "last_balance_sheet_entry": "test",
            "user_id": 2
        }
    }
]
```
