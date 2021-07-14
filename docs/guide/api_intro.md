## Introduction à l'api

<br>

::: danger Très important!
Toutes les resources de cette application sont securisées, donc il faut fournir le TOKEN (jeton)
dans l'entete de chaque requête.
:::

### Quelques erreurs liées au token

1. Token non disponible

Quand le token n'est pas présent dans la requête, il vous sera affiché le resultat suivant:

```json
{
  "code": 401,
  "message": "JWT Token not found"
}
```

2. Token expiré

Chaque Token a une durée de validité. Lorsque cette durée est expirée vous aurez une erreur vous indiquant que le Token est invalide.

Exemple de Token invalide:

```json
{
  "code": 401,
  "message": "Expired JWT Token"
}
```

3. Token invalide

De même quand vous modifiez un Token ou que vous transmettez une valeur incorrecte, vous aurez un resultat de type :

```json
{
  "code": 401,
  "message": "Invalid JWT Token"
}
```

<br>

### Domain de l'API

::: warning Note
Le domain de nos API est : `https://bbb-api.mypreprod.fr/api`, alors toutes les requêtes doivent être soumises a ce domain.
:::

### Exemple illustratif d'une ressource complete (l'URL) de création :

L'hote : https://bbb-api.mypreprod.fr/api

La ressource (endpoint) : `/register`

L'URL complète de la ressource sera donc: https://bbb-api.mypreprod.fr/api/register
