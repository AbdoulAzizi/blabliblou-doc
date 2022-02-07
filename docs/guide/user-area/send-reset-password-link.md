<meta charset="utf-8"/>

### Récupération du mot passe oublié (étape 1) :

<br />

#### 1. Resource description

Cette ressource permet de réinitialiser un mot de passe oublié,
Par envoyant un lien contenant un jeton qui sera utilisé dans l'étape 2,
Le lien sera envoyé à l'adresse email fournie

#### 2. La route
```
url: /request-reset-password-link
```

::: danger Rappel
Methode:  `POST`
:::

<br />

#### 3. Paramètres

| paramettre | Type | regle de validation | Description |
| -------------------- | :---------: | ------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| mail_address | string | Obligatoire | L'adresse mail de l'utilisateur concerné |

<br />

#### 4. Requête réussie (Code: 200)

Ci-dessous un exemple de rêquete passée avec succès en renseignant les champs nécessaires (Obligatoires):

``` JSON
{
    "message": "Un lien de récupérartion du mot de passe vous a été envoyé."
}
```

#### 5. Cas d'échec de la requête
- Erreurs de validation
Ci-dessous un exemple du cas échant:

-  Error code: 417
```json
{
    "mail_address": "L'adresse mail que vous avez saisi n'est pas enregistrés."
}
```
