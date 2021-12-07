# Ressource : Import des factures

## 1. Description de la Resource

Cette ressource permet d'importer un fichier des factures.

## 2. URL et Méthode d'accès

Pour acceder à cette ressource, vous faites appel à l'url suivante:

```
url: /api/invoice/import
```

::: warning Rappel
Méthode **`POST`**
:::

## 3. Paramètres

::: warning Rappel
- La notion **`*.champs`** indique chaque ligne dans le fichier.
- Ainsi la première ligne doit contenir les entêtes comme indiqué dans l'exemple ci-dessous 
:::

Exemple d'un fichier des opérations

| date | num | name | amount | vat|
| ----|----|----|----|----|
|20210201|1|SERV BANCAIRES1|1001|15|
|20210201|2|SERV BANCAIRES2|1002|10|
|20210201|3|SERV BANCAIRES3|1003|20|
|20210201|4|SERV BANCAIRES4|1004|10|

Ci-dessous le tableau descriptif des paramètres de cette ressource :
| paramètre | Type | Règle de validation | Description |
| --------------- | :----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------- |
| invoices_file | file | Fichier des opérations <br> Type de formats acceptés : **txt** | Fichier des opérations sous format txt |
| type | string | Obligatoire<br> Type pris en compte: **frais, vente** | Le type des opérations |
| client_id| integer | Obligatoire |L'ID de l'utilisateur qui est le propriétaire de la facture (piece). |
| override| boolean | Optionnel | Ecraser ou non les enregistrements s'ils existent déjà  |
| *.operation_date | datetime | Obligatoire | Date de l’opération bancaire |
| *.*.reference | numeric | Obligatoire | La référence ou num de la pièce |
| *.vat | numeric | Obligatoire | Le taux de TVA |
| *.label | string | Obligatoire | Libellé de la pièce donnée par celui qui la fournit |
| *.amount_with_vat | decimal | Obligatoire, positif | Le montant total de facture |

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
    "status": "Created",
    "message": "Données importées et enregistrées avec succès"
}
```

## 5. Cas d'échec (erreur de validationn)


```json
{
    "client_id": "Cette valeur ne doit pas être vide.",
    "type": "Cette valeur ne doit pas être vide.",
    "invoices_file": "Cette valeur ne doit pas être vide."
}
```

## 6. Cas d'échec (Données dupliquées)

```json
{
    "status": "Error",
    "message": "Données dupliquées! Pour écraser les anciens enreistrements par ces valeurs, veulliez ajouter le param `override` avec la valeur `true`",
    "duplicated_values": [
        {
            "id": 328,
            "num": "1",
            "name": "SERV BANCAIRES 1",
            "date": "2021-02-01 00:00:00",
            "amount": 0.00,
            "vat": 15.00
        },
        ...
        {
            "id": 331,
            "num": "4",
            "name": "SERV BANCAIRES 4",
            "date": "2021-02-02 00:00:00",
            "amount": 0.00,
            "vat": 10.00
        }
    ]
}
```