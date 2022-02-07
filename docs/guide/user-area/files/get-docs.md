<meta charset="utf-8"/>

### Recupération des docs client

<br />

#### 1. Description de la resource

Cette ressource permet de récupérer les documents d'un client donné

#### 2. La route
```
url: /api/user/{client_id}/document
```

::: danger Rappel
Methode:  `GET`
:::

<br />

#### 3. Paramètres

Aucun paramètre n'est demandé

<br />

#### 4. Requête réussie (Code: 200)

Ci-dessous un exemple de rêquete passée avec succès:

``` JSON
[
    {
        "id": 30,
        "path": "/storage/docs/test.pdf",
        "name": "namee",
        "descriptionn": "desc"
    },
    {
        "id": 39,
        "path": "/storage/docs/Professional IT CV Sample.pdf",
        "name": "Professional IT CV Sample.pdf",
        "descriptionn": null
    }
]
```

