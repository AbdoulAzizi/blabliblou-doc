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

Les paramètres sont utilisés ici pour filtrer le résultat retourné

Ci-dessous le tableau descriptif des paramètres de cette ressource :
| paramètre | Type | Règle de validation | Description |
| --------------- | :----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------- |
| from_operation_date | datetime | Optionnel | Dont la date d'operation est égale ou plus récente que celle-ci |
| to_operation_date | datetime | Optionnel | Dont la date d'operation est égale ou plus ancienne que celle-ci |
| label | string | Optionnel | Libellé de la pièce donnée par celui qui la fournit |
| from_amount | decimal | Optionnel | Dont le montant d'operation supérieur ou égal à celui-ci |
| to_amount | decimal | Optionnel | Dont le montant d'operation inférieur ou égal à celui-ci |
| vat | decimal | Optionnel | TVA d'operation |
| operation_type | string | Optionnel | Le type d'operation: **frais, vente** |
| id | integer | Optionnel | L'ID d'operation à récupérer pour récupérer une opération precise |
| client_id | integer | Optionnel | L'ID du client pour récupérer ses operations |

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
[
    {
        "id": 11,
        "label": "Achat de matiere premiere",
        "type": "vente",
        "amount": "1000.00",
        "amount_with_vat": "1200.50",
        "vat": "0.00",
        "vat_value": "0.00",
        "reference": "5EFDRE63x",
        "comment": "Ceci est un joli commentaire",
        "operation_date": "2021-06-18 20:21:00",
        "displayable_operation_date": "18/06/2021",
        "created_at": "2021-11-02 18:13:31",
        "file_status": true,
        "affectation_status": false,
        "paid_amount": 0,
        "receipt_path": "/storage/invoices/test-61817fcb73667.pdf",
        "user_id": 6
    },
    {
        "id": 12,
        "label": "Achat de matiere premiere",
        "type": "vente",
        "amount": "1000.00",
        "amount_with_vat": "1200.50",
        "vat": "0.00",
        "vat_value": "0.00",
        "reference": "5EFDRE63x",
        "comment": "Ceci est un joli commentaire",
        "operation_date": "2021-06-18 20:21:00",
        "displayable_operation_date": "18/06/2021",
        "created_at": "2021-11-02 18:14:05",
        "file_status": true,
        "affectation_status": false,
        "paid_amount": 0,
        "receipt_path": "/storage/invoices/test-61817fee06445.pdf",
        "user_id": 6
    },
    ...
]
```

## 5. Cas d'échec d'une requête

En cas d'échec, par exemple si vous essayez d'acceder à cette ressource par le verbe `PUT` vous aurez un message de type:

```json
{
  "error": "No route found for \"PUT /api/invoice\": Method Not Allowed (Allow: POST, GET)"
}
```

Ou d'acceder à une ressource inexistante

```json
{
    "id": "Cette facture est introuvable."
}
```

Ou si l'utilisateur courant ne possède aucune facture enregistrée, vous aurez le résultat suivant:

```json
{
  []
}
```
