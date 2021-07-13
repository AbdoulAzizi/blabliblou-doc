# Ressource Récupération des Comptes Bancaires

---

## 1. Description de la Resource

Cette ressource permet de récupérer tous les comptes bancaires d'un utilisateur.

## 2. URL et Méthode d'accès

Pour récupérer l'ensemble des comptes bancaires d'un utilisateur à cette ressource, vous faites appel à l'url suivante:

```
url: /bank_accounts
```

::: warning Important
Pour accceder à un seul compte bancaire via son id vous ajoutez `/id` après `url: /bank_accounts`. <br>
Par exemple si l'on veut acceder au compte bancaire qui a le id=32, on procède comme suit:
`url: /bank_accounts/32`
:::

::: danger Rappel

L'accès aux données à cette ressource se fait via la méthode **`GET`**
:::

## 3. Paramètres

Ci-dessous le tableau descriptif des paramètres de cette ressource :

| paramètre |        Type        | Règle de validation                                                                                                                                  |         Description          |
| --------- | :----------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------: |
| createdAt |      datetime      | Obligatoire (lors de la création et de la mise à jour)                                                                                               |       Date de création       |
| name      |       string       | Obligatoire (lors de la création), <br> min=2 (lors de la création et de la mise à jour)                                                             |       Nom de la banque       |
| address   |       string       | Obligatoire (lors de la création), <br> min=3 (lors de la création et de la mise à jour)                                                             |     Adresse de la banque     |
| code      |       string       | Obligatoire (lors de la création), <br> min=3 (lors de la création et de la mise à jour)                                                             | Code française de la banque  |
| iban      |       string       | Format IBAN « International Bank Account Number » (en français : numéro de compte bancaire international) - lors de la création et de la mise à jour |        Le numéro IBAN        |
| bic       |       string       | Format BIC (Bank Identifier Code) - lors de la création et de la mise à jour                                                                         |        Le numéro BIC         |
| status    |       string       | Valeurs à choisir : **enabled, disabled** - lors de la création et de la mise à jour                                                                 |          Le status           |
| user      | User (utilisateur) | Obligatoire                                                                                                                                          | id de l'utilisateur courant. |

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
[
    {
        "id": 21,
        "name": "BMCE",
        "status": "enabled",
        "created_at": "2021-07-02 17:49:48",
        "code": "6839022",
        "address": "Boulevard Martil",
        "iban": null,
        "bic": null,
        "user_id": 1
    },
    {
        "id": 22,
        "name": "BMCE",
        "status": "enabled",
        "created_at": "2021-07-02 17:52:44",
        "code": "6839022",
        "address": "Boulevard Martil",
        "iban": null,
        "bic": null,
        "user_id": 1
    },
   .
   .
   .
   {
        "id": 33,
        "name": "Banque Populaire",
        "status": "enabled",
        "created_at": "2021-07-05 11:30:10",
        "code": "53534234",
        "address": "Boulevard Abdelkrim el khattabi, apt. 5",
        "iban": null,
        "bic": null,
        "user_id": 1
    }
   ]
```

## 5. Cas d'échec d'une requête

Si l'utilisateur courant ne possède auccun compte bancaire enregistré, vous aurez le résultat suivant:

```json
[]
```

Ou, par exemple si vous essayez d'acceder à cette ressource par le verbe `POST` vous aurez un message de type:

```json
{
  "error": "No route found for \"POST /api/bank_accounts\": Method Not Allowed (Allow: GET)"
}
```
