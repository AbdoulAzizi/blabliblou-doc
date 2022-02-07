<meta charset="utf-8"/>

### Création d'un salarié

<br />

#### 1. Resource description

Cette ressource permet de créer un salarié d'un client donné

#### 2. La route
```
url: /api/user/{client_id}/employee
```

::: danger Rappel
Methode:  `POST`
:::

<br />

#### 3. Paramètres

| paramettre | Type | regle de validation | Description |
| -------------------- | :---------: | ------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| first_name | string | Obligatoire | Prénom du salarie |
| last_name | string | Optionnel | Nom du salarie |
| address | string | Optionnel | Adresse du salarie |
| reference | integer | Optionnel | Reference du salarie |
| phones | string | Optionnel | Les numéros du telephone du salarie |
| mails | string | Optionnel | Les adresses mail du salarie |
| status | string | Obligatoire | Status du salarie qui doit être TNS ou SALARIE |


<br />

#### 4. Requête réussie (Code: 200)

Ci-dessous un exemple de rêquete passée avec succès:

``` JSON
{
    "id": 138,
    "first_name": "Abdelilah",
    "last_name": "Elhajouji",
    "address": "Tetouan, Morocco",
    "reference": 2132,
    "phones": [],
    "mails": [],
    "status": "SALARIE",
    "relationship": "employee",
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
