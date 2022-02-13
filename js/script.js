var playing = false;
var clicked = 0;
var score = 0;
var isCorrect = false;
var count = 0;

var vid_views1 = "";
var view_num1 = 0;
var vid_title1 = "";
var vid_thumbnail1 = "";

var vid_views2 = "";
var view_num2 = 0;
var vid_title2 = "";
var vid_thumbnail2 = "";

var slider_views = "";
var slider_view_num = 0;
var slider_title = "";
var slider_thumbnail = "";


var videos = [
    ['7739033810', 'Luis Fonsi - Despacito ft. Daddy Yankee ', 'https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg'],
    ['6163248024', 'Johny Johny Yes Papa 👶 THE BEST Song for Children | LooLoo Kids ', 'https://img.youtube.com/vi/F4tHL8reNCs/maxresdefault.jpg'],
    ['5414296863', 'Wiz Khalifa - See You Again ft. Charlie Puth [Official Video] Furious 7 Soundtrack ', 'https://img.youtube.com/vi/RgKAFK5djSk/maxresdefault.jpg'],
    ['4458818388', 'Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars ', 'https://img.youtube.com/vi/OPf0YbXqDm0/maxresdefault.jpg'],
    ['4336310040', 'PSY - GANGNAM STYLE(강남스타일) M/V ', 'https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg'],
    ['3843588971', 'El Chombo - Dame Tu Cosita feat. Cutty Ranks (Official Video) [Ultra Music] ', 'https://img.youtube.com/vi/FzG4uDgje3M/maxresdefault.jpg'],       
    ['3640403155', 'Maroon 5 - Sugar (Official Music Video) ', 'https://img.youtube.com/vi/09R8_2nJtjg/maxresdefault.jpg'],
    ['3520397099', 'Katy Perry - Roar (Official) ', 'https://img.youtube.com/vi/CevxZvSJLk8/maxresdefault.jpg'],
    ['3511545147', 'Justin Bieber - Sorry (PURPOSE : The Movement) ', 'https://img.youtube.com/vi/fRh_vgS2dFE/maxresdefault.jpg'],
    ['3505507129', 'OneRepublic - Counting Stars (Official Music Video) ', 'https://img.youtube.com/vi/hT_nvWreIhg/maxresdefault.jpg'],
    ['3403024158', 'Ed Sheeran - Thinking Out Loud (Official Music Video) ', 'https://img.youtube.com/vi/lp-EO5I60KA/maxresdefault.jpg'],
    ['3232199034', 'Maroon 5 - Girls Like You ft. Cardi B (Official Music Video) ', 'https://img.youtube.com/vi/aJOTlE1K90k/maxresdefault.jpg'],
    ['3229187985', 'Alan Walker - Faded ', 'https://img.youtube.com/vi/60ItHLz5WEA/maxresdefault.jpg'],
    ['3221366331', 'Katy Perry - Dark Horse (Official) ft. Juicy J ', 'https://img.youtube.com/vi/0KSOMA3QBU0/maxresdefault.jpg'],
    ['3220966810', 'Crazy Frog - Axel F (Official Video) ', 'https://img.youtube.com/vi/k85mRPqvMbE/maxresdefault.jpg'],
    ['3169529951', 'Passenger | Let Her Go (Official Video) ', 'https://img.youtube.com/vi/RBumgq5yVrA/maxresdefault.jpg'],
    ['3162660985', 'Enrique Iglesias - Bailando ft. Descemer Bueno. Gente De Zona (Español) ', 'https://img.youtube.com/vi/NUsoVlDFqZg/maxresdefault.jpg'],
    ['3142257235', 'Taylor Swift - Shake It Off ', 'https://img.youtube.com/vi/nfWlot6h_JM/maxresdefault.jpg'],
    ['3055781774', 'Shakira - Waka Waka (This Time for Africa) (The Official 2010 FIFA World Cup™ Song) ', 'https://img.youtube.com/vi/pRpeEdMmmQ0/maxresdefault.jpg'],
    ['3039257766', 'J Balvin. Willy William - Mi Gente (Official Video) ', 'https://img.youtube.com/vi/wnJ6LuUFpMo/maxresdefault.jpg'],
    ['2947028748', 'Adele - Hello ', 'https://img.youtube.com/vi/YQHsXMglC9A/maxresdefault.jpg'],
    ['2930338788', 'Taylor Swift - Blank Space ', 'https://img.youtube.com/vi/e-ORhEE9VVg/maxresdefault.jpg'],
    ['2780556324', "Charlie Puth - We Don't Talk Anymore (feat. Selena Gomez) [Official Video] ", 'https://img.youtube.com/vi/3AtDnEC4zak/maxresdefault.jpg'],
    ['2777510190', 'The Chainsmokers - Closer (Lyric) ft. Halsey ', 'https://img.youtube.com/vi/PT2_F-1esPk/maxresdefault.jpg'],
    ['2746109352', 'FROZEN | Let It Go Sing-along | Official Disney UK ', 'https://img.youtube.com/vi/L0MK7qz13bU/maxresdefault.jpg'],
    ['2711024600', 'Shakira - Chantaje (Official Video) ft. Maluma ', 'https://img.youtube.com/vi/6Mgqbai3fKo/maxresdefault.jpg'],
    ['2677852650', 'Justin Bieber - Baby (Official Music Video) ft. Ludacris ', 'https://img.youtube.com/vi/kffacxfA7G4/maxresdefault.jpg'],
    ['2637416081', 'Clean Bandit - Rockabye (feat. Sean Paul & Anne-Marie) [Official Video] ', 'https://img.youtube.com/vi/papuvlVeZg8/maxresdefault.jpg'],
    ['2544306645', 'Calvin Harris - This Is What You Came For (Official Video) ft. Rihanna ', 'https://img.youtube.com/vi/kOkQ4T5WO9E/maxresdefault.jpg'],
    ['2543915762', 'Fifth Harmony - Work from Home (Official Video) ft. Ty Dolla $ign ', 'https://img.youtube.com/vi/5GL9JoH4Sws/maxresdefault.jpg'],
    ['2502868029', 'Meghan Trainor - All About That Bass ', 'https://img.youtube.com/vi/7PCkvCPvDXk/maxresdefault.jpg'],
    ['2467098500', 'Sia - Chandelier (Official Video) ', 'https://img.youtube.com/vi/2vjPBrBU-TM/maxresdefault.jpg'],
    ['2456847357', 'Pedro Capó. Farruko - Calma (Remix - Official Video) ', 'https://img.youtube.com/vi/1_zgKRBrT0Y/maxresdefault.jpg'],
    ['2437492809', 'Daddy Yankee & Snow - Con Calma (Official Video) ', 'https://img.youtube.com/vi/DiItGE3eAyQ/maxresdefault.jpg'],
    ['2356658768', 'Eminem - Love The Way You Lie ft. Rihanna ', 'https://img.youtube.com/vi/uelHwf8o7_U/maxresdefault.jpg'],
    ['2343407751', 'Natti Natasha ❌ Ozuna - Criminal [Official Video] ', 'https://img.youtube.com/vi/VqEbCxg2bNI/maxresdefault.jpg'],
    ['2308707073', 'Casper. Nio García. Darell. Nicky Jam. Bad Bunny. Ozuna - Te Bote Remix (Video Oficial) ', 'https://img.youtube.com/vi/9jI-z9QN6g8/maxresdefault.jpg'],
    ['2280976643', 'Bruno Mars - The Lazy Song (Official Music Video) ', 'https://img.youtube.com/vi/fLexgOxsZu0/maxresdefault.jpg'],
    ['2253736241', 'DJ Snake - Taki Taki ft. Selena Gomez. Ozuna. Cardi B (Official Music Video) ', 'https://img.youtube.com/vi/ixkoVwKQaJg/maxresdefault.jpg'],
    ['2239741818', 'Ellie Goulding - Love Me Like You Do (Official Video) ', 'https://img.youtube.com/vi/AJtDXIazrMo/maxresdefault.jpg'],
    ['2192670395', 'Shawn Mendes - Treat You Better ', 'https://img.youtube.com/vi/lY2yjAdbvdQ/maxresdefault.jpg'],
    ['2191149730', 'MAGIC! - Rude (Official Video) ', 'https://img.youtube.com/vi/PIh2xe4jnpk/maxresdefault.jpg'],
    ['2182407206', 'Justin Bieber - What Do You Mean? (Official Music Video) ', 'https://img.youtube.com/vi/DK_0jXPuIr0/maxresdefault.jpg'],
    ['2178943435', 'Luis Fonsi. Demi Lovato - Échame La Culpa (Video Oficial) ', 'https://img.youtube.com/vi/TyHvyGVs42U/maxresdefault.jpg'],
    ['2149402989', 'Imagine Dragons - Believer ', 'https://img.youtube.com/vi/7wtfhZwyrcc/maxresdefault.jpg'],
    ['2132534680', 'Avicii - Wake Me Up (Official Video) ', 'https://img.youtube.com/vi/IcrbM1l_BoI/maxresdefault.jpg'],
    ['2131731496', 'LMFAO ft. Lauren Bennett. GoonRock - Party Rock Anthem (Official Video) ', 'https://img.youtube.com/vi/KQ6zr6kCPj8/maxresdefault.jpg'],
    ['2100988957', 'Becky G. Bad Bunny - Mayores (Official Video) ', 'https://img.youtube.com/vi/GMFewiplIbw/maxresdefault.jpg'],
    ['2063362845', 'John Legend - All of Me (Official Video) ', 'https://img.youtube.com/vi/450p7goxZqg/maxresdefault.jpg'],
    ['2052854623', 'Nicky Jam x J. Balvin - X (EQUIS) | Video Oficial | Prod. Afro Bros & Jeon ', 'https://img.youtube.com/vi/_I_D_8Z4sJE/maxresdefault.jpg'],
    ['2050695628', 'Fifth Harmony - Worth It (Official Video) ft. Kid Ink ', 'https://img.youtube.com/vi/YBHQbu5rbdQ/maxresdefault.jpg'],
    ['2029369203', 'The Chainsmokers & Coldplay - Something Just Like This (Lyric) ', 'https://img.youtube.com/vi/FM7MFYoylVs/maxresdefault.jpg'],
    ['2028621528', 'Christina Perri - A Thousand Years [Official Music Video] ', 'https://img.youtube.com/vi/rtOvBOTyX00/maxresdefault.jpg'],
    ['2003903628', 'The Weeknd - Starboy ft. Daft Punk (Official Video) ', 'https://img.youtube.com/vi/34Na4j8AVgA/maxresdefault.jpg'],
    ['2001386483', 'Future - Life Is Good (Official Music Video) ft. Drake ', 'https://img.youtube.com/vi/l0U7SxXHkPY/maxresdefault.jpg'],
    ['1989986828', 'Becky G. Natti Natasha - Sin Pijama (Official Video) ', 'https://img.youtube.com/vi/zEf423kYfqk/maxresdefault.jpg'],
    ['1979004206', 'Ariana Grande ft. Nicki Minaj - Side To Side (Official Video) ft. Nicki Minaj ', 'https://img.youtube.com/vi/SXiSVQZLje8/maxresdefault.jpg'],
    ['1979147934', 'Adele - Rolling in the Deep (Official Music Video) ', 'https://img.youtube.com/vi/rYEDA3JcQqw/maxresdefault.jpg'],
    ['1917654741', 'ROSALÍA. J Balvin - Con Altura (Official Video) ft. El Guincho ', 'https://img.youtube.com/vi/p7bfOZek9t4/maxresdefault.jpg'],
    ['1880526454', 'Rihanna - Diamonds ', 'https://img.youtube.com/vi/lWA2pjMjpBs/maxresdefault.jpg'],
    ['1871645519', 'Jennifer Lopez - On The Floor ft. Pitbull ', 'https://img.youtube.com/vi/t4H_Zoh7G5A/maxresdefault.jpg'],
    ['1855951826', 'Camila Cabello - Havana (Audio) ft. Young Thug ', 'https://img.youtube.com/vi/HCjNJDNzw8Y/maxresdefault.jpg'],
    ['1855735803', 'Gotye - Somebody That I Used To Know (feat. Kimbra) [Official Music Video] ', 'https://img.youtube.com/vi/8UVNT4wvIGY/maxresdefault.jpg'],
    ['1850709851', 'Silentó - Watch Me (Whip/Nae Nae) (Official) ', 'https://img.youtube.com/vi/vjW8wmF5VWc/maxresdefault.jpg'],
    ['1849420389', 'Romeo Santos - Propuesta Indecente (Official Video) ', 'https://img.youtube.com/vi/QFs3PIZb3js/maxresdefault.jpg'],
    ['1836580450', 'J. Balvin - Ay Vamos (Official Video) ', 'https://img.youtube.com/vi/TapXs54Ah3E/maxresdefault.jpg'],
    ['1830793519', 'Adele - Someone Like You (Official Music Video) ', 'https://img.youtube.com/vi/hLQl3WQQoQ0/maxresdefault.jpg'],
    ['1830704862', 'Anuel AA. Daddy Yankee. Karol G. Ozuna & J Balvin - China (Video Oficial) ', 'https://img.youtube.com/vi/0VR3dfZf9Yg/maxresdefault.jpg'],
    ['1820419459', "Guns N' Roses - November Rain ", 'https://img.youtube.com/vi/8SbUC-UaAxE/maxresdefault.jpg'],
    ['1813886682', 'Drake - Hotline Bling ', 'https://img.youtube.com/vi/uxpDa-c-4Mc/maxresdefault.jpg'],
    ['1808733256', 'BLACKPINK - ‘뚜두뚜두 (DDU-DU DDU-DU)’ M/V ', 'https://img.youtube.com/vi/IHNzOHi8sJs/maxresdefault.jpg'],
    ['1805468008', 'Daddy Yankee  - Dura (Official Video) ', 'https://img.youtube.com/vi/sGIm0-dQd8M/maxresdefault.jpg'],
    ['1804267611', 'twenty one pilots: Heathens (from Suicide Squad: The Album) [OFFICIAL VIDEO] ', 'https://img.youtube.com/vi/UprcpdwuwCg/maxresdefault.jpg'],
    ['1803999589', 'ZAYN - Dusk Till Dawn (Official Video) ft. Sia ', 'https://img.youtube.com/vi/tt2k8PGm-TI/maxresdefault.jpg'],
    ['1793705186', "The Chainsmokers - Don't Let Me Down (Official Video) ft. Daya ", 'https://img.youtube.com/vi/Io0fBr1XBUA/maxresdefault.jpg'],
    ['1784726501', 'TONES AND I - DANCE MONKEY (OFFICIAL VIDEO) ', 'https://img.youtube.com/vi/q0hyYWKXF0Q/maxresdefault.jpg'],
    ['1783246715', 'The Weeknd - The Hills (Official Video) ', 'https://img.youtube.com/vi/yzTuBuRdAyA/maxresdefault.jpg'],
    ['1778097130', 'Imagine Dragons - Thunder ', 'https://img.youtube.com/vi/fKopy74weus/maxresdefault.jpg'],
    ['1774891508', 'Jessie J. Ariana Grande. Nicki Minaj - Bang Bang (Official Video) ', 'https://img.youtube.com/vi/0HDdjwpPM3Y/maxresdefault.jpg'],
    ['1765735433', "Ricky Martin - Vente Pa' Ca (Official Video) ft. Maluma ", 'https://img.youtube.com/vi/iOe6dI2JhgU/maxresdefault.jpg'],
    ['1758471578', 'Maluma - Felices los 4 (Official Video) ', 'https://img.youtube.com/vi/t_jHrUE5IOk/maxresdefault.jpg'],
    ['1743880833', 'Numb [Official Music Video] - Linkin Park ', 'https://img.youtube.com/vi/kXYiU_JCYtU/maxresdefault.jpg'],
    ['1735413554', 'Jhay Cortez. J. Balvin. Bad Bunny - No Me Conoce (Remix) ', 'https://img.youtube.com/vi/w2C6RhQBYlg/maxresdefault.jpg'],
    ['1723651855', 'Post Malone. Swae Lee - Sunflower (Spider-Man: Into the Spider-Verse) ', 'https://img.youtube.com/vi/ApXoWvfEYVU/maxresdefault.jpg'],
    ['1703065913', 'Sia - Cheap Thrills (Lyric Video) ft. Sean Paul ', 'https://img.youtube.com/vi/nYh-n7EOtMA/maxresdefault.jpg'],
    ['1690793994', 'Bruno Mars - Just The Way You Are (Official Music Video) ', 'https://img.youtube.com/vi/LjhCEhWiKXk/maxresdefault.jpg'],
    ['1690143574', 'MC Fioti - Bum Bum Tam Tam (KondZilla) | Official Music Video ', 'https://img.youtube.com/vi/_P7S2lKif-A/maxresdefault.jpg'],
    ['1676192154', 'CNCO - Reggaetón Lento (Bailemos) ', 'https://img.youtube.com/vi/7jpqqBX-Myw/maxresdefault.jpg'],
    ['1662208589', 'Chino y Nacho - Andas En Mi Cabeza ft. Daddy Yankee (Video Oficial) ', 'https://img.youtube.com/vi/AMTAQ-AJS4Y/maxresdefault.jpg'],
    ['1657468715', 'Jason Derulo - Swalla (feat. Nicki Minaj & Ty Dolla $ign) [Official Music Video] ', 'https://img.youtube.com/vi/NGLxoKOvzu4/maxresdefault.jpg'],
    ['1652455518', 'MACKLEMORE & RYAN LEWIS - THRIFT SHOP FEAT. WANZ (OFFICIAL VIDEO) ', 'https://img.youtube.com/vi/QK8mJJJvaes/maxresdefault.jpg'],
    ['1642096148', 'Justin Bieber - Love Yourself (Official Music Video) ', 'https://img.youtube.com/vi/oyEuk8j8imI/maxresdefault.jpg'],
    ['1614621066', "DJ Khaled - I'm The One ft. Justin Bieber. Quavo. Chance the Rapper. Lil Wayne ", 'https://img.youtube.com/vi/weeI1G46q0o/maxresdefault.jpg'],
    ['1611981340', 'Eminem - Not Afraid (Official Video) ', 'https://img.youtube.com/vi/j5-yKhDd64s/maxresdefault.jpg'],
    ['1606105743', 'Daddy Yankee - Shaky Shaky (Official Video) ', 'https://img.youtube.com/vi/aKuivabiOns/maxresdefault.jpg'],
    ['1607090203', 'Danny Ocean -  Me Rehúso (Official Audio) ', 'https://img.youtube.com/vi/aDCcLQto5BM/maxresdefault.jpg'],
    ['1600896621', 'Coldplay - Hymn For The Weekend (Official Video) ', 'https://img.youtube.com/vi/YykjpeuMNEk/maxresdefault.jpg'],
    ['1576609231', 'Maluma - Corazón (Official Video) ft. Nego do Borel ', 'https://img.youtube.com/vi/GmHrjFIWl6U/maxresdefault.jpg'],
    ['1554955385', 'Una Lady Como Tú - MTZ Manuel Turizo | Video Oficial ', 'https://img.youtube.com/vi/VYtJAuoZxcc/maxresdefault.jpg'],
    ['1535110182', 'Coldplay - Paradise (Official Video) ', 'https://img.youtube.com/vi/1G4isv_Fylg/maxresdefault.jpg'],
    ['1515987641', 'Ozuna - Se Preparó (Video Oficial) | Odisea ', 'https://img.youtube.com/vi/KWGrPNqz4uc/maxresdefault.jpg'],
    ['1515750715', 'CAN\'T STOP THE FEELING! (from DreamWorks Animation\'s "TROLLS") (Official Video) ', 'https://img.youtube.com/vi/ru0K8uYEZWw/maxresdefault.jpg'],
    ['1514033378', 'Lady Gaga - Bad Romance (Official Music Video) ', 'https://img.youtube.com/vi/qrO4YZeyl0I/maxresdefault.jpg'],
    ['1512891080', 'Calvin Harris - Summer (Official Video) ', 'https://img.youtube.com/vi/ebXbLfLACGM/maxresdefault.jpg'],
    ['1514800651', "BLACKPINK - 'Kill This Love' M/V ", 'https://img.youtube.com/vi/2S24-y0Ij3Y/maxresdefault.jpg'],
    ['1506424333', '22. Hasta el Amanecer - Nicky Jam | Video Oficial ', 'https://img.youtube.com/vi/kkx-7fsiWgg/maxresdefault.jpg'],
    ['1494467639', 'Carlos Vives. Sebastián Yatra - Robarte un Beso (Official Video) ', 'https://img.youtube.com/vi/Mtau4v6foHA/maxresdefault.jpg'],
    ['1486342747', 'Ellie Goulding - Burn (Official Video) ', 'https://img.youtube.com/vi/CGyEd0aKWZE/maxresdefault.jpg'],
    ['1484282676', 'Calvin Harris & Disciples - How Deep Is Your Love ', 'https://img.youtube.com/vi/EgqUJOudrcM/maxresdefault.jpg'],
    ['1478841982', 'Carlos Vives. Shakira - La Bicicleta ', 'https://img.youtube.com/vi/-UV0QGLmYys/maxresdefault.jpg'],
    ['1478017613', 'Taylor Swift - Bad Blood ft. Kendrick Lamar ', 'https://img.youtube.com/vi/QcIy9NiNbmo/maxresdefault.jpg'],
    ['1474000166', 'Bruno Mars - 24K Magic (Official Music Video) ', 'https://img.youtube.com/vi/UqyT8IEBkvY/maxresdefault.jpg'],
    ['1467600158', 'PSY - GENTLEMAN M/V ', 'https://img.youtube.com/vi/ASO_zypdnsQ/maxresdefault.jpg'],
    ['1467856509', 'Billie Eilish. Khalid - lovely ', 'https://img.youtube.com/vi/V1Pl8CzNzCw/maxresdefault.jpg'],
    ['1465934070', 'Los Ángeles Azules - Nunca Es Suficiente ft. Natalia Lafourcade (Live) ', 'https://img.youtube.com/vi/k76BgIb89-s/maxresdefault.jpg'],
    ['1457299763', 'PULCINO PIO - El Pollito Pio (Official video) ', 'https://img.youtube.com/vi/dhsy6epaJGs/maxresdefault.jpg'],
    ['1457622255', "BTS (방탄소년단) '작은 것들을 위한 시 (Boy With Luv) (feat. Halsey)' Official MV ", 'https://img.youtube.com/vi/XsX3ATc3FbA/maxresdefault.jpg'],
    ['1446304604', 'Mike Posner - I Took A Pill In Ibiza (Seeb Remix) (Explicit) ', 'https://img.youtube.com/vi/foE1mO2yM04/maxresdefault.jpg'],
    ['1437880510', "Sam Smith - I'm Not The Only One (Official Video) ", 'https://img.youtube.com/vi/nCkpzqqog4k/maxresdefault.jpg'],
    ['1433896472', "Rag'n'Bone Man - Human (Official Video) ", 'https://img.youtube.com/vi/L3wKzyIN1yk/maxresdefault.jpg'],
    ['1425729491', 'Nirvana - Smells Like Teen Spirit (Official Music Video) ', 'https://img.youtube.com/vi/hTWKbfoikeg/maxresdefault.jpg'],
    ['1423147800', 'Carly Rae Jepsen - Call Me Maybe ', 'https://img.youtube.com/vi/fWNaR-rxAic/maxresdefault.jpg'],
    ['1422157961', 'Shawn Mendes - Stitches (Official Video) ', 'https://img.youtube.com/vi/VbfpW0pbvaU/maxresdefault.jpg'],
    ['1422144559', 'Lehanga : Jass Manak (Official Video) Satti Dhillon | Latest Punjabi Songs | GK DIGITAL | Geet MP3 ', 'https://img.youtube.com/vi/RKioDWlajvo/maxresdefault.jpg'],
    ['1418834344', 'Post Malone - Congratulations ft. Quavo ', 'https://img.youtube.com/vi/SC4xMk98Pdc/maxresdefault.jpg'],
    ['1417098236', 'Wisin - Escápate Conmigo (Official Video) ft. Ozuna ', 'https://img.youtube.com/vi/3X9wEwulYhk/maxresdefault.jpg'],
    ['1415742846', 'a-ha - Take On Me (Official Video) [Remastered in 4K] ', 'https://img.youtube.com/vi/djV11Xbc914/maxresdefault.jpg'],
    ['1410225495', "BTS (방탄소년단) 'DNA' Official MV ", 'https://img.youtube.com/vi/MBdVXkSdhwU/maxresdefault.jpg'],
    ['1399924038', 'Gente de Zona - La Gozadera (Official Video) ft. Marc Anthony ', 'https://img.youtube.com/vi/VMp55KH_3wo/maxresdefault.jpg'],
    ['1397396287', "Drake - God's Plan ", 'https://img.youtube.com/vi/xpVfcZ0ZcFM/maxresdefault.jpg'],
    ['1396868798', 'Katy Perry - Last Friday Night (T.G.I.F.) (Official Music Video) ', 'https://img.youtube.com/vi/KlyXNRrsk4A/maxresdefault.jpg'],
    ['1392506357', "James Arthur - Say You Won't Let Go ", 'https://img.youtube.com/vi/0yW7w8F2TVA/maxresdefault.jpg'],
    ['1388110772', 'Enrique Iglesias - SUBEME LA RADIO (Official Video) ft. Descemer Bueno. Zion & Lennox ', 'https://img.youtube.com/vi/9sg-A-eS6Ig/maxresdefault.jpg'],
    ['1389197455', "BTS (방탄소년단) 'Dynamite' Official MV ", 'https://img.youtube.com/vi/gdZLi9oWNZg/maxresdefault.jpg'],
    ['1382010845', 'Laung Laachi Title Song  Mannat Noor | Ammy Virk. Neeru Bajwa Amberdeep | Latest Punjabi Movie 2018 ', 'https://img.youtube.com/vi/YpkJO_GrCo0/maxresdefault.jpg'],
    ['1378002100', 'P!nk - Just Give Me A Reason ft. Nate Ruess ', 'https://img.youtube.com/vi/OpQFFLBMEPI/maxresdefault.jpg'],
    ['1364544181', '50 Cent - In Da Club (Official Music Video) ', 'https://img.youtube.com/vi/5qm8PH4xAss/maxresdefault.jpg'],
    ['1360862721', 'Vaaste Song: Dhvani Bhanushali. Tanishk Bagchi | Nikhil D | Bhushan Kumar | Radhika Rao. Vinay Sapru ', 'https://img.youtube.com/vi/BBAyRBTfsOU/maxresdefault.jpg'],
    ['1353965525', '21. El Perdón - Nicky Jam y Enrique Iglesias  [Official Music Video YTMAs] ', 'https://img.youtube.com/vi/hXI8RQYC36Q/maxresdefault.jpg'],
    ['1352750766', 'Imagine Dragons - Radioactive ', 'https://img.youtube.com/vi/ktvTqknDobU/maxresdefault.jpg'],
    ['1349980981', 'Katy Perry - Firework (Official Music Video) ', 'https://img.youtube.com/vi/QGJuMBdaqIw/maxresdefault.jpg'],
    ['1350133920', 'French Montana - Unforgettable ft. Swae Lee ', 'https://img.youtube.com/vi/CTFtOOh47oo/maxresdefault.jpg'],
    ['1349697021', 'Shawn Mendes. Camila Cabello - Señorita ', 'https://img.youtube.com/vi/Pkh8UtuejGw/maxresdefault.jpg'],
    ['1345903836', 'Pitbull - Timber (Official Video) ft. Ke$ha ', 'https://img.youtube.com/vi/hHUbLv4ThOo/maxresdefault.jpg'],
    ['1342068947', "Guns N' Roses - Sweet Child O' Mine (Official Music Video) ", 'https://img.youtube.com/vi/1w7OgIMMRc4/maxresdefault.jpg'],
    ['1335833185', '52 GAJ KA DAMAN | PRANJAL DAHIYA | AMAN JAJI | RENUKA PANWAR  | MUKESH JAJI | SAHIL SANDHU ', 'https://img.youtube.com/vi/CZt-rVn2BJs/maxresdefault.jpg'],
    ['1334089852', 'Alex Rose  ft. Cazzu. Lenny Tavarez. Lyanno & Rauw Alejandro - Toda (Remix) [Video Oficial] ', 'https://img.youtube.com/vi/lKDGxAHZt0E/maxresdefault.jpg'],
    ['1329767773', 'One Direction - What Makes You Beautiful (Official Video) ', 'https://img.youtube.com/vi/QJO3ROT-A4E/maxresdefault.jpg'],
    ['1329386649', 'Thalia. Natti Natasha - No Me Acuerdo (Official Video) ', 'https://img.youtube.com/vi/iQEVguV71sI/maxresdefault.jpg'],
    ['1327969703', 'In The End [Official HD Music Video] - Linkin Park ', 'https://img.youtube.com/vi/eVTXPUF4Oz4/maxresdefault.jpg'],
    ['1328393204', 'Eminem - Without Me (Official Music Video) ', 'https://img.youtube.com/vi/YVkUvmDQ3HY/maxresdefault.jpg'],
    ['1323579812', 'Sam Smith - Too Good At Goodbyes (Official Video) ', 'https://img.youtube.com/vi/J_ub7Etch2U/maxresdefault.jpg'],
    ['1321782422', 'Ariana Grande ft. Iggy Azalea - Problem (Official Video) ', 'https://img.youtube.com/vi/iS1g8G_njx8/maxresdefault.jpg'],
    ['1320755967', 'Maari 2 - Rowdy Baby (Video Song) | Dhanush. Sai Pallavi | Yuvan Shankar Raja | Balaji Mohan ', 'https://img.youtube.com/vi/x6Q7c9RyMzk/maxresdefault.jpg'],
    ['1314999281', "AronChupa. Little Sis Nora - I'm an Albatraoz | OFFICIAL VIDEO ", 'https://img.youtube.com/vi/Bznxx12Ptl0/maxresdefault.jpg'],
    ['1310963621', 'Taylor Swift - Look What You Made Me Do ', 'https://img.youtube.com/vi/3tmd-ClpJxA/maxresdefault.jpg'],
    ['1304642248', 'Chris Jedi - Ahora Dice (Official Video) ft. J. Balvin. Ozuna. Arcángel ', 'https://img.youtube.com/vi/c73Cu3TQnlg/maxresdefault.jpg'],
    ['1299884312', 'Joey Montana - Picky ', 'https://img.youtube.com/vi/RqpKDkVzlqU/maxresdefault.jpg'],
    ['1294637432', 'KAROL G. Nicki Minaj - Tusa (Official Video) ', 'https://img.youtube.com/vi/tbneQDc2H3I/maxresdefault.jpg'],
    ['1290499424', 'Prince Royce - Darte un Beso ', 'https://img.youtube.com/vi/bdOXnTbyk0g/maxresdefault.jpg'],
    ['1285713512', 'Tyga - Taste (Official Video) ft. Offset ', 'https://img.youtube.com/vi/LjxulQ1bEWg/maxresdefault.jpg'],
    ['1281268761', 'Taylor Swift - You Belong With Me ', 'https://img.youtube.com/vi/VuNIsY6JdUw/maxresdefault.jpg'],
    ['1278513653', 'BAD BUNNY x DRAKE - MÍA (Official Video) ', 'https://img.youtube.com/vi/OSUxrSe5GbI/maxresdefault.jpg'],
    ['1272113142', 'Eminem - Rap God (Explicit) ', 'https://img.youtube.com/vi/XbGs_qK2PQA/maxresdefault.jpg'],
    ['1264574612', 'BEBE - 6ix9ine Ft. Anuel AA (Prod. By Ronny J) (Official Music Video) ', 'https://img.youtube.com/vi/ycV6cnK3SIs/maxresdefault.jpg'],
    ['1263193283', 'Don Omar - Danza Kuduro ft. Lucenzo ', 'https://img.youtube.com/vi/7zp1TbLFPp8/maxresdefault.jpg'],
    ['1258153827', 'Rihanna - Work (Explicit) ft. Drake ', 'https://img.youtube.com/vi/HL1UzIK-flA/maxresdefault.jpg'],
    ['1252231373', 'Maluma - El Perdedor (Official Video) ', 'https://img.youtube.com/vi/PJniSb91tvo/maxresdefault.jpg'],
    ['1252651121', "4 Non Blondes - What's Up (Official Music Video) ", 'https://img.youtube.com/vi/6NXnxTNIWkc/maxresdefault.jpg'],
    ['1247640793', 'Beyoncé - Halo ', 'https://img.youtube.com/vi/bnVUHWCynig/maxresdefault.jpg'],
    ['1244781841', 'Rahat Fateh Ali Khan - Zaroori Tha ', 'https://img.youtube.com/vi/6-n_szx2XRE/maxresdefault.jpg'],
    ['1241001117', 'Ricky Martin - La Mordidita (Official Video) ft. Yotuel ', 'https://img.youtube.com/vi/lBztnahrOFw/maxresdefault.jpg'],
    ['1237382497', "The Weeknd - Can't Feel My Face (Official Video) ", 'https://img.youtube.com/vi/KEI4qSrkPAs/maxresdefault.jpg'],
    ['1237392896', 'HA-ASH - Lo Aprendí de Ti (Primera Fila - Hecho Realidad [En Vivo]) ', 'https://img.youtube.com/vi/Uws510cVia4/maxresdefault.jpg'],
    ['1234132018', 'twenty one pilots - Ride (Official Video) ', 'https://img.youtube.com/vi/Pw-0pbY9JeU/maxresdefault.jpg'],
    ['1226180470', 'Anuel AA. KAROL G - Secreto ', 'https://img.youtube.com/vi/gFZfwWZV074/maxresdefault.jpg'],
    ['1208183476', 'Shakira - La La La (Brazil 2014) ft. Carlinhos Brown ', 'https://img.youtube.com/vi/7-7knsP2n5w/maxresdefault.jpg'],
    ['1209236141', 'Arcangel x Bad Bunny X Dj Luian X Mambo Kingz - Tu No Vive Asi [Video oficial] ', 'https://img.youtube.com/vi/CUYrEiymUMY/maxresdefault.jpg'],
    ['1203934653', 'Sia - Elastic Heart feat. Shia LaBeouf & Maddie Ziegler (Official Video) ', 'https://img.youtube.com/vi/KWZGAExj-es/maxresdefault.jpg'],
    ['1195018807', 'Mile Ho Tum - Reprise Version | Neha Kakkar | Tony Kakkar | Fever ', 'https://img.youtube.com/vi/N2-HsIYd0Go/maxresdefault.jpg'],
    ['1193937986', 'Katy Perry - Bon Appétit (Official) ft. Migos ', 'https://img.youtube.com/vi/dPI-mRFEIH0/maxresdefault.jpg'],
    ['1190890803', 'The Cranberries - Zombie (Official Music Video) ', 'https://img.youtube.com/vi/6Ejga4kJUts/maxresdefault.jpg'],
    ['1184147414', 'Eminem - Lose Yourself [HD] ', 'https://img.youtube.com/vi/_Yhyp-_hX2s/maxresdefault.jpg'],
    ['1182513555', 'Whitney Houston - I Will Always Love You (Official 4K Video) ', 'https://img.youtube.com/vi/3JWTaaS7LdU/maxresdefault.jpg'],
    ['1172024176', 'Daddy Yankee - Limbo (Video Oficial) ', 'https://img.youtube.com/vi/6BTjG-dhf5s/maxresdefault.jpg'],
    ['1171730300', 'Christian Nodal - Adiós Amor (Video Oficial) ', 'https://img.youtube.com/vi/ETLoTxVVvjM/maxresdefault.jpg'],
    ['1170439200', 'MC Kevinho - Olha a Explosão (KondZilla) | Official Music Video ', 'https://img.youtube.com/vi/3yd_eoMOvqk/maxresdefault.jpg'],
    ['1169564031', "Shakira - Can't Remember to Forget You (Official Video) ft. Rihanna ", 'https://img.youtube.com/vi/o3mP3mJDL2k/maxresdefault.jpg'],
    ['1157250614', 'Billie Eilish - bad guy ', 'https://img.youtube.com/vi/DyDfgMOUjCI/maxresdefault.jpg'],
    ['1152363341', 'OMI - Cheerleader (Felix Jaehn Remix) [Official Video] ', 'https://img.youtube.com/vi/jGflUbPQfW8/maxresdefault.jpg'],
    ['1149860324', 'Chris Brown - Loyal (Official Video) ft. Lil Wayne. Tyga ', 'https://img.youtube.com/vi/JXRN_LkCa_o/maxresdefault.jpg'],
    ['1149085386', 'Rick Astley - Never Gonna Give You Up (Official Music Video) ', 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'],
    ['1145332160', 'Pitbull - Rain Over Me ft. Marc Anthony ', 'https://img.youtube.com/vi/SmM0653YvXU/maxresdefault.jpg'],
    ['1145465943', 'SIMMBA: Aankh Marey Lyrical | Ranveer Singh. Sara Ali Khan | Tanishk Bagchi. Mika Singh. Neha. Kumar S ', 'https://img.youtube.com/vi/vu5-aKf_QqA/maxresdefault.jpg'],
    ['1144501687', 'Miley Cyrus - Wrecking Ball (Official Video) ', 'https://img.youtube.com/vi/My2FRPA3Gf8/maxresdefault.jpg'],
    ['1143960058', 'DILBAR Lyrical | Satyameva Jayate |John Abraham. Nora Fatehi. Tanishk B. Neha Kakkar. Dhvani. Ikka ', 'https://img.youtube.com/vi/JFcgOboQZ08/maxresdefault.jpg'],
    ['1141398965', 'Enrique Iglesias - El Perdedor (Pop) ft. Marco Antonio Solís ', 'https://img.youtube.com/vi/tLcfAnN2QgY/maxresdefault.jpg'],
    ['1140615451', "BTS (방탄소년단) 'MIC Drop (Steve Aoki Remix)' Official MV ", 'https://img.youtube.com/vi/kTlv5_Bs8aw/maxresdefault.jpg'],
    ['1136480958', 'System Of A Down - Chop Suey! (Official HD Video) ', 'https://img.youtube.com/vi/CSvFpBOe8eY/maxresdefault.jpg'],
    ['1135243967', 'J Balvin - 6 AM ft. Farruko (Official Video) ', 'https://img.youtube.com/vi/yUV9JwiQLog/maxresdefault.jpg'],
    ['1136179860', "Dwayne Johnson - You're Welcome (from Moana/Official Video) ", 'https://img.youtube.com/vi/79DijItQXMM/maxresdefault.jpg'],
    ['1134507709', "BLACKPINK - '마지막처럼 (AS IF IT'S YOUR LAST)' M/V ", 'https://img.youtube.com/vi/Amq-qlqbjYA/maxresdefault.jpg'],
    ['1133548088', 'XXXTENTACION - SAD! ', 'https://img.youtube.com/vi/pgN-vvVVxMA/maxresdefault.jpg'],
    ['1131717929', 'Naughty Boy - La la la ft. Sam Smith (Official Video) ', 'https://img.youtube.com/vi/3O1_3zBUKM8/maxresdefault.jpg'],
    ['1132459783', 'Michael Jackson - Billie Jean (Official Video) ', 'https://img.youtube.com/vi/Zi_XLOBDo_Y/maxresdefault.jpg'],
    ['1128012339', 'Ariana Grande - Break Free ft. Zedd ', 'https://img.youtube.com/vi/L8eRzOYhLuw/maxresdefault.jpg'],
    ['1127588189', 'Lil Pump - Gucci Gang [Official Music Video] ', 'https://img.youtube.com/vi/4LfJnj66HVQ/maxresdefault.jpg'],
    ['1131592540', 'J.Geco - Chicken Song ', 'https://img.youtube.com/vi/msSc7Mv0QHY/maxresdefault.jpg'],
    ['1124210704', 'Nelly - Dilemma (Official Music Video) ft. Kelly Rowland ', 'https://img.youtube.com/vi/8WYHDfJDPDc/maxresdefault.jpg'],
    ['1122361289', 'Migos - Bad and Boujee ft Lil Uzi Vert [Official Video] ', 'https://img.youtube.com/vi/S-sJp1FfG7Q/maxresdefault.jpg'],
    ['1123252598', 'Lut Gaye (Full Song) Emraan Hashmi. Yukti | Jubin N. Tanishk B. Manoj M | Bhushan K | Radhika-Vinay ', 'https://img.youtube.com/vi/sCbbMZ-q4-I/maxresdefault.jpg'],
    ['1114369756', 'Sam Smith - Stay With Me (Official Video) ', 'https://img.youtube.com/vi/pB-5XG-DbAA/maxresdefault.jpg'],
    ['1113215746', 'Guru Randhawa: High Rated Gabru Official Song | DirectorGifty | Bhushan Kumar | T-Series ', 'https://img.youtube.com/vi/hjWf8A0YNSE/maxresdefault.jpg'],
    ['1111488179', 'Zion & Lennox ft. J Balvin - Otra Vez (Video Oficial) ', 'https://img.youtube.com/vi/6R5i6wQCOCQ/maxresdefault.jpg'],
    ['1108331316', 'Pharrell Williams - Happy (Official Music Video) ', 'https://img.youtube.com/vi/y6Sxv-sUYtM/maxresdefault.jpg'],
    ['1106613476', 'Bruno Mars - When I Was Your Man (Official Music Video) ', 'https://img.youtube.com/vi/ekzHIouo8Q4/maxresdefault.jpg'],
    ['1103936275', 'Los Ángeles Azules - Mis Sentimientos ft. Ximena Sariñana (Live) ', 'https://img.youtube.com/vi/BokdSWC2R68/maxresdefault.jpg'],
    ['1098290302', 'ZAYN - PILLOWTALK (Official Music Video) ', 'https://img.youtube.com/vi/C_3d6GntKbk/maxresdefault.jpg'],
    ['1086607400', 'DJ Snake. Lil Jon - Turn Down for What ', 'https://img.youtube.com/vi/HMUDVMiITOU/maxresdefault.jpg'],
    ['1085860031', 'Katy Perry - Hot N Cold (Official) ', 'https://img.youtube.com/vi/kTHNpusq654/maxresdefault.jpg'],
    ['1086537082', "Bon Jovi - It's My Life (Official Music Video) ", 'https://img.youtube.com/vi/vx2u5uUu3DE/maxresdefault.jpg'],
    ['1079325499', 'FILHALL | Akshay Kumar Ft Nupur Sanon | BPraak | Jaani | Arvindr Khaira | Ammy Virk | DESI MELODIES ', 'https://img.youtube.com/vi/hMy5za-m5Ew/maxresdefault.jpg'],
    ['1078258659', 'Chino & Nacho - Me Voy Enamorando ft. Farruko (Remix) (Official Music Video) ', 'https://img.youtube.com/vi/0yr75-gxVtM/maxresdefault.jpg'],
    ['1077204622', "BTS (방탄소년단) 'IDOL' Official MV ", 'https://img.youtube.com/vi/pBuZEGYXA6E/maxresdefault.jpg'],
    ['1074522083', 'Iggy Azalea - Fancy ft. Charli XCX (Official Music Video) ', 'https://img.youtube.com/vi/O-zpOMYRi0w/maxresdefault.jpg'],
    ['1073581072', 'Ariana Grande - no tears left to cry (Official Video) ', 'https://img.youtube.com/vi/ffxKSjUwKdU/maxresdefault.jpg'],
    ['1070431938', 'Marc Anthony - Vivir Mi Vida (Official Video) ', 'https://img.youtube.com/vi/YXnjy5YlDwk/maxresdefault.jpg'],
    ['1071081878', "BTS (방탄소년단) 'FAKE LOVE' Official MV ", 'https://img.youtube.com/vi/7C2z4GqqS5E/maxresdefault.jpg'],
    ['1068652459', 'Travesuras - Nicky Jam | Video Oficial ', 'https://img.youtube.com/vi/OxxggwHFj7M/maxresdefault.jpg'],
    ['1065261173', 'Bruno Mars - Grenade (Official Music Video) ', 'https://img.youtube.com/vi/SR6iYWJxHqs/maxresdefault.jpg'],
    ['1064052074', "Shawn Mendes - There's Nothing Holdin' Me Back ", 'https://img.youtube.com/vi/dT2owtxkU8k/maxresdefault.jpg'],
    ['1057401592', 'Justin Bieber - Never Say Never (Official Music Video) ft. Jaden Smith ', 'https://img.youtube.com/vi/_Z5-P9v3F8w/maxresdefault.jpg'],
    ['1054781486', 'DJ Snake - Let Me Love You ft. Justin Bieber (Official Video) ', 'https://img.youtube.com/vi/euCqAq6BRa4/maxresdefault.jpg'],
    ['1052805292', 'AC/DC - Thunderstruck (Official Video) ', 'https://img.youtube.com/vi/v2AC41dglnM/maxresdefault.jpg'],
    ['1051762198', "BLACKPINK - 'How You Like That' M/V ", 'https://img.youtube.com/vi/ioNng23DkIM/maxresdefault.jpg'],
    ['1049562322', 'Ylvis - The Fox (What Does The Fox Say?) [Official music video HD] ', 'https://img.youtube.com/vi/jofNR_WkoCE/maxresdefault.jpg'],
    ['1049295646', 'Enrique Iglesias - DUELE EL CORAZON ft. Wisin ', 'https://img.youtube.com/vi/xFutjZEBTXs/maxresdefault.jpg'],
    ['1047814446', 'Michel Teló - Ai Se Eu Te Pego -  Video Oficial (Assim você me mata) ', 'https://img.youtube.com/vi/hcm55lU9knw/maxresdefault.jpg'],
    ['1046883295', 'DJ Khaled - Wild Thoughts (Official Video) ft. Rihanna. Bryson Tiller ', 'https://img.youtube.com/vi/fyaI4-5849w/maxresdefault.jpg'],
    ['1048085518', 'Paulo Londra - Adan y Eva (Official Video) ', 'https://img.youtube.com/vi/aSjflT_J0Xo/maxresdefault.jpg'],
    ['1046478742', 'Maluma - Sin Contrato (Official Video) ', 'https://img.youtube.com/vi/9xByMBYDRmY/maxresdefault.jpg'],
    ['1045269871', 'Nicki Minaj - Anaconda ', 'https://img.youtube.com/vi/LDZX4ooRsWs/maxresdefault.jpg'],
    ['1045408947', 'Bebe Rexha - Meant to Be (feat. Florida Georgia Line) [Official Music Video] ', 'https://img.youtube.com/vi/zDo0H8Fm7d0/maxresdefault.jpg'],
    ['1046499858', 'Paulo Londra ft Lenny Tavarez - Nena Maldicion (Official Video) ', 'https://img.youtube.com/vi/bX3S-_jUauc/maxresdefault.jpg'],
    ['1042193212', 'Maluma - Borro Cassette (Official Video) ', 'https://img.youtube.com/vi/Xk0wdDTTPA0/maxresdefault.jpg'],
    ['1042491126', 'Backstreet Boys - I Want It That Way (Official HD Video) ', 'https://img.youtube.com/vi/4fndeDfaWCg/maxresdefault.jpg'],
    ['1040442000', "Shakira - Hips Don't Lie (Official 4K Video) ft. Wyclef Jean ", 'https://img.youtube.com/vi/DUT5rEU6pqM/maxresdefault.jpg'],
    ['1037488448', 'Romeo Santos - Eres Mía ', 'https://img.youtube.com/vi/8iPcqtHoR3U/maxresdefault.jpg'],
    ['1034691276', 'J Balvin BONITA feat. Jowell & Randy ', 'https://img.youtube.com/vi/eAqeed4INns/maxresdefault.jpg'],
    ['1030814550', 'Cham Cham Full Video | BAAGHI | Tiger Shroff. Shraddha Kapoor| Meet Bros. Monali Thakur| Sabbir Khan ', 'https://img.youtube.com/vi/f6vY6tYvKGA/maxresdefault.jpg'],
    ['1029574205', 'BAD BUNNY x JHAY CORTEZ - DÁKITI | EL ÚLTIMO TOUR DEL MUNDO (Official Video) ', 'https://img.youtube.com/vi/TmKh7lAwnBI/maxresdefault.jpg'],
    ['1020771520', 'Major Lazer - Cold Water (feat. Justin Bieber & MØ) (Official Lyric Video) ', 'https://img.youtube.com/vi/a59gmGkq_pw/maxresdefault.jpg'],
    ['1012738398', 'Reik - Me Niego ft. Ozuna. Wisin ', 'https://img.youtube.com/vi/JyqD_zfXfi8/maxresdefault.jpg'],
    ['1011652044', 'Rihanna - We Found Love ft. Calvin Harris ', 'https://img.youtube.com/vi/tg00YEETFzg/maxresdefault.jpg'],
    ['1011393542', 'Camila Cabello - Havana ft. Young Thug ', 'https://img.youtube.com/vi/BQ0mxQXmLsk/maxresdefault.jpg'],
    ['1011591081', 'Myke Towers. Farruko. Arcangel. Sech & Zion - Si Se Da Remix (Video Oficial) ', 'https://img.youtube.com/vi/CbEst0K063c/maxresdefault.jpg'],
    ['1009320253', 'DJ Snake ft. Justin Bieber - Let Me Love You [Lyric Video] ', 'https://img.youtube.com/vi/SMs0GnYze34/maxresdefault.jpg'],
    ['1007327798', 'Coldplay - The Scientist (Official Video) ', 'https://img.youtube.com/vi/RB-RcX5DS5A/maxresdefault.jpg'],
    ['1007087887', 'J Balvin - Safari ft. Pharrell Williams. BIA. Sky (Official Video) ', 'https://img.youtube.com/vi/JWESLtAKKlU/maxresdefault.jpg'],
    ['1007229175', 'Cyndi Lauper - Girls Just Want To Have Fun (Official Video) ', 'https://img.youtube.com/vi/PIb6AZdTr-A/maxresdefault.jpg'],
    ['1005186507', 'Rihanna - Stay ft. Mikky Ekko ', 'https://img.youtube.com/vi/JF8BRvqGCNs/maxresdefault.jpg'],
    ['1005249199', 'Guru Randhawa: Lahore (Official Video) Bhushan Kumar | Vee | DirectorGifty | T-Series ', 'https://img.youtube.com/vi/dZ0fwJojhrs/maxresdefault.jpg'],
    ['1004526181', 'Evanescence - Bring Me To Life (Official Music Video) ', 'https://img.youtube.com/vi/3YxaaGgTQYM/maxresdefault.jpg'],
    ['1006938892', "BLACKPINK - 'How You Like That' DANCE PERFORMANCE VIDEO ", 'https://img.youtube.com/vi/32si5cfrCNc/maxresdefault.jpg']
]


window.setInterval(function() {
    if (playing) {
        var title1_height = document.getElementById('vid-title1').offsetHeight;
        var title2_height = document.getElementById('vid-title2').offsetHeight;

        if (title1_height != title2_height) {
            if (title1_height > title2_height) {
                document.getElementById('vid-title2').style.height = String(title1_height) + "px";
            }else{
                document.getElementById('vid-title1').style.height = String(title2_height) + "px";
            }
        }
    }
});

function newGame() {
    score = 0;

    document.getElementById('start-game').style.zIndex = -1;
    document.getElementById('game-wrapper').style.marginTop = "0vh";
    document.getElementById('game-over-wrapper').style.zIndex = "-3"
    
    setTimeout(() => {document.getElementById('start-game').innerHTML = ""}, 1000)
    initVideos();
}
function initVideos() {
    var random1 = Math.floor(Math.random() * videos.length);
    var random2 = Math.floor(Math.random() * videos.length);
    var random3 = Math.floor(Math.random() * videos.length); 

    if (random1 != random2 && random2 != random3 && random1 != random3) {
        vid_views1 = videos[random1][0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        view_num1 = parseInt(vid_views1.replace(/,/g, ''));
        vid_title1 = videos[random1][1];
        vid_thumbnail1 = videos[random1][2];
    
        vid_views2 = videos[random2][0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        view_num2 = parseInt(vid_views2.replace(/,/g, ''));
        vid_title2 = videos[random2][1];
        vid_thumbnail2 = videos[random2][2];
    
        slider_views = videos[random3][0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        slider_view_num = parseInt(slider_views.replace(/,/g, ''));
        slider_title = videos[random3][1];
        slider_thumbnail = videos[random3][2];
    }else {
        initVideos();
    }

    setUp();
}
function setUp() {
    playing = true;
    document.getElementById("game-wrapper").innerHTML = "<img id='background-img1' src='" + vid_thumbnail1 + "' alt='first-background-img'><img id='background-img2' src='" + vid_thumbnail2 + "' alt='second-background-img'><img id='slider-background' src='" + slider_thumbnail + "' alt='slider-background-img'><div id='container1'><div id='vid1' onclick='lower()'><img src='" + vid_thumbnail1 + "' alt='first-img'><div id='vid-title1'><p>" + vid_title1 + "</p></div></div><h2 id='vid-views1'>" + vid_views1 + "</h2></div><div id='container2'><div id='vid2' onclick='higher()'><img src='" + vid_thumbnail2 + "' alt='second-img'><div id='vid-title2'><p>" + vid_title2 + "</p></div></div><div id='output'></div></div><div id='slider'><div id='slider-vid' onclick='higher()'><img src='" + slider_thumbnail + "' alt='second-img'><div id='slider-title'><p>" + slider_title + "</p></div></div></div><div id='output-circle'>VS</div><div id='game-cover'></div>"
    clicked = 0;
}
function counter(count) {
    if (count < view_num2) {
        output = document.getElementById('output');

        count = count + (Math.ceil(view_num2 * 0.01));
        output.innerHTML = "<h2>" + count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</h2>";
        setTimeout(function() {counter(count);}, 1);
    }else{
        count = view_num2
        output.innerHTML = "<h2>" + count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</h2>";
        transition();
    }
}

function correct() {
    isCorrect = true;
    score++;
    counter(0);
}

function incorrect() {
    isCorrect = false;
    counter(0);
}

function transition() {
    if (isCorrect) {
        var outputCircle = document.getElementById("output-circle");
        outputCircle.innerHTML = "&#10004;";
        outputCircle.style.backgroundColor = "green";
        outputCircle.style.color = "white";
        outputCircle.style.fontSize = "4vw";

        vid_views1 = vid_views2;
        view_num1 = view_num2;
        vid_title1 = vid_title2;
        vid_thumbnail1 = vid_thumbnail2;

        vid_views2 = slider_views;
        view_num2 = slider_view_num;
        vid_title2 = slider_title;
        vid_thumbnail2 = slider_thumbnail;

        nextVid();
        function nextVid() {
            random3 = Math.floor(Math.random() * videos.length);

            if (videos[random3][0] != view_num1 && videos[random3][0] != view_num2) {
                slider_views = videos[random3][0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                slider_view_num = parseInt(slider_views.replace(/,/g, ''));
                slider_title = videos[random3][1];
                slider_thumbnail = videos[random3][2];
            }else{
                nextVid();
            }
        }

        setTimeout(function() {circleClose();}, 500);
    }else{
        var outputCircle = document.getElementById("output-circle");
        outputCircle.innerHTML = "&#10006;";
        outputCircle.style.backgroundColor = "red";
        outputCircle.style.color = "white";
        outputCircle.style.fontSize = "5vw";

        document.getElementById('game-over-wrapper').innerHTML = "<div class='game-over'><h3>You Scored:</h3><h2>" + score + "</h2><p id='ending-text'></p><button onclick='newGame()'>Play again</button></div>"

        if (score == 0) {
            document.getElementById('game-over-wrapper').style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('gifs/score_0.gif')";
            document.getElementById('ending-text').innerHTML = "I don't think I have to say much here..."
        }else if (score == 1) {
            document.getElementById('game-over-wrapper').style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('gifs/score_1.gif')";
            document.getElementById('ending-text').innerHTML = "Well, you did slightly better than the worst you could have possibly done, so... hooray?"
        }else if (score == 2) {
            document.getElementById('game-over-wrapper').style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('gifs/score_2.gif')";
            document.getElementById('ending-text').innerHTML = "Overall, a pretty mediocre performance."
        }else if (score == 3) {
            document.getElementById('game-over-wrapper').style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('gifs/score_3.gif')";
            document.getElementById('ending-text').innerHTML = "Average... painfully average."
        }else if (score == 4) {
            document.getElementById('game-over-wrapper').style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('gifs/score_4.gif')";
            document.getElementById('ending-text').innerHTML = "Not bad. Not good either, but not bad."
        }else if (score == 5) {
            document.getElementById('game-over-wrapper').style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('gifs/score_5.gif')";
            document.getElementById('ending-text').innerHTML = "Pretty good honestly. 10 is better though... 2 times better."
        }else if (score == 6) {
            document.getElementById('game-over-wrapper').style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('gifs/score_6.gif')";
            document.getElementById('ending-text').innerHTML = "That's a pretty respectable score. Get to 10 to prove you are a real master!"
        }else if (score == 7) {
            document.getElementById('game-over-wrapper').style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('gifs/score_7.gif')";
            document.getElementById('ending-text').innerHTML = "A respectable score indeed, but only true legends make it to 10"
        }else if (score == 8) {
            document.getElementById('game-over-wrapper').style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('gifs/score_8.gif')";
            document.getElementById('ending-text').innerHTML = "I'm impressed. Get to 10 to become a legend."
        }else if (score == 9) {
            document.getElementById('game-over-wrapper').style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('gifs/score_9.gif')";
            document.getElementById('ending-text').innerHTML = "You were so close..."
        }else if (score >= 10) {
            document.getElementById('game-over-wrapper').style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('gifs/score_10.gif')";
            document.getElementById('ending-text').innerHTML = "Congragulations! You reached 10. I can't say im suprised though, I knew you had it in you. You are now an eternal legend!"
        }

        document.getElementById('game-over-wrapper').style.backgroundSize = "100vw 100vh";
        document.getElementById('game-over-wrapper').style.backgroundRepeat = "no-repeat";
        document.getElementById('game-over-wrapper').style.backgroundRepeat = "center center";
        setTimeout(function() {circleClose();}, 500);
    }
    
}
function circleClose() {
    var outputCircle = document.getElementById("output-circle");
    outputCircle.style.width = "0vw";
    outputCircle.style.height = "0vw";
    outputCircle.style.marginLeft = "calc(50vw - 0px)";
    outputCircle.style.marginTop = "30vh";
    outputCircle.style.border = "0px solid rgb(40, 40, 40)";
    outputCircle.style.fontSize = "0vw";
    outputCircle.style.lineHeight = "0vw";

    if (isCorrect == true) {
        setTimeout(function() {correctAnimation();}, 500);
    }else{
        setTimeout(function() {incorrectAnimation();}, 500);
    }
}
function correctAnimation() {
    var background_img1 = document.getElementById("background-img1");
    var background_img2 = document.getElementById("background-img2");
    var slider_background = document.getElementById("slider-background");

    var container1 = document.getElementById("container1");
    var container2 = document.getElementById("container2");
    var slider = document.getElementById("slider");

    background_img1.style.marginLeft = "calc(-50vw - 4px)";
    background_img2.style.marginLeft = "0";
    slider_background.style.marginLeft = "50vw";

    container1.style.marginLeft = "calc(-50vw - 4px)";
    container2.style.marginLeft = "0vw";
    slider.style.marginLeft = "50vw";

    container1.style.borderRight = "8px solid rgb(40, 40, 40)";
    container2.style.borderLeft = "none";
    container2.style.borderRight = "4px solid rgb(40, 40, 40)";

    setTimeout(function() {circleOpen();}, 2000);
    setTimeout(function() {setUp();}, 2500);
}
function circleOpen() {
    var outputCircle = document.getElementById("output-circle");
    outputCircle.innerHTML = "VS";
    outputCircle.style.backgroundColor = "white";
    outputCircle.style.color = "rgb(40, 40, 40)";

    outputCircle.style.width = "7vw";
    outputCircle.style.height = "7vw";
    outputCircle.style.marginLeft = "calc(46.5vw - 8px)";
    outputCircle.style.marginTop = "23vh";
    outputCircle.style.border = "8px solid rgb(40, 40, 40)";
    outputCircle.style.fontSize = "2vw";
    outputCircle.style.lineHeight = "7vw";
}

function incorrectAnimation() {
    document.getElementById('game-wrapper').style.marginTop = "calc(-100vh - 10px)";
    setTimeout(() => {document.getElementById('game-over-wrapper').style.zIndex = "1"}, 1000);
}

function higher() {
    clicked++;
    if (clicked == 1) {
        if (view_num2 > view_num1) {
            correct();
        }else{
            incorrect();
        }
    }
}
function lower() {
    clicked++;
    if (clicked == 1) {
        if (view_num1 > view_num2) {
            correct();
        }else{
            incorrect();
        }
    }   
}