# Ressource Bank Acount

---

## 1. Description de la Resource

La ressource **Bank Acount** est l'URL qui fournit les informations du compte bancaire.

## 2. URL et Méthode d'accès

Pour acceder à cette ressource, vous faites appel à l'url suivante:

```
url: /bank_account
```

::: warning Rappel

L'accès aux données à cette ressource se fait via la méthode **`POST`**
:::

## 3. Paramètres

Ci-dessous le tableau descriptif des paramètres de cette ressource :

| paramètre |   Type   | Règle de validation                                                                                                                                  |   Description    |
| --------- | :------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------: |
| createdAt | datetime | Obligatoire (lors de la création et de la mise à jour)                                                                                               | Date de création |
| name      |  string  | Obligatoire (lors de la création), <br> min=2 (lors de la création et de la mise à jour)                                                             | Nom de la banque |
| address   |  string  | Obligatoire (lors de la création), <br> min=3 (lors de la création et de la mise à jour)                                                             | Adresse complète |
| code      |  string  | Obligatoire (lors de la création), <br> min=3 (lors de la création et de la mise à jour)                                                             |  Le code de ...  |
| iban      |  string  | Format IBAN « International Bank Account Number » (en français : numéro de compte bancaire international) - lors de la création et de la mise à jour |  Le numéro IBAN  |
| bic       |  string  | Format BIC (Bank Identifier Code) - lors de la création et de la mise à jour                                                                         |  Le numéro BIC   |
| status    |  string  | Valeurs à choisir : **enabled, disabled** - lors de la création et de la mise à jour                                                                 |    Le status     |

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
  "id": 3,
  "name": "CIH",
  "status": "enabled",
  "created_at": "2021-06-28 15:28:03",
  "code": "5353425",
  "address": "Boulevard Abdelkrim el khattabi, apt. 5",
  "iban": null,
  "bic": null
}
```

## 5. Cas d'échec d'une requête

En cas d'échec, Quand vous ne fournissez pas le nom de la banque par exemple, vous aurez un message de type:

```json
{
  "name": "Cette valeur ne doit pas être vide."
}
```
