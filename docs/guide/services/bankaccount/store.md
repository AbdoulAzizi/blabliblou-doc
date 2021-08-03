# Ressource : Ajout d'un Compte Bancaire

---

## 1. Description de la Resource

Cette ressource permet d'ajouter un compte bancaire pour un utilisateur.

## 2. URL et Méthode d'accès

Pour ajouter un compte bancaire pour un utilisateur quelconque, vous faites appel à l'url suivante:

```
url: /bank_account
```

::: danger Rappel

L'accès aux données à cette ressource se fait via la méthode **`POST`**
:::

## 3. Paramètres

Ci-dessous le tableau descriptif des paramètres de cette ressource :
| paramètre | Type | Règle de validation | Description |
| --------- | :----------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------: |
| created_at | datetime | Obligatoire (lors de la création et de la mise à jour) | Date de création |
| name | string | Obligatoire (lors de la création), <br> min=2 (lors de la création et de la mise à jour) | Nom de la banque |
| address | string | Obligatoire (lors de la création), <br> min=3 (lors de la création et de la mise à jour) | Adresse de la banque |
| code | string | Obligatoire (lors de la création), <br> min=3 (lors de la création et de la mise à jour) | Code française de la banque |
| iban | string | Format IBAN « International Bank Account Number » (en français : numéro de compte bancaire international) - lors de la création et de la mise à jour | Le numéro IBAN |
| bic | string | Format BIC (Bank Identifier Code) - lors de la création et de la mise à jour | Le numéro BIC |
| status | string | Valeurs à choisir : **enabled, disabled** - lors de la création et de la mise à jour | Le status |
| user | User (utilisateur) | Obligatoire | Référence le id de l'utilisateur courant qui est le propriétaire du compte bancaire. |

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
  "id": 64,
  "name": "Banque Populaire",
  "status": "enabled",
  "created_at": "2021-07-12 16:14:15",
  "code": "53534234",
  "address": "Boulevard Abdelkrim el khattabi, apt. 5",
  "iban": null,
  "bic": null,
  "user_id": 1
}
```

## 5. Cas d'échec d'une requête

En cas d'échec, Quand vous ne fournissez pas le nom de la banque par exemple, vous aurez un message de type:

```json
{
  "name": "Cette valeur ne doit pas être vide."
}
```
