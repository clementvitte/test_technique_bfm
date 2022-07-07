# Test technique - Base For Music
## _Gender Game_

Gender Game est une applicatiion avec des règles simple. Le but du jeu est de trouver le genre (masculin/féminin) du prénom généré sur la page. Il y a un système de point, c'est à dire que l'utilisateur commence la partie avec un score de 10 et pour chaque bonne réponses il gagne 1 point. Pour chaque mauvaise réponses, il perd 1 point. Le jeu se termine quand le joueur a cumulé 20 points ou si sont score tombe à 0.


## Tech, packages, dépendances

Pour réaliser ce test technique j'ai utilsé différentes technologies notamment : 

- [Node.js] - Node.js est le framework sur lequel j'ai réalisé ce projet.
- [Express] - J'ai utilisé Express pour gérer l'api Gender, notamment pour le routage ainsi que pour le traitement des erreurs.
- [MySql] - Pour créer ma base de données, j'ai utilisé Mysql
- [axios] - Pour récupérer les requêtes de l'api j'ai utilisé axios, qui est une bibliothèque JS permettant de communiquer avec une api en utilisant des requêtes.
- [nodemon] - Pour lancer mon application j'ai utilisé nodemon qui est un utilitaire d'interface de ligne de commande (CLI) qui surveil le système de fichier et qui redémarre automatiquement le processus. 


## Les fonctionnalités et les blocaages rencontrés
Le test n'est malheureusement pas terminé... Cependant toute la partie back fonctionne. 
C'est à dire que la base de donées est bien créée et connecté. L'API est bien implémenté, c'est à dire qu'elle revoie bien le genre du nom placé en paramètre. Ce nom est choisi parmi la base de donées créée précedemment. 
Les routes fonctionnent, que ce soit dans le front ou le back, ce qui veut dire que j'arrive bien a récupérer le nom dans mon front et j'arrive bien à le console.log cependant je bloque sur l'affichage du nom sur ma page HTML. 
Je n'ai pas encore trouvé de solution.

Pour être plus précis, je pense que le blocage que j'ai est du aux varibles. Je stock mon nom dans une variable dans une fonction, sauf que je n'ai pas encore trouver la solution de comment utiliser une variable d'une fonction dans une autre fonction.

J'ai aussi eu un contre-temps dû a l'utilisation du template EJS, dont on n'avait pas le droit. Cela m'a donc retardé dans mont travail.



## Installation et lancement de l'application

Pour ce projet, j'ai du installer certaines dépendances qui ont été cité plus haut. Pour se faire, j'ai exécuté les commandes suivantes : 

- [Express]

```sh
npm i express --save
```


- [MySql]

```sh
npm i express --save
```


- [Axios]

```sh
npm i Axios --save
```


- [Nodemon]

```sh
npm install --save-dev nodemon
```

Pour lancer ce projet, il faut lancer le front et le back séparément. Tout d'abors, on doit lancer le server avec : 

```sh 
nodemon index.js
```

Pour le front il suffit de lancer la page HTML avec live Server par exemple. Live server est une extension vs code.

## Création de la Base de données

Pour la création de la base de données exécuté les commandes suivantes :

- Création de la base de donnée

```sh 
CREATE DATABASE name_bfm;
```

- Création de la table

```sh 
CREATE TABLE name;
```
- Insertion des noms dans la base de données. Pour cette étape ce n'est pas une commande MySql mais une variable créée dans le fichier .js qui va ensuite envoyer toutes les données lors de la compilation.

```sh 
var sql = "INSERT INTO name (prenom) VALUES ?";
        var values = [  
            ['Aaron'],
            ['Maxence'],    
            ['Anthony'],    
            ['Davy'],   
            ['Amandine'],   
            ['Lamia'],  
            ['Tom'],    
            ['Cédric'], 
            ['Noémie'],     
            ['Yasmine'],    
            ['Solene'], 
            ['Baptiste'],   
            ['Clémence'],   
            ['Léa'],    
            ['Anaïs'],  
            ['Dylan'],  
            ['Noë'], 
            ['Non'],    
            ['Lutécia'],    
            ['Lana'],   
            ['Clotilde'],   
            ['Victor'], 
            ['Nolan'],  
            ['Clotilde'],   
            ['Romane'], 
            ['Yüna'],   
            ['Yanis'],  
            ['Colin'],  
            ['Jade'],   
            ['Mathis'], 
            ['Anna'],   
            ['Élisa'],  
            ['Tristan'],    
            ['Rémi'],   
            ['Léa'],    
            ['Dorian'], 
            ['Maëlle'], 
            ['Alicia'], 
            ['Marwane'],    
            ['Lisa'],   
            ['Maryam'], 
            ['Maïwenn'],    
            ['Nolan'],  
            ['Lutécia'],    
            ['Nicolas'],    
            ['Zoé'],    
            ['Guillemette'],    
            ['Robin'],  
            ['Dimitri'],    
            ['Ethan'],  
            ['Marie'],  
            ['Yasmine'],    
            ['Sara'],   
            ['Charlotte'],  
            ['Timéo'],  
            ['Élouan'], 
            ['Julie'],  
            ['Antoine'],    
            ['Malik'],  
            ['Maïwenn'],    
            ['Ethan'],  
            ['Mathieu'],    
            ['Dylan'],  
            ['Anaïs'],  
            ['Sara'],   
            ['Gaspard'],    
            ['Lola'],   
            ['Mehdi'],  
            ['Maïlé'],  
            ['Loevan'], 
            ['Renaud'], 
            ['Katell'], 
            ['Kilian'], 
            ['Justine'],    
            ['Jordan'], 
            ['Inès'],   
            ['Élise'],  
            ['Agathe'], 
            ['Maelys'], 
            ['Lucie'],  
            ['Julia'],  
            ['Titouan'],    
            ['Charlotte'],  
            ['Antoine'],    
            ['Eva'],    
            ['Jasmine'],    
            ['Laura'],  
            ['Aaron'],  
            ['Robin'],  
            ['Killian'],    
            ['Lola'],   
            ['Lina'],   
            ['Syrine'], 
            ['Maxime'], 
            ['Lilou'],  
            ['Guillemette'],    
            ['Enzo'],   
            ['Enzo'],   
            ['Mathéo'], 
            ['Edwige'], 
            ['Marine'], 
            ['Antoine'],    
            ['Félix'],  
            ['Guillaume'],  
            ['Clotilde'],   
            ['Mathéo'], 
            ['Elsa'],   
            ['Kevin'],  
            ['Kimberley'],  
            ['Margot'], 
            ['Corentin'],   
            ['Marine'], 
            ['Victor'], 
            ['Océane'], 
            ['Baptiste'],   
            ['Lilian'], 
            ['Guillaume'],  
            ['Paul'],   
            ['Martin'], 
            ['Timéo'],  
            ['Mohamed'],    
            ['Gaspard'],    
            ['Macéo'],  
            ['Yüna'],   
            ['Lina'],   
            ['Amandine'],   
            ['Anaëlle'],
            ['Yanis'],
            ['Françoise'],  
            ['Adrian'], 
            ['Antoine'],    
            ['Océane'], 
            ['Rose'],   
            ['Thomas'], 
            ['Léa'],    
            ['Mehdi'],  
            ['Samuel'], 
            ['Jeanne'], 
            ['Élise'],  
            ['Charlotte'],  
            ['Charlotte'],  
            ['Françoise'],  
            ['Davy'],   
            ['Titouan'],    
            ['Gabriel'],    
            ['Dorian'], 
            ['Bastien'],    
            ['Marwane'],
            ['Erwan'],  
            ['Léonard'],    
            ['Titouan'],    
            ['Lamia'],  
            ['Paul'],   
            ['Ethan'],  
            ['Anna'],   
            ['Romain'], 
            ['Tristan'],    
            ['Valentine'],  
            ['Dimitri'],    
            ['Dylan'],  
            ['Jeanne'], 
            ['Françoise'],  
            ['Robin'],  
            ['Inès'],   
            ['Julia'],  
            ['Océane'], 
            ['Benjamin'],   
            ['Jasmine'],    
            ['Lilian'], 
            ['Léa'],    
            ['Jasmine'],    
            ['Julien'], 
            ['Rémi'],   
            ['Clémence'],
            ['Timothée'],   
            ['Dimitri'],    
            ['Lily'],   
            ['Cloé'],   
            ['Esteban'],    
            ['Kilian'], 
            ['Bienvenue'],  
            ['Justine'],    
            ['Esteban'],    
            ['Noë'],    
            ['Lisa'],   
            ['Renaud'], 
            ['Catherine'],  
            ['Simon'],  
            ['Corentin'],   
            ['Tom'],    
            ['Gabriel'],    
            ['Lucas'],  
            ['Anaëlle'],    
            ['Marie'],  
            ['Amandine'],   
            ['Timothée'],   
            ['Lucas'],  
            ['Charlotte'],  
            ['Ambre'],
            ['Martin'], 
            ['Tatiana'],    
            ['Maryam'], 
            ['Lilou'],  
            ['Bastien'],    
            ['Guillemette'],    
            ['Léane'],  
            ['Erwan'],  
            ['Lola'],   
            ['Alexandre'],  
            ['Simon'],  
            ['Macéo'],  
            ['Yohan'],  
            ['Juliette'],   
            ['Émilie'], 
            ['Katell'], 
            ['Antonin'],    
            ['Agathe'], 
            ['Amélie'], 
            ['Justine'],    
            ['Éloïse'], 
            ['Chaïma'], 
            ['Nathan'], 
            ['Maxence'],    
            ['Laura'],  
            ['Benjamin'],   
            ['Valentine'],  
            ['Laura'],  
            ['Alicia'], 
            ['Margot'], 
            ['Jules'],  
            ['Quentin'],    
            ['Adrien'], 
            ['Maéva'],  
            ['Killian'],    
            ['Rémi'],   
            ['Nolan'],  
            ['Julie'],  
            ['Valentine'],  
            ['Romane'], 
            ['Lana'],   
            ['Agathe'], 
            ['Théo'],   
            ['Timéo'],
            ['Julie'],  
            ['Maryam'], 
            ['Amandine'],   
            ['Nathan'], 
            ['Lisa'],   
            ['Bruno'],  
            ['Mathieu'],    
            ['Lilian'], 
            ['Alexandre'],  
            ['Nathan'], 
            ['Noémie'], 
            ['Clara'],  
            ['Marwane'],    
            ['Mathis'], 
            ['Malo'],   
            ['Constant'],   
            ['Sara'],   
            ['Elsa'],   
            ['Léon'],   
            ['Pauline'],    
            ['Bruno'],
            ['Lauriane'],   
            ['Yüna'],   
            ['Louise'],     
            ['Romain'],     
            ['Agathe'], 
            ['Jasmine'],    
            ['Élise'],  
            ['Victor'],     
            ['Davy'],   
            ['Capucine'],   
            ['Mélissa'],    
            ['Juliette'],   
            ['Rosalie'],    
            ['Davy'],   
            ['Salomé'],     
            ['Lilian'],     
            ['Baptiste'],   
            ['Candice'],    
            ['Éloïse'], 
            ['Lilian'],     
            ['Candice'],    
            ['Célia'],  
            ['Colin'],  
            ['Dylan'],  
            ['Nathan'], 
            ['Jade'],   
            ['Romain'],     
            ['Anthony'],    
            ['Lola'],   
            ['Florentin'],  
            ['Roméo'],  
            ['Baptiste'],   
            ['Amine'],  
            ['Margaux'],    
            ['Ambre']   
        ];
        db.query(sql,[values], function(err, result) {
            if (err) throw err;
            console.log("Number of records inserted: " + result.affectedRows);
        });
```

## Explication technique 

Pour commencer, je vais expliquer le fichier dbConig.js.

Ce fichier consiste à créer la connexion avec la base de données. Pour se faire il faut renseigner plusieurs informations comme le "host", le nom de la "database", le "user" connecté ainsi que son "password" et pour finir le "port".

Ensuite, le fichier index.js contient toutes les fonctions utilent au fonctionnement du back du projet. 

Il contient l'API ainsi que la fonction "apiResponse(name)" permettant de faire les requêtes. Cette fonction retourne le resultat des requêtes dans le terminal.

La fonction "apiSql()" sert à récupérer un nom de la base de données et à l'initialiser comme paramètre à la fonction "apiResponse(name)".

La fonction "nameController()" va contenir le résultat de fin, donc le nom à récupérer.

Le dernier fichier est le fichier front.js, il contient la route permettant de récupérer le nom envoyé par la route get du fichier index.js.

Et la fonction "displayName()" est censé afficher le nom sur la page HTML mais malheureusement elle n'est pas encore fonctionnelle.

La fonction "changeColor()" est une fonction me permettant de faire des tests, ce n'est pas une fonction utile au projet.


## Temps de travail et objectif actuelle

J'ai actuellement codé ce test en 35H environ, et on peut remarquer que ce n'est pas suffisant pour le terminer...

L'objectif actuelle est de développer/continuer et finir le front, c'est à dire de réussir à afficher le nom sur la page HTML ansi que de créer le système de score. Le design de la page HTML n'est pas fait non plus, même si cela ne devrais pas prendre beacoup de temps mais j'ai préféré me concentrer sur la partie back. 


