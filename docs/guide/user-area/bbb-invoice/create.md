### Création des factures client

<br />

#### 1. Description de la resource

Cette ressource vous permet de créer des factures pour un client donné.

Les `Factures BBB` sont les factures que le client paie comme frais d'utilisation de la plateforme BBB


#### 2. La route
```
url: /api/client/bbb-invoice
```

::: danger Rappel
Methode:  `POST`
:::


#### 3. Paramètres

Le type de formulaire à soumettre doit être `form-data` afin qu'il puisse envoyer des fichiers!

| paramettre | Type | regle de validation | Description |
| -------------------- | :---------: | ------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| client_id | integer | Optionnel | ID du client pour lequel nous créons la facture |
| amount | integer | Optionnel | Montant de la facture |
| paid_amount | integer | Optionnel | Montant payé de la facture |
| pay_before | date | Optionnel | La date d'échéance de la facture |

<br />
#### 4. Requête réussie (Code: 200)

Ci-dessous un exemple de rêquete passée avec succès en renseignant les champs nécessaires (Obligatoires):

``` JSON
{
    "id": 34,
    "pay_before": "2021-10-11",
    "readable_pay_before": "Monday 11th October 2021",
    "status": "unpaid",
    "amount": "1000",
    "paid_amount": "0"
}
```

#### 5. Cas d'échec de la requête
- Erreurs de validation
Ci-dessous un exemple du cas échant:

-  Error code: 417
```json
{
    "pay_before": "Cette valeur ne doit pas être vide.",
    "client_id": "Cette valeur ne doit pas être vide."
}
```


