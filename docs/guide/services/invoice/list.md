# Ressource : Récupération des Factures (Invoices)

## 1. Description de la Resource

Cette ressource permet d'afficher toutes les factures d'un utilisateur.

## 2. URL et Méthode d'accès

Pour acceder à cette ressource, vous faites appel à l'url suivante:

```
url: /invoice
```

::: warning Important
Pour accceder à une seule facture via son id vous ajoutez `/id` après `url: /invoice`. <br>
Par exemple si l'on veut acceder à une facture ayant pour id=4, on procède comme suit:
`url: /invoice/4`
:::

::: danger Rappel
L'accès aux données à cette ressource se fait via la méthode **`GET`**
:::

## 3. Paramètres

Cette ressource ne possède pas de paramètres.

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
[
    {
        "id": 106,
        "label": "Achat de matiere premiere",
        "type": "frais",
        "amount": "1000.00",
        "amount_with_vat": "1200.50",
        "vat": "0.00",
        "vat_value": "0.00",
        "reference": "5EFDRE63x",
        "comment": "Ceci est un joli commentaire",
        "operation_date": "2021-06-18 20:21:00",
        "created_at": "2021-08-04 11:02:49",
        "status": false,
        "receipt_path": "/storage/invoices/invoice-610a73d9efe77.jpg",
        "user_id": 1
    },
    {
        "id": 108,
        "label": "Achat de matiere premiere",
        "type": "frais",
        "amount": "1000.00",
        "amount_with_vat": "1200.50",
        "vat": "0.00",
        "vat_value": "0.00",
        "reference": "5EFDRE63x",
        "comment": "Ceci est un joli commentaire",
        "operation_date": "2021-06-18 20:21:00",
        "created_at": "2021-08-04 11:05:42",
        "status": false,
        "receipt_path": "/storage/invoices/invoice-610a74868305d.jpg",
        "user_id": 1
    },
    .
    .
    .
      {
        "id": 109,
        "label": "Achat de matiere premiere",
        "type": "frais",
        "amount": "1000.00",
        "amount_with_vat": "1200.50",
        "vat": "0.00",
        "vat_value": "0.00",
        "reference": "5EFDRE63x",
        "comment": "Ceci est un joli commentaire",
        "operation_date": "2021-06-18 20:21:00",
        "created_at": "2021-08-04 11:20:58",
        "status": false,
        "receipt_path": "/storage/invoices/invoice-610a781a192c6.jpg",
        "user_id": 1
    }
]
```

## 5. Cas d'échec d'une requête

En cas d'échec, par exemple si vous essayez d'acceder à cette ressource par le verbe `PUT` vous aurez un message de type:

```json
{
  "error": "No route found for \"PUT /api/invoice\": Method Not Allowed (Allow: POST, GET)"
}
```

Ou si l'utilisateur courant ne possède auccune facture enregistrée, vous aurez le résultat suivant:

```json
{
  "No Content": "Aucune facture n'a été enregistré pour cet utilisateur."
}
```
