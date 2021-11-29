<meta charset="utf-8"/>

### Suppression d'un doc client

<br />

#### 1. Description de la resource

Cette ressource permet de supprimer un document client

#### 2. La route
```
url: /api/user/document/{document_id}
```

::: danger Rappel
Methode:  `DELETE`
:::

<br />

#### 3. Paramètres

Aucun paramètre n'est demandé

<br />

#### 4. Requête réussie (Code: 200)

Ci-dessous un exemple de rêquete passer avec succès:

``` JSON
{
    "message": "Votre opération a été traitée avec succès."
}
```

#### 5. Cas d'échec de la requête
- Erreurs de validation
Ci-dessous un exemple du cas échant:

-  Error code: 417
```json
{
    "message": "Ce(tte) document n'existe pas."
}
```