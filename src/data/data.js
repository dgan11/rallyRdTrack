
// ---- Data for Cards ---

export function createTotalsData(name, category, ticker, ipodate, ipo_market_cap, cur_market_cap, num_shares) {
    return { name, category, ticker, ipodate, ipo_market_cap, cur_market_cap, num_shares };
}

export const totalsData = [
    createTotalsData(`'99 LOTUS ESPRIT SPORT 350`, '🏎 ', '#99LE1', new Date("11-01-2018"), 69500, 97000, 2000),
    createTotalsData(`'80 LAMBORGHINI COUNTACH TURBO`, '🏎 ', '#80LC1', new Date("01-01-2019"), 635000, 400000, 5000),
    createTotalsData(`'65 MUSTANG FASTBACK`, '🏎 ', '#65FM1', new Date("05-01-2019"), 82500, 102000, 2000),
    // createTotalsData(`'82 ASTON MARTIN V8 VANTAGE "OSCAR INDIA"`, '🏎 ', '#82AV1', new Date(""), 297500, 297500, 2000),
    // createTotalsData(`'95 FERRARI F355 SPIDER`, '🏎 ', '#95FF1', new Date(""), 120000, 120000, 2000),
    createTotalsData(`'88 BMW M3`, '🏎 ', '#88BM1', new Date("01-01-2019"), 141000, 150000, 3000),
    createTotalsData(`'83 FERRARI 512 BBI`, '🏎 ', '#83FB1', new Date("07-01-2018"), 350000, 287500, 5000),
    createTotalsData(`'92 LANCIA DELTA MARTINI 5`, '🏎 ', '#92LD1', new Date("12-01-2018"), 165000, 180000, 3000),
    createTotalsData(`'65 ALFA ROMEO GIULIA SS`, '🏎 ', '#65AG1', new Date("04-01-2019"), 178500, 207200, 2000),
    createTotalsData(`'55 PORSCHE 356 SPEEDSTER`, '🏎 ', '#55PS1', new Date("03-01-2018"), 425000, 500000, 2000),
    createTotalsData(`'72 MAZDA COSMO SPORT`, '🏎 ', '#72MC1', new Date("12-01-2018"), 62.25, 50, -19.68),
    createTotalsData(`'02 ACURA NSX-T`, '🏎 ', '#02AX1', new Date("11-01-2018"), 54, 49, -9.26),
    createTotalsData(`'89 FERRARI 328 GTS`, '🏎 ', '#89FG2', new Date("11-01-2019"), 75, 70, -6.67),
    createTotalsData(`'88 LAMBORGHINI LM002`, '🏎 ', '#88LL1', new Date("11-01-2019"), 146, 133.45, -8.60),
    createTotalsData(`'80 PORSCHE 928`, '🏎 ', '#80PN1', new Date("11-01-2019"), 9.6, 10, 4.17),
    createTotalsData(`'11 BMW 1M`, '🏎 ', '#11BM1', new Date("11-01-2019"), 42.00, 43.75, 4.17),
    createTotalsData(`'85 FERRARI TESTAROSSA`, '🏎 ', '#85FT1', new Date("02-01-2018"), 82.5, 103, 24.85),
    createTotalsData(`'95 BMW M3 LIGHTWEIGHT`, '🏎 ', '#95BL1', new Date("06-01-2018"), 59.25, 60, 1.27),
    createTotalsData(`'94 DODGE VIPER RT/10`, '🏎 ', '#94DV1', new Date("12-01-2018"), 28.75, 32.5, 13.04),
    createTotalsData(`'69 BOSS 302 MUSTANG`, '🏎 ', '#69BM1', new Date("11-01-2016"), 57.50, 84, 46.09),
    createTotalsData(`'89 FERRARI TESTAROSSA`, '🏎 ', '#89FT1', new Date("09-01-2019"), 45, 40, -11.11),
    createTotalsData(`'76 PORSCHE TURBO CARRERA`, '🏎 ', '#76PT1', new Date("03-01-2019"), 63.30, 66.65, 5.29),
    createTotalsData(`'98 DODGE VIPER GTS-R`, '🏎 ', '#98DV1', new Date("09-01-2018"), 65, 69.50, 6.92),
    createTotalsData(`'93 FERRARI 348TS SERIE SPECIALE`, '🏎 ', '#93FS1', new Date("04-01-2019"), 68.75, 75, 9.09),
    createTotalsData(`'61 JAGUAR E-TYPE`, '🏎 ', '#61JE1', new Date("04-01-2019"), 82, 95, 15.85),
    createTotalsData(`'75 RENAULT ALPINE A110`, '🏎 ', '#75RA1', new Date("03-01-2019"), 28, 29.00, 3.57),
    createTotalsData(`'88 LAMBORGHINI JALPA`, '🏎 ', '#88LJ1', new Date("02-01-2018"), 67.5, 87, 28.89),
    createTotalsData(`'99 SHELBY SERIES 1`, '🏎 ', '#99SS1', new Date("09-01-2019"), 137.50, 141.50, 2.91),
    createTotalsData(`'02 BMW Z8`, '🏎 ', '#02BZ1', new Date("01-01-2019"), 65.00, 50.50, -22.31),
    createTotalsData(`'90 MAZDA MIATA`, '🏎 ', '#90MM1', new Date("04-01-2019"), 5.32, 6.65, 25.00),
    createTotalsData(`'91 MITSUBISHI 3000GT VR4`, '🏎 ', '#91MV1', new Date("11-01-2018"), 19, 17.75, -6.58),
    createTotalsData(`'77 LOTUS ESPRIT S1`, '🏎 ', '#77LE1', new Date("11-01-2016"), 38.85, 65.95, 69.76),
    createTotalsData(`'88 PORSCHE 944 TURBO S`, '🏎 ', '#88PT1', new Date("05-01-2019"), 30, 40.25, 34.17),
    createTotalsData(`'89 PORSCHE 911 SPEEDSTER`, '🏎 ', '#89PS1', new Date("07-01-2018"), 82.50, 110.6, 34.06),
    createTotalsData(`'94 LAMBORGHINI DIABLO SE30 JOTA`, '🏎 ', '#94LD1', new Date("07-01-2019"), 119.50, 65.25, -45.40),
    createTotalsData(`'93 JAGUAR XJ220`, '🏎 ', '#93XJ1', new Date("08-01-2018"), 99, 52.15, -47.32),
    createTotalsData(`'63 CHEVROLET CORVETTE SPLIT WINDOW`, '🏎 ', '#63CC1', new Date("03-01-2019"), 63, 69.10, 9.68),
    createTotalsData(`'92 CHEVROLET CORVETTE ZR1`, '🏎 ', '#92CC1', new Date("09-01-2019"), 26.25, 17.50, -33.33),
    createTotalsData(`'94 FERRARI 348 SPIDER`, '🏎 ', '#94FS1', new Date("09-01-2019"), 72.50, 69, -4.83),
    createTotalsData(`'06 FORD GT`, '🏎 ', '#06FG1', new Date("12-01-2018"), 64, 70, 9.38),
    createTotalsData(`'61 MASERATI 3500 GT`, '🏎 ', '#61MG1', new Date("09-01-2018"), 68, 64, -5.88),
    createTotalsData(`'90 FORD MUSTANG 7UP EDITION`, '🏎 ', '#90FM1', new Date("07-01-2018"), 8.25, 22.60, 173.94),

];

// ---- Data for Table ----
export function createRowData(name, category, ticker, ipodate, ipoprice, curprice, roi) {
    return { name, category, ticker, ipodate, ipoprice, curprice, roi };
}

export const testing = [
    createRowData(`'86 Mac Plus (Signed)`, '📋 ', '#JOBSMAC', new Date("11-01-2020"), 10.00, 10.00, 0),
    createRowData(`'99 Pokemone 1st Ed. Complete Set`, '📋 ', '#POKEMON1', new Date("06-01-2020"), 25.00, 95.00, 280),
    createRowData(`'77 Lotus ESPRIT S1`, '🏎 ', '#77LE1', new Date("06-01-2020"), 38.85, 65.95, 69.76),
    createRowData(`'90 Ford Mustang 7UP Ed.`, '🏎 ', '#90FM1', new Date("07-01-2018"), 8.25, 22.60, 173.94),
    createRowData(`'18 Rolex GMT Master II Pepsi Jubilee`, '⌚️', '#RLEXPEPSI', new Date("11-01-2019"), 8.90, 13.50, 51.69),
    createRowData(`Hermès 30cm Himalaya Birkin`, '👜', '#HIMALAYA', new Date("05-01-2020"), 70.90, 75.00, 7.14),
    createRowData(`Harry Potter and The Philosopher's Stone`, '📘', '#POTTER', new Date("11-01-2019"), 24.00, 45.00, 87.50),
    createRowData(`'16 Chateau Petrus`, '🍷', '#16PETRUS', new Date("09-01-2020"), 5.00, 5.00, 0),
];

export const rows = [
    // CARS
    createRowData(`'99 LOTUS ESPRIT SPORT 350`, '🏎 ', '#99LE1', new Date("11-01-2018"), 28.25, 48, 69.55),
    createRowData(`'80 LAMBORGHINI COUNTACH TURBO`, '🏎 ', '#80LC1', new Date("01-01-2019"), 127, 76.00, -48.03),
    createRowData(`'65 MUSTANG FASTBACK`, '🏎 ', '#65FM1', new Date("05-01-2019"), 41.25, 52, 26.06),
    createRowData(`'88 BMW M3`, '🏎 ', '#88BM1', new Date("01-01-2019"), 47, 50, 6.38),
    createRowData(`'83 FERRARI 512 BBI`, '🏎 ', '#83FB1', new Date("07-01-2018"), 70, 57.5, -17.86),
    createRowData(`'92 LANCIA DELTA MARTINI 5`, '🏎 ', '#92LD1', new Date("12-01-2018"), 55, 60, 9.09),
    createRowData(`'65 ALFA ROMEO GIULIA SS`, '🏎 ', '#65AG1', new Date("04-01-2019"), 89.25, 103.60, 16.08),
    createRowData(`'55 PORSCHE 356 SPEEDSTER`, '🏎 ', '#55PS1', new Date("03-01-2018"), 212.50, 250.00, 17.65),
    createRowData(`'72 MAZDA COSMO SPORT`, '🏎 ', '#72MC1', new Date("12-01-2018"), 62.25, 50, -19.68),
    createRowData(`'02 ACURA NSX-T`, '🏎 ', '#02AX1', new Date("11-01-2018"), 54, 49, -9.26),
    createRowData(`'89 FERRARI 328 GTS`, '🏎 ', '#89FG2', new Date("11-01-2019"), 75, 70, -6.67),
    createRowData(`'88 LAMBORGHINI LM002`, '🏎 ', '#88LL1', new Date("11-01-2019"), 146, 133.45, -8.60),
    createRowData(`'80 PORSCHE 928`, '🏎 ', '#80PN1', new Date("11-01-2019"), 9.6, 10, 4.17),
    createRowData(`'11 BMW 1M`, '🏎 ', '#11BM1', new Date("11-01-2019"), 42.00, 43.75, 4.17),
    createRowData(`'85 FERRARI TESTAROSSA`, '🏎 ', '#85FT1', new Date("02-01-2018"), 82.5, 103, 24.85),
    createRowData(`'95 BMW M3 LIGHTWEIGHT`, '🏎 ', '#95BL1', new Date("06-01-2018"), 59.25, 60, 1.27),
    createRowData(`'94 DODGE VIPER RT/10`, '🏎 ', '#94DV1', new Date("12-01-2018"), 28.75, 32.5, 13.04),
    createRowData(`'69 BOSS 302 MUSTANG`, '🏎 ', '#69BM1', new Date("11-01-2016"), 57.50, 84, 46.09),
    createRowData(`'89 FERRARI TESTAROSSA`, '🏎 ', '#89FT1', new Date("09-01-2019"), 45, 40, -11.11),
    createRowData(`'76 PORSCHE TURBO CARRERA`, '🏎 ', '#76PT1', new Date("03-01-2019"), 63.30, 66.65, 5.29),
    createRowData(`'98 DODGE VIPER GTS-R`, '🏎 ', '#98DV1', new Date("09-01-2018"), 65, 69.50, 6.92),
    createRowData(`'93 FERRARI 348TS SERIE SPECIALE`, '🏎 ', '#93FS1', new Date("04-01-2019"), 68.75, 75, 9.09),
    createRowData(`'61 JAGUAR E-TYPE`, '🏎 ', '#61JE1', new Date("04-01-2019"), 82, 95, 15.85),
    createRowData(`'75 RENAULT ALPINE A110`, '🏎 ', '#75RA1', new Date("03-01-2019"), 28, 29.00, 3.57),
    createRowData(`'88 LAMBORGHINI JALPA`, '🏎 ', '#88LJ1', new Date("02-01-2018"), 67.5, 87, 28.89),
    createRowData(`'99 SHELBY SERIES 1`, '🏎 ', '#99SS1', new Date("09-01-2019"), 137.50, 141.50, 2.91),
    createRowData(`'02 BMW Z8`, '🏎 ', '#02BZ1', new Date("01-01-2019"), 65.00, 50.50, -22.31),
    createRowData(`'90 MAZDA MIATA`, '🏎 ', '#90MM1', new Date("04-01-2019"), 5.32, 6.65, 25.00),
    createRowData(`'91 MITSUBISHI 3000GT VR4`, '🏎 ', '#91MV1', new Date("11-01-2018"), 19, 17.75, -6.58),
    createRowData(`'77 LOTUS ESPRIT S1`, '🏎 ', '#77LE1', new Date("11-01-2016"), 38.85, 65.95, 69.76),
    createRowData(`'88 PORSCHE 944 TURBO S`, '🏎 ', '#88PT1', new Date("05-01-2019"), 30, 40.25, 34.17),
    createRowData(`'89 PORSCHE 911 SPEEDSTER`, '🏎 ', '#89PS1', new Date("07-01-2018"), 82.50, 110.6, 34.06),
    createRowData(`'94 LAMBORGHINI DIABLO SE30 JOTA`, '🏎 ', '#94LD1', new Date("07-01-2019"), 119.50, 65.25, -45.40),
    createRowData(`'93 JAGUAR XJ220`, '🏎 ', '#93XJ1', new Date("08-01-2018"), 99, 52.15, -47.32),
    createRowData(`'63 CHEVROLET CORVETTE SPLIT WINDOW`, '🏎 ', '#63CC1', new Date("03-01-2019"), 63, 69.10, 9.68),
    createRowData(`'92 CHEVROLET CORVETTE ZR1`, '🏎 ', '#92CC1', new Date("09-01-2019"), 26.25, 17.50, -33.33),
    createRowData(`'94 FERRARI 348 SPIDER`, '🏎 ', '#94FS1', new Date("09-01-2019"), 72.50, 69, -4.83),
    createRowData(`'06 FORD GT`, '🏎 ', '#06FG1', new Date("12-01-2018"), 64, 70, 9.38),
    createRowData(`'61 MASERATI 3500 GT`, '🏎 ', '#61MG1', new Date("09-01-2018"), 68, 64, -5.88),
    createRowData(`'90 FORD MUSTANG 7UP EDITION`, '🏎 ', '#90FM1', new Date("07-01-2018"), 8.25, 22.60, 173.94),

    // MEMORABILLA
    createRowData(`APOLLO 11 CREW-SIGNED NEW YORK TIMES`, '📋 ', '#APOLLO11', new Date("04-01-2020"), 32, 40, 25.00),
    createRowData(`'94 DEREK JETER GAME-WORN AAA JERSEY (SIGNED)`, '📋 ', '#94JETER', new Date("08-01-2020"), 45, 45.05, 0.11),
    createRowData(`'03 UD EXQUISITE COLLECTION KOBE BRYANT CARD`, '📋 ', '#03KOBE', new Date("08-01-2020"), 8, 10, 25),
    createRowData(`'56 TOPPS #135 MICKEY MANTLE CARD`, '📋 ', '#56MANTLE', new Date("01-01-2020"), 1, 4.1, 310),
    createRowData(`'88 MICHAEL JORDAN GAME-WORN SNEAKERS`, '📋 ', '#88JORDAN', new Date("01-01-2020"), 11.00, 49.95, 354.09),
    createRowData(`'75 ALI FIGHT-WORN BOOTS`, '📋 ', '#75ALI', new Date("12-01-2019"), 46, 52, 10.4),
    createRowData(`'24 BABE RUTH AL BATTING TITLE BAT`, '📋 ', '#24RUTHBAT', new Date("04-01-2020"), 85, 110, 29.41),
    createRowData(`BABE RUTH SINGLE SIGNED BASEBALL`, '📋 ', '#RUTHBALL1', new Date("05-01-2020"), 14.5, 16.7, 15.17),
    createRowData(`'38 GOUDEY JOE DIMAGGIO "HEADS-UP" CARD`, '📋 ', '#DIMAGGIO', new Date("05-01-2020"), 22, 28, 27.27),
    createRowData(`'55 ROBERTO CLEMENTE ROOKIE CARD`, '📋 ', '#CLEMENTE', new Date("05-01-2020"), 38, 39, 2.63),
    createRowData(`'33 GOUDEY #144 BABE RUTH CARD`, '📋 ', '#33RUTH', new Date("02-01-2020"), 38.5, 50, 9.77),
    createRowData(`'52 TOPPS #311 MICKEY MANTLE CARD`, '📋 ', '#52MANTLE', new Date("09-01-2019"), 132, 170, 29.87),
    createRowData(`1910 TY COBB E98 CARD`, '📋 ', '#10COBB', new Date("11-01-2019"), 39, 65, 66.67),
    createRowData(`ZION WILLIAMSON GAME-WORN SNEAKERS`, '📋 ', '#18ZION', new Date("03-01-2020"), 30, 57, 90),
    createRowData(`'71 WILLIE MAYS SF GIANTS JERSEY`, '📋 ', '#71MAYS', new Date("09-01-2019"), 28.50, 41, 43.86),
    createRowData(`'99 POKEMON 1ST EDITION COMPLETE SET`, '📋 ', '#POKEMON1', new Date("06-01-2020"), 25.00, 80.16, 220.64),
    createRowData(`'56 GAME-WORN TED WILLIAMS JERSEY`, '📋 ', '#56TEDWILL', new Date("07-01-2020"), 45, 45.05, 0.11),
    createRowData(`'68 WILLIE MAYS GAME-USED BAT (SIGNED)`, '📋 ', '#68MAYS', new Date("07-01-2020"), 19.5, 24.5, 25.64),
    createRowData(`HONUS WAGNER "T206" CARD`, '📋 ', '#HONUS', new Date("12-01-2019"), 52, 75, 44.23),
    createRowData(`'03 UD EXQUISITE COLLECTION MICHAEL JORDAN CARD`, '📋 ', '#03JORDAN', new Date("08-01-2020"), 20.50, 28.75, 40.24),
    createRowData(`'51 BOWMAN MICKEY MANTLE ROOKIE CARD`, '📋 ', '#51MANTLE', new Date("07-01-2020"), 17, 18.5, 8.82),

    //WATCHES + LUXURY
    createRowData(`'70 ROLEX 5100 BETA 21 “THE TEXAN”`, '⌚️', '#70RLEX', new Date("11-01-2019"), 20, 30, 50),
    createRowData(`OMEGA SPEEDMASTER "SILVER SNOOPY"`, '⌚️', '#SNOOPY', new Date("04-01-2020"), 12.75, 17.95, 40.78),
    createRowData(`HERMÈS 35CM BORDEAUX CROCODILE BIRKIN`, '👜', '#BIRKINBOR', new Date("02-01-2020"), 26.25, 27.05, 3.05),
    createRowData(`HERMÈS 30CM HIMALAYA BIRKIN`, '👜', '#HIMALAYA', new Date("02-01-2020"), 26.25, 27.05, 3.05),
    createRowData(`AUDEMARS PIGUET ROYAL OAK A-SERIES "JUMBO"`, '⌚️', '#APROAK', new Date("12-01-2019"), 75, 70.25, -5.07),
    createRowData(`HERMÈS 30CM TANGERINE OSTRICH BIRKIN`, '👜', '#BIRKINTAN', new Date("06-01-2020"), 28, 28, 0),
    createRowData(`'85 ROLEX GMT-MASTER "NIPPLE DIAL"`, '⌚️', '#GMTBLACK1', new Date("06-01-2020"), 28, 28, 0),
    createRowData(`'18 ROLEX GMT MASTER II "PEPSI JUBILEE"`, '⌚️', '#RLEXPEPSI', new Date("11-01-2019"), 8.90, 13.50, 51.69),
    createRowData(`HERMÈS 25CM BLEU LÉZARD BIRKIN`, '👜', '#BIRKINBLU', new Date("02-01-2020"), 58, 62.10, 7.07),
    createRowData(`ROLEX SUBMARINER "SMURF"`, '⌚️', '#SMURF', new Date("11-01-2019"), 17.25, 18, 4.35),

    //COMICS + LITERATURE
    createRowData(`ALBERT EINSTEIN: PHILOSOPHER-SCIENTIST (SIGNED, 1ST ED.)`, '📘', '#EINSTEIN', new Date("12-01-2019"), 7.25, 13.60, 87.58),
    createRowData(`YOKO ONO: GRAPEFRUIT (SIGNED, 1ST ED.)`, '📘', '#YOKO', new Date("05-01-2020"), 80.00, 81.20, 1.50),
    createRowData(`'62 MARVEL INCREDIBLE HULK #1`, '📘', '#HULK1', new Date("05-01-2020"), 44.50, 45.60, 2.47),
    createRowData(`THEODORE ROOSEVELT: AFRICAN GAME TRAILS (SIGNED, 1ST ED.)`, '📘', '#ROOSEVELT', new Date("11-01-2019"), 19.50, 26.50, 35.90),
    createRowData(`'63 MARVEL AMAZING SPIDER-MAN #1`, '📘', '#SPIDER1', new Date("11-01-2019"), 22.00, 28.30, 28.64),
    createRowData(`'40 DC COMICS BATMAN #3`, '📘', '#BATMAN3', new Date("02-01-2020"), 78.00, 82.25, 5.45),
    createRowData(`JAMES JOYCE: ULYSSES (MATISSE SIGNED)`, '📘', '#ULYSSES', new Date("03-01-2020"), 51.00, 61.00, 19.61),
    createRowData(`J.R.R. TOLKIEN: THE LORD OF THE RINGS TRILOGY (1ST ED.)`, '📘', '#LOTR', new Date("06-01-2020"), 29.00, 32.00, 10.34),
    createRowData(`IAN FLEMING: CASINO ROYALE (1ST ED.)`, '📘', '#BOND1', new Date("06-01-2020"), 39.00, 42.05, 7.82),
    createRowData(`'43 DC COMICS SUPERMAN #21`, '📘', '#SUPER21', new Date("07-01-2020"), 1, 1.55, 55.00),
    createRowData(`J.D. SALINGER: THE CATCHER IN THE RYE (1ST ED.)`, '📘', '#CATCHER', new Date("06-01-2020"), 25.00, 35.00, 40),
    createRowData(`ALLEN GINSBERG: HOWL & OTHER POEMS (SIGNED,1ST ED.)`, '📘', '#AGHOWL', new Date("03-01-2020"), 38, 52, 36.84),
    createRowData(`CHARLES DICKENS: A TALE OF TWO CITIES (1ST ED.)`, '📘', '#TWOCITIES', new Date("11-01-2019"), 72.5, 102.5, 41.38),
    createRowData(`1864 SIGNED ABRAHAM LINCOLN PORTRAIT`, '📘', '#LINCOLN', new Date("07-01-2020"), 20, 20.25, 1.25),
    createRowData(`INAUGURAL ADDRESSES (INSCRIBED BY JACKIE KENNEDY)`, '📘', '#61JFK', new Date("06-01-2020"), 11.50, 11.60, 0.87),
    createRowData(`ROBERT FROST: A BOY'S WILL (1ST ED.)`, '📘', '#FROST', new Date("11-01-2019"), 67.50, 73.00, 8.15),
    createRowData(`'84 TEENAGE MUTANT NINJA TURTLES #1`, '📘', '#TMNT1', new Date("07-01-2020"), 78.2, 85, 30.77),
    createRowData(`'77 MARVEL STAR WARS #1`, '📘', '#STARWARS1', new Date("7-01-2020"), 1, 1.70, 70),
    createRowData(`HARRY POTTER AND THE PHILOSOPHER'S STONE`, '📘', '#POTTER', new Date("11-01-2019"), 24.00, 45.00, 87.50),
    createRowData(`SHAKESPEARE: COMEDIES, HISTORIES, & TRAGEDIES`, '📘', '#SHKSPR4', new Date("07-01-2020"), 115, 200, 0),
    createRowData(`'41 TIMELY COMICS CAPTAIN AMERICA COMICS #3`, '📘', '#CAPTAIN3', new Date("07-01-2020"), 37, 42, 13.51),
    createRowData(`CHURCHILL: THE SECOND WORLD WAR (SIGNED, 1ST ED.)`, '📘', '#CHURCHILL', new Date("07-01-2020"), 1, 1.80, 80),

    //WINE + WHISKEY
    //createRowData(`'13 DOMAINE LEROY VOSNE-ROMANEE LES BEAUX MONTS (12)`, '🍷', '#13BEAUX', new Date("11-01-2020"), 5.00, 5.00, 0),
    createRowData(`'14 DOMAINE DE LA ROMANEE-CONTI ASSORTMENT (12)`, '🍷', '#14DRC', new Date("09-01-2020"), 54.00, 54.00, 0),
    createRowData(`'16 SCREAMING EAGLE (12)`, '🍷', '#16SCREAG', new Date("09-01-2020"), 39.00, 39.00, 0),
    createRowData(`'05 CHATEAU LATOUR (12)`, '🍷', '#05LATOUR', new Date("09-01-2020"), 9.80, 9.80, 0),
    createRowData(`'16 CHATEAU PETRUS`, '🍷', '#16PETRUS', new Date("09-01-2020"), 5.00, 5.00, 0),
];