# Ressource : Importation des fichiers textes

---

## 1. Description de la Resource

Cette ressource permet d'enregistrer une nouvelle opération bancaire à partir d'un ficher texte (.txt) qui contient toutes les informations (données) nécessaires.

## 2. URL et Méthode d'accès

Pour acceder à cette ressource, vous faites appel à l'url suivante:

```
url: /import
```

::: danger Rappel
L'accès aux données à cette ressource se fait via la méthode **`POST`**
:::

## 3. Paramètres

Ci-dessous le tableau descriptif des paramètres de cette ressource :
| paramètre | Type | Règle de validation | Description |
| :------------ | :------: | ------------------------------- | :--------- |
| transactions_file | File (fichier txt) | Obligatoire | Fichier txt contenant les données des opérations bancaires|

## 4. Requête réussie

Lorsque la requête est validée avec succès, il s'affichera un resultat de type suivant:

```json
{
  "status": "Données importées et enregistrées avec succès"
}
```

## 5. Cas d'échec d'une requête

En cas d'échec, par exemple lorsque que vous importez un fichier dont l'extension est differente de (_.txt_) vous aurez un message de type:

```json
{
  "status": "error",
  "message": "Ce type de fichier n'est pas pris en charge. L'extension du fichier doit être .txt"
}
```
