/* cSpell:disable */

import { Names as Names } from "./name-list";

import * as Races from "../../models/races";

export const Tabaxi: Races.NameDefinition = {
    name: "Tabaxi",
    markovOrder: 2,
    forenames: {
        "M": [
            "Ab'ar", "Ab'bar", "Ab'bil", "Ab'der", "Ab'dul", "Ab'gh", "Ab'ir", "Ab'kir", "Ab'med", "Ab'nir", "Ab'noud", "Ab'sien",
            "Ab'soud", "Ab'taba", "Ab'tabe", "Ab'urabi", "Ak'ar", "Ak'bar", "Ak'bil", "Ak'der", "Ak'dul", "Ak'gh", "Ak'ir", "Ak'kir",
            "Ak'med", "Ak'nir", "Ak'noud", "Ak'sien", "Ak'soud", "Ak'taba", "Ak'tabe", "Ak'urabi", "Akh'ar", "Akh'bar", "Akh'bil",
            "Akh'der", "Akh'dul", "Akh'gh", "Akh'ir", "Akh'kir", "Akh'med", "Akh'nir", "Akh'noud", "Akh'sien", "Akh'soud", "Akh'taba",
            "Akh'tabe", "Akh'urabi", "Amar", "Ambar", "Ambil", "Amder", "Amdul", "Amgh", "Amir", "Amkir", "Ammed", "Amnir", "Amnoud",
            "Amsien", "Amsoud", "Amtaba", "Amtabe", "Amurabi", "Baadargo", "Bhisha", "Dahlima", "Dro'Barri", "Dro'farahn", "Dro'marash",
            "Dro'Qanar", "Dro'Sakhar", "Dro'shanji", "Dro'Shavir", "Dro'Tasarr", "Dro'Zah", "Dro'Zaymar", "Dro'zharim", "Dro'Zhirr",
            "Fa'ar", "Fa'bar", "Fa'bil", "Fa'der", "Fa'dul", "Fa'gh", "Fa'ir", "Fa'kir", "Fa'med", "Fa'nir", "Fa'noud", "Fa'sien",
            "Fa'soud", "Fa'taba", "Fa'tabe", "Fa'urabi", "Hassiri", "Husar", "Husbar", "Husbil", "Husder", "Husdul", "Husgh", "Husir",
            "Huskir", "Husmed", "Husnir", "Husnoud", "Hussien", "Hussoud", "Hustaba", "Hustabe", "Husurabi", "J'baana", "J'Baasha",
            "J'bari", "J'darr", "J'datharr", "J'Dato", "J'Dhannar", "J'Ghasta", "J'Hanir", "J'Jarsha", "J'Jazha", "J'Kara", "J'Kier",
            "J'mhad", "J'Raksa", "J'Rasha", "J'riska", "J'Saddha", "J'skar", "J'Zamha", "J'zargo", "J'zhar", "J'Zhirr", "J'zidzo",
            "J'zin-Dar", "Ja'Fazir", "Jo'Ren-Dar", "Jo'Thri-Dar", "Jobasha", "Jodhur", "Joshur", "K'Sharr", "Kesh", "Kharjo", "M'aiq",
            "M'dasha", "M'desi", "M'dirr", "M'nashi", "M'raaj-Dar", "M'Shan", "Ma'Dara", "Ma'dran", "Ma'jhad", "Ma'Jidarr", "Ma'Khar",
            "Ma'randru-jo", "Ma'Raska", "Ma'tasarr", "Ma'zaddha", "Ma'Zahn", "Ma'zaka", "Moar", "Mobar", "Mobil", "Moder", "Modul",
            "Mogh", "Mohamar", "Mohambar", "Mohambil", "Mohamder", "Mohamdul", "Mohamgh", "Mohamir", "Mohamkir", "Mohammed", "Mohamnir",
            "Mohamnoud", "Mohamsien", "Mohamsoud", "Mohamtaba", "Mohamtabe", "Mohamurabi", "Moir", "Mojar", "Mojbar", "Mojbil", "Mojder",
            "Mojdul", "Mojgh", "Mojir", "Mojkir", "Mojmed", "Mojnir", "Mojnoud", "Mojsien", "Mojsoud", "Mojtaba", "Mojtabe", "Mojurabi",
            "Mokir", "Momed", "Monir", "Monoud", "Mosien", "Mosoud", "Motaba", "Motabe", "Mourabi", "Naar", "Nabar", "Nabil", "Nader",
            "Nadul", "Nagh", "Nair",
            "Nakir",
            "Named",
            "Nanir",
            "Nanoud",
            "Nasien",
            "Nasoud",
            "Nataba",
            "Natabe",
            "Naurabi",
            "Omar",
            "Ombar",
            "Ombil",
            "Omder",
            "Omdul",
            "Omgh",
            "Omir",
            "Omkir",
            "Ommed",
            "Omnir",
            "Omnoud",
            "Omsien",
            "Omsoud",
            "Omtaba",
            "Omtabe",
            "Omurabi",
            "Qa'Dar",
            "R'vanni",
            "Ra'dirsha",
            "Ra'Jahirr",
            "Ra'Jhan",
            "Ra'jhera",
            "Ra'jiradh",
            "Ra'jirr",
            "Ra'Karim",
            "Ra'kheran",
            "Ra'Kothre",
            "Ra'Mhirr",
            "Ra'Sava",
            "Ra'Tesh",
            "Ra'Virr",
            "Ra'Zahr",
            "Ra'Zhid",
            "Ranarr-Jo",
            "Ri'Bassa",
            "Ri'Darsha",
            "Ri'Dumiwa",
            "Ri'Jirr",
            "Ri'saad",
            "Ri'Shajirr",
            "Ri'Vassa",
            "Ri'Zaadha",
            "Ri'Zakar",
            "S'Bakha",
            "S'drassa",
            "S'Radirr",
            "S'rathad",
            "S'Rava",
            "S'Raverr",
            "S'razirr",
            "S'Renji",
            "S'shani",
            "S'Vandra",
            "S'virr",
            "Shaar",
            "Shabar",
            "Shabil",
            "Shader",
            "Shadul",
            "Shagh",
            "Shair",
            "Shakir",
            "Shamed",
            "Shanir",
            "Shanoud",
            "Shasien",
            "Shasoud",
            "Shataba",
            "Shatabe",
            "Shaurabi",
            "Sholani",
            "Sinar",
            "Sinbar",
            "Sinbil",
            "Sinder",
            "Sindul",
            "Singh",
            "Sinir",
            "Sinkir",
            "Sinmed",
            "Sinnir",
            "Sinnoud",
            "Sinsien",
            "Sinsoud",
            "Sintaba",
            "Sintabe",
            "Sinurabi",
            "Thengil",
            "Urjabhi",
            "Urjorad",
            "Vasha",
            "Wadarkhu",
            "Za'ar",
            "Za'bar",
            "Za'bil",
            "Za'der",
            "Za'dul",
            "Za'gh",
            "Za'ir",
            "Za'kir",
            "Za'med",
            "Za'nir",
            "Za'noud",
            "Za'sien",
            "Za'soud",
            "Za'taba",
            "Za'tabe",
            "Za'urabi",
            "Zan'ar",
            "Zan'bar",
            "Zan'bil",
            "Zan'der",
            "Zan'dul",
            "Zan'gh",
            "Zan'ir",
            "Zan'kir",
            "Zan'med",
            "Zan'nir",
            "Zan'noud",
            "Zan'sien",
            "Zan'soud",
            "Zan'taba",
            "Zan'tabe",
            "Zan'urabi",
        ],
        "F": [
            "Aahin",
            "Aahni",
            "Abanji",
            "Abhuki",
            "Adanja",
            "Addhiranirr",
            "Adharanji",
            "Afeliz",
            "Affri",
            "Ahana",
            "Ahdahni",
            "Ahdarji",
            "Ahdni",
            "Ahdri",
            "Aheh",
            "Ahjara",
            "Ahjazda",
            "Ahjisi",
            "Ahkari",
            "Ahnarra",
            "Ahnassi",
            "Ahndahra",
            "Ahnia",
            "Ahnisa",
            "Ahrazad",
            "Ahzini",
            "Aina",
            "Ajira",
            "Ajjan",
            "Akhtar",
            "Anita",
            "Anjari",
            "Arabhi",
            "Aravi",
            "Araya",
            "Ariba",
            "Ashidasha",
            "Ashima",
            "Ashni",
            "Asrin",
            "Atahba",
            "Atahbah",
            "Atima",
            "Atrabhi",
            "Ayisha",
            "Aziahin",
            "Aziahni",
            "Azifeliz",
            "Azihana",
            "Aziheh",
            "Azihrazad",
            "Azijjan",
            "Azikhtar",
            "Azinita",
            "Aziraya",
            "Aziriba",
            "Azishima",
            "Azisrin",
            "Azita",
            "Azitima",
            "Azizita",
            "Bahdahna",
            "Bahdrashi",
            "Baissa",
            "Bhusari",
            "Chirranirr",
            "Dahleena",
            "Dahnara",
            "Dro'Nahrahe",
            "Ekapi",
            "Elaahin",
            "Elaahni",
            "Elafeliz",
            "Elahana",
            "Elaheh",
            "Elahrazad",
            "Elajjan",
            "Elakhtar",
            "Elanita",
            "Elaraya",
            "Elariba",
            "Elashima",
            "Elasrin",
            "Elatima",
            "Elazita",
            "Faahin",
            "Faahni",
            "Fafeliz",
            "Fahana",
            "Faheh",
            "Fahrazad",
            "Fajjan",
            "Fakhtar",
            "Fanita",
            "Faraya",
            "Fariba",
            "Fashima",
            "Fasrin",
            "Fatima",
            "Fazita",
            "Habasi",
            "Harassa",
            "Idhassi",
            "Inerri",
            "Inorra",
            "Kaasha",
            "Khaahin",
            "Khaahni",
            "Khafeliz",
            "Khahana",
            "Khaheh",
            "Khahrazad",
            "Khajjan",
            "Khakhtar",
            "Khamuzi",
            "Khanita",
            "Kharaya",
            "Khariba",
            "Khashima",
            "Khasrin",
            "Khatima",
            "Khayla",
            "Khazita",
            "Khazura",
            "Khinjarsi",
            "Kiahin",
            "Kiahni",
            "Kifeliz",
            "Kihana",
            "Kiheh",
            "Kihrazad",
            "Kijjan",
            "Kikhtar",
            "Kinita",
            "Kiraya",
            "Kiriba",
            "Kiseena",
            "Kishashi",
            "Kishima",
            "Kishni",
            "Kisimba",
            "Kisisa",
            "Kisrin",
            "Kitima",
            "Kizita",
            "Moahin",
            "Moahni",
            "Mofeliz",
            "Mohana",
            "Moheh",
            "Mohrazad",
            "Mojjan",
            "Mokhtar",
            "Monita",
            "Moraya",
            "Moriba",
            "Moshima",
            "Mosrin",
            "Motima",
            "Mozita",
            "Naahin",
            "Naahni",
            "Nafeliz",
            "Nahana",
            "Naheh",
            "Nahrazad",
            "Nahsi",
            "Najjan",
            "Nakhtar",
            "Nanita",
            "Naraya",
            "Nariba",
            "Nashima",
            "Nasrin",
            "Natima",
            "Nazita",
            "Nisaba",
            "Ra'zhinda",
            "Raahin",
            "Raahni",
            "Rabinna",
            "Rafeliz",
            "Rahana",
            "Raheh",
            "Rahrazad",
            "Rajjan",
            "Rakhtar",
            "Ranita",
            "Raraya",
            "Rariba",
            "Rashima",
            "Rasrin",
            "Ratima",
            "Razita",
            "Riahin",
            "Riahni",
            "Rifeliz",
            "Rihana",
            "Riheh",
            "Rihrazad",
            "Rijjan",
            "Rikhtar",
            "Rinita",
            "Riraya",
            "Ririba",
            "Rishima",
            "Risrin",
            "Ritima",
            "Rizita",
            "S'fara",
            "S'jirra",
            "S'kasha",
            "S'Krivva",
            "S'mirra",
            "S'thasa",
            "Saahin",
            "Saahni",
            "Safeliz",
            "Sahana",
            "Saheh",
            "Sahrazad",
            "Sajjan",
            "Sakhtar",
            "Sanita",
            "Saraya",
            "Sariba",
            "Sashima",
            "Sasrin",
            "Satima",
            "Sazita",
            "Shaahin",
            "Shaahni",
            "Shaba",
            "Shafeliz",
            "Shahana",
            "Shaheh",
            "Shahrazad",
            "Shajjan",
            "Shakhtar",
            "Shamada",
            "Shanita",
            "Sharaya",
            "Shariba",
            "Shashima",
            "Shasrin",
            "Shatima",
            "Shavari",
            "Shazita",
            "Shivani",
            "Shomara",
            "Shotherra",
            "Shunari",
            "Shuravi",
            "Soahin",
            "Soahni",
            "Sofeliz",
            "Sohana",
            "Soheh",
            "Sohrazad",
            "Sojjan",
            "Sokhtar",
            "Sonita",
            "Soraya",
            "Soriba",
            "Soshima",
            "Sosrin",
            "Sotima",
            "Sozita",
            "Taahin",
            "Taahni",
            "Tafeliz",
            "Tahana",
            "Taheh",
            "Tahrazad",
            "Tajjan",
            "Takhtar",
            "Talasma",
            "Tanita",
            "Taraya",
            "Tariba",
            "Tashima",
            "Tasrin",
            "Tatima",
            "Tazita",
            "Tsabhi",
            "Tsajadhi",
            "Tsalajma",
            "Tsalani",
            "Tsani",
            "Tsarrina",
            "Tsavani",
            "Tsavi",
            "Tsiya",
            "Tsramla",
            "Tsrasuna",
            "Tsrava",
            "Tsrazami",
            "Ubaasi",
            "Udarra",
            "Unjara",
            "Vajhira",
            "Vanjirra",
            "Yushi",
            "Zaahin",
            "Zaahni",
            "Zabhila",
            "Zafeliz",
            "Zahana",
            "Zaheh",
            "Zahraji",
            "Zahrasha",
            "Zahrazad",
            "Zajjan",
            "Zakhtar",
            "Zanita",
            "Zaraya",
            "Zariba",
            "Zashima",
            "Zasrin",
            "Zatima",
            "Zaynabi",
            "Zazita",
        ]
    },
    surnames: []
};

Names.NameList[Tabaxi.name] = Tabaxi;
