import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Wines:any[]=[
    {
      "winery": "Maselva",
      "wine": "Emporda 2012",
      "rating": {
        "average": "4.9",
        "reviews": "88 ratings"
      },
      "location": "Spain\n·\nEmpordà",
      "image": "https://images.vivino.com/thumbs/ApnIiXjcT5Kc33OHgNb9dA_375x500.jpg",
      "id": 1
    },
    {
      "winery": "Ernesto Ruffo",
      "wine": "Amarone della Valpolicella Riserva N.V.",
      "rating": {
        "average": "4.9",
        "reviews": "75 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella",
      "image": "https://images.vivino.com/thumbs/nC9V6L2mQQSq0s-wZLcaxw_pb_x300.png",
      "id": 2
    },
    {
      "winery": "Cartuxa",
      "wine": "Pêra-Manca Tinto 1990",
      "rating": {
        "average": "4.9",
        "reviews": "72 ratings"
      },
      "location": "Portugal\n·\nAlentejo",
      "image": "https://images.vivino.com/thumbs/L33jsYUuTMWTMy3KoqQyXg_pb_x300.png",
      "id": 3
    },
    {
      "winery": "Schrader",
      "wine": "Cabernet Sauvignon RBS Beckstoffer To Kalon Vineyard 2015",
      "rating": {
        "average": "4.9",
        "reviews": "72 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/GpcSXs2ERS6niDxoAsvESA_pb_x300.png",
      "id": 4
    },
    {
      "winery": "Hundred Acre",
      "wine": "Wraith Cabernet Sauvignon 2013",
      "rating": {
        "average": "4.9",
        "reviews": "68 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/PBhGMcRNQ7aVnVNr7VgnWA_pb_x300.png",
      "id": 5
    },
    {
      "winery": "Sine Qua Non",
      "wine": "Ratsel Syrah N.V.",
      "rating": {
        "average": "4.9",
        "reviews": "68 ratings"
      },
      "location": "United States\n·\nCalifornia",
      "image": "https://images.vivino.com/thumbs/ZzMKzqFqRO-6oI3ys3gGgQ_pb_x300.png",
      "id": 6
    },
    {
      "winery": "Del Dotto",
      "wine": "The Beast Cabernet Sauvignon 2012",
      "rating": {
        "average": "4.9",
        "reviews": "60 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/easjTPIcS-mCQ99XoYOMgQ_pb_x300.png",
      "id": 7
    },
    {
      "winery": "Darioush",
      "wine": "Darius II Cabernet Sauvignon 2016",
      "rating": {
        "average": "4.9",
        "reviews": "59 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/U19RXtSdRMmoAesl2CBygA_pb_x300.png",
      "id": 8
    },
    {
      "winery": "Garbole",
      "wine": "Hurlo 2009",
      "rating": {
        "average": "4.9",
        "reviews": "55 ratings"
      },
      "location": "Italy\n·\nVeneto",
      "image": "https://images.vivino.com/thumbs/f_G1SS0eT_C6hZGGwdEZqA_pb_x300.png",
      "id": 9
    },
    {
      "winery": "Scarecrow",
      "wine": "Cabernet Sauvignon 2016",
      "rating": {
        "average": "4.9",
        "reviews": "54 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/pU7uFKR-TAKAOQaf3Hpn2A_pb_x300.png",
      "id": 10
    },
    {
      "winery": "E. Guigal",
      "wine": "Côte-Rôtie La Mouline 1990",
      "rating": {
        "average": "4.9",
        "reviews": "54 ratings"
      },
      "location": "France\n·\nCôte-Rôtie",
      "image": "https://images.vivino.com/thumbs/HYVZMFigQ5qXxni7s9SpWw_pb_x300.png",
      "id": 11
    },
    {
      "winery": "",
      "wine": "Chateau D Yguene 2001",
      "rating": {
        "average": "4.9",
        "reviews": "50 ratings"
      },
      "location": "",
      "image": "https://images.vivino.com/thumbs/V5JCHLK_SxSiWxhghoQ1yQ_375x500.jpg",
      "id": 12
    },
    {
      "winery": "Domaine Armand Rousseau",
      "wine": "Chambertin Grand Cru 1993",
      "rating": {
        "average": "4.9",
        "reviews": "45 ratings"
      },
      "location": "France\n·\nChambertin Grand Cru",
      "image": "https://images.vivino.com/thumbs/1XYwrN2-SQqqJlCMSUp3tA_pb_x300.png",
      "id": 13
    },
    {
      "winery": "Catena Zapata",
      "wine": "Estiba Reservada 1994",
      "rating": {
        "average": "4.9",
        "reviews": "44 ratings"
      },
      "location": "Argentina\n·\nAgrelo",
      "image": "https://images.vivino.com/thumbs/Yt464jw0QS-ugF7ZQEbE2Q_pb_x300.png",
      "id": 14
    },
    {
      "winery": "Bodegas Valduero",
      "wine": "Ribera Del Duero Gran Reserva 12 Años 1999",
      "rating": {
        "average": "4.9",
        "reviews": "44 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/5kJTu3dMQUCEtBy3zIhrKA_pb_x300.png",
      "id": 15
    },
    {
      "winery": "Brion",
      "wine": "Estate Grown Cabernet Sauvignon 2013",
      "rating": {
        "average": "4.9",
        "reviews": "44 ratings"
      },
      "location": "United States\n·\nMoon Mountain District",
      "image": "https://images.vivino.com/thumbs/2Uw98KdRSdGsqxCvpXxyOQ_375x500.jpg",
      "id": 16
    },
    {
      "winery": "Gargiulo",
      "wine": "G Major Seven Study Cabernet Sauvignon 2015",
      "rating": {
        "average": "4.9",
        "reviews": "44 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/Q8MlhaRDTbaYh6Ydnr__iQ_pb_x300.png",
      "id": 17
    },
    {
      "winery": "Conterno",
      "wine": "Barolo Riserva Monfortino 1985",
      "rating": {
        "average": "4.9",
        "reviews": "44 ratings"
      },
      "location": "Italy\n·\nBarolo",
      "image": "https://images.vivino.com/thumbs/ElcyI1YpRSes_LvNodMeSQ_pb_x300.png",
      "id": 18
    },
    {
      "winery": "Amici",
      "wine": "Echion Cabernet Sauvignon 2014",
      "rating": {
        "average": "4.9",
        "reviews": "43 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/0667TG7qS2KsRLsShMTjAw_pb_x300.png",
      "id": 19
    },
    {
      "winery": "De Toren",
      "wine": "Book 17 XVII 2016",
      "rating": {
        "average": "4.9",
        "reviews": "43 ratings"
      },
      "location": "South Africa\n·\nStellenbosch",
      "image": "https://images.vivino.com/thumbs/43se9NpdSPKkbPdGMbRV6Q_pb_x300.png",
      "id": 20
    },
    {
      "winery": "B Cellars",
      "wine": "Beckstoffer To Kalon Vineyard Cabernet Sauvignon 2013",
      "rating": {
        "average": "4.9",
        "reviews": "42 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/rYocDDvwSaecbbp1vfh0Wg_375x500.jpg",
      "id": 21
    },
    {
      "winery": "Hall",
      "wine": "Rainin Vineyard 2013",
      "rating": {
        "average": "4.9",
        "reviews": "41 ratings"
      },
      "location": "United States\n·\nDiamond Mountain District",
      "image": "https://images.vivino.com/thumbs/CdTojlE9Tn-Ty3QR0k-DSg_pb_x300.png",
      "id": 22
    },
    {
      "winery": "4G",
      "wine": "67 Imizuzu 2014",
      "rating": {
        "average": "4.9",
        "reviews": "42 ratings"
      },
      "location": "South Africa\n·\nWestern Cape",
      "image": "https://images.vivino.com/thumbs/Aa0lkuToQK-rGvcPUpcH3A_pb_x300.png",
      "id": 23
    },
    {
      "winery": "Dana",
      "wine": "Helms Vineyard Cabernet Sauvignon 2008",
      "rating": {
        "average": "4.9",
        "reviews": "40 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/ahtEVX8nQrOVeBmkYJG12w_pb_x300.png",
      "id": 24
    },
    {
      "winery": "Takler",
      "wine": "Minden 50 Évlen 2007",
      "rating": {
        "average": "4.9",
        "reviews": "40 ratings"
      },
      "location": "Hungary\n·\nSzekszárd",
      "image": "https://images.vivino.com/thumbs/00ghwn0dmfp7w_375x500.jpg",
      "id": 25
    },
    {
      "winery": "Marion",
      "wine": "Raro Cabernet Sauvignon Selezione 2007",
      "rating": {
        "average": "4.9",
        "reviews": "39 ratings"
      },
      "location": "Italy\n·\nVeneto",
      "image": "https://images.vivino.com/thumbs/bDEH99ARSpCwFbDf3bct3w_375x500.jpg",
      "id": 26
    },
    {
      "winery": "Schrader",
      "wine": "Cabernet Sauvignon CCS Beckstoffer To Kalon Vineyard 2009",
      "rating": {
        "average": "4.9",
        "reviews": "39 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/_jt3dPPrSZKfVmV6J8YlLg_pb_x300.png",
      "id": 27
    },
    {
      "winery": "Schrader",
      "wine": "Cabernet Sauvignon RBS Beckstoffer To Kalon Vineyard 2006",
      "rating": {
        "average": "4.9",
        "reviews": "38 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/GpcSXs2ERS6niDxoAsvESA_pb_x300.png",
      "id": 28
    },
    {
      "winery": "Outpost",
      "wine": "True Vineyard Cabernet Sauvignon 2014",
      "rating": {
        "average": "4.9",
        "reviews": "38 ratings"
      },
      "location": "United States\n·\nHowell Mountain",
      "image": "https://images.vivino.com/thumbs/T8_v4hizTR-YX2nggkI52w_pb_x300.png",
      "id": 29
    },
    {
      "winery": "Jacques-Frederic Mugnier",
      "wine": "Musigny Grand Cru 1999",
      "rating": {
        "average": "4.9",
        "reviews": "38 ratings"
      },
      "location": "France\n·\nMusigny Grand Cru",
      "image": "https://images.vivino.com/thumbs/YGMg3nBYROud3n23UfUy1A_pb_x300.png",
      "id": 30
    },
    {
      "winery": "Tenuta Carretta",
      "wine": "Barolo Cannubi Riserva Collezione 2010",
      "rating": {
        "average": "4.9",
        "reviews": "37 ratings"
      },
      "location": "Italy\n·\nBarolo",
      "image": "https://images.vivino.com/thumbs/aI1jZoigSSKcf7nAxPd57Q_375x500.jpg",
      "id": 31
    },
    {
      "winery": "Teso La Monja",
      "wine": "Tinto 2013",
      "rating": {
        "average": "4.9",
        "reviews": "36 ratings"
      },
      "location": "Spain\n·\nToro",
      "image": "https://images.vivino.com/thumbs/axBtSSH6TiK_ryMdUaw-rg_pb_x300.png",
      "id": 32
    },
    {
      "winery": "Purlieu",
      "wine": "Georges III Vineyard Cabernet Sauvignon N.V.",
      "rating": {
        "average": "4.9",
        "reviews": "35 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/cQi5_whFQr2vCC7aUU3h8A_375x500.jpg",
      "id": 33
    },
    {
      "winery": "Pine Ridge",
      "wine": "Fortis 2013",
      "rating": {
        "average": "4.9",
        "reviews": "35 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/79xOzKQ1RsiQff9p2PeXTQ_pb_x300.png",
      "id": 34
    },
    {
      "winery": "Cliff Lede",
      "wine": "Songbook Cabernet Sauvignon 2012",
      "rating": {
        "average": "4.9",
        "reviews": "35 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/fkRNRyqNSY6et6yVvdHh8g_pb_x300.png",
      "id": 35
    },
    {
      "winery": "Hundred Acre",
      "wine": "Kayli Morgan Vineyard Cabernet Sauvignon 2015",
      "rating": {
        "average": "4.9",
        "reviews": "35 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/ZOn7KuOhTCap7hb74ucQVA_pb_x300.png",
      "id": 36
    },
    {
      "winery": "Abreu",
      "wine": "Madrona Ranch Cabernet Sauvignon 2002",
      "rating": {
        "average": "4.9",
        "reviews": "34 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/L27lLpSLSQmHB9x5xFBpmQ_pb_x300.png",
      "id": 37
    },
    {
      "winery": "Sine Qua Non",
      "wine": "Rattrapante Grenache 2012",
      "rating": {
        "average": "4.9",
        "reviews": "34 ratings"
      },
      "location": "United States\n·\nSta. Rita Hills",
      "image": "https://images.vivino.com/thumbs/DtBMhsMBTtiA4URvVaUBNA_pb_x300.png",
      "id": 38
    },
    {
      "winery": "Realm",
      "wine": "Beckstoffer Dr. Crane Vineyard 2015",
      "rating": {
        "average": "4.9",
        "reviews": "33 ratings"
      },
      "location": "United States\n·\nSt. Helena",
      "image": "https://images.vivino.com/thumbs/_IiGnDHSSaOc9u9c9CzVSA_pb_x300.png",
      "id": 39
    },
    {
      "winery": "Lynmar Estate",
      "wine": "Five Sisters Pinot Noir N.V.",
      "rating": {
        "average": "4.9",
        "reviews": "34 ratings"
      },
      "location": "United States\n·\nRussian River Valley",
      "image": "https://images.vivino.com/thumbs/KCmhdA6tSl6MVeNgMT40MA_375x500.jpg",
      "id": 40
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Romanée-Saint-Vivant Grand Cru (Marey-Monge) 2015",
      "rating": {
        "average": "4.9",
        "reviews": "33 ratings"
      },
      "location": "France\n·\nRomanée-Saint-Vivant Grand Cru",
      "image": "https://images.vivino.com/thumbs/qbolgWCtRq-z3tt-HeXRrA_pb_x300.png",
      "id": 41
    },
    {
      "winery": "Bryant Family Vineyard",
      "wine": "Cabernet Sauvignon Proprietor Grown 2002",
      "rating": {
        "average": "4.9",
        "reviews": "33 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/JL0BHEkRTxqJUuW9QfABtA_pb_x300.png",
      "id": 42
    },
    {
      "winery": "Antonio Don Px",
      "wine": "Botella 229 N.V.",
      "rating": {
        "average": "4.9",
        "reviews": "34 ratings"
      },
      "location": "",
      "image": "https://images.vivino.com/thumbs/3ce4asZUTAmNDVRqzIeOEA_375x500.jpg",
      "id": 43
    },
    {
      "winery": "Wild Duck Creek Estate",
      "wine": "Duck Muck 2007",
      "rating": {
        "average": "4.9",
        "reviews": "32 ratings"
      },
      "location": "Australia\n·\nHeathcote",
      "image": "https://images.vivino.com/thumbs/eEQ95eipT4aZ6Cp2gM4xrw_pb_x300.png",
      "id": 44
    },
    {
      "winery": "Realm",
      "wine": "Beckstoffer Dr. Crane Vineyard 2012",
      "rating": {
        "average": "4.9",
        "reviews": "32 ratings"
      },
      "location": "United States\n·\nSt. Helena",
      "image": "https://images.vivino.com/thumbs/_IiGnDHSSaOc9u9c9CzVSA_pb_x300.png",
      "id": 45
    },
    {
      "winery": "Blason Louis",
      "wine": "Haut Medoc Cru Bourgeois N.V.",
      "rating": {
        "average": "4.9",
        "reviews": "31 ratings"
      },
      "location": "France\n·\nHaut-Médoc",
      "image": "https://images.vivino.com/thumbs/SeOAnLo-TYijkwdsif33Qw_375x500.jpg",
      "id": 46
    },
    {
      "winery": "Tedeschi",
      "wine": "La Fabriseria Amarone della Valpolicella Classico 2003",
      "rating": {
        "average": "4.9",
        "reviews": "32 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella Classico",
      "image": "https://images.vivino.com/thumbs/XtWBhvg9QACn8ElIr-NTQw_pb_x300.png",
      "id": 47
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Romanée-Saint-Vivant Grand Cru (Marey-Monge) 1983",
      "rating": {
        "average": "4.9",
        "reviews": "31 ratings"
      },
      "location": "France\n·\nRomanée-Saint-Vivant Grand Cru",
      "image": "https://images.vivino.com/thumbs/qbolgWCtRq-z3tt-HeXRrA_pb_x300.png",
      "id": 48
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Échezeaux Grand Cru 1986",
      "rating": {
        "average": "4.9",
        "reviews": "30 ratings"
      },
      "location": "France\n·\nÉchezeaux Grand Cru",
      "image": "https://images.vivino.com/thumbs/4acI_FD8QriZh2Fx_iv_oA_pb_x300.png",
      "id": 49
    },
    {
      "winery": "Vietti",
      "wine": "Barolo Lazzarito 2000",
      "rating": {
        "average": "4.9",
        "reviews": "30 ratings"
      },
      "location": "Italy\n·\nBarolo",
      "image": "https://images.vivino.com/thumbs/g7lah3ezSX6UESUe2lgiaw_pb_x300.png",
      "id": 50
    },
    {
      "winery": "Geoff Merrill",
      "wine": "Henley Shiraz 2004",
      "rating": {
        "average": "4.9",
        "reviews": "30 ratings"
      },
      "location": "Australia\n·\nMcLaren Vale",
      "image": "https://images.vivino.com/thumbs/28jJ6dlgSGSAmFGJE0PqTQ_pb_x300.png",
      "id": 51
    },
    {
      "winery": "Robert Foley Vineyards",
      "wine": "Napa Valley Cabernet Sauvignon 2008",
      "rating": {
        "average": "4.9",
        "reviews": "30 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/WICpb7AnQnWZgDsrjpRfhg_pb_x300.png",
      "id": 52
    },
    {
      "winery": "Schrader",
      "wine": "Cabernet Sauvignon Beckstoffer To Kalon Vineyard 2012",
      "rating": {
        "average": "4.9",
        "reviews": "29 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/k3c1IEAGSiqZ7wKSwQe26w_pb_x300.png",
      "id": 53
    },
    {
      "winery": "Henri Jayer",
      "wine": "Vosne-Romanée Cros Parantoux 1990",
      "rating": {
        "average": "4.9",
        "reviews": "29 ratings"
      },
      "location": "France\n·\nVosne-Romanée Premier Cru",
      "image": "https://images.vivino.com/thumbs/RbLxcsT1QiicdhZNDybKcA_375x500.jpg",
      "id": 54
    },
    {
      "winery": "Henri Jayer",
      "wine": "Vosne-Romanée Cros Parantoux 1996",
      "rating": {
        "average": "4.9",
        "reviews": "29 ratings"
      },
      "location": "France\n·\nVosne-Romanée Premier Cru",
      "image": "https://images.vivino.com/thumbs/00o0kud1xybsc_375x500.jpg",
      "id": 55
    },
    {
      "winery": "Abreu",
      "wine": "Thorevilos Cabernet Sauvignon 2010",
      "rating": {
        "average": "4.9",
        "reviews": "29 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/qjWbEuWWTBqEgUUa7qbz4w_pb_x300.png",
      "id": 56
    },
    {
      "winery": "Schrader",
      "wine": "Cabernet Sauvignon RBS Beckstoffer To Kalon Vineyard 2003",
      "rating": {
        "average": "4.9",
        "reviews": "29 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/GpcSXs2ERS6niDxoAsvESA_pb_x300.png",
      "id": 57
    },
    {
      "winery": "Sine Qua Non",
      "wine": "No. 6 Pinot Noir 2001",
      "rating": {
        "average": "4.8",
        "reviews": "29 ratings"
      },
      "location": "United States\n·\nYamhill County",
      "image": "https://images.vivino.com/thumbs/gYKOwFmURpKMBgt6raLrYg_375x500.jpg",
      "id": 58
    },
    {
      "winery": "B Cellars",
      "wine": "Beckstoffer Dr. Crane Vineyard Cabernet Sauvignon 2013",
      "rating": {
        "average": "4.9",
        "reviews": "28 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/-qHP6dTiRqiwYCFz2_RM-A_pb_x300.png",
      "id": 59
    },
    {
      "winery": "Promise",
      "wine": "Cabernet Sauvignon 2010",
      "rating": {
        "average": "4.9",
        "reviews": "28 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/ELHDIsL6TOGR9_nfTRjC0w_pb_x300.png",
      "id": 60
    },
    {
      "winery": "Giacomo Fenocchio",
      "wine": "Barolo Riserva Bussia 90 Dì 1978",
      "rating": {
        "average": "4.9",
        "reviews": "27 ratings"
      },
      "location": "Italy\n·\nBarolo",
      "image": "https://images.vivino.com/thumbs/ng7T6hUVRpyuVKGeK5GWFg_pb_x300.png",
      "id": 61
    },
    {
      "winery": "Black Stallion",
      "wine": "Bucephalus Red Blend 2009",
      "rating": {
        "average": "4.9",
        "reviews": "27 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/LA6LTYifTuySY5scwk_odg_pb_x300.png",
      "id": 62
    },
    {
      "winery": "Mollydooker",
      "wine": "Wolfington Reserve Joy 2014",
      "rating": {
        "average": "4.9",
        "reviews": "27 ratings"
      },
      "location": "Australia\n·\nFleurieu",
      "image": "https://images.vivino.com/thumbs/WZ84WPUySTaZ9334znLS-Q_375x500.jpg",
      "id": 63
    },
    {
      "winery": "Le Pin",
      "wine": "Pomerol 2002",
      "rating": {
        "average": "4.9",
        "reviews": "27 ratings"
      },
      "location": "France\n·\nPomerol",
      "image": "https://images.vivino.com/thumbs/rCirPraNRPy8PHfOlG4E2w_pb_x300.png",
      "id": 64
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Échezeaux Grand Cru 1994",
      "rating": {
        "average": "4.9",
        "reviews": "26 ratings"
      },
      "location": "France\n·\nÉchezeaux Grand Cru",
      "image": "https://images.vivino.com/thumbs/4acI_FD8QriZh2Fx_iv_oA_pb_x300.png",
      "id": 65
    },
    {
      "winery": "Benziger",
      "wine": "Red 2015",
      "rating": {
        "average": "4.9",
        "reviews": "25 ratings"
      },
      "location": "United States\n·\nSonoma Mountain",
      "image": "https://images.vivino.com/thumbs/3PfOzi--Qa2d7zPQGH9h6g_pb_x300.png",
      "id": 66
    },
    {
      "winery": "Ernesto Ruffo",
      "wine": "Basaltico Amarone della Valpolicella 2004",
      "rating": {
        "average": "4.9",
        "reviews": "25 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella",
      "image": "https://images.vivino.com/thumbs/kB1XXwozQyKwmJfHannatg_pb_x300.png",
      "id": 67
    },
    {
      "winery": "Conterno",
      "wine": "Barolo Riserva Monfortino 1974",
      "rating": {
        "average": "4.9",
        "reviews": "25 ratings"
      },
      "location": "Italy\n·\nBarolo",
      "image": "https://images.vivino.com/thumbs/ElcyI1YpRSes_LvNodMeSQ_pb_x300.png",
      "id": 68
    },
    {
      "winery": "Veiga",
      "wine": "Madeira Sercial Solera Franca N.V.",
      "rating": {
        "average": "4.9",
        "reviews": "26 ratings"
      },
      "location": "Portugal\n·\nMadeira",
      "image": "https://images.vivino.com/thumbs/hJIXwnDnRWmwxZOHTxGOpw_375x500.jpg",
      "id": 69
    },
    {
      "winery": "Small Gully",
      "wine": "Black Magic Shiraz 2014",
      "rating": {
        "average": "4.9",
        "reviews": "25 ratings"
      },
      "location": "Australia\n·\nBarossa Valley",
      "image": "https://images.vivino.com/thumbs/is7GpPkvSoykqEh0wv2YWg_375x500.jpg",
      "id": 70
    },
    {
      "winery": "Casa Ferreirinha",
      "wine": "Barca Velha Douro 2000",
      "rating": {
        "average": "4.8",
        "reviews": "1489 ratings"
      },
      "location": "Portugal\n·\nDouro",
      "image": "https://images.vivino.com/thumbs/ooQmRipERdeq4HM4KGxlEA_pb_x300.png",
      "id": 71
    },
    {
      "winery": "Casa Ferreirinha",
      "wine": "Barca Velha Douro 1999",
      "rating": {
        "average": "4.8",
        "reviews": "1170 ratings"
      },
      "location": "Portugal\n·\nDouro",
      "image": "https://images.vivino.com/thumbs/ooQmRipERdeq4HM4KGxlEA_pb_x300.png",
      "id": 72
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico 1996",
      "rating": {
        "average": "4.8",
        "reviews": "999 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/SCnpJk_ySUe6XS3U-lFOwQ_pb_x300.png",
      "id": 73
    },
    {
      "winery": "Château Latour",
      "wine": "Grand Vin Pauillac (Premier Grand Cru Classé) 1982",
      "rating": {
        "average": "4.8",
        "reviews": "977 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/4RHhCzeQTsCeyCScxO0LOw_pb_x300.png",
      "id": 74
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico 1998",
      "rating": {
        "average": "4.8",
        "reviews": "968 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/SCnpJk_ySUe6XS3U-lFOwQ_pb_x300.png",
      "id": 75
    },
    {
      "winery": "Viña Cobos",
      "wine": "Cobos Malbec 2012",
      "rating": {
        "average": "4.8",
        "reviews": "825 ratings"
      },
      "location": "Argentina\n·\nMendoza",
      "image": "https://images.vivino.com/thumbs/ZiSSq-CNSXyace-BxcacjA_pb_x300.png",
      "id": 76
    },
    {
      "winery": "Château Margaux",
      "wine": "Château Margaux (Premier Grand Cru Classé) 2000",
      "rating": {
        "average": "4.8",
        "reviews": "820 ratings"
      },
      "location": "France\n·\nMargaux",
      "image": "https://images.vivino.com/thumbs/dnqHnd0hSx-t14_V8uynAA_pb_x300.png",
      "id": 77
    },
    {
      "winery": "Pétrus",
      "wine": "Pomerol 1989",
      "rating": {
        "average": "4.8",
        "reviews": "744 ratings"
      },
      "location": "France\n·\nPomerol",
      "image": "https://images.vivino.com/thumbs/RPhc1fBwT0uLKoE6_mteFQ_pb_x300.png",
      "id": 78
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico 1995",
      "rating": {
        "average": "4.8",
        "reviews": "712 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/SCnpJk_ySUe6XS3U-lFOwQ_pb_x300.png",
      "id": 79
    },
    {
      "winery": "Quintarelli Giuseppe",
      "wine": "Amarone della Valpolicella Classico 2003",
      "rating": {
        "average": "4.8",
        "reviews": "657 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella Classico",
      "image": "https://images.vivino.com/thumbs/RqFtSGpgTlKL1VwkBjccxA_pb_x300.png",
      "id": 80
    },
    {
      "winery": "Château Lafite Rothschild",
      "wine": "Pauillac (Premier Grand Cru Classé) 2003",
      "rating": {
        "average": "4.8",
        "reviews": "631 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/uDMfPG10R1efm5H1do--Ow_pb_x300.png",
      "id": 81
    },
    {
      "winery": "Château Latour",
      "wine": "Grand Vin Pauillac (Premier Grand Cru Classé) 2003",
      "rating": {
        "average": "4.8",
        "reviews": "586 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/4RHhCzeQTsCeyCScxO0LOw_pb_x300.png",
      "id": 82
    },
    {
      "winery": "Masseto",
      "wine": "Toscana 2006",
      "rating": {
        "average": "4.8",
        "reviews": "550 ratings"
      },
      "location": "Italy\n·\nToscana",
      "image": "https://images.vivino.com/thumbs/GPvEr_IUSKS1CDhhsY1ySg_pb_x300.png",
      "id": 83
    },
    {
      "winery": "Viña Cobos",
      "wine": "Cobos Volturno 2013",
      "rating": {
        "average": "4.8",
        "reviews": "540 ratings"
      },
      "location": "Argentina\n·\nPerdriel",
      "image": "https://images.vivino.com/thumbs/D1Mf1fYnRnageFjtfLXdFg_pb_x300.png",
      "id": 84
    },
    {
      "winery": "Masseto",
      "wine": "Toscana 2005",
      "rating": {
        "average": "4.8",
        "reviews": "534 ratings"
      },
      "location": "Italy\n·\nToscana",
      "image": "https://images.vivino.com/thumbs/GPvEr_IUSKS1CDhhsY1ySg_pb_x300.png",
      "id": 85
    },
    {
      "winery": "Viña Cobos",
      "wine": "Cobos Marchiori Vineyard Malbec 2015",
      "rating": {
        "average": "4.8",
        "reviews": "522 ratings"
      },
      "location": "Argentina\n·\nPerdriel",
      "image": "https://images.vivino.com/thumbs/KOrKiHVjSlm4khPkAfU6yQ_pb_x300.png",
      "id": 86
    },
    {
      "winery": "Château Cheval Blanc",
      "wine": "Saint-Émilion Grand Cru (Premier Grand Cru Classé) 1990",
      "rating": {
        "average": "4.8",
        "reviews": "516 ratings"
      },
      "location": "France\n·\nSaint-Émilion Grand Cru",
      "image": "https://images.vivino.com/thumbs/AIWJqsLoSIyz0HO4de1llA_pb_x300.png",
      "id": 87
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico Reserva Especial Edición 2015",
      "rating": {
        "average": "4.8",
        "reviews": "505 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/k_UetHZ3Q2SMqUsliefGYQ_pb_x300.png",
      "id": 88
    },
    {
      "winery": "Tenuta San Guido",
      "wine": "Sassicaia 1985",
      "rating": {
        "average": "4.8",
        "reviews": "498 ratings"
      },
      "location": "Italy\n·\nBolgheri Sassicaia",
      "image": "https://images.vivino.com/thumbs/L2ZTpFlDR2yMHe1-GA90Jw_pb_x300.png",
      "id": 89
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico Reserva Especial Edición 1998",
      "rating": {
        "average": "4.8",
        "reviews": "483 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/k_UetHZ3Q2SMqUsliefGYQ_pb_x300.png",
      "id": 90
    },
    {
      "winery": "Cakebread",
      "wine": "Dancing Bear Ranch 2012",
      "rating": {
        "average": "4.8",
        "reviews": "462 ratings"
      },
      "location": "United States\n·\nHowell Mountain",
      "image": "https://images.vivino.com/thumbs/2H0CXyXZQKe4o_qX5WiN-w_pb_x300.png",
      "id": 91
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico Reserva Especial Edición 2016",
      "rating": {
        "average": "4.8",
        "reviews": "451 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/k_UetHZ3Q2SMqUsliefGYQ_pb_x300.png",
      "id": 92
    },
    {
      "winery": "Viña Cobos",
      "wine": "Cobos Volturno 2010",
      "rating": {
        "average": "4.8",
        "reviews": "431 ratings"
      },
      "location": "Argentina\n·\nPerdriel",
      "image": "https://images.vivino.com/thumbs/D1Mf1fYnRnageFjtfLXdFg_pb_x300.png",
      "id": 93
    },
    {
      "winery": "Casa Ferreirinha",
      "wine": "Barca Velha Douro 1982",
      "rating": {
        "average": "4.8",
        "reviews": "422 ratings"
      },
      "location": "Portugal\n·\nDouro",
      "image": "https://images.vivino.com/thumbs/ooQmRipERdeq4HM4KGxlEA_pb_x300.png",
      "id": 94
    },
    {
      "winery": "ZD Wines",
      "wine": "Abacus Cabernet Sauvignon N.V.",
      "rating": {
        "average": "4.8",
        "reviews": "412 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/yjmpM9eFR6G_twL2P0zXCg_pb_x300.png",
      "id": 95
    },
    {
      "winery": "Hundred Acre",
      "wine": "Ark Vineyard Cabernet Sauvignon 2009",
      "rating": {
        "average": "4.8",
        "reviews": "410 ratings"
      },
      "location": "United States\n·\nHowell Mountain",
      "image": "https://images.vivino.com/thumbs/TQLu4uY6RuC0bW8QHDeIPw_pb_x300.png",
      "id": 96
    },
    {
      "winery": "Frank Family",
      "wine": "Patriarch N.V.",
      "rating": {
        "average": "4.8",
        "reviews": "405 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/BFAcH67rRxyiZskkxTnnJQ_pb_x300.png",
      "id": 97
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "La Tâche Grand Cru 2007",
      "rating": {
        "average": "4.8",
        "reviews": "341 ratings"
      },
      "location": "France\n·\nLa Tâche Grand Cru",
      "image": "https://images.vivino.com/thumbs/rUPGZo11SwW6haQta4COqQ_pb_x300.png",
      "id": 98
    },
    {
      "winery": "Del Dotto",
      "wine": "The Beast Cabernet Sauvignon N.V.",
      "rating": {
        "average": "4.8",
        "reviews": "344 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/easjTPIcS-mCQ99XoYOMgQ_pb_x300.png",
      "id": 99
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico 1970",
      "rating": {
        "average": "4.8",
        "reviews": "331 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/SCnpJk_ySUe6XS3U-lFOwQ_pb_x300.png",
      "id": 100
    },
    {
      "winery": "Henri Jayer",
      "wine": "Vosne-Romanée Cros Parantoux N.V.",
      "rating": {
        "average": "4.8",
        "reviews": "335 ratings"
      },
      "location": "France\n·\nVosne-Romanée Premier Cru",
      "image": "https://images.vivino.com/thumbs/02fwgia3x7cua_375x500.jpg",
      "id": 101
    },
    {
      "winery": "Viña Cobos",
      "wine": "Cobos Chañares Vineyard Malbec 2015",
      "rating": {
        "average": "4.8",
        "reviews": "328 ratings"
      },
      "location": "Argentina\n·\nTunuyán",
      "image": "https://images.vivino.com/thumbs/IQSL2hitTXi4fypdhZzi4g_pb_x300.png",
      "id": 102
    },
    {
      "winery": "Cartuxa",
      "wine": "Pêra-Manca Tinto 1997",
      "rating": {
        "average": "4.8",
        "reviews": "321 ratings"
      },
      "location": "Portugal\n·\nAlentejo",
      "image": "https://images.vivino.com/thumbs/L33jsYUuTMWTMy3KoqQyXg_pb_x300.png",
      "id": 103
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "La Tâche Grand Cru 2000",
      "rating": {
        "average": "4.8",
        "reviews": "308 ratings"
      },
      "location": "France\n·\nLa Tâche Grand Cru",
      "image": "https://images.vivino.com/thumbs/rUPGZo11SwW6haQta4COqQ_pb_x300.png",
      "id": 104
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "La Tâche Grand Cru 2006",
      "rating": {
        "average": "4.8",
        "reviews": "298 ratings"
      },
      "location": "France\n·\nLa Tâche Grand Cru",
      "image": "https://images.vivino.com/thumbs/rUPGZo11SwW6haQta4COqQ_pb_x300.png",
      "id": 105
    },
    {
      "winery": "Schrader",
      "wine": "Cabernet Sauvignon Old Sparky Beckstoffer To Kalon N.V.",
      "rating": {
        "average": "4.8",
        "reviews": "299 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/nPPvCaprSvqHtXOGVakjVQ_pb_x300.png",
      "id": 106
    },
    {
      "winery": "Penfolds",
      "wine": "Grange 1991",
      "rating": {
        "average": "4.8",
        "reviews": "283 ratings"
      },
      "location": "Australia\n·\nSouth Australia",
      "image": "https://images.vivino.com/thumbs/hRl7EuOORIuIM6JxYyxgBA_pb_x300.png",
      "id": 107
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico Reserva Especial Edición 2014",
      "rating": {
        "average": "4.8",
        "reviews": "276 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/k_UetHZ3Q2SMqUsliefGYQ_pb_x300.png",
      "id": 108
    },
    {
      "winery": "Harlan Estate",
      "wine": "Harlan Estate Red 2005",
      "rating": {
        "average": "4.8",
        "reviews": "274 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/dk-tNdajRPqx2M7XtuE3dg_pb_x300.png",
      "id": 109
    },
    {
      "winery": "Casa Ferreirinha",
      "wine": "Barca Velha Douro 1966",
      "rating": {
        "average": "4.8",
        "reviews": "272 ratings"
      },
      "location": "Portugal\n·\nDouro",
      "image": "https://images.vivino.com/thumbs/ooQmRipERdeq4HM4KGxlEA_pb_x300.png",
      "id": 110
    },
    {
      "winery": "Viña Cobos",
      "wine": "Cobos Malbec 2006",
      "rating": {
        "average": "4.8",
        "reviews": "267 ratings"
      },
      "location": "Argentina\n·\nMendoza",
      "image": "https://images.vivino.com/thumbs/ZiSSq-CNSXyace-BxcacjA_pb_x300.png",
      "id": 111
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "La Tâche Grand Cru 2004",
      "rating": {
        "average": "4.8",
        "reviews": "255 ratings"
      },
      "location": "France\n·\nLa Tâche Grand Cru",
      "image": "https://images.vivino.com/thumbs/rUPGZo11SwW6haQta4COqQ_pb_x300.png",
      "id": 112
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico Reserva Especial Edición 1990",
      "rating": {
        "average": "4.8",
        "reviews": "242 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/k_UetHZ3Q2SMqUsliefGYQ_pb_x300.png",
      "id": 113
    },
    {
      "winery": "Hundred Acre",
      "wine": "Ark Vineyard Cabernet Sauvignon 2012",
      "rating": {
        "average": "4.8",
        "reviews": "242 ratings"
      },
      "location": "United States\n·\nHowell Mountain",
      "image": "https://images.vivino.com/thumbs/TQLu4uY6RuC0bW8QHDeIPw_pb_x300.png",
      "id": 114
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico 1986",
      "rating": {
        "average": "4.8",
        "reviews": "238 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/SCnpJk_ySUe6XS3U-lFOwQ_pb_x300.png",
      "id": 115
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "La Tâche Grand Cru 1990",
      "rating": {
        "average": "4.8",
        "reviews": "238 ratings"
      },
      "location": "France\n·\nLa Tâche Grand Cru",
      "image": "https://images.vivino.com/thumbs/rUPGZo11SwW6haQta4COqQ_pb_x300.png",
      "id": 116
    },
    {
      "winery": "Tusk",
      "wine": "Cabernet Sauvignon N.V.",
      "rating": {
        "average": "4.8",
        "reviews": "236 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/_dyrZSN7Sq6xyIrWTS2slA_pb_x300.png",
      "id": 117
    },
    {
      "winery": "Viña Cobos",
      "wine": "Cobos Marchiori Vineyard Malbec 2016",
      "rating": {
        "average": "4.8",
        "reviews": "232 ratings"
      },
      "location": "Argentina\n·\nPerdriel",
      "image": "https://images.vivino.com/thumbs/KOrKiHVjSlm4khPkAfU6yQ_pb_x300.png",
      "id": 118
    },
    {
      "winery": "Hundred Acre",
      "wine": "Ark Vineyard Cabernet Sauvignon 2008",
      "rating": {
        "average": "4.8",
        "reviews": "218 ratings"
      },
      "location": "United States\n·\nHowell Mountain",
      "image": "https://images.vivino.com/thumbs/TQLu4uY6RuC0bW8QHDeIPw_pb_x300.png",
      "id": 119
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico Reserva Especial Edición 2018",
      "rating": {
        "average": "4.8",
        "reviews": "208 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/k_UetHZ3Q2SMqUsliefGYQ_pb_x300.png",
      "id": 120
    },
    {
      "winery": "Montes",
      "wine": "Taita Marchigüe Vineyard Cabernet Sauvignon 2009",
      "rating": {
        "average": "4.8",
        "reviews": "206 ratings"
      },
      "location": "Chile\n·\nColchagua Valley",
      "image": "https://images.vivino.com/thumbs/jmKZlGApSlSVDlSbUbe5JA_pb_x300.png",
      "id": 121
    },
    {
      "winery": "Lokoya",
      "wine": "Mount Veeder Cabernet Sauvignon 2012",
      "rating": {
        "average": "4.8",
        "reviews": "204 ratings"
      },
      "location": "United States\n·\nMount Veeder",
      "image": "https://images.vivino.com/thumbs/41jCEa5TSouKrLK1mxZVLg_pb_x300.png",
      "id": 122
    },
    {
      "winery": "Harlan Estate",
      "wine": "Harlan Estate Red 1997",
      "rating": {
        "average": "4.8",
        "reviews": "202 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/dk-tNdajRPqx2M7XtuE3dg_pb_x300.png",
      "id": 123
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "La Tâche Grand Cru 2009",
      "rating": {
        "average": "4.8",
        "reviews": "201 ratings"
      },
      "location": "France\n·\nLa Tâche Grand Cru",
      "image": "https://images.vivino.com/thumbs/rUPGZo11SwW6haQta4COqQ_pb_x300.png",
      "id": 124
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "La Tâche Grand Cru 1999",
      "rating": {
        "average": "4.8",
        "reviews": "198 ratings"
      },
      "location": "France\n·\nLa Tâche Grand Cru",
      "image": "https://images.vivino.com/thumbs/rUPGZo11SwW6haQta4COqQ_pb_x300.png",
      "id": 125
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico 1962",
      "rating": {
        "average": "4.8",
        "reviews": "195 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/SCnpJk_ySUe6XS3U-lFOwQ_pb_x300.png",
      "id": 126
    },
    {
      "winery": "Del Dotto",
      "wine": "Cabernet Sauvignon Vineyard 887 2012",
      "rating": {
        "average": "4.8",
        "reviews": "194 ratings"
      },
      "location": "United States\n·\nSt. Helena",
      "image": "https://images.vivino.com/thumbs/As4eGQeHTdmvXTjpjwne2Q_pb_x300.png",
      "id": 127
    },
    {
      "winery": "Screaming Eagle",
      "wine": "Cabernet Sauvignon 2012",
      "rating": {
        "average": "4.8",
        "reviews": "190 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/Z92v0bohTBaVUVPNjiXPuA_pb_x300.png",
      "id": 128
    },
    {
      "winery": "Cartuxa",
      "wine": "Pêra-Manca Tinto 1995",
      "rating": {
        "average": "4.8",
        "reviews": "177 ratings"
      },
      "location": "Portugal\n·\nAlentejo",
      "image": "https://images.vivino.com/thumbs/L33jsYUuTMWTMy3KoqQyXg_pb_x300.png",
      "id": 129
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Romanée-Saint-Vivant Grand Cru (Marey-Monge) 2005",
      "rating": {
        "average": "4.8",
        "reviews": "174 ratings"
      },
      "location": "France\n·\nRomanée-Saint-Vivant Grand Cru",
      "image": "https://images.vivino.com/thumbs/qbolgWCtRq-z3tt-HeXRrA_pb_x300.png",
      "id": 130
    },
    {
      "winery": "Monteviejo",
      "wine": "Lindaflor La Violeta Malbec 2010",
      "rating": {
        "average": "4.8",
        "reviews": "169 ratings"
      },
      "location": "Argentina\n·\nUco Valley",
      "image": "https://images.vivino.com/thumbs/H27-UdTARwuWTyJpaCT8bw_pb_x300.png",
      "id": 131
    },
    {
      "winery": "Screaming Eagle",
      "wine": "Cabernet Sauvignon 2010",
      "rating": {
        "average": "4.8",
        "reviews": "167 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/Z92v0bohTBaVUVPNjiXPuA_pb_x300.png",
      "id": 132
    },
    {
      "winery": "Scarecrow",
      "wine": "Cabernet Sauvignon 2013",
      "rating": {
        "average": "4.8",
        "reviews": "167 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/pU7uFKR-TAKAOQaf3Hpn2A_pb_x300.png",
      "id": 133
    },
    {
      "winery": "Shafer",
      "wine": "Hillside Select Cabernet Sauvignon 2001",
      "rating": {
        "average": "4.8",
        "reviews": "164 ratings"
      },
      "location": "United States\n·\nStags Leap District",
      "image": "https://images.vivino.com/thumbs/Q71Yx3zaRQW9IqxN0vk64w_pb_x300.png",
      "id": 134
    },
    {
      "winery": "Schrader",
      "wine": "Cabernet Sauvignon RBS Beckstoffer To Kalon Vineyard 2009",
      "rating": {
        "average": "4.8",
        "reviews": "162 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/GpcSXs2ERS6niDxoAsvESA_pb_x300.png",
      "id": 135
    },
    {
      "winery": "Casa Ferreirinha",
      "wine": "Barca Velha Douro 1964",
      "rating": {
        "average": "4.8",
        "reviews": "161 ratings"
      },
      "location": "Portugal\n·\nDouro",
      "image": "https://images.vivino.com/thumbs/ooQmRipERdeq4HM4KGxlEA_pb_x300.png",
      "id": 136
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Romanée-Saint-Vivant Grand Cru (Marey-Monge) 2008",
      "rating": {
        "average": "4.8",
        "reviews": "159 ratings"
      },
      "location": "France\n·\nRomanée-Saint-Vivant Grand Cru",
      "image": "https://images.vivino.com/thumbs/qbolgWCtRq-z3tt-HeXRrA_pb_x300.png",
      "id": 137
    },
    {
      "winery": "Palmaz",
      "wine": "Cabernet Sauvignon 2015",
      "rating": {
        "average": "4.8",
        "reviews": "155 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/AEWCd6xfSvCc7aoZcEVkaw_pb_x300.png",
      "id": 138
    },
    {
      "winery": "Frank Family",
      "wine": "Patriarch 2013",
      "rating": {
        "average": "4.8",
        "reviews": "154 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/BFAcH67rRxyiZskkxTnnJQ_pb_x300.png",
      "id": 139
    },
    {
      "winery": "Frank Family",
      "wine": "Winston Hill 2010",
      "rating": {
        "average": "4.8",
        "reviews": "152 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/0CtubwMqQy-ZING9vlUPSw_pb_x300.png",
      "id": 140
    },
    {
      "winery": "Harlan Estate",
      "wine": "Harlan Estate Red 2010",
      "rating": {
        "average": "4.8",
        "reviews": "151 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/dk-tNdajRPqx2M7XtuE3dg_pb_x300.png",
      "id": 141
    },
    {
      "winery": "Ernesto Ruffo",
      "wine": "Basaltico Amarone della Valpolicella N.V.",
      "rating": {
        "average": "4.8",
        "reviews": "155 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella",
      "image": "https://images.vivino.com/thumbs/kB1XXwozQyKwmJfHannatg_pb_x300.png",
      "id": 142
    },
    {
      "winery": "Cartuxa",
      "wine": "Pêra-Manca Tinto 2016",
      "rating": {
        "average": "4.8",
        "reviews": "151 ratings"
      },
      "location": "Portugal\n·\nAlentejo",
      "image": "https://images.vivino.com/thumbs/L33jsYUuTMWTMy3KoqQyXg_pb_x300.png",
      "id": 143
    },
    {
      "winery": "Hundred Acre",
      "wine": "Kayli Morgan Vineyard Cabernet Sauvignon 2013",
      "rating": {
        "average": "4.8",
        "reviews": "150 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/ZOn7KuOhTCap7hb74ucQVA_pb_x300.png",
      "id": 144
    },
    {
      "winery": "Douro Boys",
      "wine": "Cuvée N.V.",
      "rating": {
        "average": "4.8",
        "reviews": "154 ratings"
      },
      "location": "Portugal\n·\nDouro",
      "image": "https://images.vivino.com/thumbs/QbwgpVmHTfi2A5HU_0zrCQ_375x500.jpg",
      "id": 145
    },
    {
      "winery": "Tres Mil Botellas",
      "wine": "Ximenez-Spinola Destilado Jerez De La Frontera N.V.",
      "rating": {
        "average": "4.8",
        "reviews": "153 ratings"
      },
      "location": "",
      "image": "https://images.vivino.com/thumbs/016h6c1zwr1um_375x500.jpg",
      "id": 146
    },
    {
      "winery": "Scheiblhofer",
      "wine": "Batonnage (Red Scorpion) 2011",
      "rating": {
        "average": "4.8",
        "reviews": "148 ratings"
      },
      "location": "Austria\n·\nNiederösterreich",
      "image": "https://images.vivino.com/thumbs/bI-uSdfMSXiG3UTJz6BeuA_pb_x300.png",
      "id": 147
    },
    {
      "winery": "Scarecrow",
      "wine": "Cabernet Sauvignon 2007",
      "rating": {
        "average": "4.8",
        "reviews": "146 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/pU7uFKR-TAKAOQaf3Hpn2A_pb_x300.png",
      "id": 148
    },
    {
      "winery": "Viña Cobos",
      "wine": "Cobos Volturno 2016",
      "rating": {
        "average": "4.8",
        "reviews": "145 ratings"
      },
      "location": "Argentina\n·\nPerdriel",
      "image": "https://images.vivino.com/thumbs/D1Mf1fYnRnageFjtfLXdFg_pb_x300.png",
      "id": 149
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "La Tâche Grand Cru 1989",
      "rating": {
        "average": "4.8",
        "reviews": "145 ratings"
      },
      "location": "France\n·\nLa Tâche Grand Cru",
      "image": "https://images.vivino.com/thumbs/rUPGZo11SwW6haQta4COqQ_pb_x300.png",
      "id": 150
    },
    {
      "winery": "Ovid",
      "wine": "Red Blend 2012",
      "rating": {
        "average": "4.8",
        "reviews": "145 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/ezwBiGBKSLGNdUHBaLxKng_pb_x300.png",
      "id": 151
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico Reserva Especial Edición 2013",
      "rating": {
        "average": "4.8",
        "reviews": "144 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/k_UetHZ3Q2SMqUsliefGYQ_pb_x300.png",
      "id": 152
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "La Tâche Grand Cru 2008",
      "rating": {
        "average": "4.8",
        "reviews": "139 ratings"
      },
      "location": "France\n·\nLa Tâche Grand Cru",
      "image": "https://images.vivino.com/thumbs/rUPGZo11SwW6haQta4COqQ_pb_x300.png",
      "id": 153
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Grands-Échezeaux Grand Cru 2010",
      "rating": {
        "average": "4.8",
        "reviews": "139 ratings"
      },
      "location": "France\n·\nGrands-Échezeaux Grand Cru",
      "image": "https://images.vivino.com/thumbs/_JpKqg8USl6fLDvV6uZ3uA_pb_x300.png",
      "id": 154
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Richebourg Grand Cru 2011",
      "rating": {
        "average": "4.8",
        "reviews": "138 ratings"
      },
      "location": "France\n·\nRichebourg Grand Cru",
      "image": "https://images.vivino.com/thumbs/cohA0QIVTGmupg938tBbbQ_pb_x300.png",
      "id": 155
    },
    {
      "winery": "Colgin",
      "wine": "IX Estate Red 2010",
      "rating": {
        "average": "4.8",
        "reviews": "138 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/6QbrD6OwQMuOmSCBxo5C2g_pb_x300.png",
      "id": 156
    },
    {
      "winery": "Hundred Acre",
      "wine": "Ark Vineyard Cabernet Sauvignon 2007",
      "rating": {
        "average": "4.8",
        "reviews": "134 ratings"
      },
      "location": "United States\n·\nHowell Mountain",
      "image": "https://images.vivino.com/thumbs/TQLu4uY6RuC0bW8QHDeIPw_pb_x300.png",
      "id": 157
    },
    {
      "winery": "Zýmē",
      "wine": "La Mattonara Amarone della Valpolicella Classico Riserva 2003",
      "rating": {
        "average": "4.8",
        "reviews": "133 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella Classico",
      "image": "https://images.vivino.com/thumbs/mmxlvL67TWKI4iJfDkomcA_pb_x300.png",
      "id": 158
    },
    {
      "winery": "Scarecrow",
      "wine": "Cabernet Sauvignon 2014",
      "rating": {
        "average": "4.8",
        "reviews": "132 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/pU7uFKR-TAKAOQaf3Hpn2A_pb_x300.png",
      "id": 159
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Grands-Échezeaux Grand Cru 2001",
      "rating": {
        "average": "4.8",
        "reviews": "131 ratings"
      },
      "location": "France\n·\nGrands-Échezeaux Grand Cru",
      "image": "https://images.vivino.com/thumbs/_JpKqg8USl6fLDvV6uZ3uA_pb_x300.png",
      "id": 160
    },
    {
      "winery": "Colgin",
      "wine": "IX Estate Red 2012",
      "rating": {
        "average": "4.8",
        "reviews": "130 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/6QbrD6OwQMuOmSCBxo5C2g_pb_x300.png",
      "id": 161
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "La Tâche Grand Cru 2012",
      "rating": {
        "average": "4.8",
        "reviews": "130 ratings"
      },
      "location": "France\n·\nLa Tâche Grand Cru",
      "image": "https://images.vivino.com/thumbs/rUPGZo11SwW6haQta4COqQ_pb_x300.png",
      "id": 162
    },
    {
      "winery": "Conterno",
      "wine": "Barolo Riserva Monfortino 1997",
      "rating": {
        "average": "4.8",
        "reviews": "128 ratings"
      },
      "location": "Italy\n·\nBarolo",
      "image": "https://images.vivino.com/thumbs/ElcyI1YpRSes_LvNodMeSQ_pb_x300.png",
      "id": 163
    },
    {
      "winery": "Château Mouton Rothschild",
      "wine": "Pauillac (Premier Grand Cru Classé) 1959",
      "rating": {
        "average": "4.8",
        "reviews": "127 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/DNeQQKoHQCyq7BakiBm_zQ_pb_x300.png",
      "id": 164
    },
    {
      "winery": "Catena Zapata",
      "wine": "Adrianna Vineyard River Stones Malbec 2015",
      "rating": {
        "average": "4.8",
        "reviews": "126 ratings"
      },
      "location": "Argentina\n·\nMendoza",
      "image": "https://images.vivino.com/thumbs/nJVKE4QhQ8ayYG8MfdIJQA_pb_x300.png",
      "id": 165
    },
    {
      "winery": "Quintarelli Giuseppe",
      "wine": "Amarone della Valpolicella Classico Superiore 1995",
      "rating": {
        "average": "4.8",
        "reviews": "123 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella Classico",
      "image": "https://images.vivino.com/thumbs/f1g6YqC_SY2JHwTzus7ZIQ_pb_x300.png",
      "id": 166
    },
    {
      "winery": "Château Latour",
      "wine": "Grand Vin Pauillac (Premier Grand Cru Classé) 1959",
      "rating": {
        "average": "4.8",
        "reviews": "119 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/4RHhCzeQTsCeyCScxO0LOw_pb_x300.png",
      "id": 167
    },
    {
      "winery": "Quintarelli Giuseppe",
      "wine": "Amarone della Valpolicella Classico Riserva 2003",
      "rating": {
        "average": "4.8",
        "reviews": "118 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella Classico",
      "image": "https://images.vivino.com/thumbs/UTdMlCi2TJ6gOY9NGvMpoA_pb_x300.png",
      "id": 168
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "La Tâche Grand Cru 2014",
      "rating": {
        "average": "4.8",
        "reviews": "117 ratings"
      },
      "location": "France\n·\nLa Tâche Grand Cru",
      "image": "https://images.vivino.com/thumbs/rUPGZo11SwW6haQta4COqQ_pb_x300.png",
      "id": 169
    },
    {
      "winery": "Château Mouton Rothschild",
      "wine": "Pauillac (Premier Grand Cru Classé) 1961",
      "rating": {
        "average": "4.8",
        "reviews": "116 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/DNeQQKoHQCyq7BakiBm_zQ_pb_x300.png",
      "id": 170
    },
    {
      "winery": "Promontory",
      "wine": "Promontory 2009",
      "rating": {
        "average": "4.8",
        "reviews": "115 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/BpwdHUqBSH-JjbkLeeVL5A_pb_x300.png",
      "id": 171
    },
    {
      "winery": "Realm",
      "wine": "The Absurd N.V.",
      "rating": {
        "average": "4.8",
        "reviews": "112 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/qFjvrLYhQV6dPWQG_ZjkZg_pb_x300.png",
      "id": 172
    },
    {
      "winery": "Garbole",
      "wine": "Hurlo N.V.",
      "rating": {
        "average": "4.8",
        "reviews": "113 ratings"
      },
      "location": "Italy\n·\nVeneto",
      "image": "https://images.vivino.com/thumbs/f_G1SS0eT_C6hZGGwdEZqA_pb_x300.png",
      "id": 173
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Romanée-Conti Grand Cru 1978",
      "rating": {
        "average": "4.8",
        "reviews": "111 ratings"
      },
      "location": "France\n·\nRomanée-Conti Grand Cru",
      "image": "https://images.vivino.com/thumbs/SzZEjTsMRlWz3yDyCISfnA_pb_x300.png",
      "id": 174
    },
    {
      "winery": "Gaja",
      "wine": "Sorì Tildìn (Barbaresco) Langhe 1997",
      "rating": {
        "average": "4.8",
        "reviews": "109 ratings"
      },
      "location": "Italy\n·\nLanghe",
      "image": "https://images.vivino.com/thumbs/MLjLRlNRRGONGy2_fJB4Wg_pb_x300.png",
      "id": 175
    },
    {
      "winery": "Scarecrow",
      "wine": "Cabernet Sauvignon 2015",
      "rating": {
        "average": "4.8",
        "reviews": "109 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/pU7uFKR-TAKAOQaf3Hpn2A_pb_x300.png",
      "id": 176
    },
    {
      "winery": "Not a Wine",
      "wine": "A.E. Dor Cognac Vieille Reserve N.V.",
      "rating": {
        "average": "4.8",
        "reviews": "108 ratings"
      },
      "location": "France\n·\nChampagne",
      "image": "https://images.vivino.com/thumbs/00p9r2086j3nj_375x500.jpg",
      "id": 177
    },
    {
      "winery": "Pétrus",
      "wine": "Pomerol 1967",
      "rating": {
        "average": "4.8",
        "reviews": "108 ratings"
      },
      "location": "France\n·\nPomerol",
      "image": "https://images.vivino.com/thumbs/RPhc1fBwT0uLKoE6_mteFQ_pb_x300.png",
      "id": 178
    },
    {
      "winery": "Joseph Phelps",
      "wine": "Backus Vineyard Cabernet Sauvignon 2013",
      "rating": {
        "average": "4.8",
        "reviews": "107 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/P-vNjR3JTdSDginmrnDX_Q_pb_x300.png",
      "id": 179
    },
    {
      "winery": "Schrader",
      "wine": "Cabernet Sauvignon RBS Beckstoffer To Kalon Vineyard 2010",
      "rating": {
        "average": "4.8",
        "reviews": "107 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/GpcSXs2ERS6niDxoAsvESA_pb_x300.png",
      "id": 180
    },
    {
      "winery": "E. Guigal",
      "wine": "Côte-Rôtie La Mouline 2002",
      "rating": {
        "average": "4.8",
        "reviews": "104 ratings"
      },
      "location": "France\n·\nCôte-Rôtie",
      "image": "https://images.vivino.com/thumbs/HYVZMFigQ5qXxni7s9SpWw_pb_x300.png",
      "id": 181
    },
    {
      "winery": "Ovid",
      "wine": "Red Blend 2010",
      "rating": {
        "average": "4.8",
        "reviews": "104 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/ezwBiGBKSLGNdUHBaLxKng_pb_x300.png",
      "id": 182
    },
    {
      "winery": "Villa Rinaldi",
      "wine": "Rinaldi Maior Amarone della Valpolicella 2000",
      "rating": {
        "average": "4.8",
        "reviews": "101 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella",
      "image": "https://images.vivino.com/thumbs/rXpNpFjkRZCR891Jfxb8uw_pb_x300.png",
      "id": 183
    },
    {
      "winery": "Bovin",
      "wine": "My Way N.V.",
      "rating": {
        "average": "4.8",
        "reviews": "100 ratings"
      },
      "location": "Macedonia\n·\nPovardarie",
      "image": "https://images.vivino.com/thumbs/8wqFCtD8TG2WDvPt8YfhOQ_375x500.jpg",
      "id": 184
    },
    {
      "winery": "Soldera",
      "wine": "Case Basse Sangiovese Toscana 2013",
      "rating": {
        "average": "4.8",
        "reviews": "100 ratings"
      },
      "location": "Italy\n·\nToscana",
      "image": "https://images.vivino.com/thumbs/umr2871XSGORwaDHGnd4zw_pb_x300.png",
      "id": 185
    },
    {
      "winery": "Henschke",
      "wine": "Hill of Grace 2001",
      "rating": {
        "average": "4.8",
        "reviews": "100 ratings"
      },
      "location": "Australia\n·\nEden Valley",
      "image": "https://images.vivino.com/thumbs/57IkGbeXTRikAFM7LrcRzQ_pb_x300.png",
      "id": 186
    },
    {
      "winery": "Henri Bonneau",
      "wine": "Chateauneuf-du-Pape Réserve des Célestins 2000",
      "rating": {
        "average": "4.8",
        "reviews": "99 ratings"
      },
      "location": "France\n·\nChâteauneuf-du-Pape",
      "image": "https://images.vivino.com/thumbs/i53kv2gfSNu0kgi8J3YqJg_pb_x300.png",
      "id": 187
    },
    {
      "winery": "Screaming Eagle",
      "wine": "Cabernet Sauvignon 2006",
      "rating": {
        "average": "4.8",
        "reviews": "99 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/Z92v0bohTBaVUVPNjiXPuA_pb_x300.png",
      "id": 188
    },
    {
      "winery": "Cliff Lede",
      "wine": "Poetry Cabernet Sauvignon 2012",
      "rating": {
        "average": "4.8",
        "reviews": "99 ratings"
      },
      "location": "United States\n·\nStags Leap District",
      "image": "https://images.vivino.com/thumbs/rbOkqy3pSTuTVU8XKAFYXw_pb_x300.png",
      "id": 189
    },
    {
      "winery": "Dal Forno Romano",
      "wine": "Amarone della Valpolicella Monte Lodoletta 1998",
      "rating": {
        "average": "4.8",
        "reviews": "99 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella",
      "image": "https://images.vivino.com/thumbs/WpxjVqZnTkeq2f68wJoJSg_pb_x300.png",
      "id": 190
    },
    {
      "winery": "Casa Ferreirinha",
      "wine": "Touriga Nacional Douro 2004",
      "rating": {
        "average": "4.8",
        "reviews": "101 ratings"
      },
      "location": "Portugal\n·\nDouro",
      "image": "https://images.vivino.com/thumbs/019yfynde20xl_375x500.jpg",
      "id": 191
    },
    {
      "winery": "Hundred Acre",
      "wine": "Ark Vineyard Cabernet Sauvignon 2005",
      "rating": {
        "average": "4.8",
        "reviews": "97 ratings"
      },
      "location": "United States\n·\nHowell Mountain",
      "image": "https://images.vivino.com/thumbs/TQLu4uY6RuC0bW8QHDeIPw_pb_x300.png",
      "id": 192
    },
    {
      "winery": "Baron Philippe de Rothschild",
      "wine": "La Bergerie Baronat Saint-Émilion 2009",
      "rating": {
        "average": "4.8",
        "reviews": "96 ratings"
      },
      "location": "France\n·\nSaint-Émilion",
      "image": "https://images.vivino.com/thumbs/uGWcfBB7TA-1yvsHLnoz1g_375x500.jpg",
      "id": 193
    },
    {
      "winery": "Hundred Acre",
      "wine": "Kayli Morgan Vineyard Cabernet Sauvignon 2014",
      "rating": {
        "average": "4.8",
        "reviews": "96 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/ZOn7KuOhTCap7hb74ucQVA_pb_x300.png",
      "id": 194
    },
    {
      "winery": "Bond",
      "wine": "Pluribus 2012",
      "rating": {
        "average": "4.8",
        "reviews": "93 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/JxkaF0QjRkmty4ODuguLSg_pb_x300.png",
      "id": 195
    },
    {
      "winery": "Sine Qua Non",
      "wine": "Fitz Poker Face 2004",
      "rating": {
        "average": "4.8",
        "reviews": "93 ratings"
      },
      "location": "United States\n·\nSanta Barbara County",
      "image": "https://images.vivino.com/thumbs/4syrZEDvSkqustUbaTZjow_pb_x300.png",
      "id": 196
    },
    {
      "winery": "Schrader",
      "wine": "Cabernet Sauvignon RBS Beckstoffer To Kalon Vineyard 2014",
      "rating": {
        "average": "4.8",
        "reviews": "93 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/GpcSXs2ERS6niDxoAsvESA_pb_x300.png",
      "id": 197
    },
    {
      "winery": "Gaja",
      "wine": "Sperss Langhe 1988",
      "rating": {
        "average": "4.8",
        "reviews": "92 ratings"
      },
      "location": "Italy\n·\nLanghe",
      "image": "https://images.vivino.com/thumbs/CwZPprKTSMCSikoZTeiwDA_pb_x300.png",
      "id": 198
    },
    {
      "winery": "Château Ausone",
      "wine": "Saint-Émilion Grand Cru (Premier Grand Cru Classé) 2003",
      "rating": {
        "average": "4.8",
        "reviews": "92 ratings"
      },
      "location": "France\n·\nSaint-Émilion Grand Cru",
      "image": "https://images.vivino.com/thumbs/3qAATur8TrWn_JwIWRVvkw_pb_x300.png",
      "id": 199
    },
    {
      "winery": "Douro Boys",
      "wine": "Cuvée 2011",
      "rating": {
        "average": "4.8",
        "reviews": "92 ratings"
      },
      "location": "Portugal\n·\nDouro",
      "image": "https://images.vivino.com/thumbs/QbwgpVmHTfi2A5HU_0zrCQ_375x500.jpg",
      "id": 200
    },
    {
      "winery": "Joseph Phelps",
      "wine": "Backus Vineyard Cabernet Sauvignon 2014",
      "rating": {
        "average": "4.8",
        "reviews": "92 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/P-vNjR3JTdSDginmrnDX_Q_pb_x300.png",
      "id": 201
    },
    {
      "winery": "Bond",
      "wine": "St. Eden 2011",
      "rating": {
        "average": "4.8",
        "reviews": "89 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/0b4-sfABS6W7mt_rr4Vv9A_pb_x300.png",
      "id": 202
    },
    {
      "winery": "Bevan Cellars",
      "wine": "Sugarloaf Mountain Vineyard Proprietary Red 2013",
      "rating": {
        "average": "4.8",
        "reviews": "88 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/FGbt-Nx_RmO3Vie3m5AFPA_pb_x300.png",
      "id": 203
    },
    {
      "winery": "Bond",
      "wine": "Vecina 2005",
      "rating": {
        "average": "4.8",
        "reviews": "88 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/bs-ZiOBVTm6R4XB5sER1yA_pb_x300.png",
      "id": 204
    },
    {
      "winery": "Bodega Contador (Benjamín Romeo)",
      "wine": "Contador Rioja 2005",
      "rating": {
        "average": "4.8",
        "reviews": "88 ratings"
      },
      "location": "Spain\n·\nRioja",
      "image": "https://images.vivino.com/thumbs/JCMip0RjTjmUKzkd-v5Sjg_pb_x300.png",
      "id": 205
    },
    {
      "winery": "E. Guigal",
      "wine": "Côte-Rôtie La Mouline 2009",
      "rating": {
        "average": "4.8",
        "reviews": "87 ratings"
      },
      "location": "France\n·\nCôte-Rôtie",
      "image": "https://images.vivino.com/thumbs/HYVZMFigQ5qXxni7s9SpWw_pb_x300.png",
      "id": 206
    },
    {
      "winery": "Harlan Estate",
      "wine": "Harlan Estate Red 1998",
      "rating": {
        "average": "4.8",
        "reviews": "87 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/dk-tNdajRPqx2M7XtuE3dg_pb_x300.png",
      "id": 207
    },
    {
      "winery": "Dal Forno Romano",
      "wine": "Amarone della Valpolicella Monte Lodoletta 1996",
      "rating": {
        "average": "4.8",
        "reviews": "86 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella",
      "image": "https://images.vivino.com/thumbs/WpxjVqZnTkeq2f68wJoJSg_pb_x300.png",
      "id": 208
    },
    {
      "winery": "Casa Ferreirinha",
      "wine": "Touriga Nacional Douro 2000",
      "rating": {
        "average": "4.8",
        "reviews": "86 ratings"
      },
      "location": "Portugal\n·\nDouro",
      "image": "https://images.vivino.com/thumbs/019yfynde20xl_375x500.jpg",
      "id": 209
    },
    {
      "winery": "Cirq",
      "wine": "Treehouse Pinot Noir 2015",
      "rating": {
        "average": "4.8",
        "reviews": "86 ratings"
      },
      "location": "United States\n·\nRussian River Valley",
      "image": "https://images.vivino.com/thumbs/k7oHkUodSvi8tQeQdFmI4g_pb_x300.png",
      "id": 210
    },
    {
      "winery": "Domaine Armand Rousseau",
      "wine": "Chambertin Grand Cru 1996",
      "rating": {
        "average": "4.8",
        "reviews": "85 ratings"
      },
      "location": "France\n·\nChambertin Grand Cru",
      "image": "https://images.vivino.com/thumbs/1XYwrN2-SQqqJlCMSUp3tA_pb_x300.png",
      "id": 211
    },
    {
      "winery": "Dal Forno Romano",
      "wine": "Amarone della Valpolicella Monte Lodoletta 1997",
      "rating": {
        "average": "4.8",
        "reviews": "85 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella",
      "image": "https://images.vivino.com/thumbs/WpxjVqZnTkeq2f68wJoJSg_pb_x300.png",
      "id": 212
    },
    {
      "winery": "Pine Ridge",
      "wine": "Fortis Cabernet Sauvignon 2010",
      "rating": {
        "average": "4.8",
        "reviews": "85 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/nu85uiOyQiay0d_WLhYTNg_pb_x300.png",
      "id": 213
    },
    {
      "winery": "Harlan Estate",
      "wine": "The Maiden 2007",
      "rating": {
        "average": "4.8",
        "reviews": "83 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/v-VTQKQYRhK4ExdgrT5B_Q_pb_x300.png",
      "id": 214
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico 1979",
      "rating": {
        "average": "4.8",
        "reviews": "82 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/SCnpJk_ySUe6XS3U-lFOwQ_pb_x300.png",
      "id": 215
    },
    {
      "winery": "Memento Mori",
      "wine": "Cabernet Sauvignon 2012",
      "rating": {
        "average": "4.8",
        "reviews": "80 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/V1dBHwuBQsqUeHuGeGdiYw_pb_x300.png",
      "id": 216
    },
    {
      "winery": "Promontory",
      "wine": "Promontory 2008",
      "rating": {
        "average": "4.8",
        "reviews": "79 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/BpwdHUqBSH-JjbkLeeVL5A_pb_x300.png",
      "id": 217
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Richebourg Grand Cru 2003",
      "rating": {
        "average": "4.8",
        "reviews": "78 ratings"
      },
      "location": "France\n·\nRichebourg Grand Cru",
      "image": "https://images.vivino.com/thumbs/cohA0QIVTGmupg938tBbbQ_pb_x300.png",
      "id": 218
    },
    {
      "winery": "Bovin",
      "wine": "My Way 2011",
      "rating": {
        "average": "4.8",
        "reviews": "77 ratings"
      },
      "location": "Macedonia\n·\nPovardarie",
      "image": "https://images.vivino.com/thumbs/8wqFCtD8TG2WDvPt8YfhOQ_375x500.jpg",
      "id": 219
    },
    {
      "winery": "Maybach Family Vineyards",
      "wine": "Materium Cabernet Sauvignon 2013",
      "rating": {
        "average": "4.8",
        "reviews": "76 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/vqT06EsOQOOXR_9jqByJEA_pb_x300.png",
      "id": 220
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Grands-Échezeaux Grand Cru 2015",
      "rating": {
        "average": "4.8",
        "reviews": "76 ratings"
      },
      "location": "France\n·\nGrands-Échezeaux Grand Cru",
      "image": "https://images.vivino.com/thumbs/_JpKqg8USl6fLDvV6uZ3uA_pb_x300.png",
      "id": 221
    },
    {
      "winery": "Zýmē",
      "wine": "La Mattonara Amarone della Valpolicella Classico Riserva 2001",
      "rating": {
        "average": "4.8",
        "reviews": "75 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella Classico",
      "image": "https://images.vivino.com/thumbs/mmxlvL67TWKI4iJfDkomcA_pb_x300.png",
      "id": 222
    },
    {
      "winery": "Bevan Cellars",
      "wine": "Cabernet Sauvignon 2012",
      "rating": {
        "average": "4.8",
        "reviews": "75 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/VyhOO9qKQu-qD7KwBDlEQw_pb_x300.png",
      "id": 223
    },
    {
      "winery": "Rudd",
      "wine": "Oakville Estate Red 2008",
      "rating": {
        "average": "4.8",
        "reviews": "74 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/aGzjLa1MS6yiveDs3AqFmg_pb_x300.png",
      "id": 224
    },
    {
      "winery": "Kamen",
      "wine": "Kashmir Cuvee 2012",
      "rating": {
        "average": "4.8",
        "reviews": "77 ratings"
      },
      "location": "United States\n·\nSonoma Valley",
      "image": "https://images.vivino.com/thumbs/sf33jeblS1u5_i-KxPHAFA_pb_x300.png",
      "id": 225
    },
    {
      "winery": "E. Guigal",
      "wine": "Côte-Rôtie La Mouline 1995",
      "rating": {
        "average": "4.8",
        "reviews": "74 ratings"
      },
      "location": "France\n·\nCôte-Rôtie",
      "image": "https://images.vivino.com/thumbs/HYVZMFigQ5qXxni7s9SpWw_pb_x300.png",
      "id": 226
    },
    {
      "winery": "Casa Agrícola Santana Ramalho (CSR)",
      "wine": "Avó Sabica 2008",
      "rating": {
        "average": "4.8",
        "reviews": "73 ratings"
      },
      "location": "Portugal\n·\nAlentejo",
      "image": "https://images.vivino.com/thumbs/6X3THK66SHORXOn7Ozy4Xg_pb_x300.png",
      "id": 227
    },
    {
      "winery": "Soldera",
      "wine": "Brunello di Montalcino Riserva 1994",
      "rating": {
        "average": "4.8",
        "reviews": "73 ratings"
      },
      "location": "Italy\n·\nBrunello di Montalcino",
      "image": "https://images.vivino.com/thumbs/l_eXmV1KTdGzz3ky_Qey3A_pb_x300.png",
      "id": 228
    },
    {
      "winery": "Bryant Family Vineyard",
      "wine": "Cabernet Sauvignon Proprietor Grown 2005",
      "rating": {
        "average": "4.8",
        "reviews": "72 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/JL0BHEkRTxqJUuW9QfABtA_pb_x300.png",
      "id": 229
    },
    {
      "winery": "",
      "wine": "Tesseron Cognac Lot No 29 X.O Exception N.V.",
      "rating": {
        "average": "4.8",
        "reviews": "72 ratings"
      },
      "location": "",
      "image": "https://images.vivino.com/thumbs/1371891164_1805_375x500.jpg",
      "id": 230
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico Reserva Especial Edición 2005",
      "rating": {
        "average": "4.8",
        "reviews": "72 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/k_UetHZ3Q2SMqUsliefGYQ_pb_x300.png",
      "id": 231
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Richebourg Grand Cru 2012",
      "rating": {
        "average": "4.8",
        "reviews": "72 ratings"
      },
      "location": "France\n·\nRichebourg Grand Cru",
      "image": "https://images.vivino.com/thumbs/cohA0QIVTGmupg938tBbbQ_pb_x300.png",
      "id": 232
    },
    {
      "winery": "Sine Qua Non",
      "wine": "Papa Syrah 2003",
      "rating": {
        "average": "4.8",
        "reviews": "71 ratings"
      },
      "location": "United States\n·\nCentral Coast",
      "image": "https://images.vivino.com/thumbs/D1hyDtZdQHq3y7zcEQUc7g_pb_x300.png",
      "id": 233
    },
    {
      "winery": "Screaming Eagle",
      "wine": "Cabernet Sauvignon 2003",
      "rating": {
        "average": "4.8",
        "reviews": "71 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/Z92v0bohTBaVUVPNjiXPuA_pb_x300.png",
      "id": 234
    },
    {
      "winery": "Soldera",
      "wine": "Brunello di Montalcino Riserva 2008",
      "rating": {
        "average": "4.8",
        "reviews": "70 ratings"
      },
      "location": "Italy\n·\nBrunello di Montalcino",
      "image": "https://images.vivino.com/thumbs/l_eXmV1KTdGzz3ky_Qey3A_pb_x300.png",
      "id": 235
    },
    {
      "winery": "Viña Cobos",
      "wine": "Cobos Chañares Vineyard Malbec 2016",
      "rating": {
        "average": "4.8",
        "reviews": "70 ratings"
      },
      "location": "Argentina\n·\nTunuyán",
      "image": "https://images.vivino.com/thumbs/IQSL2hitTXi4fypdhZzi4g_pb_x300.png",
      "id": 236
    },
    {
      "winery": "Vale D. Maria",
      "wine": "Vinha do Rio Douro Tinto 2016",
      "rating": {
        "average": "4.8",
        "reviews": "70 ratings"
      },
      "location": "Portugal\n·\nDouro",
      "image": "https://images.vivino.com/thumbs/0daKQekVT_eO99LhnZ-bKg_pb_x300.png",
      "id": 237
    },
    {
      "winery": "Cirq",
      "wine": "Bootlegger's Hill Pinot Noir 2014",
      "rating": {
        "average": "4.8",
        "reviews": "70 ratings"
      },
      "location": "United States\n·\nRussian River Valley",
      "image": "https://images.vivino.com/thumbs/aWeZrSwlRFuHjHuaCgLCxQ_pb_x300.png",
      "id": 238
    },
    {
      "winery": "Domaine Armand Rousseau",
      "wine": "Chambertin Grand Cru 2010",
      "rating": {
        "average": "4.8",
        "reviews": "69 ratings"
      },
      "location": "France\n·\nChambertin Grand Cru",
      "image": "https://images.vivino.com/thumbs/1XYwrN2-SQqqJlCMSUp3tA_pb_x300.png",
      "id": 239
    },
    {
      "winery": "Sine Qua Non",
      "wine": "Touché N.V.",
      "rating": {
        "average": "4.8",
        "reviews": "69 ratings"
      },
      "location": "United States\n·\nCalifornia",
      "image": "https://images.vivino.com/thumbs/N6jcUeR6Tq2oA3X6-Nz3gQ_pb_x300.png",
      "id": 240
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Richebourg Grand Cru 2014",
      "rating": {
        "average": "4.8",
        "reviews": "69 ratings"
      },
      "location": "France\n·\nRichebourg Grand Cru",
      "image": "https://images.vivino.com/thumbs/cohA0QIVTGmupg938tBbbQ_pb_x300.png",
      "id": 241
    },
    {
      "winery": "Mollydooker",
      "wine": "Velvet Glove Shiraz 2017",
      "rating": {
        "average": "4.8",
        "reviews": "69 ratings"
      },
      "location": "Australia\n·\nMcLaren Vale",
      "image": "https://images.vivino.com/thumbs/Fe-oTc4BSPm2c2Cv9bjcIg_pb_x300.png",
      "id": 242
    },
    {
      "winery": "Domaine Comte Georges de Vogüé",
      "wine": "Musigny Grand Cru (Cuveé Vieilles Vignes) 2009",
      "rating": {
        "average": "4.8",
        "reviews": "68 ratings"
      },
      "location": "France\n·\nMusigny Grand Cru",
      "image": "https://images.vivino.com/thumbs/Hk_hnCNzRlW4AojQHUUVzA_pb_x300.png",
      "id": 243
    },
    {
      "winery": "Palmaz",
      "wine": "Gaston Cabernet Sauvignon 2012",
      "rating": {
        "average": "4.8",
        "reviews": "68 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/yF180mpVQMS13Ci9B_cI9A_pb_x300.png",
      "id": 244
    },
    {
      "winery": "De Toren",
      "wine": "Book 17 XVII 2014",
      "rating": {
        "average": "4.8",
        "reviews": "68 ratings"
      },
      "location": "South Africa\n·\nStellenbosch",
      "image": "https://images.vivino.com/thumbs/43se9NpdSPKkbPdGMbRV6Q_pb_x300.png",
      "id": 245
    },
    {
      "winery": "Pine Ridge",
      "wine": "Fortis Cabernet Sauvignon 2014",
      "rating": {
        "average": "4.8",
        "reviews": "68 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/nu85uiOyQiay0d_WLhYTNg_pb_x300.png",
      "id": 246
    },
    {
      "winery": "Ferragù",
      "wine": "Amarone della Valpolicella 2006",
      "rating": {
        "average": "4.8",
        "reviews": "67 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella",
      "image": "https://images.vivino.com/thumbs/lQSuHQdtTLawYsSkLBD0zg_pb_x300.png",
      "id": 247
    },
    {
      "winery": "Château Rayas",
      "wine": "Châteauneuf-du-Pape 1990",
      "rating": {
        "average": "4.8",
        "reviews": "67 ratings"
      },
      "location": "France\n·\nChâteauneuf-du-Pape",
      "image": "https://images.vivino.com/thumbs/v1Jsa3uGTKq0AZxNgO9X_Q_pb_x300.png",
      "id": 248
    },
    {
      "winery": "Sine Qua Non",
      "wine": "A Shot In The Dark 2006",
      "rating": {
        "average": "4.8",
        "reviews": "66 ratings"
      },
      "location": "United States\n·\nCalifornia",
      "image": "https://images.vivino.com/thumbs/N9DO0gxSRJewcXhzwu0FEA_pb_x300.png",
      "id": 249
    },
    {
      "winery": "Sine Qua Non",
      "wine": "Midnight N.V.",
      "rating": {
        "average": "4.8",
        "reviews": "66 ratings"
      },
      "location": "United States\n·\nSanta Lucia Highlands",
      "image": "https://images.vivino.com/thumbs/Xp2WIepnTYK1SExe5PZGfQ_pb_x300.png",
      "id": 250
    },
    {
      "winery": "Bond",
      "wine": "Melbury 2008",
      "rating": {
        "average": "4.8",
        "reviews": "66 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/ybjt6WFjQWmVFOr-W4P2ig_pb_x300.png",
      "id": 251
    },
    {
      "winery": "Bryant Family Vineyard",
      "wine": "Bettina Proprietary Red 2009",
      "rating": {
        "average": "4.8",
        "reviews": "65 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/4_c85YhURUabCCDnOQtQWw_pb_x300.png",
      "id": 252
    },
    {
      "winery": "Moone-Tsai",
      "wine": "Cor Leonis 2012",
      "rating": {
        "average": "4.8",
        "reviews": "65 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/Mz1v7rqNStKlVhTimIlDeQ_pb_x300.png",
      "id": 253
    },
    {
      "winery": "Bevan Cellars",
      "wine": "Ontogeny Red 2009",
      "rating": {
        "average": "4.8",
        "reviews": "65 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/pCwd7HRBSs6Fmunw8jwpgA_pb_x300.png",
      "id": 254
    },
    {
      "winery": "Le Pin",
      "wine": "Pomerol 1990",
      "rating": {
        "average": "4.8",
        "reviews": "64 ratings"
      },
      "location": "France\n·\nPomerol",
      "image": "https://images.vivino.com/thumbs/rCirPraNRPy8PHfOlG4E2w_pb_x300.png",
      "id": 255
    },
    {
      "winery": "Sine Qua Non",
      "wine": "Touché 2012",
      "rating": {
        "average": "4.8",
        "reviews": "64 ratings"
      },
      "location": "United States\n·\nCalifornia",
      "image": "https://images.vivino.com/thumbs/N6jcUeR6Tq2oA3X6-Nz3gQ_pb_x300.png",
      "id": 256
    },
    {
      "winery": "4G",
      "wine": "G 2010",
      "rating": {
        "average": "4.8",
        "reviews": "64 ratings"
      },
      "location": "South Africa\n·\nWestern Cape",
      "image": "https://images.vivino.com/thumbs/icdzM1D7RAmPnwKkFm61Nw_375x500.jpg",
      "id": 257
    },
    {
      "winery": "Cade",
      "wine": "Reserve Cabernet Sauvignon 2015",
      "rating": {
        "average": "4.8",
        "reviews": "63 ratings"
      },
      "location": "United States\n·\nHowell Mountain",
      "image": "https://images.vivino.com/thumbs/zs5_IWwJQ1mBTj8SyNvmTg_pb_x300.png",
      "id": 258
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Échezeaux Grand Cru 1995",
      "rating": {
        "average": "4.8",
        "reviews": "63 ratings"
      },
      "location": "France\n·\nÉchezeaux Grand Cru",
      "image": "https://images.vivino.com/thumbs/4acI_FD8QriZh2Fx_iv_oA_pb_x300.png",
      "id": 259
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "La Tâche Grand Cru 1978",
      "rating": {
        "average": "4.8",
        "reviews": "63 ratings"
      },
      "location": "France\n·\nLa Tâche Grand Cru",
      "image": "https://images.vivino.com/thumbs/rUPGZo11SwW6haQta4COqQ_pb_x300.png",
      "id": 260
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico Reserva Especial Edición 1985",
      "rating": {
        "average": "4.8",
        "reviews": "63 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/k_UetHZ3Q2SMqUsliefGYQ_pb_x300.png",
      "id": 261
    },
    {
      "winery": "Bond",
      "wine": "St. Eden 2004",
      "rating": {
        "average": "4.8",
        "reviews": "63 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/0b4-sfABS6W7mt_rr4Vv9A_pb_x300.png",
      "id": 262
    },
    {
      "winery": "Del Dotto",
      "wine": "The Beast Cabernet Sauvignon 2015",
      "rating": {
        "average": "4.8",
        "reviews": "63 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/easjTPIcS-mCQ99XoYOMgQ_pb_x300.png",
      "id": 263
    },
    {
      "winery": "Hundred Acre",
      "wine": "Kayli Morgan Vineyard Cabernet Sauvignon 2009",
      "rating": {
        "average": "4.8",
        "reviews": "63 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/ZOn7KuOhTCap7hb74ucQVA_pb_x300.png",
      "id": 264
    },
    {
      "winery": "4G",
      "wine": "Waldweben 2013",
      "rating": {
        "average": "4.8",
        "reviews": "62 ratings"
      },
      "location": "South Africa\n·\nWestern Cape",
      "image": "https://images.vivino.com/thumbs/kQ3IeoWQS4qILyB3HYPXLg_pb_x300.png",
      "id": 265
    },
    {
      "winery": "Favia",
      "wine": "Cerro Sur 2012",
      "rating": {
        "average": "4.8",
        "reviews": "62 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/2rXRM1rcSc-C6B3do91rog_pb_x300.png",
      "id": 266
    },
    {
      "winery": "Sine Qua Non",
      "wine": "Pictures 2007",
      "rating": {
        "average": "4.8",
        "reviews": "62 ratings"
      },
      "location": "United States\n·\nCalifornia",
      "image": "https://images.vivino.com/thumbs/k450L9h5Scujux0Npmq-uQ_pb_x300.png",
      "id": 267
    },
    {
      "winery": "Sine Qua Non",
      "wine": "Five Shooter Syrah 2010",
      "rating": {
        "average": "4.8",
        "reviews": "62 ratings"
      },
      "location": "United States\n·\nCalifornia",
      "image": "https://images.vivino.com/thumbs/mNDCW_YQSLatFnuatZh4zw_pb_x300.png",
      "id": 268
    },
    {
      "winery": "Hall",
      "wine": "Sacrashe Vineyard Cabernet Sauvignon N.V.",
      "rating": {
        "average": "4.8",
        "reviews": "67 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/CyFO5fLBQAGfRhDrHnblRA_375x500.jpg",
      "id": 269
    },
    {
      "winery": "Bond",
      "wine": "Vecina 2013",
      "rating": {
        "average": "4.8",
        "reviews": "62 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/bs-ZiOBVTm6R4XB5sER1yA_pb_x300.png",
      "id": 270
    },
    {
      "winery": "Domaine Armand Rousseau",
      "wine": "Chambertin Grand Cru 2014",
      "rating": {
        "average": "4.8",
        "reviews": "62 ratings"
      },
      "location": "France\n·\nChambertin Grand Cru",
      "image": "https://images.vivino.com/thumbs/1XYwrN2-SQqqJlCMSUp3tA_pb_x300.png",
      "id": 271
    },
    {
      "winery": "Peter Michael",
      "wine": "Les Pavots 2002",
      "rating": {
        "average": "4.8",
        "reviews": "62 ratings"
      },
      "location": "United States\n·\nKnights Valley",
      "image": "https://images.vivino.com/thumbs/MmNRvvj8ROOvBOOyP_Krqg_pb_x300.png",
      "id": 272
    },
    {
      "winery": "Dal Forno Romano",
      "wine": "Amarone della Valpolicella Monte Lodoletta 1995",
      "rating": {
        "average": "4.8",
        "reviews": "61 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella",
      "image": "https://images.vivino.com/thumbs/WpxjVqZnTkeq2f68wJoJSg_pb_x300.png",
      "id": 273
    },
    {
      "winery": "Hall",
      "wine": "Howell Mountain Cabernet Sauvignon 2012",
      "rating": {
        "average": "4.8",
        "reviews": "61 ratings"
      },
      "location": "United States\n·\nHowell Mountain",
      "image": "https://images.vivino.com/thumbs/e7OaezgsQdKFFXBwRgkKOg_pb_x300.png",
      "id": 274
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Romanée-Conti Grand Cru 1972",
      "rating": {
        "average": "4.8",
        "reviews": "61 ratings"
      },
      "location": "France\n·\nRomanée-Conti Grand Cru",
      "image": "https://images.vivino.com/thumbs/SzZEjTsMRlWz3yDyCISfnA_pb_x300.png",
      "id": 275
    },
    {
      "winery": "Bond",
      "wine": "St. Eden 2002",
      "rating": {
        "average": "4.8",
        "reviews": "60 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/0b4-sfABS6W7mt_rr4Vv9A_pb_x300.png",
      "id": 276
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Cuvée Duvault-Blochet Vosne-Romanée 1er Cru 2004",
      "rating": {
        "average": "4.8",
        "reviews": "60 ratings"
      },
      "location": "France\n·\nVosne-Romanée Premier Cru",
      "image": "https://images.vivino.com/thumbs/y6dWZi2YSVq9nNJpGnJa0w_pb_x300.png",
      "id": 277
    },
    {
      "winery": "Le Pin",
      "wine": "Pomerol 2001",
      "rating": {
        "average": "4.8",
        "reviews": "60 ratings"
      },
      "location": "France\n·\nPomerol",
      "image": "https://images.vivino.com/thumbs/rCirPraNRPy8PHfOlG4E2w_pb_x300.png",
      "id": 278
    },
    {
      "winery": "Quintarelli Giuseppe",
      "wine": "Amarone della Valpolicella Classico Riserva 1995",
      "rating": {
        "average": "4.8",
        "reviews": "60 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella Classico",
      "image": "https://images.vivino.com/thumbs/UTdMlCi2TJ6gOY9NGvMpoA_pb_x300.png",
      "id": 279
    },
    {
      "winery": "Del Dotto",
      "wine": "Cabernet Sauvignon St. Helena Mountain Family Reserve 2012",
      "rating": {
        "average": "4.8",
        "reviews": "59 ratings"
      },
      "location": "United States\n·\nSt. Helena",
      "image": "https://images.vivino.com/thumbs/NnvfxpP_S2GycGg7VNkeYQ_375x500.jpg",
      "id": 280
    },
    {
      "winery": "Sine Qua Non",
      "wine": "Ratsel Syrah 2016",
      "rating": {
        "average": "4.8",
        "reviews": "59 ratings"
      },
      "location": "United States\n·\nCalifornia",
      "image": "https://images.vivino.com/thumbs/ZzMKzqFqRO-6oI3ys3gGgQ_pb_x300.png",
      "id": 281
    },
    {
      "winery": "De Toren",
      "wine": "Book 17 XVII 2015",
      "rating": {
        "average": "4.8",
        "reviews": "59 ratings"
      },
      "location": "South Africa\n·\nStellenbosch",
      "image": "https://images.vivino.com/thumbs/43se9NpdSPKkbPdGMbRV6Q_pb_x300.png",
      "id": 282
    },
    {
      "winery": "Bryant Family Vineyard",
      "wine": "Cabernet Sauvignon Proprietor Grown 1997",
      "rating": {
        "average": "4.8",
        "reviews": "58 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/JL0BHEkRTxqJUuW9QfABtA_pb_x300.png",
      "id": 283
    },
    {
      "winery": "Sine Qua Non",
      "wine": "The 17th Nail in My Cranium 2005",
      "rating": {
        "average": "4.8",
        "reviews": "58 ratings"
      },
      "location": "United States\n·\nSta. Rita Hills",
      "image": "https://images.vivino.com/thumbs/czzcC4ZaStGChaDkmFYmww_pb_x300.png",
      "id": 284
    },
    {
      "winery": "Pine Ridge",
      "wine": "Andrus Reserve 2005",
      "rating": {
        "average": "4.8",
        "reviews": "58 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/btaARYWPQHygKZZC1Ia3WA_pb_x300.png",
      "id": 285
    },
    {
      "winery": "Ovid",
      "wine": "Hexameter 2014",
      "rating": {
        "average": "4.8",
        "reviews": "58 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/PgPKAD77SribC8lx7DuT-A_pb_x300.png",
      "id": 286
    },
    {
      "winery": "Quintarelli Giuseppe",
      "wine": "Amarone della Valpolicella Classico Riserva 2007",
      "rating": {
        "average": "4.8",
        "reviews": "57 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella Classico",
      "image": "https://images.vivino.com/thumbs/UTdMlCi2TJ6gOY9NGvMpoA_pb_x300.png",
      "id": 287
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Romanée-Conti Grand Cru 1986",
      "rating": {
        "average": "4.8",
        "reviews": "57 ratings"
      },
      "location": "France\n·\nRomanée-Conti Grand Cru",
      "image": "https://images.vivino.com/thumbs/SzZEjTsMRlWz3yDyCISfnA_pb_x300.png",
      "id": 288
    },
    {
      "winery": "Screaming Eagle",
      "wine": "Cabernet Sauvignon 1999",
      "rating": {
        "average": "4.8",
        "reviews": "57 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/Z92v0bohTBaVUVPNjiXPuA_pb_x300.png",
      "id": 289
    },
    {
      "winery": "David Arthur",
      "wine": "Elevation 1147 2012",
      "rating": {
        "average": "4.8",
        "reviews": "56 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/0X2i9oTPS9yHCjWCvwvnGw_pb_x300.png",
      "id": 290
    },
    {
      "winery": "Screaming Eagle",
      "wine": "Cabernet Sauvignon 1998",
      "rating": {
        "average": "4.8",
        "reviews": "56 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/Z92v0bohTBaVUVPNjiXPuA_pb_x300.png",
      "id": 291
    },
    {
      "winery": "Schrader",
      "wine": "Cabernet Sauvignon Old Sparky Beckstoffer To Kalon 2012",
      "rating": {
        "average": "4.8",
        "reviews": "55 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/nPPvCaprSvqHtXOGVakjVQ_pb_x300.png",
      "id": 292
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico Reserva Especial Edición 1962",
      "rating": {
        "average": "4.8",
        "reviews": "55 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/k_UetHZ3Q2SMqUsliefGYQ_pb_x300.png",
      "id": 293
    },
    {
      "winery": "Torbreck",
      "wine": "The Laird 2008",
      "rating": {
        "average": "4.8",
        "reviews": "55 ratings"
      },
      "location": "Australia\n·\nBarossa Valley",
      "image": "https://images.vivino.com/thumbs/QHz6qHb2Seqlc-HJHtpmUA_pb_x300.png",
      "id": 294
    },
    {
      "winery": "Henri Bonneau",
      "wine": "Chateauneuf-du-Pape Réserve des Célestins 1998",
      "rating": {
        "average": "4.8",
        "reviews": "54 ratings"
      },
      "location": "France\n·\nChâteauneuf-du-Pape",
      "image": "https://images.vivino.com/thumbs/i53kv2gfSNu0kgi8J3YqJg_pb_x300.png",
      "id": 295
    },
    {
      "winery": "The Crane Assembly",
      "wine": "G.B. Crane Vineyard Cabernet Sauvignon 2012",
      "rating": {
        "average": "4.8",
        "reviews": "54 ratings"
      },
      "location": "United States\n·\nSt. Helena",
      "image": "https://images.vivino.com/thumbs/y3AWKpwhQcCwKIz09e2onw_pb_x300.png",
      "id": 296
    },
    {
      "winery": "Bond",
      "wine": "Pluribus 2007",
      "rating": {
        "average": "4.8",
        "reviews": "54 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/JxkaF0QjRkmty4ODuguLSg_pb_x300.png",
      "id": 297
    },
    {
      "winery": "Domaine Armand Rousseau",
      "wine": "Chambertin Grand Cru 2003",
      "rating": {
        "average": "4.8",
        "reviews": "54 ratings"
      },
      "location": "France\n·\nChambertin Grand Cru",
      "image": "https://images.vivino.com/thumbs/1XYwrN2-SQqqJlCMSUp3tA_pb_x300.png",
      "id": 298
    },
    {
      "winery": "Futo",
      "wine": "5500 N.V.",
      "rating": {
        "average": "4.8",
        "reviews": "55 ratings"
      },
      "location": "United States\n·\nStags Leap District",
      "image": "https://images.vivino.com/thumbs/4q2Q15MLRCyw40utBkSbUA_pb_x300.png",
      "id": 299
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "La Tâche Grand Cru 1971",
      "rating": {
        "average": "4.8",
        "reviews": "54 ratings"
      },
      "location": "France\n·\nLa Tâche Grand Cru",
      "image": "https://images.vivino.com/thumbs/rUPGZo11SwW6haQta4COqQ_pb_x300.png",
      "id": 300
    },
    {
      "winery": "Domaine Armand Rousseau",
      "wine": "Chambertin Clos de Beze Grand Cru 2000",
      "rating": {
        "average": "4.8",
        "reviews": "53 ratings"
      },
      "location": "France\n·\nChambertin-Clos de Bèze Grand Cru",
      "image": "https://images.vivino.com/thumbs/0sC_c_PjQsKM1kesmg9zDw_pb_x300.png",
      "id": 301
    },
    {
      "winery": "Schrader",
      "wine": "Cabernet Sauvignon CCS Beckstoffer To Kalon Vineyard 2012",
      "rating": {
        "average": "4.8",
        "reviews": "53 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/_jt3dPPrSZKfVmV6J8YlLg_pb_x300.png",
      "id": 302
    },
    {
      "winery": "Ernesto Ruffo",
      "wine": "Amarone della Valpolicella Riserva 2007",
      "rating": {
        "average": "4.8",
        "reviews": "53 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella",
      "image": "https://images.vivino.com/thumbs/nC9V6L2mQQSq0s-wZLcaxw_pb_x300.png",
      "id": 303
    },
    {
      "winery": "Screaming Eagle",
      "wine": "Cabernet Sauvignon 2002",
      "rating": {
        "average": "4.8",
        "reviews": "53 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/Z92v0bohTBaVUVPNjiXPuA_pb_x300.png",
      "id": 304
    },
    {
      "winery": "Abreu",
      "wine": "Madrona Ranch Cabernet Sauvignon 2008",
      "rating": {
        "average": "4.8",
        "reviews": "53 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/L27lLpSLSQmHB9x5xFBpmQ_pb_x300.png",
      "id": 305
    },
    {
      "winery": "Tusk",
      "wine": "Cabernet Sauvignon 2012",
      "rating": {
        "average": "4.8",
        "reviews": "53 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/_dyrZSN7Sq6xyIrWTS2slA_pb_x300.png",
      "id": 306
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico Reserva Especial Edición 1968",
      "rating": {
        "average": "4.8",
        "reviews": "53 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/k_UetHZ3Q2SMqUsliefGYQ_pb_x300.png",
      "id": 307
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Romanée-Conti Grand Cru 2015",
      "rating": {
        "average": "4.8",
        "reviews": "52 ratings"
      },
      "location": "France\n·\nRomanée-Conti Grand Cru",
      "image": "https://images.vivino.com/thumbs/SzZEjTsMRlWz3yDyCISfnA_pb_x300.png",
      "id": 308
    },
    {
      "winery": "Sine Qua Non",
      "wine": "Atlantis Fe203 1A Syrah N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "53 ratings"
      },
      "location": "United States\n·\nCalifornia",
      "image": "https://images.vivino.com/thumbs/KvLvqn0WR467QX39jGr4fg_pb_x300.png",
      "id": 309
    },
    {
      "winery": "Lokoya",
      "wine": "Mount Veeder Cabernet Sauvignon 2006",
      "rating": {
        "average": "4.8",
        "reviews": "51 ratings"
      },
      "location": "United States\n·\nMount Veeder",
      "image": "https://images.vivino.com/thumbs/41jCEa5TSouKrLK1mxZVLg_pb_x300.png",
      "id": 310
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Romanée-Conti Grand Cru 1976",
      "rating": {
        "average": "4.8",
        "reviews": "51 ratings"
      },
      "location": "France\n·\nRomanée-Conti Grand Cru",
      "image": "https://images.vivino.com/thumbs/SzZEjTsMRlWz3yDyCISfnA_pb_x300.png",
      "id": 311
    },
    {
      "winery": "Mollydooker",
      "wine": "Velvet Glove Shiraz 2013",
      "rating": {
        "average": "4.8",
        "reviews": "51 ratings"
      },
      "location": "Australia\n·\nMcLaren Vale",
      "image": "https://images.vivino.com/thumbs/Fe-oTc4BSPm2c2Cv9bjcIg_pb_x300.png",
      "id": 312
    },
    {
      "winery": "Del Dotto",
      "wine": "Cabernet Sauvignon St. Helena Mountain 2010",
      "rating": {
        "average": "4.8",
        "reviews": "51 ratings"
      },
      "location": "United States\n·\nSt. Helena",
      "image": "https://images.vivino.com/thumbs/05c129iwR-mOludhobyiCA_pb_x300.png",
      "id": 313
    },
    {
      "winery": "Sine Qua Non",
      "wine": "Midnight 2001",
      "rating": {
        "average": "4.8",
        "reviews": "50 ratings"
      },
      "location": "United States\n·\nSanta Lucia Highlands",
      "image": "https://images.vivino.com/thumbs/Xp2WIepnTYK1SExe5PZGfQ_pb_x300.png",
      "id": 314
    },
    {
      "winery": "E. Guigal",
      "wine": "Côte-Rôtie La Landonne 1991",
      "rating": {
        "average": "4.8",
        "reviews": "50 ratings"
      },
      "location": "France\n·\nCôte-Rôtie",
      "image": "https://images.vivino.com/thumbs/u4ylBcQmSGCaaEBN_doYsQ_pb_x300.png",
      "id": 315
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico Reserva Especial Edición 2019",
      "rating": {
        "average": "4.8",
        "reviews": "49 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/k_UetHZ3Q2SMqUsliefGYQ_pb_x300.png",
      "id": 316
    },
    {
      "winery": "Burly",
      "wine": "Cabernet Sauvignon 2016",
      "rating": {
        "average": "4.8",
        "reviews": "49 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/wWeJuTtyTeyiSvhPEO_IeQ_pb_x300.png",
      "id": 317
    },
    {
      "winery": "Cliff Lede",
      "wine": "Poetry Cabernet Sauvignon 2013",
      "rating": {
        "average": "4.8",
        "reviews": "49 ratings"
      },
      "location": "United States\n·\nStags Leap District",
      "image": "https://images.vivino.com/thumbs/rbOkqy3pSTuTVU8XKAFYXw_pb_x300.png",
      "id": 318
    },
    {
      "winery": "Monte Faustino",
      "wine": "L'Amarone del Maestro Fornaser 2009",
      "rating": {
        "average": "4.8",
        "reviews": "48 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella",
      "image": "https://images.vivino.com/thumbs/9Kh3L5W9SUuEnSa2rAtOfQ_pb_x300.png",
      "id": 319
    },
    {
      "winery": "Pago de Carraovejas",
      "wine": "Cuesta de Las Liebres 2004",
      "rating": {
        "average": "4.8",
        "reviews": "48 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/X50m7BqoRu2-XHGpF4-Nvw_pb_x300.png",
      "id": 320
    },
    {
      "winery": "Tusk",
      "wine": "Cabernet Sauvignon 2011",
      "rating": {
        "average": "4.8",
        "reviews": "48 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/_dyrZSN7Sq6xyIrWTS2slA_pb_x300.png",
      "id": 321
    },
    {
      "winery": "Schrader",
      "wine": "Cabernet Sauvignon CCS Beckstoffer To Kalon Vineyard 2013",
      "rating": {
        "average": "4.8",
        "reviews": "48 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/_jt3dPPrSZKfVmV6J8YlLg_pb_x300.png",
      "id": 322
    },
    {
      "winery": "Álvaro Palacios",
      "wine": "L'Ermita Velles Vinyes Priorat 2012",
      "rating": {
        "average": "4.8",
        "reviews": "47 ratings"
      },
      "location": "Spain\n·\nPriorat",
      "image": "https://images.vivino.com/thumbs/aSQz1n49SM6JCS1F9aDOHQ_pb_x300.png",
      "id": 323
    },
    {
      "winery": "E. Guigal",
      "wine": "Côte-Rôtie La Turque 1991",
      "rating": {
        "average": "4.8",
        "reviews": "47 ratings"
      },
      "location": "France\n·\nCôte-Rôtie",
      "image": "https://images.vivino.com/thumbs/ef3LDfDxSRit60wSsGYW6A_pb_x300.png",
      "id": 324
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Grands-Échezeaux Grand Cru 1976",
      "rating": {
        "average": "4.8",
        "reviews": "48 ratings"
      },
      "location": "France\n·\nGrands-Échezeaux Grand Cru",
      "image": "https://images.vivino.com/thumbs/_JpKqg8USl6fLDvV6uZ3uA_pb_x300.png",
      "id": 325
    },
    {
      "winery": "Peter Michael",
      "wine": "Les Pavots 2001",
      "rating": {
        "average": "4.8",
        "reviews": "47 ratings"
      },
      "location": "United States\n·\nKnights Valley",
      "image": "https://images.vivino.com/thumbs/MmNRvvj8ROOvBOOyP_Krqg_pb_x300.png",
      "id": 326
    },
    {
      "winery": "Pulido-Walker",
      "wine": "Panek Vineyard Cabernet Sauvignon 2012",
      "rating": {
        "average": "4.8",
        "reviews": "47 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/BeV2BOMoQC2qVPvKuB78fg_pb_x300.png",
      "id": 327
    },
    {
      "winery": "Scarecrow",
      "wine": "M. Etain 2016",
      "rating": {
        "average": "4.8",
        "reviews": "47 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/1S8EQY4xQT-EeeD727cD1A_pb_x300.png",
      "id": 328
    },
    {
      "winery": "Schrader",
      "wine": "Cabernet Sauvignon Old Sparky Beckstoffer To Kalon 2014",
      "rating": {
        "average": "4.8",
        "reviews": "46 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/nPPvCaprSvqHtXOGVakjVQ_pb_x300.png",
      "id": 329
    },
    {
      "winery": "Parusso",
      "wine": "Barolo Bussia Riserva 1999",
      "rating": {
        "average": "4.8",
        "reviews": "46 ratings"
      },
      "location": "Italy\n·\nBarolo",
      "image": "https://images.vivino.com/thumbs/axGXPDRaSXWQMlTyM40oYw_pb_x300.png",
      "id": 330
    },
    {
      "winery": "Antinori",
      "wine": "Tenuta Guado al Tasso Matarocchio 2013",
      "rating": {
        "average": "4.8",
        "reviews": "46 ratings"
      },
      "location": "Italy\n·\nMaremma Toscana",
      "image": "https://images.vivino.com/thumbs/TEdvvuFFR86UIEyXHuy8Vw_pb_x300.png",
      "id": 331
    },
    {
      "winery": "Macauley",
      "wine": "Beckstoffer To Kalon Cabernet Sauvignon 2014",
      "rating": {
        "average": "4.8",
        "reviews": "46 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/J1wTk-GcSUOGdXfk7nTA7w_pb_x300.png",
      "id": 332
    },
    {
      "winery": "Domaine Armand Rousseau",
      "wine": "Chambertin Grand Cru 1990",
      "rating": {
        "average": "4.8",
        "reviews": "46 ratings"
      },
      "location": "France\n·\nChambertin Grand Cru",
      "image": "https://images.vivino.com/thumbs/1XYwrN2-SQqqJlCMSUp3tA_pb_x300.png",
      "id": 333
    },
    {
      "winery": "Casa Castillo",
      "wine": "Cuvée N Viñas Viejas 2015",
      "rating": {
        "average": "4.8",
        "reviews": "46 ratings"
      },
      "location": "Spain\n·\nJumilla",
      "image": "https://images.vivino.com/thumbs/MnhaTMSzStCTUkIX44yspA_pb_x300.png",
      "id": 334
    },
    {
      "winery": "E. Guigal",
      "wine": "Côte-Rôtie La Landonne 1990",
      "rating": {
        "average": "4.8",
        "reviews": "46 ratings"
      },
      "location": "France\n·\nCôte-Rôtie",
      "image": "https://images.vivino.com/thumbs/u4ylBcQmSGCaaEBN_doYsQ_pb_x300.png",
      "id": 335
    },
    {
      "winery": "Jaro",
      "wine": "Sed de Caná 2012",
      "rating": {
        "average": "4.8",
        "reviews": "45 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/b92H2aRhQQKuHB21ssSAug_pb_x300.png",
      "id": 336
    },
    {
      "winery": "Ernesto Ruffo",
      "wine": "Basaltico Amarone della Valpolicella 2006",
      "rating": {
        "average": "4.8",
        "reviews": "45 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella",
      "image": "https://images.vivino.com/thumbs/kB1XXwozQyKwmJfHannatg_pb_x300.png",
      "id": 337
    },
    {
      "winery": "Bond",
      "wine": "St. Eden 2013",
      "rating": {
        "average": "4.8",
        "reviews": "45 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/0b4-sfABS6W7mt_rr4Vv9A_pb_x300.png",
      "id": 338
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico Reserva Especial Edición 1993",
      "rating": {
        "average": "4.8",
        "reviews": "45 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/k_UetHZ3Q2SMqUsliefGYQ_pb_x300.png",
      "id": 339
    },
    {
      "winery": "Kapcsandy",
      "wine": "State Lane Vineyard Cabernet Sauvignon Grand-Vin 2007",
      "rating": {
        "average": "4.8",
        "reviews": "44 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/k2ixDxWuR_S3TNhbQTJUKQ_pb_x300.png",
      "id": 340
    },
    {
      "winery": "Castiglion del Bosco",
      "wine": "Millecento Brunello di Montalcino Riserva 2005",
      "rating": {
        "average": "4.8",
        "reviews": "44 ratings"
      },
      "location": "Italy\n·\nBrunello di Montalcino",
      "image": "https://images.vivino.com/thumbs/o6GE7ZEUQ4KFWxplo-ffYA_pb_x300.png",
      "id": 341
    },
    {
      "winery": "Teso La Monja",
      "wine": "Tinto 2009",
      "rating": {
        "average": "4.8",
        "reviews": "43 ratings"
      },
      "location": "Spain\n·\nToro",
      "image": "https://images.vivino.com/thumbs/axBtSSH6TiK_ryMdUaw-rg_pb_x300.png",
      "id": 342
    },
    {
      "winery": "",
      "wine": "Fine de Bourgogne 1979",
      "rating": {
        "average": "4.8",
        "reviews": "44 ratings"
      },
      "location": "France\n·\nCôte de Nuits",
      "image": "https://images.vivino.com/highlights/icon/most_user_rated.svg",
      "id": 343
    },
    {
      "winery": "Sine Qua Non",
      "wine": "Stockholm Syndrome Eleven Confession Vineyard Syrah 2010",
      "rating": {
        "average": "4.8",
        "reviews": "43 ratings"
      },
      "location": "United States\n·\nCentral Coast",
      "image": "https://images.vivino.com/thumbs/GejoTq_wSAazxp2j6iGiCA_pb_x300.png",
      "id": 344
    },
    {
      "winery": "Kinsella Estates",
      "wine": "Jersey Boys Vineyard Cabernet Sauvignon 2013",
      "rating": {
        "average": "4.8",
        "reviews": "43 ratings"
      },
      "location": "United States\n·\nDry Creek Valley",
      "image": "https://images.vivino.com/thumbs/IkCSmw9BT-6wOOCwxUWCOw_pb_x300.png",
      "id": 345
    },
    {
      "winery": "Podere Il Carnasciale",
      "wine": "Il Caberlot 2005",
      "rating": {
        "average": "4.8",
        "reviews": "43 ratings"
      },
      "location": "Italy\n·\nToscana",
      "image": "https://images.vivino.com/thumbs/ZVu6gHseTwquXgpwQSbE-w_pb_x300.png",
      "id": 346
    },
    {
      "winery": "Blankiet",
      "wine": "Rive Droite (Paradise Hills Vineyard) 2013",
      "rating": {
        "average": "4.8",
        "reviews": "43 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/C7cjFRAdTje8bZTO1BLyhA_pb_x300.png",
      "id": 347
    },
    {
      "winery": "Bodega Contador (Benjamín Romeo)",
      "wine": "Contador Rioja 2003",
      "rating": {
        "average": "4.8",
        "reviews": "43 ratings"
      },
      "location": "Spain\n·\nRioja",
      "image": "https://images.vivino.com/thumbs/JCMip0RjTjmUKzkd-v5Sjg_pb_x300.png",
      "id": 348
    },
    {
      "winery": "Catena Zapata",
      "wine": "Malbec Argentino 2003",
      "rating": {
        "average": "4.8",
        "reviews": "43 ratings"
      },
      "location": "Argentina\n·\nMendoza",
      "image": "https://images.vivino.com/thumbs/K2Ui4ULxQd2S3jcrgwmxYQ_pb_x300.png",
      "id": 349
    },
    {
      "winery": "Sine Qua Non",
      "wine": "Stockholm Syndrome Eleven Confession Vineyard Grenache N.V.",
      "rating": {
        "average": "4.8",
        "reviews": "42 ratings"
      },
      "location": "United States\n·\nSta. Rita Hills",
      "image": "https://images.vivino.com/thumbs/eoESQg64S8mw1BwEJVVkGQ_pb_x300.png",
      "id": 350
    },
    {
      "winery": "Nine Suns",
      "wine": "Red 2012",
      "rating": {
        "average": "4.8",
        "reviews": "42 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/8YR_YARvQ1ykl8HE46ad0Q_pb_x300.png",
      "id": 351
    },
    {
      "winery": "Harlan Estate",
      "wine": "Harlan Estate Red 1989",
      "rating": {
        "average": "4.8",
        "reviews": "42 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/dk-tNdajRPqx2M7XtuE3dg_pb_x300.png",
      "id": 352
    },
    {
      "winery": "Giuseppe Rinaldi",
      "wine": "Brunate - Le Coste Barolo 1999",
      "rating": {
        "average": "4.8",
        "reviews": "42 ratings"
      },
      "location": "Italy\n·\nBarolo",
      "image": "https://images.vivino.com/thumbs/DmClNYI4SVauB5tTO-NjFw_pb_x300.png",
      "id": 353
    },
    {
      "winery": "Williams Selyem",
      "wine": "Rochioli Riverblock Vineyard Pinot Noir 2013",
      "rating": {
        "average": "4.8",
        "reviews": "42 ratings"
      },
      "location": "United States\n·\nRussian River Valley",
      "image": "https://images.vivino.com/thumbs/OR7cG4txSZKg6zNlznIAKA_pb_x300.png",
      "id": 354
    },
    {
      "winery": "Teso La Monja",
      "wine": "Tinto 2012",
      "rating": {
        "average": "4.8",
        "reviews": "41 ratings"
      },
      "location": "Spain\n·\nToro",
      "image": "https://images.vivino.com/thumbs/axBtSSH6TiK_ryMdUaw-rg_pb_x300.png",
      "id": 355
    },
    {
      "winery": "E. Guigal",
      "wine": "Côte-Rôtie La Turque 1990",
      "rating": {
        "average": "4.8",
        "reviews": "41 ratings"
      },
      "location": "France\n·\nCôte-Rôtie",
      "image": "https://images.vivino.com/thumbs/ef3LDfDxSRit60wSsGYW6A_pb_x300.png",
      "id": 356
    },
    {
      "winery": "Lokoya",
      "wine": "Howell Mountain Cabernet Sauvignon 2009",
      "rating": {
        "average": "4.8",
        "reviews": "41 ratings"
      },
      "location": "United States\n·\nHowell Mountain",
      "image": "https://images.vivino.com/thumbs/mhIoSvBcRf-_qJbrKRwbRg_pb_x300.png",
      "id": 357
    },
    {
      "winery": "Quintarelli Giuseppe",
      "wine": "Veneto Alzero Cabernet 2009",
      "rating": {
        "average": "4.8",
        "reviews": "41 ratings"
      },
      "location": "Italy\n·\nVeneto",
      "image": "https://images.vivino.com/thumbs/zbMcPfLzSiGJ5XlKoZ1Azg_pb_x300.png",
      "id": 358
    },
    {
      "winery": "Schrader",
      "wine": "Cabernet Sauvignon LPV Beckstoffer Las Piedras Vineyard 2011",
      "rating": {
        "average": "4.8",
        "reviews": "41 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/My_ybUSLQ72eQ4vCR_I4vg_pb_x300.png",
      "id": 359
    },
    {
      "winery": "Martinet",
      "wine": "Priorat Cami Pesseroles 2006",
      "rating": {
        "average": "4.8",
        "reviews": "41 ratings"
      },
      "location": "Spain\n·\nPriorat",
      "image": "https://images.vivino.com/thumbs/JxgTtM-qTQS23R_UQvmYBQ_pb_x300.png",
      "id": 360
    },
    {
      "winery": "Dalla Valle",
      "wine": "Cabernet Sauvignon 1990",
      "rating": {
        "average": "4.8",
        "reviews": "41 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/hA8Q4HF0SLW_5PD4x-LuOQ_pb_x300.png",
      "id": 361
    },
    {
      "winery": "Saxum",
      "wine": "Broken Stones 2006",
      "rating": {
        "average": "4.8",
        "reviews": "41 ratings"
      },
      "location": "United States\n·\nPaso Robles",
      "image": "https://images.vivino.com/thumbs/wNq6CTO5TG-pTZdn-CRapw_pb_x300.png",
      "id": 362
    },
    {
      "winery": "Bertani",
      "wine": "Amarone della Valpolicella Classico 1968",
      "rating": {
        "average": "4.8",
        "reviews": "41 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella Classico",
      "image": "https://images.vivino.com/thumbs/sF4N3IO1SgC_uvOCfTEewg_pb_x300.png",
      "id": 363
    },
    {
      "winery": "Domaine G. Roumier",
      "wine": "Bonnes-Mares Grand Cru 2005",
      "rating": {
        "average": "4.8",
        "reviews": "41 ratings"
      },
      "location": "France\n·\nBonnes-Mares Grand Cru",
      "image": "https://images.vivino.com/thumbs/wFjqTzsNQamw6P250LGLEg_pb_x300.png",
      "id": 364
    },
    {
      "winery": "Abreu",
      "wine": "Madrona Ranch Cabernet Sauvignon 2007",
      "rating": {
        "average": "4.8",
        "reviews": "41 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/L27lLpSLSQmHB9x5xFBpmQ_pb_x300.png",
      "id": 365
    },
    {
      "winery": "Brion",
      "wine": "Cabernet Sauvignon 2009",
      "rating": {
        "average": "4.8",
        "reviews": "40 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/RuufQM3QS8aHbvoUWETFqQ_pb_x300.png",
      "id": 366
    },
    {
      "winery": "Kanonkop",
      "wine": "Paul Sauer 1991",
      "rating": {
        "average": "4.8",
        "reviews": "40 ratings"
      },
      "location": "South Africa\n·\nStellenbosch",
      "image": "https://images.vivino.com/thumbs/rGM7yLTqR4iYyDDwsOFkow_pb_x300.png",
      "id": 367
    },
    {
      "winery": "Sine Qua Non",
      "wine": "Stockholm Syndrome Eleven Confession Vineyard Grenache 2010",
      "rating": {
        "average": "4.8",
        "reviews": "40 ratings"
      },
      "location": "United States\n·\nSta. Rita Hills",
      "image": "https://images.vivino.com/thumbs/eoESQg64S8mw1BwEJVVkGQ_pb_x300.png",
      "id": 368
    },
    {
      "winery": "Promontory",
      "wine": "Promontory 2013",
      "rating": {
        "average": "4.8",
        "reviews": "40 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/BpwdHUqBSH-JjbkLeeVL5A_pb_x300.png",
      "id": 369
    },
    {
      "winery": "Hall",
      "wine": "The Bishop Cabernet Sauvignon 2013",
      "rating": {
        "average": "4.8",
        "reviews": "40 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/highlights/icon/most_user_rated.svg",
      "id": 370
    },
    {
      "winery": "Fait Main",
      "wine": "Las Piedras Vineyard 2011",
      "rating": {
        "average": "4.8",
        "reviews": "41 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/uV169_uVTh-pel9oXlxo6g_pb_x300.png",
      "id": 371
    },
    {
      "winery": "Martin Estate",
      "wine": "Cabernet Sauvignon 2010",
      "rating": {
        "average": "4.8",
        "reviews": "40 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/gt9rZXKHQTyzXOZNOBn_HA_pb_x300.png",
      "id": 372
    },
    {
      "winery": "Von Strasser",
      "wine": "Cabernet Sauvignon Estate Vineyard 2008",
      "rating": {
        "average": "4.8",
        "reviews": "40 ratings"
      },
      "location": "United States\n·\nDiamond Mountain District",
      "image": "https://images.vivino.com/thumbs/0dPNyIKPTw-WXxBSil5eww_pb_x300.png",
      "id": 373
    },
    {
      "winery": "Dana",
      "wine": "Helms Vineyard Cabernet Sauvignon 2007",
      "rating": {
        "average": "4.8",
        "reviews": "40 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/ahtEVX8nQrOVeBmkYJG12w_pb_x300.png",
      "id": 374
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "La Tâche Grand Cru 1966",
      "rating": {
        "average": "4.8",
        "reviews": "40 ratings"
      },
      "location": "France\n·\nLa Tâche Grand Cru",
      "image": "https://images.vivino.com/thumbs/rUPGZo11SwW6haQta4COqQ_pb_x300.png",
      "id": 375
    },
    {
      "winery": "Del Dotto",
      "wine": "Cabernet Sauvignon Vineyard 887 2016",
      "rating": {
        "average": "4.8",
        "reviews": "39 ratings"
      },
      "location": "United States\n·\nSt. Helena",
      "image": "https://images.vivino.com/thumbs/As4eGQeHTdmvXTjpjwne2Q_pb_x300.png",
      "id": 376
    },
    {
      "winery": "Hundred Acre",
      "wine": "Few and Far Between Cabernet Sauvignon 2013",
      "rating": {
        "average": "4.8",
        "reviews": "39 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/4BpJn7V2Tl-jR3lIVrq13g_pb_x300.png",
      "id": 377
    },
    {
      "winery": "Colgin",
      "wine": "Herb Lamb Vineyard Cabernet Sauvignon 1994",
      "rating": {
        "average": "4.8",
        "reviews": "39 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/_YKsSAQpQD-49_Jsb84CDg_pb_x300.png",
      "id": 378
    },
    {
      "winery": "Domaine Armand Rousseau",
      "wine": "Chambertin Clos de Beze Grand Cru 2005",
      "rating": {
        "average": "4.8",
        "reviews": "39 ratings"
      },
      "location": "France\n·\nChambertin-Clos de Bèze Grand Cru",
      "image": "https://images.vivino.com/thumbs/0sC_c_PjQsKM1kesmg9zDw_pb_x300.png",
      "id": 379
    },
    {
      "winery": "Château Margaux",
      "wine": "Château Margaux (Premier Grand Cru Classé) 1953",
      "rating": {
        "average": "4.8",
        "reviews": "39 ratings"
      },
      "location": "France\n·\nMargaux",
      "image": "https://images.vivino.com/thumbs/dnqHnd0hSx-t14_V8uynAA_pb_x300.png",
      "id": 380
    },
    {
      "winery": "Tornesi",
      "wine": "Brunello di Montalcino Riserva 2003",
      "rating": {
        "average": "4.8",
        "reviews": "38 ratings"
      },
      "location": "Italy\n·\nBrunello di Montalcino",
      "image": "https://images.vivino.com/thumbs/avd0WuBLQc-jJ975lucuWA_pb_x300.png",
      "id": 381
    },
    {
      "winery": "Schrader",
      "wine": "Cabernet Sauvignon RBS Beckstoffer To Kalon Vineyard 2016",
      "rating": {
        "average": "4.8",
        "reviews": "38 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/GpcSXs2ERS6niDxoAsvESA_pb_x300.png",
      "id": 382
    },
    {
      "winery": "Gandona",
      "wine": "Cabernet Sauvignon 2014",
      "rating": {
        "average": "4.8",
        "reviews": "38 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/9ZVSAIGtRJWfopAJfFlbZw_pb_x300.png",
      "id": 383
    },
    {
      "winery": "Del Dotto",
      "wine": "Cabernet Sauvignon St. Helena Mountain 2016",
      "rating": {
        "average": "4.8",
        "reviews": "38 ratings"
      },
      "location": "United States\n·\nSt. Helena",
      "image": "https://images.vivino.com/thumbs/05c129iwR-mOludhobyiCA_pb_x300.png",
      "id": 384
    },
    {
      "winery": "Scarecrow",
      "wine": "Cabernet Sauvignon 2003",
      "rating": {
        "average": "4.8",
        "reviews": "38 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/pU7uFKR-TAKAOQaf3Hpn2A_pb_x300.png",
      "id": 385
    },
    {
      "winery": "Seaver Vineyards",
      "wine": "GTS Cabernet Sauvignon 2013",
      "rating": {
        "average": "4.8",
        "reviews": "38 ratings"
      },
      "location": "United States\n·\nDiamond Mountain District",
      "image": "https://images.vivino.com/thumbs/gVrX2HuIThGU4cHK5gyc3w_pb_x300.png",
      "id": 386
    },
    {
      "winery": "Brand",
      "wine": "Cabernet Sauvignon 2011",
      "rating": {
        "average": "4.8",
        "reviews": "37 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/uctga7b-S3WTNoOs0T6lnQ_pb_x300.png",
      "id": 387
    },
    {
      "winery": "Del Dotto",
      "wine": "The Beast Cabernet Sauvignon 2014",
      "rating": {
        "average": "4.8",
        "reviews": "38 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/easjTPIcS-mCQ99XoYOMgQ_pb_x300.png",
      "id": 388
    },
    {
      "winery": "Corra",
      "wine": "Cabernet Sauvignon 2009",
      "rating": {
        "average": "4.8",
        "reviews": "37 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/W9SL9-grQHqF6tNmeF-qhA_pb_x300.png",
      "id": 389
    },
    {
      "winery": "Carter Cellars",
      "wine": "Beckstoffer To Kalon Vineyard The Grand Daddy 2012",
      "rating": {
        "average": "4.8",
        "reviews": "37 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/UM0zddEdSjKnd0PzAvu34w_pb_x300.png",
      "id": 390
    },
    {
      "winery": "Masseto",
      "wine": "Toscana 1992",
      "rating": {
        "average": "4.8",
        "reviews": "36 ratings"
      },
      "location": "Italy\n·\nToscana",
      "image": "https://images.vivino.com/thumbs/GPvEr_IUSKS1CDhhsY1ySg_pb_x300.png",
      "id": 391
    },
    {
      "winery": "Château La Violette",
      "wine": "Pomerol 2007",
      "rating": {
        "average": "4.8",
        "reviews": "36 ratings"
      },
      "location": "France\n·\nPomerol",
      "image": "https://images.vivino.com/thumbs/eE33gOsgSMqHJrLVxrakSw_pb_x300.png",
      "id": 392
    },
    {
      "winery": "Fairchild Estate",
      "wine": "G.III Cabernet Sauvignon 2010",
      "rating": {
        "average": "4.8",
        "reviews": "36 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/wFc7b-9hQhSs4wNG3-hprw_pb_x300.png",
      "id": 393
    },
    {
      "winery": "Scarecrow",
      "wine": "Cabernet Sauvignon 2004",
      "rating": {
        "average": "4.8",
        "reviews": "36 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/pU7uFKR-TAKAOQaf3Hpn2A_pb_x300.png",
      "id": 394
    },
    {
      "winery": "Hestan Vineyards",
      "wine": "Cabernet Sauvignon 2013",
      "rating": {
        "average": "4.8",
        "reviews": "36 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/fA6pJdaUQsWRi3XhHjoctQ_pb_x300.png",
      "id": 395
    },
    {
      "winery": "Dalla Valle",
      "wine": "Maya 2010",
      "rating": {
        "average": "4.8",
        "reviews": "36 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/PRsJ-uaoSs-KodkrzRy4Og_pb_x300.png",
      "id": 396
    },
    {
      "winery": "Castillo Perelada",
      "wine": "Empordà Finca Garbet 2004",
      "rating": {
        "average": "4.8",
        "reviews": "36 ratings"
      },
      "location": "Spain\n·\nEmpordà",
      "image": "https://images.vivino.com/thumbs/xA9j1d8ZQQmwKltOFtZnAw_pb_x300.png",
      "id": 397
    },
    {
      "winery": "Domaine Anne Gros",
      "wine": "Richebourg Grand Cru 2006",
      "rating": {
        "average": "4.8",
        "reviews": "36 ratings"
      },
      "location": "France\n·\nRichebourg Grand Cru",
      "image": "https://images.vivino.com/thumbs/ifNqsRdrR2u-_5ayGUMG2g_pb_x300.png",
      "id": 398
    },
    {
      "winery": "La Poderina",
      "wine": "Poggio Banale Brunello di Montalcino 2001",
      "rating": {
        "average": "4.8",
        "reviews": "35 ratings"
      },
      "location": "Italy\n·\nBrunello di Montalcino",
      "image": "https://images.vivino.com/thumbs/mYoXqBXyTy6XLmlwxLXZvA_pb_x300.png",
      "id": 399
    },
    {
      "winery": "Soldera",
      "wine": "Case Basse Sangiovese Toscana 2011",
      "rating": {
        "average": "4.8",
        "reviews": "35 ratings"
      },
      "location": "Italy\n·\nToscana",
      "image": "https://images.vivino.com/thumbs/valu11J3Q6yrHEfxHdpvmg_pb_x300.png",
      "id": 400
    },
    {
      "winery": "Haber",
      "wine": "Cabernet Sauvignon 2011",
      "rating": {
        "average": "4.8",
        "reviews": "36 ratings"
      },
      "location": "United States\n·\nHowell Mountain",
      "image": "https://images.vivino.com/thumbs/yQW-z9tcSwO71bSL3ACglA_pb_x300.png",
      "id": 401
    },
    {
      "winery": "Dona Dorinda",
      "wine": "Grande Reserva 2011",
      "rating": {
        "average": "4.8",
        "reviews": "35 ratings"
      },
      "location": "Portugal\n·\nAlentejo",
      "image": "https://images.vivino.com/highlights/icon/top_ranked.svg",
      "id": 402
    },
    {
      "winery": "Clos Erasmus",
      "wine": "Priorat 2004",
      "rating": {
        "average": "4.8",
        "reviews": "35 ratings"
      },
      "location": "Spain\n·\nPriorat",
      "image": "https://images.vivino.com/thumbs/B15sljOyR2ueHt4_jThEcw_pb_x300.png",
      "id": 403
    },
    {
      "winery": "I Campi",
      "wine": "Campo Marna Cinquecento Amarone della Valpolicella 2006",
      "rating": {
        "average": "4.8",
        "reviews": "34 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella",
      "image": "https://images.vivino.com/thumbs/p-_PFKmNTnOS284OXBrjQw_pb_x300.png",
      "id": 404
    },
    {
      "winery": "Emmanuel Rouget",
      "wine": "Echezeaux Grand Cru 2000",
      "rating": {
        "average": "4.8",
        "reviews": "34 ratings"
      },
      "location": "France\n·\nÉchezeaux Grand Cru",
      "image": "https://images.vivino.com/thumbs/fQ1BSFyaRCKthE69mRelNw_pb_x300.png",
      "id": 405
    },
    {
      "winery": "Jacques-Frederic Mugnier",
      "wine": "Musigny Grand Cru 2000",
      "rating": {
        "average": "4.8",
        "reviews": "34 ratings"
      },
      "location": "France\n·\nMusigny Grand Cru",
      "image": "https://images.vivino.com/thumbs/YGMg3nBYROud3n23UfUy1A_pb_x300.png",
      "id": 406
    },
    {
      "winery": "Pétrus",
      "wine": "Pomerol 1962",
      "rating": {
        "average": "4.8",
        "reviews": "34 ratings"
      },
      "location": "France\n·\nPomerol",
      "image": "https://images.vivino.com/thumbs/RPhc1fBwT0uLKoE6_mteFQ_pb_x300.png",
      "id": 407
    },
    {
      "winery": "Domaine Ponsot",
      "wine": "Clos de la Roche Grand Cru Cuvée Vieilles Vignes 2012",
      "rating": {
        "average": "4.8",
        "reviews": "34 ratings"
      },
      "location": "France\n·\nClos de la Roche Grand Cru",
      "image": "https://images.vivino.com/thumbs/2No7HiKORJyqEQk5iM73Fw_pb_x300.png",
      "id": 408
    },
    {
      "winery": "Jacques-Frederic Mugnier",
      "wine": "Musigny Grand Cru 2006",
      "rating": {
        "average": "4.8",
        "reviews": "34 ratings"
      },
      "location": "France\n·\nMusigny Grand Cru",
      "image": "https://images.vivino.com/thumbs/YGMg3nBYROud3n23UfUy1A_pb_x300.png",
      "id": 409
    },
    {
      "winery": "Bryant Family Vineyard",
      "wine": "Bettina Proprietary Red 2013",
      "rating": {
        "average": "4.8",
        "reviews": "34 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/4_c85YhURUabCCDnOQtQWw_pb_x300.png",
      "id": 410
    },
    {
      "winery": "Château Margaux",
      "wine": "Margaux du Château Margaux 1998",
      "rating": {
        "average": "4.8",
        "reviews": "34 ratings"
      },
      "location": "France\n·\nMargaux",
      "image": "https://images.vivino.com/thumbs/gdpqzl7uQoOcjVIqKVggOg_pb_x300.png",
      "id": 411
    },
    {
      "winery": "Domaine Armand Rousseau",
      "wine": "Chambertin Clos de Beze Grand Cru 1998",
      "rating": {
        "average": "4.8",
        "reviews": "34 ratings"
      },
      "location": "France\n·\nChambertin-Clos de Bèze Grand Cru",
      "image": "https://images.vivino.com/thumbs/0sC_c_PjQsKM1kesmg9zDw_pb_x300.png",
      "id": 412
    },
    {
      "winery": "Larkmead",
      "wine": "Solari 2010",
      "rating": {
        "average": "4.8",
        "reviews": "34 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/merw5C-tTOyXJZzfD17bkQ_pb_x300.png",
      "id": 413
    },
    {
      "winery": "Far Niente",
      "wine": "Cave Collection Cabernet Sauvignon 2003",
      "rating": {
        "average": "4.8",
        "reviews": "34 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/SY7Ry282SoSrotuDcSoa-g_pb_x300.png",
      "id": 414
    },
    {
      "winery": "Alban Vineyards",
      "wine": "Lorraine Estate Syrah 2006",
      "rating": {
        "average": "4.8",
        "reviews": "33 ratings"
      },
      "location": "United States\n·\nEdna Valley",
      "image": "https://images.vivino.com/thumbs/uAHcIxbsQDqHPF0dt-anOg_pb_x300.png",
      "id": 415
    },
    {
      "winery": "Aldo Conterno",
      "wine": "Barolo Riserva Granbussia 1989",
      "rating": {
        "average": "4.8",
        "reviews": "33 ratings"
      },
      "location": "Italy\n·\nBarolo",
      "image": "https://images.vivino.com/thumbs/apL96KzUSiuKMHt9b6MIRQ_pb_x300.png",
      "id": 416
    },
    {
      "winery": "Aubert",
      "wine": "Pinot Noir CIX 2011",
      "rating": {
        "average": "4.8",
        "reviews": "33 ratings"
      },
      "location": "United States\n·\nSonoma Coast",
      "image": "https://images.vivino.com/thumbs/2eFazpM1TN2Mgi8OO4QHNA_pb_x300.png",
      "id": 417
    },
    {
      "winery": "Fantesca Estate",
      "wine": "All Great Things Red 2009",
      "rating": {
        "average": "4.8",
        "reviews": "33 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/7jrIBv5ASt2jUCpgVdpZ2A_pb_x300.png",
      "id": 418
    },
    {
      "winery": "Smith-Madrone Winery & Vineyards",
      "wine": "Cook's Flat Reserve 2009",
      "rating": {
        "average": "4.8",
        "reviews": "33 ratings"
      },
      "location": "United States\n·\nSpring Mountain District",
      "image": "https://images.vivino.com/thumbs/86vtNj-sQJCCY4JrBLJGmQ_pb_x300.png",
      "id": 419
    },
    {
      "winery": "Domaine Jacques Prieur",
      "wine": "Musigny Grand Cru 2012",
      "rating": {
        "average": "4.8",
        "reviews": "33 ratings"
      },
      "location": "France\n·\nMusigny Grand Cru",
      "image": "https://images.vivino.com/thumbs/DRxndUY7Sv6-JUlp71s0Ug_pb_x300.png",
      "id": 420
    },
    {
      "winery": "Paul Jaboulet Aîné",
      "wine": "Hermitage La Chapelle Rouge 1961",
      "rating": {
        "average": "4.8",
        "reviews": "33 ratings"
      },
      "location": "France\n·\nHermitage",
      "image": "https://images.vivino.com/thumbs/3-vIalkNSt6Ha5S8lnihJw_pb_x300.png",
      "id": 421
    },
    {
      "winery": "Quintarelli Giuseppe",
      "wine": "Veneto Alzero Cabernet 1994",
      "rating": {
        "average": "4.8",
        "reviews": "33 ratings"
      },
      "location": "Italy\n·\nVeneto",
      "image": "https://images.vivino.com/thumbs/zbMcPfLzSiGJ5XlKoZ1Azg_pb_x300.png",
      "id": 422
    },
    {
      "winery": "Memento Mori",
      "wine": "Cabernet Sauvignon 2015",
      "rating": {
        "average": "4.8",
        "reviews": "33 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/V1dBHwuBQsqUeHuGeGdiYw_pb_x300.png",
      "id": 423
    },
    {
      "winery": "Ordóñez",
      "wine": "Vatan Arena Tinta de Toro 2014",
      "rating": {
        "average": "4.8",
        "reviews": "33 ratings"
      },
      "location": "Spain\n·\nToro",
      "image": "https://images.vivino.com/thumbs/q8-wa4CkTGecavVJ8icCfA_pb_x300.png",
      "id": 424
    },
    {
      "winery": "Penfolds",
      "wine": "Kalimna Block 42 Cabernet Sauvignon 2004",
      "rating": {
        "average": "4.8",
        "reviews": "33 ratings"
      },
      "location": "Australia\n·\nBarossa Valley",
      "image": "https://images.vivino.com/thumbs/SLrZXiAYSBm65_cLaiy5_Q_pb_x300.png",
      "id": 425
    },
    {
      "winery": "Viña Cobos",
      "wine": "Cobos Corte uNico 2012",
      "rating": {
        "average": "4.8",
        "reviews": "33 ratings"
      },
      "location": "Argentina\n·\nPerdriel",
      "image": "https://images.vivino.com/thumbs/HuwMNYvrRNGFL-IlmWWdbA_pb_x300.png",
      "id": 426
    },
    {
      "winery": "",
      "wine": "Nordes 2017",
      "rating": {
        "average": "4.7",
        "reviews": "37 ratings"
      },
      "location": "",
      "image": "https://images.vivino.com/highlights/icon/most_user_rated.svg",
      "id": 427
    },
    {
      "winery": "Lazy Susan Ranch",
      "wine": "Cabernet Sauvignon 2012",
      "rating": {
        "average": "4.8",
        "reviews": "32 ratings"
      },
      "location": "United States\n·\nDiamond Mountain District",
      "image": "https://images.vivino.com/thumbs/tYb0id7JQz6V15fUBl1w3w_pb_x300.png",
      "id": 428
    },
    {
      "winery": "Pierre Usseglio",
      "wine": "Châteauneuf-du-Pape Réserve des Deux Frères 2007",
      "rating": {
        "average": "4.8",
        "reviews": "32 ratings"
      },
      "location": "France\n·\nChâteauneuf-du-Pape",
      "image": "https://images.vivino.com/thumbs/5IC_3rTpS0S3Kl6diyISWQ_pb_x300.png",
      "id": 429
    },
    {
      "winery": "Colgin",
      "wine": "IX Estate Syrah 2010",
      "rating": {
        "average": "4.8",
        "reviews": "32 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/9bny9VHLSeuuzmPSpMz2Ow_pb_x300.png",
      "id": 430
    },
    {
      "winery": "Pulido-Walker",
      "wine": "Panek Vineyard Cabernet Sauvignon 2015",
      "rating": {
        "average": "4.8",
        "reviews": "32 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/BeV2BOMoQC2qVPvKuB78fg_pb_x300.png",
      "id": 431
    },
    {
      "winery": "Reynvaan",
      "wine": "Stonessence Estate Syrah 2010",
      "rating": {
        "average": "4.8",
        "reviews": "32 ratings"
      },
      "location": "United States\n·\nWalla Walla Valley",
      "image": "https://images.vivino.com/thumbs/KolEMkckTWu-vYDfDAXaKw_pb_x300.png",
      "id": 432
    },
    {
      "winery": "Château Haut-Brion",
      "wine": "Pessac-Léognan (Premier Grand Cru Classé) 1952",
      "rating": {
        "average": "4.8",
        "reviews": "31 ratings"
      },
      "location": "France\n·\nPessac-Léognan",
      "image": "https://images.vivino.com/thumbs/ntGyei3vSEGl5Bz5-wI-TQ_pb_x300.png",
      "id": 433
    },
    {
      "winery": "The Debate",
      "wine": "Beckstoffer To Kalon Vineyard Cabernet Sauvignon 2012",
      "rating": {
        "average": "4.8",
        "reviews": "31 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/FpetmocOSuGVSDlOdGRWwQ_pb_x300.png",
      "id": 434
    },
    {
      "winery": "E. Guigal",
      "wine": "Côte-Rôtie La Landonne 1985",
      "rating": {
        "average": "4.8",
        "reviews": "31 ratings"
      },
      "location": "France\n·\nCôte-Rôtie",
      "image": "https://images.vivino.com/thumbs/u4ylBcQmSGCaaEBN_doYsQ_pb_x300.png",
      "id": 435
    },
    {
      "winery": "Del Dotto",
      "wine": "The Beast Cabernet Sauvignon 2016",
      "rating": {
        "average": "4.8",
        "reviews": "31 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/easjTPIcS-mCQ99XoYOMgQ_pb_x300.png",
      "id": 436
    },
    {
      "winery": "Château la Négly",
      "wine": "La Porte du Ciel Languedoc La Clape 2008",
      "rating": {
        "average": "4.8",
        "reviews": "31 ratings"
      },
      "location": "France\n·\nLa Clape",
      "image": "https://images.vivino.com/thumbs/FOElyk6sSY6_RFFNM-XB2A_pb_x300.png",
      "id": 437
    },
    {
      "winery": "Château Ducru-Beaucaillou",
      "wine": "Saint-Julien (Grand Cru Classé) 1959",
      "rating": {
        "average": "4.8",
        "reviews": "31 ratings"
      },
      "location": "France\n·\nSaint-Julien",
      "image": "https://images.vivino.com/thumbs/HqFSCd0qS8avvBF6R9v56w_pb_x300.png",
      "id": 438
    },
    {
      "winery": "Cliff Lede",
      "wine": "Songbook Cabernet Sauvignon 2013",
      "rating": {
        "average": "4.8",
        "reviews": "30 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/fkRNRyqNSY6et6yVvdHh8g_pb_x300.png",
      "id": 439
    },
    {
      "winery": "Marqués de Murrieta",
      "wine": "Reserva Rioja (Finca Ygay) 1988",
      "rating": {
        "average": "4.8",
        "reviews": "30 ratings"
      },
      "location": "Spain\n·\nRioja",
      "image": "https://images.vivino.com/thumbs/dHMyNYCFQ82jPhgGiQkyow_pb_x300.png",
      "id": 440
    },
    {
      "winery": "Sloan",
      "wine": "Proprietary Red 2002",
      "rating": {
        "average": "4.8",
        "reviews": "30 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/GT_l7XICQfmh7KIHymdG0A_pb_x300.png",
      "id": 441
    },
    {
      "winery": "Chimney Rock",
      "wine": "Elevage 2000",
      "rating": {
        "average": "4.8",
        "reviews": "30 ratings"
      },
      "location": "United States\n·\nStags Leap District",
      "image": "https://images.vivino.com/thumbs/NlbQmg7IRIya0f46mh0WzQ_pb_x300.png",
      "id": 442
    },
    {
      "winery": "Santa Rita",
      "wine": "Casa Real Reserva Especial Cabernet Sauvignon 1997",
      "rating": {
        "average": "4.8",
        "reviews": "30 ratings"
      },
      "location": "Chile\n·\nMaipo Valley",
      "image": "https://images.vivino.com/thumbs/EPPWmsqgSWy3HZLkZ9XjXA_pb_x300.png",
      "id": 443
    },
    {
      "winery": "Parador",
      "wine": "Red Blend 2007",
      "rating": {
        "average": "4.8",
        "reviews": "30 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/OYAOmhbmRKC8jWXxBwokAA_pb_x300.png",
      "id": 444
    },
    {
      "winery": "Palmaz",
      "wine": "Gaston Cabernet Sauvignon 2010",
      "rating": {
        "average": "4.8",
        "reviews": "30 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/yF180mpVQMS13Ci9B_cI9A_pb_x300.png",
      "id": 445
    },
    {
      "winery": "Colgin",
      "wine": "IX Estate Red 2015",
      "rating": {
        "average": "4.8",
        "reviews": "30 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/6QbrD6OwQMuOmSCBxo5C2g_pb_x300.png",
      "id": 446
    },
    {
      "winery": "Legado",
      "wine": "Douro Tinto 2014",
      "rating": {
        "average": "4.8",
        "reviews": "30 ratings"
      },
      "location": "Portugal\n·\nDouro",
      "image": "https://images.vivino.com/thumbs/8dH1yISyQ1WgrlltqK_e9Q_pb_x300.png",
      "id": 447
    },
    {
      "winery": "Heitz Cellar",
      "wine": "Trailside Vineyard Cabernet Sauvignon 1999",
      "rating": {
        "average": "4.8",
        "reviews": "30 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/hixqqIskQp6jtJbnDyuclg_pb_x300.png",
      "id": 448
    },
    {
      "winery": "PlumpJack",
      "wine": "Reserve Cabernet Sauvignon 2006",
      "rating": {
        "average": "4.8",
        "reviews": "30 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/sKXbMpCST7G8v9Z4ldlA7w_pb_x300.png",
      "id": 449
    },
    {
      "winery": "Bevan Cellars",
      "wine": "Tench Vineyard Cabernet Sauvignon 2014",
      "rating": {
        "average": "4.8",
        "reviews": "30 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/il8Up6zZRRqVU3TKUcAHsw_pb_x300.png",
      "id": 450
    },
    {
      "winery": "Turnbull",
      "wine": "Fortuna Vineyard Cabernet Sauvignon 2010",
      "rating": {
        "average": "4.8",
        "reviews": "29 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/txP_n7RGRKK9UDhylwbbWw_pb_x300.png",
      "id": 451
    },
    {
      "winery": "Celani Family Vineyards",
      "wine": "Ardore Cabernet Sauvignon 2012",
      "rating": {
        "average": "4.8",
        "reviews": "29 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/mr9v9f-_SvyVBV2FXStVNQ_pb_x300.png",
      "id": 452
    },
    {
      "winery": "Pulido-Walker",
      "wine": "Melanson Vineyard Cabernet Sauvignon 2012",
      "rating": {
        "average": "4.8",
        "reviews": "29 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/oqxvpfacQZyWiR1uEngY5A_pb_x300.png",
      "id": 453
    },
    {
      "winery": "Château Margaux",
      "wine": "Margaux du Château Margaux 1990",
      "rating": {
        "average": "4.8",
        "reviews": "29 ratings"
      },
      "location": "France\n·\nMargaux",
      "image": "https://images.vivino.com/thumbs/gdpqzl7uQoOcjVIqKVggOg_pb_x300.png",
      "id": 454
    },
    {
      "winery": "Domaine Avéla",
      "wine": "Théodore 2010",
      "rating": {
        "average": "4.8",
        "reviews": "29 ratings"
      },
      "location": "France\n·\nHérault",
      "image": "https://images.vivino.com/thumbs/oSJP5hCXSGSsO6UaY4LgEA_pb_x300.png",
      "id": 455
    },
    {
      "winery": "Domaine du Comte Liger-Belair",
      "wine": "Vosne-Romanée Clos du Chateau Monopole 2003",
      "rating": {
        "average": "4.8",
        "reviews": "29 ratings"
      },
      "location": "France\n·\nVosne-Romanée",
      "image": "https://images.vivino.com/thumbs/S-EXa8DfRUW1K2LzIflgiw_pb_x300.png",
      "id": 456
    },
    {
      "winery": "Vallone",
      "wine": "Graticciaia 2006",
      "rating": {
        "average": "4.8",
        "reviews": "29 ratings"
      },
      "location": "Italy\n·\nSalento",
      "image": "https://images.vivino.com/thumbs/zI-t5U5nSJeT-LZ1Wud_zg_pb_x300.png",
      "id": 457
    },
    {
      "winery": "Camigliano",
      "wine": "Brunello di Montalcino 1998",
      "rating": {
        "average": "4.8",
        "reviews": "29 ratings"
      },
      "location": "Italy\n·\nBrunello di Montalcino",
      "image": "https://images.vivino.com/thumbs/6pUfHZX3SXeb9_FG4e1Ktw_pb_x300.png",
      "id": 458
    },
    {
      "winery": "Brion",
      "wine": "Cabernet Sauvignon 2011",
      "rating": {
        "average": "4.8",
        "reviews": "29 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/RuufQM3QS8aHbvoUWETFqQ_pb_x300.png",
      "id": 459
    },
    {
      "winery": "Varvaglione",
      "wine": "Cosimo Varvaglione Collezione Privata Primitivo di Manduria 2002",
      "rating": {
        "average": "4.8",
        "reviews": "30 ratings"
      },
      "location": "Italy\n·\nPrimitivo di Manduria",
      "image": "https://images.vivino.com/thumbs/yftCiWh2SgOIn_mvKZaARg_pb_x300.png",
      "id": 460
    },
    {
      "winery": "Maybach Family Vineyards",
      "wine": "Materium Cabernet Sauvignon 2008",
      "rating": {
        "average": "4.8",
        "reviews": "29 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/vqT06EsOQOOXR_9jqByJEA_pb_x300.png",
      "id": 461
    },
    {
      "winery": "Quintarelli Giuseppe",
      "wine": "Veneto Alzero Cabernet 1990",
      "rating": {
        "average": "4.8",
        "reviews": "28 ratings"
      },
      "location": "Italy\n·\nVeneto",
      "image": "https://images.vivino.com/thumbs/zbMcPfLzSiGJ5XlKoZ1Azg_pb_x300.png",
      "id": 462
    },
    {
      "winery": "Seaver Vineyards",
      "wine": "GTS Cabernet Sauvignon 2014",
      "rating": {
        "average": "4.8",
        "reviews": "28 ratings"
      },
      "location": "United States\n·\nDiamond Mountain District",
      "image": "https://images.vivino.com/thumbs/gVrX2HuIThGU4cHK5gyc3w_pb_x300.png",
      "id": 463
    },
    {
      "winery": "Paul Hobbs",
      "wine": "Beckstoffer Dr. Crane Vineyard Cabernet Sauvignon 2009",
      "rating": {
        "average": "4.8",
        "reviews": "28 ratings"
      },
      "location": "United States\n·\nSt. Helena",
      "image": "https://images.vivino.com/thumbs/qmeRPQC1QCaTbAZ2n85ELQ_pb_x300.png",
      "id": 464
    },
    {
      "winery": "Addax",
      "wine": "Cabernet Sauvignon 2012",
      "rating": {
        "average": "4.8",
        "reviews": "28 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/Z7f5FclURbaF4syyto0wlQ_pb_x300.png",
      "id": 465
    },
    {
      "winery": "Domaine Armand Rousseau",
      "wine": "Chambertin Clos de Beze Grand Cru 2010",
      "rating": {
        "average": "4.8",
        "reviews": "28 ratings"
      },
      "location": "France\n·\nChambertin-Clos de Bèze Grand Cru",
      "image": "https://images.vivino.com/thumbs/0sC_c_PjQsKM1kesmg9zDw_pb_x300.png",
      "id": 466
    },
    {
      "winery": "Leonetti",
      "wine": "Reserve 2015",
      "rating": {
        "average": "4.8",
        "reviews": "28 ratings"
      },
      "location": "United States\n·\nWalla Walla Valley",
      "image": "https://images.vivino.com/thumbs/mRttqUtyS1-hIhA_f8yQAg_pb_x300.png",
      "id": 467
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Corton Grand Cru 2015",
      "rating": {
        "average": "4.8",
        "reviews": "28 ratings"
      },
      "location": "France\n·\nCorton Grand Cru",
      "image": "https://images.vivino.com/thumbs/LripAwPsRYe3v8YsQnsIyA_pb_x300.png",
      "id": 468
    },
    {
      "winery": "Semper",
      "wine": "Ellenbach Vineyard Pinot Noir N.V.",
      "rating": {
        "average": "4.8",
        "reviews": "29 ratings"
      },
      "location": "United States\n·\nSonoma Coast",
      "image": "https://thumbs.vivino.com/avatars/L2bl_e5GTOGKqaTQsnmogQ_50x50.jpg",
      "id": 469
    },
    {
      "winery": "La Jota",
      "wine": "Merlot W.S Keyes Vineyard 2013",
      "rating": {
        "average": "4.8",
        "reviews": "28 ratings"
      },
      "location": "United States\n·\nHowell Mountain",
      "image": "https://images.vivino.com/thumbs/atzaaGXGROGdwTulqtPMWA_pb_x300.png",
      "id": 470
    },
    {
      "winery": "Abreu",
      "wine": "Madrona Ranch Cabernet Sauvignon 2005",
      "rating": {
        "average": "4.8",
        "reviews": "28 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/L27lLpSLSQmHB9x5xFBpmQ_pb_x300.png",
      "id": 471
    },
    {
      "winery": "Three Sticks",
      "wine": "Pinot Noir 2016",
      "rating": {
        "average": "4.8",
        "reviews": "28 ratings"
      },
      "location": "United States\n·\nRussian River Valley",
      "image": "https://images.vivino.com/thumbs/ENvYlKuCSVOPRLZUu-SOKg_pb_x300.png",
      "id": 472
    },
    {
      "winery": "Del Dotto",
      "wine": "The Beast Cabernet Sauvignon 2011",
      "rating": {
        "average": "4.8",
        "reviews": "28 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/easjTPIcS-mCQ99XoYOMgQ_pb_x300.png",
      "id": 473
    },
    {
      "winery": "Quinta do Crasto",
      "wine": "Vinha da Ponte 2015",
      "rating": {
        "average": "4.8",
        "reviews": "28 ratings"
      },
      "location": "Portugal\n·\nDouro",
      "image": "https://images.vivino.com/thumbs/nn5jwAXtS6ikyC6OKGSqkw_pb_x300.png",
      "id": 474
    },
    {
      "winery": "Cliff Lede",
      "wine": "Beckstoffer To Kalon Vineyard Cabernet Sauvignon 2013",
      "rating": {
        "average": "4.8",
        "reviews": "28 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/B-Ov6VPWS6mcczRFNNp98A_pb_x300.png",
      "id": 475
    },
    {
      "winery": "Domaine du Comte Liger-Belair",
      "wine": "La Romanee Grand Cru Monopole 2009",
      "rating": {
        "average": "4.8",
        "reviews": "28 ratings"
      },
      "location": "France\n·\nLa Romanée Grand Cru",
      "image": "https://images.vivino.com/thumbs/RK2_vOT_ToCACNOhb_N0ng_pb_x300.png",
      "id": 476
    },
    {
      "winery": "Álvaro Palacios",
      "wine": "L'Ermita Velles Vinyes Priorat 2008",
      "rating": {
        "average": "4.8",
        "reviews": "28 ratings"
      },
      "location": "Spain\n·\nPriorat",
      "image": "https://images.vivino.com/thumbs/aSQz1n49SM6JCS1F9aDOHQ_pb_x300.png",
      "id": 477
    },
    {
      "winery": "Lasseter",
      "wine": "Chemin de Fer 2011",
      "rating": {
        "average": "4.8",
        "reviews": "27 ratings"
      },
      "location": "United States\n·\nSonoma Valley",
      "image": "https://images.vivino.com/thumbs/5L16ZtkyRnSMym3ZZaHfkg_pb_x300.png",
      "id": 478
    },
    {
      "winery": "Pride Mountain Vineyards",
      "wine": "Reserve Cabernet Sauvignon 2002",
      "rating": {
        "average": "4.8",
        "reviews": "27 ratings"
      },
      "location": "United States\n·\nCalifornia",
      "image": "https://images.vivino.com/thumbs/JJky4wZ7QqCc2IxwSMPVMg_pb_x300.png",
      "id": 479
    },
    {
      "winery": "Realm",
      "wine": "Cabernet Sauvignon Beckstoffer To Kalon Vineyard 2013",
      "rating": {
        "average": "4.8",
        "reviews": "27 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/pMCzMNrSTrOSjtGEb9wtug_pb_x300.png",
      "id": 480
    },
    {
      "winery": "Elio Altare",
      "wine": "Barolo 1990",
      "rating": {
        "average": "4.8",
        "reviews": "27 ratings"
      },
      "location": "Italy\n·\nBarolo",
      "image": "https://images.vivino.com/thumbs/0JnIZJ3_Rnyl2HXXyiuerg_pb_x300.png",
      "id": 481
    },
    {
      "winery": "Deep Creek - Hainle Vineyards",
      "wine": "Estate Reserve Pinot Noir 2007",
      "rating": {
        "average": "4.8",
        "reviews": "27 ratings"
      },
      "location": "Canada\n·\nOkanagan Valley",
      "image": "https://images.vivino.com/avatars/default_user_50x50.png",
      "id": 482
    },
    {
      "winery": "",
      "wine": "Onda Napa Valley Cabernet Sauvignon 2010",
      "rating": {
        "average": "4.8",
        "reviews": "27 ratings"
      },
      "location": "",
      "image": "https://thumbs.vivino.com/avatars/1730115_599066_big_app_50x50.jpg",
      "id": 483
    },
    {
      "winery": "Hourglass",
      "wine": "Blueline Estate Cabernet Franc 2014",
      "rating": {
        "average": "4.8",
        "reviews": "27 ratings"
      },
      "location": "United States\n·\nCalistoga",
      "image": "https://images.vivino.com/thumbs/LrhoS6eaRLCL0aXgQ41e9w_pb_x300.png",
      "id": 484
    },
    {
      "winery": "Bryant Family Vineyard",
      "wine": "Cabernet Sauvignon Proprietor Grown 2014",
      "rating": {
        "average": "4.8",
        "reviews": "27 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/JL0BHEkRTxqJUuW9QfABtA_pb_x300.png",
      "id": 485
    },
    {
      "winery": "Tusk",
      "wine": "Cabernet Sauvignon 2009",
      "rating": {
        "average": "4.8",
        "reviews": "27 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/_dyrZSN7Sq6xyIrWTS2slA_pb_x300.png",
      "id": 486
    },
    {
      "winery": "Realm",
      "wine": "Farella Vineyard 2016",
      "rating": {
        "average": "4.8",
        "reviews": "27 ratings"
      },
      "location": "United States\n·\nCoombsville",
      "image": "https://images.vivino.com/thumbs/KUOoBjWzQXamRlh4sDLK7w_pb_x300.png",
      "id": 487
    },
    {
      "winery": "Fairchild Estate",
      "wine": "Sigaro Cabernet Sauvignon 2008",
      "rating": {
        "average": "4.8",
        "reviews": "27 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/KHRVGV5kQU-0yNlLU3hOHQ_pb_x300.png",
      "id": 488
    },
    {
      "winery": "Leonetti",
      "wine": "Select Red 2012",
      "rating": {
        "average": "4.8",
        "reviews": "26 ratings"
      },
      "location": "United States\n·\nWalla Walla Valley",
      "image": "https://images.vivino.com/thumbs/p9oaqMFbQkymcgjje8u58Q_pb_x300.png",
      "id": 489
    },
    {
      "winery": "Trefethen",
      "wine": "HāLo 2004",
      "rating": {
        "average": "4.8",
        "reviews": "26 ratings"
      },
      "location": "United States\n·\nOak Knoll District",
      "image": "https://images.vivino.com/thumbs/_tnDA8NVRM6iCjHNwwg4iQ_pb_x300.png",
      "id": 490
    },
    {
      "winery": "Hunnicutt",
      "wine": "Brinkman Block Cabernet Sauvignon 2015",
      "rating": {
        "average": "4.8",
        "reviews": "26 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/jCASOVd4Q7eAAgaKDTUC-w_pb_x300.png",
      "id": 491
    },
    {
      "winery": "Ovid",
      "wine": "Experiment 2014",
      "rating": {
        "average": "4.8",
        "reviews": "26 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/GyQqxxL1QHeaFOz7R_i8BA_pb_x300.png",
      "id": 492
    },
    {
      "winery": "Colgin",
      "wine": "Cariad 2014",
      "rating": {
        "average": "4.8",
        "reviews": "26 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/vuPcWA0rRpGU9QrcMA--mw_pb_x300.png",
      "id": 493
    },
    {
      "winery": "Seaver Vineyards",
      "wine": "GTS Cabernet Sauvignon 2012",
      "rating": {
        "average": "4.8",
        "reviews": "26 ratings"
      },
      "location": "United States\n·\nDiamond Mountain District",
      "image": "https://images.vivino.com/thumbs/gVrX2HuIThGU4cHK5gyc3w_pb_x300.png",
      "id": 494
    },
    {
      "winery": "Domaine Anne Gros",
      "wine": "Richebourg Grand Cru 2009",
      "rating": {
        "average": "4.8",
        "reviews": "26 ratings"
      },
      "location": "France\n·\nRichebourg Grand Cru",
      "image": "https://images.vivino.com/thumbs/ifNqsRdrR2u-_5ayGUMG2g_pb_x300.png",
      "id": 495
    },
    {
      "winery": "Hentley Farm",
      "wine": "The Beast Shiraz 2007",
      "rating": {
        "average": "4.8",
        "reviews": "26 ratings"
      },
      "location": "Australia\n·\nBarossa Valley",
      "image": "https://images.vivino.com/thumbs/dc4jgB7HTyqQ0VsrSrnONQ_pb_x300.png",
      "id": 496
    },
    {
      "winery": "Domaine du Comte Liger-Belair",
      "wine": "La Romanee Grand Cru Monopole 2008",
      "rating": {
        "average": "4.8",
        "reviews": "26 ratings"
      },
      "location": "France\n·\nLa Romanée Grand Cru",
      "image": "https://images.vivino.com/thumbs/RK2_vOT_ToCACNOhb_N0ng_pb_x300.png",
      "id": 497
    },
    {
      "winery": "Louis Jadot",
      "wine": "Grands-Échézeaux Grand Cru 2011",
      "rating": {
        "average": "4.8",
        "reviews": "26 ratings"
      },
      "location": "France\n·\nGrands-Échezeaux Grand Cru",
      "image": "https://images.vivino.com/thumbs/-jTamfo4SQ6n3ODwrwkUKg_pb_x300.png",
      "id": 498
    },
    {
      "winery": "QTR",
      "wine": "Cabernet Sauvignon 2012",
      "rating": {
        "average": "4.8",
        "reviews": "26 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/jRdE_SC9SXyjZlmZd9nRsQ_pb_x300.png",
      "id": 499
    },
    {
      "winery": "Del Dotto",
      "wine": "The David Howell Mountain 2015",
      "rating": {
        "average": "4.8",
        "reviews": "26 ratings"
      },
      "location": "United States\n·\nHowell Mountain",
      "image": "https://images.vivino.com/thumbs/1J18RsbZQC2bflWilXuhMA_pb_x300.png",
      "id": 500
    },
    {
      "winery": "Cantine San Marzano",
      "wine": "60 Sessantanni Old Vines Primitivo di Manduria 1973",
      "rating": {
        "average": "4.8",
        "reviews": "27 ratings"
      },
      "location": "Italy\n·\nPrimitivo di Manduria",
      "image": "https://images.vivino.com/thumbs/uiYaQ6h2TNyekkq3sdi13A_pb_x300.png",
      "id": 501
    },
    {
      "winery": "Bruno Rocca",
      "wine": "Barbaresco Rabajà 1998",
      "rating": {
        "average": "4.8",
        "reviews": "26 ratings"
      },
      "location": "Italy\n·\nBarbaresco",
      "image": "https://images.vivino.com/thumbs/RjbE1wg8QgKgGU8zmdCQdA_pb_x300.png",
      "id": 502
    },
    {
      "winery": "Outpost",
      "wine": "True Vineyard Cabernet Sauvignon 2013",
      "rating": {
        "average": "4.8",
        "reviews": "26 ratings"
      },
      "location": "United States\n·\nHowell Mountain",
      "image": "https://images.vivino.com/thumbs/T8_v4hizTR-YX2nggkI52w_pb_x300.png",
      "id": 503
    },
    {
      "winery": "Hundred Acre",
      "wine": "Wraith Cabernet Sauvignon 2014",
      "rating": {
        "average": "4.8",
        "reviews": "26 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/PBhGMcRNQ7aVnVNr7VgnWA_pb_x300.png",
      "id": 504
    },
    {
      "winery": "Finca Moncloa",
      "wine": "Tintilla de Rota 2016",
      "rating": {
        "average": "4.8",
        "reviews": "28 ratings"
      },
      "location": "Spain\n·\nCádiz",
      "image": "https://images.vivino.com/thumbs/57yG5N1BSdOlo_8qNfxuAA_pb_x300.png",
      "id": 505
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "La Tâche Grand Cru 1973",
      "rating": {
        "average": "4.8",
        "reviews": "26 ratings"
      },
      "location": "France\n·\nLa Tâche Grand Cru",
      "image": "https://images.vivino.com/thumbs/rUPGZo11SwW6haQta4COqQ_pb_x300.png",
      "id": 506
    },
    {
      "winery": "Realm",
      "wine": "The Absurd 2014",
      "rating": {
        "average": "4.8",
        "reviews": "26 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/qFjvrLYhQV6dPWQG_ZjkZg_pb_x300.png",
      "id": 507
    },
    {
      "winery": "Del Dotto",
      "wine": "The Beast Cabernet Sauvignon 2010",
      "rating": {
        "average": "4.8",
        "reviews": "26 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/easjTPIcS-mCQ99XoYOMgQ_pb_x300.png",
      "id": 508
    },
    {
      "winery": "Staglin",
      "wine": "Estate Cabernet Sauvignon 1998",
      "rating": {
        "average": "4.8",
        "reviews": "26 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/BSTwXsV_Ts-btmOg2SKjyA_pb_x300.png",
      "id": 509
    },
    {
      "winery": "Quinta do Zambujeiro",
      "wine": "Zambujeiro 2015",
      "rating": {
        "average": "4.8",
        "reviews": "26 ratings"
      },
      "location": "Portugal\n·\nBorba",
      "image": "https://images.vivino.com/thumbs/sr3GN1vVQtGGZJsolkxq7w_pb_x300.png",
      "id": 510
    },
    {
      "winery": "Lail Vineyards",
      "wine": "J. Daniel Cuvée Cabernet Sauvignon 2015",
      "rating": {
        "average": "4.8",
        "reviews": "26 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/RycC58UjQCqQ5fo1JIruIA_pb_x300.png",
      "id": 511
    },
    {
      "winery": "Trinitas",
      "wine": "Family Collection Amarone della Valpolicella 2007",
      "rating": {
        "average": "4.8",
        "reviews": "25 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella",
      "image": "https://images.vivino.com/thumbs/hWDKjQIkT6S029fJaMlj6w_pb_x300.png",
      "id": 512
    },
    {
      "winery": "Lokoya",
      "wine": "Mount Veeder Cabernet Sauvignon 2003",
      "rating": {
        "average": "4.8",
        "reviews": "25 ratings"
      },
      "location": "United States\n·\nMount Veeder",
      "image": "https://images.vivino.com/thumbs/41jCEa5TSouKrLK1mxZVLg_pb_x300.png",
      "id": 513
    },
    {
      "winery": "Mirto",
      "wine": "Dulcore 2017",
      "rating": {
        "average": "4.8",
        "reviews": "26 ratings"
      },
      "location": "Italy\n·\nSardegna",
      "image": "https://images.vivino.com/highlights/icon/most_user_rated.svg",
      "id": 514
    },
    {
      "winery": "Achaval-Ferrer",
      "wine": "Finca Bella Vista Malbec 2003",
      "rating": {
        "average": "4.8",
        "reviews": "25 ratings"
      },
      "location": "Argentina\n·\nPerdriel",
      "image": "https://images.vivino.com/thumbs/yVwf7mPvTfOk9gcKzV2YoQ_pb_x300.png",
      "id": 515
    },
    {
      "winery": "Bevan Cellars",
      "wine": "Showket Vineyard Cabernet Sauvignon 2007",
      "rating": {
        "average": "4.8",
        "reviews": "25 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/JywGOvs7Sfmmi4IrgnK-MA_pb_x300.png",
      "id": 516
    },
    {
      "winery": "Saxum",
      "wine": "James Berry Vineyard 2016",
      "rating": {
        "average": "4.8",
        "reviews": "25 ratings"
      },
      "location": "United States\n·\nPaso Robles",
      "image": "https://images.vivino.com/thumbs/Uqm4aOvFS3SCU57dWd5Kyg_pb_x300.png",
      "id": 517
    },
    {
      "winery": "Abreu",
      "wine": "Madrona Ranch Cabernet Sauvignon 2012",
      "rating": {
        "average": "4.8",
        "reviews": "25 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/L27lLpSLSQmHB9x5xFBpmQ_pb_x300.png",
      "id": 518
    },
    {
      "winery": "Domaine Christophe Pichon",
      "wine": "La Comtesse en Côte Blonde 2011",
      "rating": {
        "average": "4.8",
        "reviews": "25 ratings"
      },
      "location": "France\n·\nCôte-Rôtie",
      "image": "https://images.vivino.com/thumbs/j3IG7ciVQ8u4hLDIk7Ruag_pb_x300.png",
      "id": 519
    },
    {
      "winery": "Bond",
      "wine": "Vecina 2014",
      "rating": {
        "average": "4.8",
        "reviews": "25 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/bs-ZiOBVTm6R4XB5sER1yA_pb_x300.png",
      "id": 520
    },
    {
      "winery": "Krupp Brothers",
      "wine": "Veraison Cabernet Sauvignon (Stagecoach Vineyard) 2015",
      "rating": {
        "average": "4.8",
        "reviews": "25 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/MNtL2gz9QGC8POp97X2RYQ_pb_x300.png",
      "id": 521
    },
    {
      "winery": "Domaine G. Roumier",
      "wine": "Chambolle-Musigny 1er Cru 'Amoureuses' 2001",
      "rating": {
        "average": "4.8",
        "reviews": "25 ratings"
      },
      "location": "France\n·\nChambolle-Musigny 1er Cru 'Les Amoureuses'",
      "image": "https://images.vivino.com/thumbs/YjUQVfR9S2So-xNz8cNKlQ_pb_x300.png",
      "id": 522
    },
    {
      "winery": "Marchiopolo",
      "wine": "Amarone della Valpolicella Classico 2004",
      "rating": {
        "average": "4.8",
        "reviews": "25 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella Classico",
      "image": "https://images.vivino.com/thumbs/uw9zRbITRpmbuhA2VbGgZw_pb_x300.png",
      "id": 523
    },
    {
      "winery": "Château la Négly",
      "wine": "La Porte du Ciel Languedoc La Clape 2007",
      "rating": {
        "average": "4.8",
        "reviews": "25 ratings"
      },
      "location": "France\n·\nLa Clape",
      "image": "https://images.vivino.com/thumbs/FOElyk6sSY6_RFFNM-XB2A_pb_x300.png",
      "id": 524
    },
    {
      "winery": "Donum",
      "wine": "Anderson Valley Estate Pinot Noir 2011",
      "rating": {
        "average": "4.8",
        "reviews": "25 ratings"
      },
      "location": "United States\n·\nAnderson Valley",
      "image": "https://images.vivino.com/thumbs/FyAq0fc2QXWZd4k8NGddqg_pb_x300.png",
      "id": 525
    },
    {
      "winery": "Realm",
      "wine": "Farella Vineyard 2013",
      "rating": {
        "average": "4.8",
        "reviews": "25 ratings"
      },
      "location": "United States\n·\nCoombsville",
      "image": "https://images.vivino.com/thumbs/KUOoBjWzQXamRlh4sDLK7w_pb_x300.png",
      "id": 526
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "28050 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/SCnpJk_ySUe6XS3U-lFOwQ_pb_x300.png",
      "id": 527
    },
    {
      "winery": "Pétrus",
      "wine": "Pomerol N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "21459 ratings"
      },
      "location": "France\n·\nPomerol",
      "image": "https://images.vivino.com/thumbs/RPhc1fBwT0uLKoE6_mteFQ_pb_x300.png",
      "id": 528
    },
    {
      "winery": "Cartuxa",
      "wine": "Pêra-Manca Tinto N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "18690 ratings"
      },
      "location": "Portugal\n·\nAlentejo",
      "image": "https://images.vivino.com/thumbs/L33jsYUuTMWTMy3KoqQyXg_pb_x300.png",
      "id": 529
    },
    {
      "winery": "Casa Ferreirinha",
      "wine": "Barca Velha Douro N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "11147 ratings"
      },
      "location": "Portugal\n·\nDouro",
      "image": "https://images.vivino.com/thumbs/ooQmRipERdeq4HM4KGxlEA_pb_x300.png",
      "id": 530
    },
    {
      "winery": "Masseto",
      "wine": "Toscana N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "9634 ratings"
      },
      "location": "Italy\n·\nToscana",
      "image": "https://images.vivino.com/thumbs/GPvEr_IUSKS1CDhhsY1ySg_pb_x300.png",
      "id": 531
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico Reserva Especial Edición N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "9527 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/k_UetHZ3Q2SMqUsliefGYQ_pb_x300.png",
      "id": 532
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Romanée-Conti Grand Cru N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "5954 ratings"
      },
      "location": "France\n·\nRomanée-Conti Grand Cru",
      "image": "https://images.vivino.com/thumbs/SzZEjTsMRlWz3yDyCISfnA_pb_x300.png",
      "id": 533
    },
    {
      "winery": "Tenuta San Guido",
      "wine": "Sassicaia 2009",
      "rating": {
        "average": "4.7",
        "reviews": "4938 ratings"
      },
      "location": "Italy\n·\nBolgheri Sassicaia",
      "image": "https://images.vivino.com/thumbs/L2ZTpFlDR2yMHe1-GA90Jw_pb_x300.png",
      "id": 534
    },
    {
      "winery": "Dal Forno Romano",
      "wine": "Amarone della Valpolicella Monte Lodoletta N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "4778 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella",
      "image": "https://images.vivino.com/thumbs/WpxjVqZnTkeq2f68wJoJSg_pb_x300.png",
      "id": 535
    },
    {
      "winery": "Catena Zapata",
      "wine": "Estiba Reservada N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "4511 ratings"
      },
      "location": "Argentina\n·\nAgrelo",
      "image": "https://images.vivino.com/thumbs/Yt464jw0QS-ugF7ZQEbE2Q_pb_x300.png",
      "id": 536
    },
    {
      "winery": "Caymus",
      "wine": "Special Selection Cabernet Sauvignon 2014",
      "rating": {
        "average": "4.7",
        "reviews": "4165 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/wQrYDrRqRCWJ8VwSBm8pfQ_pb_x300.png",
      "id": 537
    },
    {
      "winery": "Harlan Estate",
      "wine": "Harlan Estate Red N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "4151 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/dk-tNdajRPqx2M7XtuE3dg_pb_x300.png",
      "id": 538
    },
    {
      "winery": "Soldera",
      "wine": "Brunello di Montalcino Riserva N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "3717 ratings"
      },
      "location": "Italy\n·\nBrunello di Montalcino",
      "image": "https://images.vivino.com/thumbs/l_eXmV1KTdGzz3ky_Qey3A_pb_x300.png",
      "id": 539
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Grands-Échezeaux Grand Cru N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "3656 ratings"
      },
      "location": "France\n·\nGrands-Échezeaux Grand Cru",
      "image": "https://images.vivino.com/thumbs/_JpKqg8USl6fLDvV6uZ3uA_pb_x300.png",
      "id": 540
    },
    {
      "winery": "Caymus",
      "wine": "Special Selection Cabernet Sauvignon 2013",
      "rating": {
        "average": "4.7",
        "reviews": "3560 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/wQrYDrRqRCWJ8VwSBm8pfQ_pb_x300.png",
      "id": 541
    },
    {
      "winery": "Almaviva",
      "wine": "Almaviva 2010",
      "rating": {
        "average": "4.7",
        "reviews": "3464 ratings"
      },
      "location": "Chile\n·\nPuente Alto",
      "image": "https://images.vivino.com/thumbs/VACKmZQ1RvemXT9ViEPFnQ_pb_x300.png",
      "id": 542
    },
    {
      "winery": "Domaine de La Romanée-Conti",
      "wine": "Richebourg Grand Cru N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "3391 ratings"
      },
      "location": "France\n·\nRichebourg Grand Cru",
      "image": "https://images.vivino.com/thumbs/cohA0QIVTGmupg938tBbbQ_pb_x300.png",
      "id": 543
    },
    {
      "winery": "Cartuxa",
      "wine": "Pêra-Manca Tinto 2011",
      "rating": {
        "average": "4.7",
        "reviews": "3303 ratings"
      },
      "location": "Portugal\n·\nAlentejo",
      "image": "https://images.vivino.com/thumbs/L33jsYUuTMWTMy3KoqQyXg_pb_x300.png",
      "id": 544
    },
    {
      "winery": "Cartuxa",
      "wine": "Pêra-Manca Tinto 2008",
      "rating": {
        "average": "4.7",
        "reviews": "3144 ratings"
      },
      "location": "Portugal\n·\nAlentejo",
      "image": "https://images.vivino.com/thumbs/L33jsYUuTMWTMy3KoqQyXg_pb_x300.png",
      "id": 545
    },
    {
      "winery": "Almaviva",
      "wine": "Almaviva 2009",
      "rating": {
        "average": "4.7",
        "reviews": "3132 ratings"
      },
      "location": "Chile\n·\nPuente Alto",
      "image": "https://images.vivino.com/thumbs/VACKmZQ1RvemXT9ViEPFnQ_pb_x300.png",
      "id": 546
    },
    {
      "winery": "Cartuxa",
      "wine": "Pêra-Manca Tinto 2010",
      "rating": {
        "average": "4.7",
        "reviews": "2646 ratings"
      },
      "location": "Portugal\n·\nAlentejo",
      "image": "https://images.vivino.com/thumbs/L33jsYUuTMWTMy3KoqQyXg_pb_x300.png",
      "id": 547
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico 2004",
      "rating": {
        "average": "4.7",
        "reviews": "2596 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/SCnpJk_ySUe6XS3U-lFOwQ_pb_x300.png",
      "id": 548
    },
    {
      "winery": "Viña Cobos",
      "wine": "Cobos Volturno N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "2541 ratings"
      },
      "location": "Argentina\n·\nPerdriel",
      "image": "https://images.vivino.com/thumbs/D1Mf1fYnRnageFjtfLXdFg_pb_x300.png",
      "id": 549
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico 2000",
      "rating": {
        "average": "4.7",
        "reviews": "2476 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/SCnpJk_ySUe6XS3U-lFOwQ_pb_x300.png",
      "id": 550
    },
    {
      "winery": "Almaviva",
      "wine": "Almaviva 2007",
      "rating": {
        "average": "4.7",
        "reviews": "2366 ratings"
      },
      "location": "Chile\n·\nPuente Alto",
      "image": "https://images.vivino.com/thumbs/VACKmZQ1RvemXT9ViEPFnQ_pb_x300.png",
      "id": 551
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico 2007",
      "rating": {
        "average": "4.7",
        "reviews": "2348 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/SCnpJk_ySUe6XS3U-lFOwQ_pb_x300.png",
      "id": 552
    },
    {
      "winery": "Screaming Eagle",
      "wine": "Cabernet Sauvignon N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "2328 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/Z92v0bohTBaVUVPNjiXPuA_pb_x300.png",
      "id": 553
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico 2005",
      "rating": {
        "average": "4.7",
        "reviews": "2186 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/SCnpJk_ySUe6XS3U-lFOwQ_pb_x300.png",
      "id": 554
    },
    {
      "winery": "Quinta do Crasto",
      "wine": "Vinha Maria Teresa N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "2177 ratings"
      },
      "location": "Portugal\n·\nDouro",
      "image": "https://images.vivino.com/thumbs/vvrQeQeuRquB6RzM8U9SGg_pb_x300.png",
      "id": 555
    },
    {
      "winery": "Darioush",
      "wine": "Darius II Cabernet Sauvignon N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "2167 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/U19RXtSdRMmoAesl2CBygA_pb_x300.png",
      "id": 556
    },
    {
      "winery": "Joseph Phelps",
      "wine": "Insignia 2012",
      "rating": {
        "average": "4.7",
        "reviews": "2089 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/NOkljUUMT3i35lDjSgR9MQ_pb_x300.png",
      "id": 557
    },
    {
      "winery": "Opus One",
      "wine": "Opus One 2007",
      "rating": {
        "average": "4.7",
        "reviews": "2088 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/C45ybDUxTnWShRkbSTusNg_pb_x300.png",
      "id": 558
    },
    {
      "winery": "Hundred Acre",
      "wine": "Ark Vineyard Cabernet Sauvignon N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "2054 ratings"
      },
      "location": "United States\n·\nHowell Mountain",
      "image": "https://images.vivino.com/thumbs/TQLu4uY6RuC0bW8QHDeIPw_pb_x300.png",
      "id": 559
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico 2003",
      "rating": {
        "average": "4.7",
        "reviews": "2005 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/SCnpJk_ySUe6XS3U-lFOwQ_pb_x300.png",
      "id": 560
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico 2008",
      "rating": {
        "average": "4.7",
        "reviews": "1924 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/SCnpJk_ySUe6XS3U-lFOwQ_pb_x300.png",
      "id": 561
    },
    {
      "winery": "Casa Ferreirinha",
      "wine": "Reserva Especial Douro 2007",
      "rating": {
        "average": "4.7",
        "reviews": "1867 ratings"
      },
      "location": "Portugal\n·\nDouro",
      "image": "https://images.vivino.com/thumbs/wFQUeZcsSX6MYWmLEh8AKg_pb_x300.png",
      "id": 562
    },
    {
      "winery": "Château Mouton Rothschild",
      "wine": "Pauillac (Premier Grand Cru Classé) 1986",
      "rating": {
        "average": "4.7",
        "reviews": "1703 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/DNeQQKoHQCyq7BakiBm_zQ_pb_x300.png",
      "id": 563
    },
    {
      "winery": "Ornellaia",
      "wine": "Bolgheri Superiore 2007",
      "rating": {
        "average": "4.7",
        "reviews": "1697 ratings"
      },
      "location": "Italy\n·\nBolgheri Superiore",
      "image": "https://images.vivino.com/thumbs/Unx9_x0PRI2NyaC5mqQtHQ_pb_x300.png",
      "id": 564
    },
    {
      "winery": "Opus One",
      "wine": "Opus One 2006",
      "rating": {
        "average": "4.7",
        "reviews": "1663 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/C45ybDUxTnWShRkbSTusNg_pb_x300.png",
      "id": 565
    },
    {
      "winery": "Cartuxa",
      "wine": "Pêra-Manca Tinto 2007",
      "rating": {
        "average": "4.7",
        "reviews": "1624 ratings"
      },
      "location": "Portugal\n·\nAlentejo",
      "image": "https://images.vivino.com/thumbs/L33jsYUuTMWTMy3KoqQyXg_pb_x300.png",
      "id": 566
    },
    {
      "winery": "Scarecrow",
      "wine": "Cabernet Sauvignon N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "1596 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/pU7uFKR-TAKAOQaf3Hpn2A_pb_x300.png",
      "id": 567
    },
    {
      "winery": "Château Mouton Rothschild",
      "wine": "Pauillac (Premier Grand Cru Classé) 2005",
      "rating": {
        "average": "4.7",
        "reviews": "1593 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/DNeQQKoHQCyq7BakiBm_zQ_pb_x300.png",
      "id": 568
    },
    {
      "winery": "Colgin",
      "wine": "IX Estate Red N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "1560 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/6QbrD6OwQMuOmSCBxo5C2g_pb_x300.png",
      "id": 569
    },
    {
      "winery": "Quintarelli Giuseppe",
      "wine": "Veneto Alzero Cabernet N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "1548 ratings"
      },
      "location": "Italy\n·\nVeneto",
      "image": "https://images.vivino.com/thumbs/zbMcPfLzSiGJ5XlKoZ1Azg_pb_x300.png",
      "id": 570
    },
    {
      "winery": "Antinori",
      "wine": "Tenuta Tignanello 'Solaia' 2009",
      "rating": {
        "average": "4.7",
        "reviews": "1539 ratings"
      },
      "location": "Italy\n·\nToscana",
      "image": "https://images.vivino.com/thumbs/6isg_zaUR3aWks-dEtkTXg_pb_x300.png",
      "id": 571
    },
    {
      "winery": "Château Mouton Rothschild",
      "wine": "Pauillac (Premier Grand Cru Classé) 1982",
      "rating": {
        "average": "4.7",
        "reviews": "1530 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/DNeQQKoHQCyq7BakiBm_zQ_pb_x300.png",
      "id": 572
    },
    {
      "winery": "Château Margaux",
      "wine": "Château Margaux (Premier Grand Cru Classé) 1995",
      "rating": {
        "average": "4.7",
        "reviews": "1527 ratings"
      },
      "location": "France\n·\nMargaux",
      "image": "https://images.vivino.com/thumbs/dnqHnd0hSx-t14_V8uynAA_pb_x300.png",
      "id": 573
    },
    {
      "winery": "Château Pontet-Canet",
      "wine": "Pauillac (Grand Cru Classé) 2009",
      "rating": {
        "average": "4.7",
        "reviews": "1514 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/zoXYIDxFQzmf8fFpkNNUJQ_pb_x300.png",
      "id": 574
    },
    {
      "winery": "Mollydooker",
      "wine": "Velvet Glove Shiraz N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "1498 ratings"
      },
      "location": "Australia\n·\nMcLaren Vale",
      "image": "https://images.vivino.com/thumbs/Fe-oTc4BSPm2c2Cv9bjcIg_pb_x300.png",
      "id": 575
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico 1999",
      "rating": {
        "average": "4.7",
        "reviews": "1347 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/SCnpJk_ySUe6XS3U-lFOwQ_pb_x300.png",
      "id": 576
    },
    {
      "winery": "Château Margaux",
      "wine": "Château Margaux (Premier Grand Cru Classé) 1996",
      "rating": {
        "average": "4.7",
        "reviews": "1318 ratings"
      },
      "location": "France\n·\nMargaux",
      "image": "https://images.vivino.com/thumbs/dnqHnd0hSx-t14_V8uynAA_pb_x300.png",
      "id": 577
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico 2006",
      "rating": {
        "average": "4.7",
        "reviews": "1290 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/SCnpJk_ySUe6XS3U-lFOwQ_pb_x300.png",
      "id": 578
    },
    {
      "winery": "Bussola",
      "wine": "Amarone della Valpolicella Classico Vigneto Alto N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "1250 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella Classico",
      "image": "https://images.vivino.com/thumbs/MkRncUxEQ--qSeE1cvMM6g_pb_x300.png",
      "id": 579
    },
    {
      "winery": "Château Margaux",
      "wine": "Château Margaux (Premier Grand Cru Classé) 1989",
      "rating": {
        "average": "4.7",
        "reviews": "1248 ratings"
      },
      "location": "France\n·\nMargaux",
      "image": "https://images.vivino.com/thumbs/dnqHnd0hSx-t14_V8uynAA_pb_x300.png",
      "id": 580
    },
    {
      "winery": "Antinori",
      "wine": "Tenuta Tignanello 'Solaia' 2007",
      "rating": {
        "average": "4.7",
        "reviews": "1247 ratings"
      },
      "location": "Italy\n·\nToscana",
      "image": "https://images.vivino.com/thumbs/6isg_zaUR3aWks-dEtkTXg_pb_x300.png",
      "id": 581
    },
    {
      "winery": "Château Lafite Rothschild",
      "wine": "Pauillac (Premier Grand Cru Classé) 1999",
      "rating": {
        "average": "4.7",
        "reviews": "1245 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/uDMfPG10R1efm5H1do--Ow_pb_x300.png",
      "id": 582
    },
    {
      "winery": "Tenuta San Guido",
      "wine": "Sassicaia 1998",
      "rating": {
        "average": "4.7",
        "reviews": "1239 ratings"
      },
      "location": "Italy\n·\nBolgheri Sassicaia",
      "image": "https://images.vivino.com/thumbs/L2ZTpFlDR2yMHe1-GA90Jw_pb_x300.png",
      "id": 583
    },
    {
      "winery": "Cartuxa",
      "wine": "Pêra-Manca Tinto 2013",
      "rating": {
        "average": "4.7",
        "reviews": "1215 ratings"
      },
      "location": "Portugal\n·\nAlentejo",
      "image": "https://images.vivino.com/thumbs/L33jsYUuTMWTMy3KoqQyXg_pb_x300.png",
      "id": 584
    },
    {
      "winery": "Château Lafite Rothschild",
      "wine": "Pauillac (Premier Grand Cru Classé) 1990",
      "rating": {
        "average": "4.7",
        "reviews": "1214 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/uDMfPG10R1efm5H1do--Ow_pb_x300.png",
      "id": 585
    },
    {
      "winery": "Bryant Family Vineyard",
      "wine": "Cabernet Sauvignon Proprietor Grown N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "1213 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/JL0BHEkRTxqJUuW9QfABtA_pb_x300.png",
      "id": 586
    },
    {
      "winery": "Bond",
      "wine": "St. Eden N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "1207 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/0b4-sfABS6W7mt_rr4Vv9A_pb_x300.png",
      "id": 587
    },
    {
      "winery": "Lokoya",
      "wine": "Mount Veeder Cabernet Sauvignon N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "1207 ratings"
      },
      "location": "United States\n·\nMount Veeder",
      "image": "https://images.vivino.com/thumbs/41jCEa5TSouKrLK1mxZVLg_pb_x300.png",
      "id": 588
    },
    {
      "winery": "Château Margaux",
      "wine": "Château Margaux (Premier Grand Cru Classé) 1986",
      "rating": {
        "average": "4.7",
        "reviews": "1199 ratings"
      },
      "location": "France\n·\nMargaux",
      "image": "https://images.vivino.com/thumbs/dnqHnd0hSx-t14_V8uynAA_pb_x300.png",
      "id": 589
    },
    {
      "winery": "Château Latour",
      "wine": "Grand Vin Pauillac (Premier Grand Cru Classé) 1990",
      "rating": {
        "average": "4.7",
        "reviews": "1191 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/4RHhCzeQTsCeyCScxO0LOw_pb_x300.png",
      "id": 590
    },
    {
      "winery": "Château Margaux",
      "wine": "Château Margaux (Premier Grand Cru Classé) 1999",
      "rating": {
        "average": "4.7",
        "reviews": "1189 ratings"
      },
      "location": "France\n·\nMargaux",
      "image": "https://images.vivino.com/thumbs/dnqHnd0hSx-t14_V8uynAA_pb_x300.png",
      "id": 591
    },
    {
      "winery": "Cartuxa",
      "wine": "Pêra-Manca Tinto 2005",
      "rating": {
        "average": "4.7",
        "reviews": "1180 ratings"
      },
      "location": "Portugal\n·\nAlentejo",
      "image": "https://images.vivino.com/thumbs/L33jsYUuTMWTMy3KoqQyXg_pb_x300.png",
      "id": 592
    },
    {
      "winery": "Frank Family",
      "wine": "Winston Hill N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "1182 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/0CtubwMqQy-ZING9vlUPSw_pb_x300.png",
      "id": 593
    },
    {
      "winery": "Stag's Leap Wine Cellars",
      "wine": "CASK 23 Cabernet Sauvignon 2012",
      "rating": {
        "average": "4.7",
        "reviews": "1148 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/ZNy9BkyrSj-PMnUs4H3WyQ_pb_x300.png",
      "id": 594
    },
    {
      "winery": "Château Margaux",
      "wine": "Château Margaux (Premier Grand Cru Classé) 1982",
      "rating": {
        "average": "4.7",
        "reviews": "1130 ratings"
      },
      "location": "France\n·\nMargaux",
      "image": "https://images.vivino.com/thumbs/dnqHnd0hSx-t14_V8uynAA_pb_x300.png",
      "id": 595
    },
    {
      "winery": "Schrader",
      "wine": "Cabernet Sauvignon RBS Beckstoffer To Kalon Vineyard N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "1127 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/GpcSXs2ERS6niDxoAsvESA_pb_x300.png",
      "id": 596
    },
    {
      "winery": "Château Latour",
      "wine": "Grand Vin Pauillac (Premier Grand Cru Classé) 1996",
      "rating": {
        "average": "4.7",
        "reviews": "1126 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/4RHhCzeQTsCeyCScxO0LOw_pb_x300.png",
      "id": 597
    },
    {
      "winery": "Caymus",
      "wine": "Special Selection Cabernet Sauvignon 2015",
      "rating": {
        "average": "4.7",
        "reviews": "1111 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/wQrYDrRqRCWJ8VwSBm8pfQ_pb_x300.png",
      "id": 598
    },
    {
      "winery": "Tenuta San Guido",
      "wine": "Sassicaia 1997",
      "rating": {
        "average": "4.7",
        "reviews": "1105 ratings"
      },
      "location": "Italy\n·\nBolgheri Sassicaia",
      "image": "https://images.vivino.com/thumbs/L2ZTpFlDR2yMHe1-GA90Jw_pb_x300.png",
      "id": 599
    },
    {
      "winery": "Château Lafite Rothschild",
      "wine": "Pauillac (Premier Grand Cru Classé) 1995",
      "rating": {
        "average": "4.7",
        "reviews": "1081 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/uDMfPG10R1efm5H1do--Ow_pb_x300.png",
      "id": 600
    },
    {
      "winery": "Stefano Accordini",
      "wine": "Amarone della Valpolicella Classico Vigneto Il Fornetto N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "1078 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella Classico",
      "image": "https://images.vivino.com/thumbs/YrJvYxsoQOmIRGrj9ijwQA_pb_x300.png",
      "id": 601
    },
    {
      "winery": "Antinori",
      "wine": "Tenuta Tignanello 'Solaia' 2001",
      "rating": {
        "average": "4.7",
        "reviews": "1063 ratings"
      },
      "location": "Italy\n·\nToscana",
      "image": "https://images.vivino.com/thumbs/6isg_zaUR3aWks-dEtkTXg_pb_x300.png",
      "id": 602
    },
    {
      "winery": "Penfolds",
      "wine": "Grange 2008",
      "rating": {
        "average": "4.7",
        "reviews": "1055 ratings"
      },
      "location": "Australia\n·\nSouth Australia",
      "image": "https://images.vivino.com/thumbs/hRl7EuOORIuIM6JxYyxgBA_pb_x300.png",
      "id": 603
    },
    {
      "winery": "Bond",
      "wine": "Vecina N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "1031 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/bs-ZiOBVTm6R4XB5sER1yA_pb_x300.png",
      "id": 604
    },
    {
      "winery": "Château Margaux",
      "wine": "Château Margaux (Premier Grand Cru Classé) 1990",
      "rating": {
        "average": "4.7",
        "reviews": "1021 ratings"
      },
      "location": "France\n·\nMargaux",
      "image": "https://images.vivino.com/thumbs/dnqHnd0hSx-t14_V8uynAA_pb_x300.png",
      "id": 605
    },
    {
      "winery": "Château Latour",
      "wine": "Grand Vin Pauillac (Premier Grand Cru Classé) 1989",
      "rating": {
        "average": "4.7",
        "reviews": "1011 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/4RHhCzeQTsCeyCScxO0LOw_pb_x300.png",
      "id": 606
    },
    {
      "winery": "Pétrus",
      "wine": "Pomerol 1982",
      "rating": {
        "average": "4.7",
        "reviews": "1008 ratings"
      },
      "location": "France\n·\nPomerol",
      "image": "https://images.vivino.com/thumbs/RPhc1fBwT0uLKoE6_mteFQ_pb_x300.png",
      "id": 607
    },
    {
      "winery": "Château Margaux",
      "wine": "Château Margaux (Premier Grand Cru Classé) 1983",
      "rating": {
        "average": "4.7",
        "reviews": "999 ratings"
      },
      "location": "France\n·\nMargaux",
      "image": "https://images.vivino.com/thumbs/dnqHnd0hSx-t14_V8uynAA_pb_x300.png",
      "id": 608
    },
    {
      "winery": "Ornellaia",
      "wine": "Bolgheri Superiore 2005",
      "rating": {
        "average": "4.7",
        "reviews": "984 ratings"
      },
      "location": "Italy\n·\nBolgheri Superiore",
      "image": "https://images.vivino.com/thumbs/Unx9_x0PRI2NyaC5mqQtHQ_pb_x300.png",
      "id": 609
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico 2002",
      "rating": {
        "average": "4.7",
        "reviews": "973 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/SCnpJk_ySUe6XS3U-lFOwQ_pb_x300.png",
      "id": 610
    },
    {
      "winery": "Château Latour",
      "wine": "Grand Vin Pauillac (Premier Grand Cru Classé) 2001",
      "rating": {
        "average": "4.7",
        "reviews": "972 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/4RHhCzeQTsCeyCScxO0LOw_pb_x300.png",
      "id": 611
    },
    {
      "winery": "Nosotros",
      "wine": "Red 2010",
      "rating": {
        "average": "4.7",
        "reviews": "968 ratings"
      },
      "location": "Argentina\n·\nAgrelo",
      "image": "https://images.vivino.com/thumbs/VxGqxhU0TqWmUqByG5gZiw_pb_x300.png",
      "id": 612
    },
    {
      "winery": "Château Margaux",
      "wine": "Château Margaux (Premier Grand Cru Classé) 2001",
      "rating": {
        "average": "4.7",
        "reviews": "962 ratings"
      },
      "location": "France\n·\nMargaux",
      "image": "https://images.vivino.com/thumbs/dnqHnd0hSx-t14_V8uynAA_pb_x300.png",
      "id": 613
    },
    {
      "winery": "Château Cheval Blanc",
      "wine": "Saint-Émilion Grand Cru (Premier Grand Cru Classé) 1995",
      "rating": {
        "average": "4.7",
        "reviews": "959 ratings"
      },
      "location": "France\n·\nSaint-Émilion Grand Cru",
      "image": "https://images.vivino.com/thumbs/AIWJqsLoSIyz0HO4de1llA_pb_x300.png",
      "id": 614
    },
    {
      "winery": "Château Haut-Brion",
      "wine": "Pessac-Léognan (Premier Grand Cru Classé) 1989",
      "rating": {
        "average": "4.7",
        "reviews": "951 ratings"
      },
      "location": "France\n·\nPessac-Léognan",
      "image": "https://images.vivino.com/thumbs/ntGyei3vSEGl5Bz5-wI-TQ_pb_x300.png",
      "id": 615
    },
    {
      "winery": "Château Lafite Rothschild",
      "wine": "Pauillac (Premier Grand Cru Classé) 1996",
      "rating": {
        "average": "4.7",
        "reviews": "951 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/uDMfPG10R1efm5H1do--Ow_pb_x300.png",
      "id": 616
    },
    {
      "winery": "Casa Ferreirinha",
      "wine": "Barca Velha Douro 1995",
      "rating": {
        "average": "4.7",
        "reviews": "942 ratings"
      },
      "location": "Portugal\n·\nDouro",
      "image": "https://images.vivino.com/thumbs/ooQmRipERdeq4HM4KGxlEA_pb_x300.png",
      "id": 617
    },
    {
      "winery": "Dal Forno Romano",
      "wine": "Amarone della Valpolicella Monte Lodoletta 2006",
      "rating": {
        "average": "4.7",
        "reviews": "939 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella",
      "image": "https://images.vivino.com/thumbs/WpxjVqZnTkeq2f68wJoJSg_pb_x300.png",
      "id": 618
    },
    {
      "winery": "Trefethen",
      "wine": "HāLo N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "929 ratings"
      },
      "location": "United States\n·\nOak Knoll District",
      "image": "https://images.vivino.com/thumbs/_tnDA8NVRM6iCjHNwwg4iQ_pb_x300.png",
      "id": 619
    },
    {
      "winery": "Château Mouton Rothschild",
      "wine": "Pauillac (Premier Grand Cru Classé) 2000",
      "rating": {
        "average": "4.7",
        "reviews": "925 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/DNeQQKoHQCyq7BakiBm_zQ_pb_x300.png",
      "id": 620
    },
    {
      "winery": "Château Lafite Rothschild",
      "wine": "Pauillac (Premier Grand Cru Classé) 1982",
      "rating": {
        "average": "4.7",
        "reviews": "918 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/uDMfPG10R1efm5H1do--Ow_pb_x300.png",
      "id": 621
    },
    {
      "winery": "Tenuta San Guido",
      "wine": "Sassicaia 2016",
      "rating": {
        "average": "4.7",
        "reviews": "917 ratings"
      },
      "location": "Italy\n·\nBolgheri Sassicaia",
      "image": "https://images.vivino.com/thumbs/L2ZTpFlDR2yMHe1-GA90Jw_pb_x300.png",
      "id": 622
    },
    {
      "winery": "Pétrus",
      "wine": "Pomerol 1990",
      "rating": {
        "average": "4.7",
        "reviews": "915 ratings"
      },
      "location": "France\n·\nPomerol",
      "image": "https://images.vivino.com/thumbs/RPhc1fBwT0uLKoE6_mteFQ_pb_x300.png",
      "id": 623
    },
    {
      "winery": "Château Margaux",
      "wine": "Château Margaux (Premier Grand Cru Classé) 2006",
      "rating": {
        "average": "4.7",
        "reviews": "912 ratings"
      },
      "location": "France\n·\nMargaux",
      "image": "https://images.vivino.com/thumbs/dnqHnd0hSx-t14_V8uynAA_pb_x300.png",
      "id": 624
    },
    {
      "winery": "Château Lafite Rothschild",
      "wine": "Pauillac (Premier Grand Cru Classé) 1986",
      "rating": {
        "average": "4.7",
        "reviews": "907 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/uDMfPG10R1efm5H1do--Ow_pb_x300.png",
      "id": 625
    },
    {
      "winery": "Penfolds",
      "wine": "Grange 1998",
      "rating": {
        "average": "4.7",
        "reviews": "897 ratings"
      },
      "location": "Australia\n·\nSouth Australia",
      "image": "https://images.vivino.com/thumbs/hRl7EuOORIuIM6JxYyxgBA_pb_x300.png",
      "id": 626
    },
    {
      "winery": "Château Haut-Brion",
      "wine": "Pessac-Léognan (Premier Grand Cru Classé) 1990",
      "rating": {
        "average": "4.7",
        "reviews": "896 ratings"
      },
      "location": "France\n·\nPessac-Léognan",
      "image": "https://images.vivino.com/thumbs/ntGyei3vSEGl5Bz5-wI-TQ_pb_x300.png",
      "id": 627
    },
    {
      "winery": "Joseph Phelps",
      "wine": "Insignia 2007",
      "rating": {
        "average": "4.7",
        "reviews": "894 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/NOkljUUMT3i35lDjSgR9MQ_pb_x300.png",
      "id": 628
    },
    {
      "winery": "Pétrus",
      "wine": "Pomerol 2004",
      "rating": {
        "average": "4.7",
        "reviews": "890 ratings"
      },
      "location": "France\n·\nPomerol",
      "image": "https://images.vivino.com/thumbs/RPhc1fBwT0uLKoE6_mteFQ_pb_x300.png",
      "id": 629
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico 1991",
      "rating": {
        "average": "4.7",
        "reviews": "884 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/SCnpJk_ySUe6XS3U-lFOwQ_pb_x300.png",
      "id": 630
    },
    {
      "winery": "Château Montrose",
      "wine": "Saint-Estèphe (Grand Cru Classé) 1990",
      "rating": {
        "average": "4.7",
        "reviews": "876 ratings"
      },
      "location": "France\n·\nSaint-Estèphe",
      "image": "https://images.vivino.com/thumbs/KXYrGMpYQvOE2YuZYFNztA_pb_x300.png",
      "id": 631
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico Reserva Especial Edición 2000",
      "rating": {
        "average": "4.7",
        "reviews": "871 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/k_UetHZ3Q2SMqUsliefGYQ_pb_x300.png",
      "id": 632
    },
    {
      "winery": "Casa Ferreirinha",
      "wine": "Barca Velha Douro 1991",
      "rating": {
        "average": "4.7",
        "reviews": "863 ratings"
      },
      "location": "Portugal\n·\nDouro",
      "image": "https://images.vivino.com/thumbs/ooQmRipERdeq4HM4KGxlEA_pb_x300.png",
      "id": 633
    },
    {
      "winery": "Hundred Acre",
      "wine": "Kayli Morgan Vineyard Cabernet Sauvignon N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "858 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/ZOn7KuOhTCap7hb74ucQVA_pb_x300.png",
      "id": 634
    },
    {
      "winery": "Lapostolle",
      "wine": "Clos Apalta (Limited Release) 2005",
      "rating": {
        "average": "4.7",
        "reviews": "854 ratings"
      },
      "location": "Chile\n·\nColchagua Valley",
      "image": "https://images.vivino.com/thumbs/4p9kX4l6QkS6ra9x6Br_iQ_pb_x300.png",
      "id": 635
    },
    {
      "winery": "Quintessa",
      "wine": "Rutherford 2012",
      "rating": {
        "average": "4.7",
        "reviews": "848 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/XeOU0ao9Rka3psDMjpkrKQ_pb_x300.png",
      "id": 636
    },
    {
      "winery": "Château Pichon Longueville Comtesse de Lalande",
      "wine": "Pauillac (Grand Cru Classé) 1982",
      "rating": {
        "average": "4.7",
        "reviews": "827 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/qgA_WSpAQKaTOhacMaOI7Q_pb_x300.png",
      "id": 637
    },
    {
      "winery": "Quintarelli Giuseppe",
      "wine": "Amarone della Valpolicella Classico 2006",
      "rating": {
        "average": "4.7",
        "reviews": "825 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella Classico",
      "image": "https://images.vivino.com/thumbs/RqFtSGpgTlKL1VwkBjccxA_pb_x300.png",
      "id": 638
    },
    {
      "winery": "Masseto",
      "wine": "Toscana 2010",
      "rating": {
        "average": "4.7",
        "reviews": "814 ratings"
      },
      "location": "Italy\n·\nToscana",
      "image": "https://images.vivino.com/thumbs/GPvEr_IUSKS1CDhhsY1ySg_pb_x300.png",
      "id": 639
    },
    {
      "winery": "Ovid",
      "wine": "Red Blend N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "791 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/ezwBiGBKSLGNdUHBaLxKng_pb_x300.png",
      "id": 640
    },
    {
      "winery": "Château Lafite Rothschild",
      "wine": "Pauillac (Premier Grand Cru Classé) 1989",
      "rating": {
        "average": "4.7",
        "reviews": "787 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/uDMfPG10R1efm5H1do--Ow_pb_x300.png",
      "id": 641
    },
    {
      "winery": "Del Dotto",
      "wine": "Cabernet Sauvignon St. Helena Mountain N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "782 ratings"
      },
      "location": "United States\n·\nSt. Helena",
      "image": "https://images.vivino.com/thumbs/05c129iwR-mOludhobyiCA_pb_x300.png",
      "id": 642
    },
    {
      "winery": "Antinori",
      "wine": "Tenuta Tignanello 'Solaia' 1997",
      "rating": {
        "average": "4.7",
        "reviews": "780 ratings"
      },
      "location": "Italy\n·\nToscana",
      "image": "https://images.vivino.com/thumbs/6isg_zaUR3aWks-dEtkTXg_pb_x300.png",
      "id": 643
    },
    {
      "winery": "Montes",
      "wine": "Taita Marchigüe Vineyard Cabernet Sauvignon N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "790 ratings"
      },
      "location": "Chile\n·\nColchagua Valley",
      "image": "https://images.vivino.com/thumbs/jmKZlGApSlSVDlSbUbe5JA_pb_x300.png",
      "id": 644
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico Reserva Especial Edición 2003",
      "rating": {
        "average": "4.7",
        "reviews": "773 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/k_UetHZ3Q2SMqUsliefGYQ_pb_x300.png",
      "id": 645
    },
    {
      "winery": "Château Margaux",
      "wine": "Château Margaux (Premier Grand Cru Classé) 1985",
      "rating": {
        "average": "4.7",
        "reviews": "763 ratings"
      },
      "location": "France\n·\nMargaux",
      "image": "https://images.vivino.com/thumbs/dnqHnd0hSx-t14_V8uynAA_pb_x300.png",
      "id": 646
    },
    {
      "winery": "Opus One",
      "wine": "Opus One 1999",
      "rating": {
        "average": "4.7",
        "reviews": "752 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/C45ybDUxTnWShRkbSTusNg_pb_x300.png",
      "id": 647
    },
    {
      "winery": "Penfolds",
      "wine": "Grange 2010",
      "rating": {
        "average": "4.7",
        "reviews": "747 ratings"
      },
      "location": "Australia\n·\nSouth Australia",
      "image": "https://images.vivino.com/thumbs/hRl7EuOORIuIM6JxYyxgBA_pb_x300.png",
      "id": 648
    },
    {
      "winery": "Château Haut-Brion",
      "wine": "Pessac-Léognan (Premier Grand Cru Classé) 1982",
      "rating": {
        "average": "4.7",
        "reviews": "747 ratings"
      },
      "location": "France\n·\nPessac-Léognan",
      "image": "https://images.vivino.com/thumbs/ntGyei3vSEGl5Bz5-wI-TQ_pb_x300.png",
      "id": 649
    },
    {
      "winery": "Colgin",
      "wine": "Cariad N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "738 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/vuPcWA0rRpGU9QrcMA--mw_pb_x300.png",
      "id": 650
    },
    {
      "winery": "Paul Hobbs",
      "wine": "Beckstoffer Dr. Crane Vineyard Cabernet Sauvignon N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "735 ratings"
      },
      "location": "United States\n·\nSt. Helena",
      "image": "https://images.vivino.com/thumbs/qmeRPQC1QCaTbAZ2n85ELQ_pb_x300.png",
      "id": 651
    },
    {
      "winery": "Château Cheval Blanc",
      "wine": "Saint-Émilion Grand Cru (Premier Grand Cru Classé) 1982",
      "rating": {
        "average": "4.7",
        "reviews": "727 ratings"
      },
      "location": "France\n·\nSaint-Émilion Grand Cru",
      "image": "https://images.vivino.com/thumbs/AIWJqsLoSIyz0HO4de1llA_pb_x300.png",
      "id": 652
    },
    {
      "winery": "Quintarelli Giuseppe",
      "wine": "Amarone della Valpolicella Classico 2007",
      "rating": {
        "average": "4.7",
        "reviews": "720 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella Classico",
      "image": "https://images.vivino.com/thumbs/RqFtSGpgTlKL1VwkBjccxA_pb_x300.png",
      "id": 653
    },
    {
      "winery": "Vega Sicilia",
      "wine": "Unico 1994",
      "rating": {
        "average": "4.7",
        "reviews": "720 ratings"
      },
      "location": "Spain\n·\nRibera del Duero",
      "image": "https://images.vivino.com/thumbs/SCnpJk_ySUe6XS3U-lFOwQ_pb_x300.png",
      "id": 654
    },
    {
      "winery": "Quintarelli Giuseppe",
      "wine": "Amarone della Valpolicella Classico 2000",
      "rating": {
        "average": "4.7",
        "reviews": "711 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella Classico",
      "image": "https://images.vivino.com/thumbs/RqFtSGpgTlKL1VwkBjccxA_pb_x300.png",
      "id": 655
    },
    {
      "winery": "Penfolds",
      "wine": "Grange 2001",
      "rating": {
        "average": "4.7",
        "reviews": "710 ratings"
      },
      "location": "Australia\n·\nSouth Australia",
      "image": "https://images.vivino.com/thumbs/hRl7EuOORIuIM6JxYyxgBA_pb_x300.png",
      "id": 656
    },
    {
      "winery": "Mouchao",
      "wine": "Alentejano Tonel No 3 - 4 2011",
      "rating": {
        "average": "4.7",
        "reviews": "709 ratings"
      },
      "location": "Portugal\n·\nAlentejano",
      "image": "https://images.vivino.com/thumbs/A9kuB664Tlek1SGvnPvbaw_pb_x300.png",
      "id": 657
    },
    {
      "winery": "Château Latour",
      "wine": "Grand Vin Pauillac (Premier Grand Cru Classé) 1999",
      "rating": {
        "average": "4.7",
        "reviews": "709 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/4RHhCzeQTsCeyCScxO0LOw_pb_x300.png",
      "id": 658
    },
    {
      "winery": "Château Cheval Blanc",
      "wine": "Saint-Émilion Grand Cru (Premier Grand Cru Classé) 1998",
      "rating": {
        "average": "4.7",
        "reviews": "707 ratings"
      },
      "location": "France\n·\nSaint-Émilion Grand Cru",
      "image": "https://images.vivino.com/thumbs/AIWJqsLoSIyz0HO4de1llA_pb_x300.png",
      "id": 659
    },
    {
      "winery": "Pétrus",
      "wine": "Pomerol 1995",
      "rating": {
        "average": "4.7",
        "reviews": "704 ratings"
      },
      "location": "France\n·\nPomerol",
      "image": "https://images.vivino.com/thumbs/RPhc1fBwT0uLKoE6_mteFQ_pb_x300.png",
      "id": 660
    },
    {
      "winery": "Soldera",
      "wine": "Case Basse Sangiovese Toscana N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "699 ratings"
      },
      "location": "Italy\n·\nToscana",
      "image": "https://images.vivino.com/thumbs/umr2871XSGORwaDHGnd4zw_pb_x300.png",
      "id": 661
    },
    {
      "winery": "Pegau",
      "wine": "Cuvée Da Capo Châteauneuf-du-Pape N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "694 ratings"
      },
      "location": "France\n·\nChâteauneuf-du-Pape",
      "image": "https://images.vivino.com/thumbs/qhqnjHhPQai4lV2F6jTKvw_pb_x300.png",
      "id": 662
    },
    {
      "winery": "Château Angelus",
      "wine": "Saint-Émilion Grand Cru (Premier Grand Cru Classé) 2005",
      "rating": {
        "average": "4.7",
        "reviews": "693 ratings"
      },
      "location": "France\n·\nSaint-Émilion Grand Cru",
      "image": "https://images.vivino.com/thumbs/2vBBscbzSx-jqGBK9OPZLw_pb_x300.png",
      "id": 663
    },
    {
      "winery": "Château Latour",
      "wine": "Grand Vin Pauillac (Premier Grand Cru Classé) 1985",
      "rating": {
        "average": "4.7",
        "reviews": "692 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/4RHhCzeQTsCeyCScxO0LOw_pb_x300.png",
      "id": 664
    },
    {
      "winery": "Château Pavie",
      "wine": "Saint-Émilion Grand Cru (Premier Grand Cru Classé) 2005",
      "rating": {
        "average": "4.7",
        "reviews": "692 ratings"
      },
      "location": "France\n·\nSaint-Émilion Grand Cru",
      "image": "https://images.vivino.com/thumbs/vE5fQpdURMyxnrM0pscSsQ_pb_x300.png",
      "id": 665
    },
    {
      "winery": "Hall",
      "wine": "Kathryn Hall Cabernet Sauvignon 2013",
      "rating": {
        "average": "4.7",
        "reviews": "687 ratings"
      },
      "location": "United States\n·\nRutherford",
      "image": "https://images.vivino.com/thumbs/zJZAU8z1S_CNsTj5luKowQ_pb_x300.png",
      "id": 666
    },
    {
      "winery": "Zýmē",
      "wine": "Harlequin N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "686 ratings"
      },
      "location": "Italy\n·\nVeneto",
      "image": "https://images.vivino.com/thumbs/oBaWD1vnSFO6IMKnhIlqhw_pb_x300.png",
      "id": 667
    },
    {
      "winery": "Pétrus",
      "wine": "Pomerol 1994",
      "rating": {
        "average": "4.7",
        "reviews": "683 ratings"
      },
      "location": "France\n·\nPomerol",
      "image": "https://images.vivino.com/thumbs/RPhc1fBwT0uLKoE6_mteFQ_pb_x300.png",
      "id": 668
    },
    {
      "winery": "Ornellaia",
      "wine": "Bolgheri Superiore 2003",
      "rating": {
        "average": "4.7",
        "reviews": "683 ratings"
      },
      "location": "Italy\n·\nBolgheri Superiore",
      "image": "https://images.vivino.com/thumbs/Unx9_x0PRI2NyaC5mqQtHQ_pb_x300.png",
      "id": 669
    },
    {
      "winery": "Château Haut-Brion",
      "wine": "Pessac-Léognan (Premier Grand Cru Classé) 2000",
      "rating": {
        "average": "4.7",
        "reviews": "678 ratings"
      },
      "location": "France\n·\nPessac-Léognan",
      "image": "https://images.vivino.com/thumbs/ntGyei3vSEGl5Bz5-wI-TQ_pb_x300.png",
      "id": 670
    },
    {
      "winery": "Pétrus",
      "wine": "Pomerol 1996",
      "rating": {
        "average": "4.7",
        "reviews": "668 ratings"
      },
      "location": "France\n·\nPomerol",
      "image": "https://images.vivino.com/thumbs/RPhc1fBwT0uLKoE6_mteFQ_pb_x300.png",
      "id": 671
    },
    {
      "winery": "Château Lafite Rothschild",
      "wine": "Pauillac (Premier Grand Cru Classé) 1985",
      "rating": {
        "average": "4.7",
        "reviews": "667 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/uDMfPG10R1efm5H1do--Ow_pb_x300.png",
      "id": 672
    },
    {
      "winery": "Viña Cobos",
      "wine": "Cobos Corte uNico N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "668 ratings"
      },
      "location": "Argentina\n·\nPerdriel",
      "image": "https://images.vivino.com/thumbs/HuwMNYvrRNGFL-IlmWWdbA_pb_x300.png",
      "id": 673
    },
    {
      "winery": "Quinta do Crasto",
      "wine": "Vinha Maria Teresa 2011",
      "rating": {
        "average": "4.7",
        "reviews": "663 ratings"
      },
      "location": "Portugal\n·\nDouro",
      "image": "https://images.vivino.com/thumbs/vvrQeQeuRquB6RzM8U9SGg_pb_x300.png",
      "id": 674
    },
    {
      "winery": "Château Lafite Rothschild",
      "wine": "Pauillac (Premier Grand Cru Classé) 2004",
      "rating": {
        "average": "4.7",
        "reviews": "663 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/uDMfPG10R1efm5H1do--Ow_pb_x300.png",
      "id": 675
    },
    {
      "winery": "Château Lafite Rothschild",
      "wine": "Pauillac (Premier Grand Cru Classé) 2000",
      "rating": {
        "average": "4.7",
        "reviews": "658 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/uDMfPG10R1efm5H1do--Ow_pb_x300.png",
      "id": 676
    },
    {
      "winery": "Nosotros",
      "wine": "Red 2014",
      "rating": {
        "average": "4.7",
        "reviews": "654 ratings"
      },
      "location": "Argentina\n·\nAgrelo",
      "image": "https://images.vivino.com/thumbs/VxGqxhU0TqWmUqByG5gZiw_pb_x300.png",
      "id": 677
    },
    {
      "winery": "Château Latour",
      "wine": "Grand Vin Pauillac (Premier Grand Cru Classé) 2000",
      "rating": {
        "average": "4.7",
        "reviews": "651 ratings"
      },
      "location": "France\n·\nPauillac",
      "image": "https://images.vivino.com/thumbs/4RHhCzeQTsCeyCScxO0LOw_pb_x300.png",
      "id": 678
    },
    {
      "winery": "Continuum",
      "wine": "Proprietary Red 2012",
      "rating": {
        "average": "4.7",
        "reviews": "651 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/IyadZ8PVR4CSN7AM9Ko4AA_pb_x300.png",
      "id": 679
    },
    {
      "winery": "Gargiulo",
      "wine": "G Major Seven Study Cabernet Sauvignon N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "653 ratings"
      },
      "location": "United States\n·\nOakville",
      "image": "https://images.vivino.com/thumbs/Q8MlhaRDTbaYh6Ydnr__iQ_pb_x300.png",
      "id": 680
    },
    {
      "winery": "Pétrus",
      "wine": "Pomerol 1999",
      "rating": {
        "average": "4.7",
        "reviews": "651 ratings"
      },
      "location": "France\n·\nPomerol",
      "image": "https://images.vivino.com/thumbs/RPhc1fBwT0uLKoE6_mteFQ_pb_x300.png",
      "id": 681
    },
    {
      "winery": "Penfolds",
      "wine": "Grange 1996",
      "rating": {
        "average": "4.7",
        "reviews": "647 ratings"
      },
      "location": "Australia\n·\nSouth Australia",
      "image": "https://images.vivino.com/thumbs/hRl7EuOORIuIM6JxYyxgBA_pb_x300.png",
      "id": 682
    },
    {
      "winery": "Joseph Phelps",
      "wine": "Insignia 2002",
      "rating": {
        "average": "4.7",
        "reviews": "635 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/NOkljUUMT3i35lDjSgR9MQ_pb_x300.png",
      "id": 683
    },
    {
      "winery": "Odette",
      "wine": "Estate Cabernet Sauvignon 2014",
      "rating": {
        "average": "4.7",
        "reviews": "634 ratings"
      },
      "location": "United States\n·\nStags Leap District",
      "image": "https://images.vivino.com/thumbs/o1McdLkiQE64AEsvfmQJpg_pb_x300.png",
      "id": 684
    },
    {
      "winery": "Quintarelli Giuseppe",
      "wine": "Amarone della Valpolicella Classico 2004",
      "rating": {
        "average": "4.7",
        "reviews": "626 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella Classico",
      "image": "https://images.vivino.com/thumbs/RqFtSGpgTlKL1VwkBjccxA_pb_x300.png",
      "id": 685
    },
    {
      "winery": "Caymus",
      "wine": "Special Selection Cabernet Sauvignon 2006",
      "rating": {
        "average": "4.7",
        "reviews": "621 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/wQrYDrRqRCWJ8VwSBm8pfQ_pb_x300.png",
      "id": 686
    },
    {
      "winery": "Cartuxa",
      "wine": "Pêra-Manca Tinto 2001",
      "rating": {
        "average": "4.7",
        "reviews": "617 ratings"
      },
      "location": "Portugal\n·\nAlentejo",
      "image": "https://images.vivino.com/thumbs/L33jsYUuTMWTMy3KoqQyXg_pb_x300.png",
      "id": 687
    },
    {
      "winery": "Joseph Phelps",
      "wine": "Insignia 2001",
      "rating": {
        "average": "4.7",
        "reviews": "612 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/NOkljUUMT3i35lDjSgR9MQ_pb_x300.png",
      "id": 688
    },
    {
      "winery": "Zýmē",
      "wine": "La Mattonara Amarone della Valpolicella Classico Riserva N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "613 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella Classico",
      "image": "https://images.vivino.com/thumbs/mmxlvL67TWKI4iJfDkomcA_pb_x300.png",
      "id": 689
    },
    {
      "winery": "Joseph Phelps",
      "wine": "Insignia 1997",
      "rating": {
        "average": "4.7",
        "reviews": "605 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/NOkljUUMT3i35lDjSgR9MQ_pb_x300.png",
      "id": 690
    },
    {
      "winery": "Antinori",
      "wine": "Tenuta Tignanello 'Solaia' 2015",
      "rating": {
        "average": "4.7",
        "reviews": "604 ratings"
      },
      "location": "Italy\n·\nToscana",
      "image": "https://images.vivino.com/thumbs/6isg_zaUR3aWks-dEtkTXg_pb_x300.png",
      "id": 691
    },
    {
      "winery": "Château Cheval Blanc",
      "wine": "Saint-Émilion Grand Cru (Premier Grand Cru Classé) 2000",
      "rating": {
        "average": "4.7",
        "reviews": "603 ratings"
      },
      "location": "France\n·\nSaint-Émilion Grand Cru",
      "image": "https://images.vivino.com/thumbs/AIWJqsLoSIyz0HO4de1llA_pb_x300.png",
      "id": 692
    },
    {
      "winery": "Masseto",
      "wine": "Toscana 2012",
      "rating": {
        "average": "4.7",
        "reviews": "599 ratings"
      },
      "location": "Italy\n·\nToscana",
      "image": "https://images.vivino.com/thumbs/GPvEr_IUSKS1CDhhsY1ySg_pb_x300.png",
      "id": 693
    },
    {
      "winery": "Dal Forno Romano",
      "wine": "Amarone della Valpolicella Monte Lodoletta 2008",
      "rating": {
        "average": "4.7",
        "reviews": "594 ratings"
      },
      "location": "Italy\n·\nAmarone della Valpolicella",
      "image": "https://images.vivino.com/thumbs/WpxjVqZnTkeq2f68wJoJSg_pb_x300.png",
      "id": 694
    },
    {
      "winery": "Casa Ferreirinha",
      "wine": "Barca Velha Douro 1985",
      "rating": {
        "average": "4.7",
        "reviews": "593 ratings"
      },
      "location": "Portugal\n·\nDouro",
      "image": "https://images.vivino.com/thumbs/ooQmRipERdeq4HM4KGxlEA_pb_x300.png",
      "id": 695
    },
    {
      "winery": "Pétrus",
      "wine": "Pomerol 1988",
      "rating": {
        "average": "4.7",
        "reviews": "592 ratings"
      },
      "location": "France\n·\nPomerol",
      "image": "https://images.vivino.com/thumbs/RPhc1fBwT0uLKoE6_mteFQ_pb_x300.png",
      "id": 696
    },
    {
      "winery": "Masseto",
      "wine": "Toscana 2009",
      "rating": {
        "average": "4.7",
        "reviews": "592 ratings"
      },
      "location": "Italy\n·\nToscana",
      "image": "https://images.vivino.com/thumbs/GPvEr_IUSKS1CDhhsY1ySg_pb_x300.png",
      "id": 697
    },
    {
      "winery": "Pétrus",
      "wine": "Pomerol 2002",
      "rating": {
        "average": "4.7",
        "reviews": "585 ratings"
      },
      "location": "France\n·\nPomerol",
      "image": "https://images.vivino.com/thumbs/RPhc1fBwT0uLKoE6_mteFQ_pb_x300.png",
      "id": 698
    },
    {
      "winery": "Pétrus",
      "wine": "Pomerol 1985",
      "rating": {
        "average": "4.7",
        "reviews": "583 ratings"
      },
      "location": "France\n·\nPomerol",
      "image": "https://images.vivino.com/thumbs/RPhc1fBwT0uLKoE6_mteFQ_pb_x300.png",
      "id": 699
    },
    {
      "winery": "Masseto",
      "wine": "Toscana 2004",
      "rating": {
        "average": "4.7",
        "reviews": "581 ratings"
      },
      "location": "Italy\n·\nToscana",
      "image": "https://images.vivino.com/thumbs/GPvEr_IUSKS1CDhhsY1ySg_pb_x300.png",
      "id": 700
    },
    {
      "winery": "Château Margaux",
      "wine": "Château Margaux (Premier Grand Cru Classé) 2003",
      "rating": {
        "average": "4.7",
        "reviews": "580 ratings"
      },
      "location": "France\n·\nMargaux",
      "image": "https://images.vivino.com/thumbs/dnqHnd0hSx-t14_V8uynAA_pb_x300.png",
      "id": 701
    },
    {
      "winery": "Château Angelus",
      "wine": "Saint-Émilion Grand Cru (Premier Grand Cru Classé) 2000",
      "rating": {
        "average": "4.7",
        "reviews": "579 ratings"
      },
      "location": "France\n·\nSaint-Émilion Grand Cru",
      "image": "https://images.vivino.com/thumbs/2vBBscbzSx-jqGBK9OPZLw_pb_x300.png",
      "id": 702
    },
    {
      "winery": "Château Cheval Blanc",
      "wine": "Saint-Émilion Grand Cru (Premier Grand Cru Classé) 2005",
      "rating": {
        "average": "4.7",
        "reviews": "578 ratings"
      },
      "location": "France\n·\nSaint-Émilion Grand Cru",
      "image": "https://images.vivino.com/thumbs/AIWJqsLoSIyz0HO4de1llA_pb_x300.png",
      "id": 703
    },
    {
      "winery": "Masseto",
      "wine": "Toscana 2007",
      "rating": {
        "average": "4.7",
        "reviews": "576 ratings"
      },
      "location": "Italy\n·\nToscana",
      "image": "https://images.vivino.com/thumbs/GPvEr_IUSKS1CDhhsY1ySg_pb_x300.png",
      "id": 704
    },
    {
      "winery": "Penfolds",
      "wine": "Grange 2005",
      "rating": {
        "average": "4.7",
        "reviews": "574 ratings"
      },
      "location": "Australia\n·\nSouth Australia",
      "image": "https://images.vivino.com/thumbs/hRl7EuOORIuIM6JxYyxgBA_pb_x300.png",
      "id": 705
    },
    {
      "winery": "Château Cheval Blanc",
      "wine": "Saint-Émilion Grand Cru (Premier Grand Cru Classé) 1989",
      "rating": {
        "average": "4.7",
        "reviews": "567 ratings"
      },
      "location": "France\n·\nSaint-Émilion Grand Cru",
      "image": "https://images.vivino.com/thumbs/AIWJqsLoSIyz0HO4de1llA_pb_x300.png",
      "id": 706
    },
    {
      "winery": "Pétrus",
      "wine": "Pomerol 2006",
      "rating": {
        "average": "4.7",
        "reviews": "565 ratings"
      },
      "location": "France\n·\nPomerol",
      "image": "https://images.vivino.com/thumbs/RPhc1fBwT0uLKoE6_mteFQ_pb_x300.png",
      "id": 707
    },
    {
      "winery": "Gaja",
      "wine": "Barbaresco 2001",
      "rating": {
        "average": "4.7",
        "reviews": "565 ratings"
      },
      "location": "Italy\n·\nBarbaresco",
      "image": "https://images.vivino.com/thumbs/AXnEJS3XSRy34gIYBtoeKg_pb_x300.png",
      "id": 708
    },
    {
      "winery": "Cirq",
      "wine": "Treehouse Pinot Noir N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "565 ratings"
      },
      "location": "United States\n·\nRussian River Valley",
      "image": "https://images.vivino.com/thumbs/k7oHkUodSvi8tQeQdFmI4g_pb_x300.png",
      "id": 709
    },
    {
      "winery": "Promontory",
      "wine": "Promontory N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "560 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/BpwdHUqBSH-JjbkLeeVL5A_pb_x300.png",
      "id": 710
    },
    {
      "winery": "Cliff Lede",
      "wine": "Poetry Cabernet Sauvignon N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "559 ratings"
      },
      "location": "United States\n·\nStags Leap District",
      "image": "https://images.vivino.com/thumbs/rbOkqy3pSTuTVU8XKAFYXw_pb_x300.png",
      "id": 711
    },
    {
      "winery": "Masseto",
      "wine": "Toscana 2008",
      "rating": {
        "average": "4.7",
        "reviews": "554 ratings"
      },
      "location": "Italy\n·\nToscana",
      "image": "https://images.vivino.com/thumbs/GPvEr_IUSKS1CDhhsY1ySg_pb_x300.png",
      "id": 712
    },
    {
      "winery": "Shafer",
      "wine": "Hillside Select Cabernet Sauvignon 2010",
      "rating": {
        "average": "4.7",
        "reviews": "549 ratings"
      },
      "location": "United States\n·\nStags Leap District",
      "image": "https://images.vivino.com/thumbs/Q71Yx3zaRQW9IqxN0vk64w_pb_x300.png",
      "id": 713
    },
    {
      "winery": "Dominus",
      "wine": "Dominus (Christian Moueix) 2013",
      "rating": {
        "average": "4.7",
        "reviews": "548 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/FvLdztxrRXOZxU1jfVoQKQ_pb_x300.png",
      "id": 714
    },
    {
      "winery": "Château Cheval Blanc",
      "wine": "Saint-Émilion Grand Cru (Premier Grand Cru Classé) 1986",
      "rating": {
        "average": "4.7",
        "reviews": "546 ratings"
      },
      "location": "France\n·\nSaint-Émilion Grand Cru",
      "image": "https://images.vivino.com/thumbs/AIWJqsLoSIyz0HO4de1llA_pb_x300.png",
      "id": 715
    },
    {
      "winery": "Masseto",
      "wine": "Toscana 2011",
      "rating": {
        "average": "4.7",
        "reviews": "546 ratings"
      },
      "location": "Italy\n·\nToscana",
      "image": "https://images.vivino.com/thumbs/GPvEr_IUSKS1CDhhsY1ySg_pb_x300.png",
      "id": 716
    },
    {
      "winery": "Soldera",
      "wine": "Brunello di Montalcino Riserva 2005",
      "rating": {
        "average": "4.7",
        "reviews": "546 ratings"
      },
      "location": "Italy\n·\nBrunello di Montalcino",
      "image": "https://images.vivino.com/thumbs/l_eXmV1KTdGzz3ky_Qey3A_pb_x300.png",
      "id": 717
    },
    {
      "winery": "Pine Ridge",
      "wine": "Fortis Cabernet Sauvignon N.V.",
      "rating": {
        "average": "4.7",
        "reviews": "546 ratings"
      },
      "location": "United States\n·\nNapa Valley",
      "image": "https://images.vivino.com/thumbs/nu85uiOyQiay0d_WLhYTNg_pb_x300.png",
      "id": 718
    }
  ];
}
