# Ressource : Ajout d'une nouvelle facture

## 1. Description de la Resource

Cette ressource permet d'ajouter une nouvelle facture pour un utilisateur quelconque .

## 2. URL et Méthode d'accès

Pour acceder à cette ressource, vous faites appel à l'url suivante:

```
url: /invoice
```

::: warning Rappel
L'accès aux données à cette ressource se fait via la méthode **`POST`**
:::

## 3. Paramètres

Ci-dessous le tableau descriptif des paramètres de cette ressource :
| paramètre | Type | Règle de validation | Description |
| --------------- | :----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------- |
| created_at | datetime | Optionnel | Date à laquelle elle a été éditée |
| name | string | | Constitué de la date de la pièce à l’envers + Libellé pièce + montant TTC |
| label | string | Obligatoire | Libellé de la pièce donnée par celui qui la fournit |
| receipt | string | Fichier avec : <br> Taille maximale = "1M", <br> Type de formats acceptés : **application/pdf", "application/x-pdf", "image/jpg", "image/jpeg", "image/png"** | image ou un fichier PDF |
| amount | decimal | Obligaoire, positif | Le montant de la facture |
| amount_with_vat | decimal | Obligatoire, positif | Le montant avec TVA |
| vat | decimal | Optionnel | La Taxe sur la Valeur Ajoutée |
| vat_value | decimal | Optionnel | |
| reference | string | Obligatoire lors de la création, min=3, max=100 | La référence interne comptable blabliblou de la pièce |
| type | string | Obligatoire, (lors de la création et de la mise à jour)<br> Type pris en compte: **frais, vente** | Le type d'operation |
| comment | text | Optionnel | Commentaire |
| status | boolean | 0, 1 | Affectée (1) ou pas encore affectée (0) |
| affectation_id | integer | Optionnel | L’affectation de la pièce liée à affectation de la ligne dans EN COURS ou dans relevé de compte MA GESTION |
| operation_date | datetime | Obligatoire (lors de la création et de la mise à jour) | Date de l’opération bancaire à laquelle a été affectée la pièce (si Champs NULL, pièce non affectée encore) |
| user | User (utilisateur) | Obligatoire |Référence le id de l'utilisateur courant qui est le propriétaire de la facture. |

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
  "id": 74,
  "label": "Achat de matiere premiere",
  "type": "frais",
  "amount": "1000",
  "amount_with_vat": "1200.50",
  "vat": "0",
  "vat_value": "0",
  "reference": "5EFDRE63x",
  "comment": "Ceci est un joli commentaire",
  "operation_date": "2021-06-18 20:21:00",
  "created_at": "2021-07-12 18:08:51",
  "status": false,
  "receipt_path": "/storage/invoices/",
  "user_id": 9
}
```

## 5. Cas d'échec d'une requête

En cas d'échec, lorsque par exemple vous renseignez un montant non valide (négatif), vous aurez un message de type:

```json
{
  "amount": "Le montant doit être un nombre positif"
}
```
