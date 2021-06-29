<h1> Ressource Affectation </h1>

---

## 1. Description de la Resource

La ressource **Affectation** est l'URL qui renvoie les données liées aux catégories des opérations bancaires professionnelles de l’utilisateur.

## 2. URL et Méthode d'accès

Pour acceder à cette ressource, vous faites appel à l'url suivante:

```
url: /affectation
```

::: warning Rappel
L'accès aux données à cette ressource se fait via la méthode **`POST`**
:::

## 3. Paramètres

Ci-dessous le tableau descriptif des paramètres de cette ressource :

| paramètre     |   Type   | Règle de validation                                                                                                                                                                 | Description             |
| :------------ | :------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------- |
| id            | integer  | Géneration automatique                                                                                                                                                              | L'identifiant           |
| createdAt     | datetime | Optionnel                                                                                                                                                                           | Date de création        |
| label         |  string  | Obligatoire, min=3, max=200                                                                                                                                                         |                         |
| reference     |  string  | Obligatoire, min=2, max=100                                                                                                                                                         |                         |
| subLabel      |  string  | Optionnel                                                                                                                                                                           |                         |
| type          |  string  | Obligatoire, Valeurs admises:<br> **depense, recette**                                                                                                                              | Le type de référence    |
| categoryId    | integer  | A condition que: la table **category** et la colonne **id** existent.                                                                                                               | Le id de la catégory    |
| vatBlocked    | boolean  | Valeurs à choisir : **true, false**                                                                                                                                                 | Appliquer ou non la TVA |
| amount        | decimal  | Obligatoire                                                                                                                                                                         | Le montant              |
| amountWithVat | decimal  | Obligatoire                                                                                                                                                                         | Le montant avec la TVA  |
| vat           | decimal  | Obligatoire                                                                                                                                                                         | La TVA                  |
| vatValue      | decimal  | Obligatoire                                                                                                                                                                         | la valeur de la TVA     |
| codeFiscal    |  string  | Obligatoire, <br> Valeurs possibles d'affectation: **["206000", "211000", "213000", "215400", "218000", "218200", "218300", "218400", "271000", "275000", "421000", 'A terminer']** | Le code Fiscal          |
| bankId        | integer  | Obligatoire                                                                                                                                                                         | Le id de la banque      |

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
  "id": 2,
  "label": "GREGO",
  "reference": "23232",
  "sub_label": "achat de matiere premiere",
  "type": "depense",
  "category_id": {},
  "vat_blocked": false,
  "amount": 3333.33,
  "amount_with_vat": 4333.33,
  "vat": "10",
  "vat_value": 1000,
  "code_fiscal": "211000",
  "bank_id": 1
}
```

## 5. Cas d'échec d'une requête

En cas d'échec, par exemple lorsque le paramètre **`reference`** n'est pas fournit, vous aurez un message de type:

```json
{
  "reference": "Cette valeur ne doit pas être vide."
}
```
