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
| username   | alphanumeric | ???                 | C'est le nom qui sera utilisé dans l'authetification |
| password   | alphanumeric | ???                 |                                      le mot de passe |

<br />

#### 4. Requête réussie

Ci-dessous un exemple de rêquete passée avec succès :

```json
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MjQ1NDg2MjUsImV4cCI6MTYyNTU0ODYyNCwicm9s........y5a-Cw"
}
```

#### 5. Cas d'échec d'une requête

Lorsque le nom d'utilisateur ou le mot de passe est incorrect, il s'affiche le message suivant:

```json
{
  "code": 401,
  "message": "Invalid credentials."
}
```
