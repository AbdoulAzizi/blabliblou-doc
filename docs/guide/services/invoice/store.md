# Ressource : Ajout d'une nouvelle facture

## 1. Description de la Resource

Cette ressource permet d'ajjouter une nouvelle facture pour un utilisateur quelconque .

## 2. URL et Méthode d'accès

Pour acceder à cette ressource, vous faites appel à l'url suivante:

```
url: /invoice
```

::: warning Rappel
L'accès aux données à cette ressource se fait via la méthode **`POST`**
:::

## 3. Paramètres

Les paramètres de cette ressouce sont les mêmes que celle de la récupération des factures qui sont définis sur la section suivante : [Paramètres](/guide/services/invoice/index#_3-parametres)

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
