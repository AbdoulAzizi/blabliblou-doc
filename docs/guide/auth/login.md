<meta charset="utf-8"/>

### La ressource qui permet de se connecter est détaillée comme suit:

<br />
<br />

#### 1. Resource description

Cette ressource permet de se connecter via un compte d'utilisateur déjà créé.

#### 2. S'enregsitrer

Pour acceder à cette ressource, vous faites appel à l'url suivante:

```
url: /login
```

::: danger Rappel
En utilisant la methode `POST`
:::

<br />

#### 3. Paramètres

Les diiferents parametres liées à cette ressource sont les suivants:

| paramettre |     Type     | regle de validation |                                          Description |
| ---------- | :----------: | ------------------- | ---------------------------------------------------: |
| username   | alphanumeric | unique              | C'est le nom qui sera utilisé dans l'authetification |
| password   | alphanumeric | Min: 6 characters   |                                      le mot de passe |

<br />

#### 4. Requête réussie

Exemple re reponse

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MjQ1NDg2MjUsImV4cCI6MTYyNTU0ODYyNCwicm9s........y5a-Cw"
}
```

Ci-dessous un exemple de rêquete passer avec succès en renseignant les champs nécessaires (Obligatoires):

```

```

#### 4. Requête echouée

```

```
