<meta charset="utf-8"/>

### Suppression d'un salarié

<br />

#### 1. Resource description

Cette ressource permet de supprimer un salarié donné

#### 2. La route
```
url: /api/employee/{employee_id}
```

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
    "message": "Ce(tte) personne n'existe pas."
}
```
