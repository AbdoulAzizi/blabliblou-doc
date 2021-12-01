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
| receipt | file | Fichier avec : <br> Taille maximale = "1M", <br> Type de formats acceptés : **application/pdf", "application/x-pdf", "image/jpg", "image/jpeg", "image/png"** | image ou un fichier PDF |
| label | string | Obligatoire | Libellé de la pièce donnée par celui qui la fournit |
| type | string | Obligatoire, (lors de la création et de la mise à jour)<br> Type pris en compte: **frais, vente** | Le type d'operation |
| amount | decimal | Obligatoire, positif | Le montant de la facture |
| amount_with_vat | decimal | Optionnel, positif | Le montant avec TVA |
| vat | decimal | Optionnel | La Taxe sur la Valeur Ajoutée |
| vat_value | decimal | Optionnel | |
| reference | string | Obligatoire lors de la création, min=3, max=100 | La référence interne comptable blabliblou de la pièce |
| comment | text | Optionnel | Commentaire |
| status | boolean | Affectée (1) ou Non-Affectée (0) | Définit si la facture a été affectée à une opération bancaire ou non |
| paid_amount | decimal | Optionnel, positif | Le montant payé |
| operation_date | datetime | Obligatoire (lors de la création et de la mise à jour) | Date de l’opération bancaire à laquelle a été affectée la pièce (si Champs NULL, pièce non affectée encore) |
| client_id| User (utilisateur) | Obligatoire |L'ID du qui est le propriétaire de la facture (piece). |

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
    "id": 31,
    "label": "Achat de matiere premiere",
    "type": "vente",
    "amount": "1000",
    "amount_with_vat": "1200.50",
    "vat": "0",
    "vat_value": "0",
    "reference": "5EFDRE63x",
    "comment": "Ceci est un joli commentaire",
    "operation_date": "2021-06-18 20:21:00",
    "displayable_operation_date": "18/06/2021",
    "created_at": "2021-12-01 14:16:53",
    "file_status": true,
    "affectation_status": false,
    "paid_amount": 100,
    "receipt_path": "/storage/invoices/PAGE-MON-SUIVI-COMPTA-V3-avec-modif-CHAMPS-RECHERCHE-par-mont-61a783d59413d.jpg",
    "user_id": 6
}
```

## 5. Cas d'échec d'une requête

En cas d'échec, lorsque par exemple vous renseignez un montant non valide (négatif), vous aurez un message de type:

```json
{
    "label": "Le libellé ne doit pas être vide",
    "receipt": "Cette valeur ne doit pas être vide.",
    "operation_date": "Cette valeur ne doit pas être vide.",
    ...
}
```
