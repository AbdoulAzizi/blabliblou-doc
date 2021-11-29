### Chargement des documents client

<br />

#### 1. Description de la resource

Cette ressource permet de charger les documents pour un client donné,
Le document pourra être Des contrats, Registre commercial..


#### 2. La route
```
url: /api/user/{client_id}/document
```

::: danger Rappel
Methode:  `POST`
:::


#### 3. Paramètres

Le type de formulaire à soumettre doit être `form-data` afin qu'il puisse envoyer des fichiers!

| paramettre | Type | regle de validation | Description |
| -------------------- | :---------: | ------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| doc | file | Obligatoire | Le document à charger, types autorisés: [`pdf`, `jpeg`, `png`, `jpg`] |
| name | string | Optionnel | Intitulé du document |
| description | string | Optionnel | Description du document |

<br />
#### 4. Requête réussie (Code: 200)

Ci-dessous un exemple de rêquete passer avec succès en renseignant les champs nécessaires (Obligatoires):

``` JSON
{
    "id": 39,
    "path": "/storage/docs/rg-commercial.pdf",
    "name": "RG commercial.pdf",
    "descriptionn": "Registre commercial."
}
```

#### 5. Cas d'échec de la requête
- Erreurs de validation
Ci-dessous un exemple du cas échant:

-  Error code: 417
```json
{
    "doc": "Cette valeur ne doit pas être vide."
}
```


