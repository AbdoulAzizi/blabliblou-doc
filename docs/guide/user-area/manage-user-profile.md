<meta charset="utf-8"/>

### Ajout des données client:

<br />

#### 1. Resource description

Puisque seul les clients qui ont ces données, alors nous avons décidé de séparer la route d'ajout des données busniess de la route de création des utilisateurs qui peuevnt être même des admins

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
| -------------------- | :---------: | ------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------
| entry_date | datetime | Optionnel | Date d’entrée en tant que client Bla Bli Blou (donnée liée à celle du Num client) |
| exercice_entry_date | datetime | Optionnel | Date de début du 1er exercice traité en mission comptable par Blabliblou |
| client_status | string | Optionnel | Son statut en interne Bla Bli Blou  (NB pour la suite de la SPEC :  OFFRE = en mode découverte 1 mois gratuit, EN_COURS = actif donc suivi, RESILIE = a résilié sa mission et donc son compte, EN_ATTENTE = en attente de statut) |
| name | string | Optionnel | Nom du client |
| business_name | string | Optionnel | Nom commercial de l’entreprise client |
| siret | string | Optionnel | Siret de l’entreprise |
| address.num | integer | Optionnel | Numéro de la rue |
| address.street | integer | Optionnel | Nom de rue |
| address.comp | string | Optionnel, Unique | Complément |
| address.code | c | Optionnel | Code postal  |
| address.ville | datetime | Optionnel | Ville de l’adresse |
| phone | datetime | Optionnel | Numéro du tel |
| mail_address | string | Optionnel, Unique | Adresse e-mail |
| website | string | Optionnel | Siteweb |
| comment | string | Optionnel | Un commentaire ou description |
| exercice_date | datetime | Optionnel | Date de clôture d’exercice comptable |
| capital | string | float, Unique | Capital social ou rien |
| tax_regime | string | Optionnel | Si franchise TVA, simplifié, Mini réel, Normal |
| tax_periode | string | Optionnel | Si assujetti à la TVA,, quelle fréquence paiement |
| tax_system | string | Optionnel | Régime fiscal (M = MICRO, RS = REEL SIMPLIFIE ou RN = REEL NORMAL) |
| income_tax | string | Optionnel, Unique | Impôts sur revenus ou Société |
| last_balance_sheet_entry | json | Optionnel | Il s’agit d’une table de données des données du dernier Bilan du client servant à récupérer les infos n-1  |
| client_id | datetime | Optionnel | ID du client (de l'objet utilisateur) |

<br />


* Exemple de contenu de la requête à envoyer

```json
{
    "entry_date": "2021-09-01",
    "exercice_entry_date": "2021-10-01",
    "client_status":  "offre",
    "name":  "test",
    "business_name":  "test",
    "siret":  "6GDERST",
    "address": {
        "num": 4,
        "street": "Laadir, Ikram",
        "comp": "Nouakchoute",
        "code": 16200,
        "ville": "Ouazzane"
    },
    "phone":  "2126690817429",
    "mail_address":  "abdelilah.e@wobyweb.com2",
    "website":  "https://bbb-link.com",
    "comment":  "test",
    "exercice_date": "2021-10-01",
    "capital":  "9.0",
    "tax_regime":  "100",
    "tax_periode":  "test",
    "tax_system":  "M",
    "income_tax":  "IR",
    "last_balance_sheet_entry":  "test",
    "client_id": "9"
}
```

#### 4. Requête réussie (Code: 200)

Ci-dessous un exemple de rêquete passer avec succès en renseignant les champs nécessaires (Obligatoires):

``` JSON
{
    "id": 72,
    "entry_date": "2021-09-01",
    "exercice_entry_date": "2021-10-01",
    "exercice_date": "2021-10-01",
    "mail_address": "abdelilah.e@wobyweb.co.ma",
    "name": "test",
    "business_name": "test",
    "phone": "212669081749",
    "client_status": "OFFRE",
    "siret": "6GDERST",
    "address": {
        "num": 4,
        "street": "Laadir, Ikram",
        "comp": "Nouakchoute",
        "code": 16200,
        "ville": "Ouazzane"
    },
    "website": "https://bbb-link.com",
    "comment": "test",
    "capital": "9.0",
    "tax_regime": "100",
    "tax_periode": "test",
    "tax_system": "M",
    "income_tax": "IR",
    "last_balance_sheet_entry": "test",
    "user_id": 9
}
```

#### 5. Cas d'échec de la requête
- Erreurs de validation
Ci-dessous un exemple d'un échec de rêquete dans le cas d'un email déjà existant:

-  Error code: 417
```json
{
    "mail_address": "Cette valeur est déjà utilisée.",
    "phone": "Cette valeur est déjà utilisée.",
    "client_id": "Type de donné fournie incorrect."
}

```


## La mise à jour des donnnées d'un profile peut être faite comme suite:

1. Appelez la méthode __POST__ ___api/user/profile/update/{profile_id}___

Les paramêtres et rèles de validations dont les mêmes que ceux de la création




## La suppression des donnnées d'un profile peut être faite comme suite:

1. Appelez la méthode __DELETE__ ___api/user/profile/{profile_id}___

La réponse des deux cas (réussite et échec) sont similaires aux autres!
