<meta charset="utf-8"/>

### Récupération du mot passe oublié (étape 2) :

<br />

#### 1. Resource description

Cette ressource permet de re définir un nouveau mot de passe

#### 2. La route
```
url: /reset-password
```

::: danger Rappel
Methode:  `POST`
:::

<br />

#### 3. Paramètres

| paramettre | Type | regle de validation | Description |
| -------------------- | :---------: | ------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| token | string | Obligatoire | Le jeton qui a été envoyé dans l'étape 1 |
| new_password | string | Obligatoire | Le nouveau mot de passe |

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
    "token": "Ce jeton est expiré."
}
```
