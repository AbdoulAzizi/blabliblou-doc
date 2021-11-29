<meta charset="utf-8"/>

### Lister les clients

<br />

#### 1. Resource description

Cette ressource permet de récupérer les clients d'un admin N donné,

#### 2. La route
```
url: /api/clients
```

::: warning Rappel
Methode:  `GET`
:::

<br />


#### 3. Paramètres

| paramettre | Type | regle de validation | Description |
| -------------------- | :---------: | ------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| include | array | Optionnel | Les objets relatifs à inclure dans la réponse, valeur autorisées: `profile` |
| admin_n_id | integer | Optionnel | Récupérer seulement les clients de l'admin n que son ID correspond à celui ci |
| client_id | integer | Optionnel | Filtre par l'ID du client (le client qui correspond à cet ID qui sera renvoyé) |


<br />

#### 3. Requête réussie (Code: 200)


``` JSON
[
    {
        "id": 100,
        "reference": "C.211117.100",
        "created_at": "2021-11-17",
        "creation_date": "2021-10-10",
        "readable_created_at": "Mercredi 17/11/2021 18H29",
        "phone": "336677889944",
        "email": "boubi@gmail.com",
        "display_name": "RABSO",
        "username": "boubi@gmail.com",
        "status": null,
        "role": "client"
    },
    {
        "id": 9,
        "reference": "C.210927.9",
        "created_at": "2021-09-27",
        "creation_date": "2020-11-11",
        "readable_created_at": "Lundi 27/09/2021 16H19",
        "phone": "282648058",
        "email": "wiame.dev@wobyweb.comf",
        "display_name": "wiamessa",
        "username": "wip.dev@wobyweb.comf",
        "status": "OFFRE",
        "role": "client"
    }
]
```
