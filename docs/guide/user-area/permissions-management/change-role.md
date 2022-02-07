<meta charset="utf-8"/>

### Récupération des gérants

<br />

#### 1. Resource description

Cette ressource permet de changer le rôle d'un utilisateur donné

#### 2. La route
```
url: /api/user/set-role/{user_id}
```

::: danger Rappel
Methode:  `POST`
:::

<br />

#### 3. Paramètres

| paramettre | Type | regle de validation | Description |
| -------------------- | :---------: | ------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| role | string | Obligatoire | Le role à affecter à l'utilisateur qui doit être l'une de ces valeurs: `admin_p`, `admin_n`, `client` |

<br />

#### 4. Requête réussie (Code: 200)

Ci-dessous un exemple de rêquete passée avec succès:

``` JSON
{
    "id": 41,
    "reference": "C.211014.41",
    "created_at": "2021-10-14",
    "creation_date": "2021-10-10",
    "readable_created_at": "Jeudi 14/10/2021 13H00",
    "phone": "3366778899",
    "email": "contact@rabso.fr",
    "display_name": "RABSO",
    "username": "contact@rabso.fr",
    "status": null,
    "role": "admin_p"
}
```


#### 5. Cas d'échec de la requête
- Erreurs de validation
Ci-dessous un exemple du cas échant:

-  Error code: 417
```json
{
    "role": "Ce champ est obligatoire."
}
```
