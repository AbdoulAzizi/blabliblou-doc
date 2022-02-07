<meta charset="utf-8"/>

### La ressource qui permet de s'enregister est détaillée comme suit:

<br />
<br />

#### 1. Resource description

Cette ressource permet de creer un nouvel utilisateur.

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
| clientNumber | string | Optionnel | Numéro client créé dans la base à la souscription |
| entryDate | datetime | Optionnel | Date d’entrée en tant que client Bla Bli Blou (donnée liée à celle du Num client) |
| exerciceEntryDate | datetime | Optionnel | Date de début du 1er exercice traité en mission comptable par Blabliblou |
| clientStatus | string | Optionnel | Son statut en interne Bla Bli Blou |
| email | email | Obligatoire, Unique | C'est le mail adresse de l'utilisateur |
| password | string | Obligatoire | mot de passe client |
| clientName | string | Obligatoire | Nom juridique entreprise client |
| clientCommercialName | string | Obligatoire, Min: 4 characters | Nom commercial de l’entreprise client |
| clientSiret | string | Optionnel | Siret(Système d'identification du répertoire des établissements) de l’entreprise |
| clientAddress | text | Optionnel | Adresse entreprise avec paramètres Num + rue + complément + code postal + ville |
| phone | string | Optionnel, Unique | Tel société principal |
| clientWebsite | string | Optionnel | Adresse site Web |
| clientComment | text | Optionnel | Facebook, instagram, pinterest, autre…. |
| clientCreatedAt | datetime | Optionnel | Date de création de la structure juridique |
| ManagersIDs | json | Optionnel | Infos de chaque dirigeant de la société. Peut y en avoir plusieurs |
| clientExerciseDate | datetime | Optionnel | Date de clôture d’exercice comptable |
| clientCapital | decimal | Optionnel | Capital social ou rien |
| clientEmployerID | integer | Optionnel | Nombre de salariés |
| clientEmployersCount | NUMERIQUE | Optionnel | Nombre de salariés |
| clientSalariesNames | PERSONNE | Optionnel | Infos de chaque salarié de la société. Peut y en avoir plusieurs |
| clientVatRegime | string | Optionnel, <br> valeurs permises: **FRANCHISE, SIMPLIFIE, MINI-REEL, NORMAL** | Si franchise TVA, simplifié, Mini réel, Normal |
| clientVatPeriod | string | Optionnel,<br> valeurs permises: **Année, trim, mois** | Si assujetti à la TVA,, quelle fréquence paiement |
| clientFiscalRegime | string | Optionnel, <br> valeurs permises: **M, RS, RN** | Régime fiscal (M = MICRO, RS = REEL SIMPLIFIE ou RN = REEL NORMAL) |
| clientTaxRegime | string | Optionnel, <br> Valeurs permises: **IR, IS** | Impôts sur revenus ou Société |
| clientBank | strings | Optionnel | Le ou les banques (il peut y avoir plusieurs compte) du client au format BANQUE |
| balanceSheetEntry | string | Optionnel | Il s’agit d’une table de données des données du dernier Bilan du client servant à récupérer les infos n-1 |
| roles | json | Optionnel, <br> valeurs permises: **USER (client), ADMIN_N (normal admin), ADMIN_P (Principal/Super admin)** | Rôle De l'utilisateur |
| type | string | Optionnel | Le Type |
| bankaccount | BankAccount | Obligatoire | Réference le compte bancaire de l'utilisateur |
| invoices | Invoice | Obligatoire | Réference la facture de l'utilisateur |

<br />

#### 4. Requête réussie

Ci-dessous un exemple de rêquete passée avec succès en renseignant les champs nécessaires (Obligatoires):

```

{
    "clientNumber": "60d4936452957",
    "entryDate": {
        "date": "2021-03-26 00:00:00.000000",
        "timezone_type": 3,
        "timezone": "UTC"
    },
    "exerciceEntryDate": {
        "date": "2021-04-01 00:00:00.000000",
        "timezone_type": 3,
        "timezone": "UTC"
    },
    "clientStatus": "password",
    "email": "aziz@gmail.com",
    "clientName": "Business HQ",
    "clientCommercialName": "Mohamed",
    "clientSiret": "23561534",
    "clientAddress": "Av. Abdellah ben Allal",
    "phone": "212669081748",
    "clientWebsite": "https://blabliblou.com",
    "clientComment": "",
    "clientCreatedAt": "2021-06-24",
    "ManagersIDs": null,
    "clientExerciseDate": {
        "date": "2021-06-24 14:15:00.338341",
        "timezone_type": 3,
        "timezone": "UTC"
    },
    "clientCapital": 100000,
    "clientEmployerID": 0,
    "clientVatRegime": "",
    "clientVatPeriod": "",
    "clientFiscalRegime": "",
    "clientTaxRegime": "",
    "clientBank": "",
    "balanceSheetEntry": "",
    "login": "aziz@gmail.com"
}

```

#### 5. Cas d'échec d'une requête

Ci-dessous un exemple d'un échec de rêquete dans le cas d'un email déjà existant:

```
{
    "email": "Cette valeur est déjà utilisée."
}

```
