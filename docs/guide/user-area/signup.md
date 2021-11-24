<meta charset="utf-8"/>

### La ressource qui permet de s'enregister est détaillée comme suit:

<br />

#### 1. Resource description

Cette ressource permet de creer un nouvel utilisateur,
Il faut noter que l'accès à cette ressource est limité aux Admins P!

#### 2. S'enregsitrer

Pour acceder à cette ressource, vous faites appel à l'url suivante:

```
url: /register
```

::: danger Rappel
En utilisant la methode `POST`
:::

<br />

#### 3. Paramètres

Les diiferents parametres liées à cette ressource sont les suivants:
| paramettre | Type | regle de validation | Description |
| -------------------- | :---------: | ------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| email | email | Obligatoire, Unique | C'est le mail adresse de l'utilisateur |
| password | string | Obligatoire | mot de passe client |
| username | string | Unique | Le nom d'utilisateur qui sera utilisé lors de l'authentification, s'il n'est pas fourni, l'email qui sera utilisé à la place |
| display_name | string | Obligatoire | Capital social ou rien |
| status | string | Optionnel | Son statut en interne qui doit etre l'une de ces valeurs (OFFRE, EN_COURS, RESILIE, RESILIE_BBB) |
| phone | string | Optionnel, Unique | Tel société principal |
| role | json | Optionnel, <br> valeurs permises: client, admin_n, ou admin_p | Rôle De l'utilisateur |
| creation_date | datetime | Optionnel | Date de création de la structure juridique |

<br />

#### 4. Requête réussie (Code: 200)

Ci-dessous un exemple de rêquete passer avec succès en renseignant les champs nécessaires (Obligatoires):

``` JSON
{
    "id": 106,
    "reference": "C.211119.106",
    "created_at": "2021-11-19",
    "creation_date": "2021-10-10",
    "readable_created_at": "Vendredi 19/11/2021 15H58",
    "phone": "336677889922",
    "email": "contact@rabso.comss",
    "display_name": "RABSO",
    "username": "contact@rabso.comss",
    "status": "OFFRE",
    "role": "admin_n"
}
```

#### 5. Cas d'échec de la requête
- Erreurs de validation
Ci-dessous un exemple d'un échec de rêquete dans le cas d'un email déjà existant:

-  Error code: 417
```json
{
    "email": "Cette valeur est déjà utilisée.",
    ...
}

```

-  Error code: 401
```json
{
    "code": 401,
    "message": "Expired JWT Token"
}
```
