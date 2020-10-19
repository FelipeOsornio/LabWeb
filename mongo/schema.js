db.plataforma.insert({
    "_id": 1,
    "nombre": "PS4",
    "imagen":"",
    "ficha":"Triple procesador de 500 hZ",
    "juegos": [
        {
            "nombre": "Fifa 2020",
            "imagen":"",
            "developer":"EA",
            "fecha_lanzamiento": new Date(2019,4,20),
            "carousel":[""],
            "ligas": ["https://www.metacritic.com/game/playstation-4/fifa-20","https://www.eurogamer.net/articles/2019-09-19-fifa-20-review-fun-football-foiled-by-a-stubborn-refusal-to-read-the-room","https://www.goal.com/en/news/is-fifa-21-better-than-fifa-20-review-average-game/rra2gv83zmir1sc4xxboxyogb"]
        },
        {
            "nombre": "Fortnite BR",
            "imagen":"",
            "developer":"Epic",
            "fecha_lanzamiento": new Date(2019,1,10),
            "carousel":[""],
            "ligas": ["https://www.commonsensemedia.org/game-reviews/fortnite/user-reviews/adult","https://www.techradar.com/reviews/fortnite-battle-royale-review","https://www.ign.com/articles/2018/03/27/fortnite-battle-royale-review"]
        },
        {
            "nombre": "Bloodborne",
            "imagen":"",
            "developer":"From",
            "fecha_lanzamiento": new Date(2019,11,14),
            "carousel":[""],
            "ligas": ["https://www.ign.com/articles/2015/03/24/bloodborne-review","https://www.trustedreviews.com/reviews/bloodborne","https://www.gamespot.com/reviews/bloodborne-review/1900-6416078/"]
        }
        
    ]
});
db.plataforma.insert({
    "_id": 2,
    "nombre": "PC",
    "imagen":"",
    "ficha":"Customizable",
    "juegos": [
        {
            "nombre": "Binding of Isaac",
            "imagen":"",
            "developer":"IDK",
            "fecha_lanzamiento": new Date(2018,08,12),
            "carousel":[""],
            "ligas": ["https://store.steampowered.com/app/570660/The_Binding_of_Isaac_Afterbirth/","https://www.ign.com/articles/2014/11/26/the-binding-of-isaac-rebirth-review","https://www.metacritic.com/game/switch/the-binding-of-isaac-afterbirth-+"]

        },
        {
            "nombre": "Crusader Kings 3",
            "imagen":"",
            "developer":"Paradox",
            "fecha_lanzamiento": new Date(2020,02,12),
            "carousel":[""],
            "ligas": ["https://store.steampowered.com/app/1158310/Crusader_Kings_III/","https://www.polygon.com/reviews/2020/9/1/21417091/crusader-kings-3-review-pc-steam","https://www.pcgamer.com/crusader-kings-3-review/"]
        },
        {
            "nombre": "Stardew Valley",
            "imagen":"",
            "developer":"Concerned Ape",
            "fecha_lanzamiento": new Date(2018,08,12),
            "carousel":[""],
            "ligas": ["https://store.steampowered.com/app/1158310/https://www.ign.com/articles/2018/08/07/stardew-valley-review-2018/","https://www.polygon.com/2016/3/29/11320382/stardew-valley-review","https://opencritic.com/game/2242/stardew-valley"]
        }
    ] 
});
db.plataforma.insert({
    "_id": 3,
    "nombre": "Xbox One",
    "imagen":"",
    "ficha":"Procesador super de microsoft",
    "juegos": 
    [
        {
            "nombre": "Fifa 2020",
            "imagen":"",
            "developer":"EA",
            "fecha_lanzamiento": new Date(2019,4,20),
            "carousel":[""],
            "ligas": ["https://www.metacritic.com/game/playstation-4/fifa-20","https://www.eurogamer.net/articles/2019-09-19-fifa-20-review-fun-football-foiled-by-a-stubborn-refusal-to-read-the-room","https://www.goal.com/en/news/is-fifa-21-better-than-fifa-20-review-average-game/rra2gv83zmir1sc4xxboxyogb"]
        },
        {
            "nombre": "Fortnite BR",
            "imagen":"",
            "developer":"Epic",
            "fecha_lanzamiento": new Date(2019,1,10),
            "carousel":[""],
            "ligas": ["https://www.commonsensemedia.org/game-reviews/fortnite/user-reviews/adult","https://www.techradar.com/reviews/fortnite-battle-royale-review","https://www.ign.com/articles/2018/03/27/fortnite-battle-royale-review"]
        }   ,
        {"_id": 6,
        "nombre": "Halo Remaster ",
        "imagen":"",
        "developer":"Microsoft",
        "fecha_lanzamiento": new Date(2019,05,12),
        "carousel":[""],
        "ligas": ["https://www.ign.com/articles/2019/12/13/halo-the-master-chief-collection-review-2019","https://www.pcgamer.com/halo-combat-evolved-anniversary-review/","https://www.theguardian.com/technology/2014/nov/12/halo-master-chief-collection-review"]
        }
    ]
});
db.plataforma.insert({
    "_id": 4,
    "nombre": "Nintendo Switch",
    "imagen":"",
    "ficha":"Procesador super de nintendo",
    "juegos": [
        {
            "nombre": "Fifa 2020",
            "imagen":"",
            "developer":"EA",
            "fecha_lanzamiento": new Date(2019,4,20),
            "carousel":[""],
            "ligas": ["https://www.metacritic.com/game/playstation-4/fifa-20","https://www.eurogamer.net/articles/2019-09-19-fifa-20-review-fun-football-foiled-by-a-stubborn-refusal-to-read-the-room","https://www.goal.com/en/news/is-fifa-21-better-than-fifa-20-review-average-game/rra2gv83zmir1sc4xxboxyogb"]
        },
        {
        "nombre": "Super Smash Bros Ultimate",
        "imagen":"",
        "developer":"Nintendo",
        "fecha_lanzamiento": new Date(2019,10,10),
        "carousel":[""],
        "ligas": ["https://www.cnet.com/news/super-smash-bros-ultimate-review-it-makes-me-feel-like-a-kid-again/","https://www.ign.com/articles/2018/12/06/super-smash-bros-ultimate-review","https://bleacherreport.com/articles/2809836-super-smash-bros-ultimate-review-gameplay-impression-features-esports-impact"]
        },
        {
            "nombre": "Fire Eblem Three Houses",
            "imagen":"",
            "developer":"Intelligent Systems",
            "fecha_lanzamiento": new Date(2019,10,10),
            "carousel":[""],
            "ligas": ["https://www.amazon.com.mx/Fire-Emblem-Houses-Nintendo-Switch/dp/B07DK13HKX","https://www.gamestop.com/video-games/switch/games/products/fire-emblem-three-houses/10173345.html","https://as.com/meristation/2019/07/26/guias/1564160934_937512.html"]
        }
    ] 
});

/////////////////////////////////////////
/////////////////////////////////
db.blog.insert({
    "_id": 1,
    "autor": "Juan",
    "fecha": new Date(2019,10,10),
    "entrada":"Hola a todos"
});
db.blog.insert({
    "_id": 2,
    "autor": "Pedro",
    "fecha": new Date(2019,10,10),
    "entrada":"Hola juan"
});
db.blog.insert({
    "_id": 3,
    "autor": "Juan",
    "fecha": new Date(2019,10,10),
    "entrada":"Hola jaja xd"
});
db.blog.insert({
    "_id": 4,
    "autor": "Pedro",
    "fecha": new Date(2019,10,10),
    "entrada":"xd"
});
db.blog.insert({
    "_id": 5,
    "autor": "Pedro",
    "fecha": new Date(2019,10,10),
    "entrada":":("
});






