<meta charset="utf-8"/>

### Modification d'un utilisateur existant:

<br />

#### 1. Resource description

Cette ressource permet de modifier les données de base d'un utilisateur donné,
Il faut noter que l'accès à cette ressource est limité aux Admins P!

#### 2. Mettre à jour un utilisateur

Pour acceder à cette ressource, vous faites appel à l'url suivante:

```
url: /user/update
```

::: danger Rappel
En utilisant la methode `POST`
:::

<br />

#### 3. Paramètres

Les diferents parametres liées à cette ressource sont les suivants:
| paramettre | Type | regle de validation | Description |
| -------------------- | :---------: | ------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------- |
| email | email | Optionnel, Unique | C'est le mail adresse de l'utilisateur |
| password | string | Optionnel | mot de passe client |
| username | string | Unique | Le nom d'utilisateur qui sera utilisé lors de l'authentification, s'il n'est pas fourni, l'email qui sera utilisé à la place |
| display_name | string | Optionnel | Capital social ou rien |
| status | string | Optionnel | Son statut en interne qui doit etre l'une de ces valeurs (OFFRE, EN_COURS, RESILIE, RESILIE_BBB) |
| phone | string | Optionnel, Unique | Tel société principal |
| role | json | Optionnel, <br> valeurs permises: client, admin_n, ou admin_p | Rôle De l'utilisateur |
| creation_date | datetime | Optionnel | Date de création de la structure juridique |
| client_id | integer | Optionnel | ID du client à mettre à jour. Valeur par défaut: l'ID de l'utilisateur connecté |

<br />

#### 4. Requête réussie (Code: 200)

Ci-dessous un exemple de rêquete passer avec succès en renseignant les champs nécessaires (Obligatoires):

``` JSON
{
    "id": 25,
    "reference": "C.211013.25",
    "created_at": "2021-10-13",
    "creation_date": "2020-11-16",
    "readable_created_at": "Mercredi 13/10/2021 10H02",
    "phone": "9126690412",
    "email": "abdelilah.dev@wobyweb.com",
    "display_name": "ABDELILAH Dev.",
    "username": "abdelilah.dev@wobyweb.com",
    "status": "OFFRE",
    "role": "admin_p",
    "profile": {
        "id": 33,
        "entry_date": "2021-09-01",
        "exercice_entry_date": "2021-10-01",
        "exercice_date": "2021-10-01",
        "mail_address": "abdelilah.dev@wobyweb.com",
        "name": "test",
        "business_name": "test",
        "phone": "2126690412",
        "client_status": "OFFRE",
        "siret": "6GDERST",
        "address": {
            "num": "4",
            "street": "Laadir, Ikram",
            "comp": "Nouakchoute",
            "code": "16200",
            "ville": "Ouazzane"
        },
        "website": "https://bbb-link.com",
        "comment": "test",
        "capital": "9.00",
        "tax_regime": "100",
        "tax_periode": "testt",
        "tax_system": "M",
        "income_tax": "IR",
        "last_balance_sheet_entry": "testtt",
        "user_id": 25
    }
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
