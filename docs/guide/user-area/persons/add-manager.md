<meta charset="utf-8"/>

### Création d'un gérant

<br />

#### 1. Resource description

Cette ressource permet de créer un gérant d'un client donné

#### 2. La route
```
url: /api/user/{client_id}/manager
```

::: danger Rappel
Methode:  `POST`
:::

<br />

#### 3. Paramètres

| paramettre | Type | regle de validation | Description |
| -------------------- | :---------: | ------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| first_name | string | Obligatoire | Prénom du gérant |
| last_name | string | Optionnel | Nom du gérant |
| address | string | Optionnel | Adresse du gérant |
| reference | integer | Optionnel | Reference du gérant |
| phones | string | Optionnel | Les numéros du telephone du gérant |
| mails | string | Optionnel | Les adresses mail du gérant |
| status | string | Obligatoire | Status du gérant qui doit être TNS ou SALARIE |


<br />

#### 4. Requête réussie (Code: 200)

Ci-dessous un exemple de rêquete passer avec succès:

``` JSON
{
    "id": 138,
    "first_name": "Muhammad",
    "last_name": "Ali",
    "address": "Tetouan, Morocco",
    "reference": 2132,
    "phones": [],
    "mails": [],
    "status": "SALARIE",
    "relationship": "manager",
    "created_at": "2021-11-28 23:28:50"
}
```

#### 5. Cas d'échec de la requête
- Erreurs de validation
Ci-dessous un exemple du cas échant:

-  Error code: 417
```json
{
    "first_name": "Ce champ est obligatoire.",
    "status": "Ce champ est obligatoire."
}
```
