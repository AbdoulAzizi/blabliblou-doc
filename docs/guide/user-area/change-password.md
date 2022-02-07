<meta charset="utf-8"/>

### Mettre à jour du mot de passe :

<br />

#### 1. Resource description

Cette ressource permet de modifier le mot de passe d'un utilisateur donné


#### 2. La route
```
url: /change-password
```

::: danger Rappel
Methode:  `POST`
:::

<br />

#### 3. Paramètres

| paramettre | Type | regle de validation | Description |
| -------------------- | :---------: | ------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| username | string | Obligatoire | Le nom d'utilisateur de l'utilisateur concerné |
| old_password | string | Obligatoire | Ancien mot de passe |
| new_password | string | Obligatoire | Nouveau mot de passe |

<br />

#### 4. Requête réussie (Code: 200)

Ci-dessous un exemple de rêquete passée avec succès en renseignant les champs nécessaires (Obligatoires):

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
    "old_password": "Le mot de passe que vous avez saisi est incorrect."
}
```
