# Ressource : Mise à jour d'une nouvelle facture

## 1. Description de la Resource

Cette ressource permet de mettre à jour une facture existante pour un utilisateur quelconque .

## 2. URL et Méthode d'accès

Pour acceder à cette ressource, vous faites appel à l'url suivante:

```
url: /invoice/id
id = l'identifiant de la facture.
```

::: danger Rappel
L'accès aux données à cette ressource se fait via la méthode **`POST`**
:::

## 3. Paramètres

Les paramètres de cette ressouce sont les mêmes que celle de l'ajout d'une facture qui sont définis sur la section suivante : [Paramètres](/guide/services/invoice/store#_3-parametres)

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
  "id": 72,
  "label": "Achat de matiere premiere",
  "type": "vente",
  "amount": "100",
  "amount_with_vat": "120.50",
  "vat": "0.00",
  "vat_value": "0.00",
  "reference": "5EFDRE63x",
  "comment": "Ceci est un joli commentaire",
  "operation_date": "2021-06-18 20:21:00",
  "created_at": "2021-07-12 13:52:06",
  "status": false,
  "receipt_path": "/storage/invoices/",
  "user_id": 1
}
```

## 5. Cas d'échec d'une requête

En cas d'échec, lorsque par exemple vous renseignez un id non valide (qui n'existe pas), vous aurez un message de type:

```json
{
  "id": "Cette facture n'existe pas."
}
```
