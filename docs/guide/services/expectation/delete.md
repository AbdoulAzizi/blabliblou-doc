<meta charset="utf-8"/>

### Suppression de données prévisionnelles

<br />

#### 1. Description de la resource

Cette ressource permet de supprimer un enregistrement de données prévisionnelles

#### 2. La route
```
url: /api/expectation/{expectation_id}
```
`expectation_id` est l'ID d'une ligne de données dans la table prévisionnel

::: danger Rappel
Methode:  `DELETE`
:::

<br />

#### 3. Paramètres

Aucun paramètre n'est demandé

<br />

#### 4. Requête réussie (Code: 200)

Ci-dessous un exemple de rêquete passée avec succès:

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
    "message": "Ce(tte) expectation n'existe pas."
}
```
