// test http://jsfiddle.net/nm4uv8b9/7/

// test 2 https://stackoverflow.com/questions/20005524/search-on-multiple-values-with-jquery-autocomplete
// test 2 http://jsfiddle.net/8f883bwv/1/

var menu = [
  { id: 1, value: "haaienvinnensoep", label: "Haaienvinnensoep", category: "Soepen", description: "", price: "3,70", comment: "" },
  { id: 1, value: "tomatensoep", label: "Tomatensoep", category: "Soepen", description: "", price: "3,70", comment: "" },
  { id: 1, value: "kippensoep", label: "Kippensoep", category: "Soepen", description: "", price: "3,70", comment: "" },
  { id: 2, value: "champignonsoep-met-kip", label: "Champignonsoep met kip", category: "Soepen", description: "", price: "3,90", comment: "" },
  { id: 3, value: "chinese-champignon-soep-met-kip", label: "Chinese Champignon soep met kip", category: "Soepen", description: "", price: "4,40", comment: "" },
  { id: 4, value: "haaienvinnensoep-met-krab", label: "Haaienvinnensoep met krab", category: "Soepen", description: "", price: "4,40", comment: "" },
  { id: 5, value: "chinese-haaienvinnensoep-met-krab", label: "Chinese Haaienvinnensoep met krab", category: "Soepen", description: "", price: "5,50", comment: "" },
  { id: 6, value: "peking-soep", label: "Peking soep", category: "Soepen", description: "pikant", price: "5,50", comment: "" },
  { id: 7, value: "wantan-soep", label: "Wantan soep", category: "Soepen", description: "", price: "5,00", comment: "" },
  { id: 8, value: "maïs-soep-met-kip", label: "Maïs soep met kip", category: "Soepen", description: "", price: "4,40", comment: "" },
  { id: 9, value: "groenten-soep", label: "Groenten soep", category: "Soepen", description: "", price: "3,70", comment: "" },
  { id: 10, value: "kroepoek", label: "Kroepoek", category: "Voorgerechten", description: "", price: "3,80", comment: "" },
  { id: 11, value: "pisang-goreng", label: "Pisang Goreng", category: "Voorgerechten", description: "", price: "3,80", comment: "" },
  { id: 12, value: "pangsit-goreng", label: "Pangsit Goreng", category: "Voorgerechten", description: "4 stuks", price: "4,00", comment: "" },
  { id: 13, value: "loempia-speciaal", label: "Loempia speciaal", category: "Voorgerechten", description: "", price: "4,50", comment: "" },
  { id: 14, value: "mini-loempia", label: "Mini Loempia", category: "Voorgerechten", description: "4 stuks", price: "3,20", comment: "" },
  { id: 15, value: "cha-sui-kauw", label: "Cha Sui Kauw", category: "Voorgerechten", description: "gebakken wantan", price: "4,50", comment: "" },
  { id: 16, value: "kip-saté", label: "Kip saté", category: "Voorgerechten", description: "4 stuks", price: "6,50", comment: "" },
  { id: 17, value: "varkensvlees-saté", label: "Varkensvlees saté", category: "Voorgerechten", description: "4 stuks", price: "6,50", comment: "" },
  { id: 18, value: "bief-saté", label: "Bief saté", category: "Voorgerechten", description: "4 stuks", price: "9,00", comment: "" },
  { id: 19, value: "garnalen-saté", label: "Garnalen saté", category: "Voorgerechten", description: "4 stuks", price: "11,00", comment: "" },
  { id: 20, value: "hors-d’-oeuvre", label: "Hors d’ Oeuvre", category: "Voorgerechten", description: "1 pangsit goreng, 2 mini loempia’s", price: "3,80", comment: "" },
  { id: 21, value: "ha-kau", label: "Ha Kau", category: "Voorgerechten", description: "4 stuks gestoomde garnalen pasteitjes", price: "7,00", comment: "" },
  { id: 22, value: "sieuw-mai", label: "Sieuw Mai", category: "Voorgerechten", description: "4 stuks gestoomde varkensvlees pasteitjes", price: "5,50", comment: "" },
  { id: 23, value: "wo-tip", label: "Wo Tip", category: "Voorgerechten", description: "4 stuks gebraden varkensvlees pasteitjes", price: "7,20", comment: "" },
  { id: 24, value: "nasi-of-bami-goreng-met-gesneden-kipfilet", label: "Nasi of Bami Goreng met gesneden kipfilet", category: "Nasi en Bami Goreng Gerechten", description: "", price: "12,00", comment: "" },
  { id: 25, value: "nasi-of-bami-goreng-met-gesneden-varkensvlees", label: "Nasi of Bami Goreng met gesneden varkensvlees", category: "Nasi en Bami Goreng Gerechten", description: "", price: "12,00", comment: "" },
  { id: 26, value: "nasi-of-bami-goreng-met-kippenlevers", label: "Nasi of Bami Goreng met kippenlevers", category: "Nasi en Bami Goreng Gerechten", description: "", price: "12,00", comment: "" },
  { id: 27, value: "nasi-of-bami-goreng-met-gesneden-ossenhaas", label: "Nasi of Bami Goreng met gesneden ossenhaas", category: "Nasi en Bami Goreng Gerechten", description: "", price: "14,50", comment: "" },
  { id: 28, value: "nasi-of-bami-goreng-met-garnalen", label: "Nasi of Bami Goreng met garnalen", category: "Nasi en Bami Goreng Gerechten", description: "", price: "19,50", comment: "" },
  { id: 29, value: "nasi-of-bami-goreng-á-la-“china-town”", label: "Nasi of Bami Goreng á la “China Town”", category: "Nasi en Bami Goreng Gerechten", description: "met garnalen, cha-sieuw, kipfilet en groenten", price: "14,50", comment: "" },
  { id: 30, value: "nasi-of-bami-goreng-á-la-“singapore”", label: "Nasi of Bami Goreng á la “Singapore”", category: "Nasi en Bami Goreng Gerechten", description: "met babi pangang speciaal, babi manis en 2 stokjes kip saté", price: "14,50", comment: "" },
  { id: 31, value: "so-jai-fan", label: "So Jai Fan", category: "Nasi en Bami Goreng Gerechten", description: "met babi bangang speciaal, ajam bangang, groenten en ei", price: "13,00", comment: "" },
  { id: 32, value: "mihoen-of-chinese-bami-soep", label: "Mihoen of Chinese Bami soep", category: "Mihoen en Chinese Bami Gerechten", description: "met garnalen, cha-sieuw, kipfilet en groenten", price: "13,50", comment: "" },
  { id: 33, value: "mihoen-of-chinese-bami-wantan-soep", label: "Mihoen of Chinese Bami wantan soep", category: "Mihoen en Chinese Bami Gerechten", description: "", price: "12,50", comment: "" },
  { id: 34, value: "mihoen-of-chinese-bami-met-kip-en-diverse-groenten", label: "Mihoen of Chinese Bami met kip en diverse groenten", category: "Mihoen en Chinese Bami Gerechten", description: "", price: "13,00", comment: "" },
  { id: 35, value: "mihoen-of-chinese-bami-met-ossenhaas-en-diverse-groenten", label: "Mihoen of Chinese Bami met ossenhaas en diverse groenten", category: "Mihoen en Chinese Bami Gerechten", description: "", price: "15,00", comment: "" },
  { id: 36, value: "mihoen-of-chinese-bami-met-garnalen-en-diverse-groenten", label: "Mihoen of Chinese Bami met garnalen en diverse groenten", category: "Mihoen en Chinese Bami Gerechten", description: "", price: "19,50", comment: "" },
  { id: 37, value: "mihoen-of-chinese-bami-á-la-“china-town”", label: "Mihoen of Chinese Bami á la “China Town”", category: "Mihoen en Chinese Bami Gerechten", description: "met garnalen, cha-sieuw, kipfile en groenten", price: "14,50", comment: "" },
  { id: 38, value: "mihoen-of-chinese-bami-“sing-chow”", label: "Mihoen of Chinese Bami “Sing Chow”", category: "Mihoen en Chinese Bami Gerechten", description: "met kleine garnalen, cha-sieuw, kerrie en diverse groenten", price: "14,50", comment: "" },
  { id: 39, value: "tjap-tjoy", label: "Tjap Tjoy", category: "Vegetarische Gerechten", description: "diverse groenten", price: "11,00", comment: "" },
  { id: 40, value: "foe-yong-hai-met-champignons", label: "Foe Yong Hai met champignons", category: "Vegetarische Gerechten", description: "", price: "11,00", comment: "" },
  { id: 41, value: "gado-gado", label: "Gado Gado", category: "Vegetarische Gerechten", description: "", price: "10,50", comment: "" },
  { id: 42, value: "mihoen-met-diverse-groenten", label: "Mihoen met diverse groenten", category: "Vegetarische Gerechten", description: "", price: "11,50", comment: "" },
  { id: 43, value: "chinese-bami-met-diverse-groenten", label: "Chinese Bami met diverse groenten", category: "Vegetarische Gerechten", description: "", price: "11,50", comment: "" },
  { id: 44, value: "gefileerde-kip-met-pikante-saus-en-groenten", label: "Gefileerde kip met pikante saus en groenten", category: "Kipgerechten", description: "", price: "13,50", comment: "" },
  { id: 45, value: "gefileerde-kip-met-kerrie-saus-en-groenten", label: "Gefileerde kip met kerrie saus en groenten", category: "Kipgerechten", description: "", price: "13,50", comment: "" },
  { id: 46, value: "gefileerde-kip-met-zwarte-sojabonen-saus-en-paprika-", label: "Gefileerde kip met zwarte sojabonen saus en paprika ", category: "Kipgerechten", description: "", price: "13,50", comment: "" },
  { id: 47, value: "gefileerde-kip-met-zoetzure-saus-en-ananas", label: "Gefileerde kip met zoetzure saus en ananas", category: "Kipgerechten", description: "", price: "13,50", comment: "" },
  { id: 48, value: "gefileerde-kip-met-chinese-paddenstoelen", label: "Gefileerde kip met Chinese paddenstoelen", category: "Kipgerechten", description: "", price: "13,50", comment: "" },
  { id: 49, value: "gefileerde-kip-met-champignons", label: "Gefileerde kip met champignons", category: "Kipgerechten", description: "", price: "13,50", comment: "" },
  { id: 50, value: "gefileerde-kip-met-chinese-champignons", label: "Gefileerde kip met Chinese champignons", category: "Kipgerechten", description: "", price: "15,50", comment: "" },
  { id: 51, value: "koe-lo-kai", label: "Koe Lo Kai", category: "Kipgerechten", description: "gebakken kipballetjes met zoetzure saus", price: "14,00", comment: "" },
  { id: 52, value: "kip-malakka", label: "Kip Malakka", category: "Kipgerechten", description: "gefileerde kip met pikante saté saus en groenten", price: "13,50", comment: "" },
  { id: 53, value: "ajam-pangang", label: "Ajam Pangang", category: "Kipgerechten", description: "gebraden kip met pikante saus", price: "14,50", comment: "" },
  { id: 54, value: "kippenlevers-met-kerrie-saus-en-groenten", label: "Kippenlevers met kerrie saus en groenten", category: "Kippenlevergerechten", description: "", price: "13,50", comment: "" },
  { id: 55, value: "kippenlevers-met-chinese-paddenstoelen", label: "Kippenlevers met Chinese paddenstoelen", category: "Kippenlevergerechten", description: "", price: "13,50", comment: "" },
  { id: 56, value: "babi-pangang", label: "Babi Pangang", category: "Vleesgerechten", description: "gebakken spekvlees", price: "15,50", comment: "" },
  { id: 57, value: "babi-pangang-speciaal", label: "Babi Pangang speciaal", category: "Vleesgerechten", description: "mager vlees", price: "15,00", comment: "" },
  { id: 58, value: "babi-ketjap", label: "Babi Ketjap", category: "Vleesgerechten", description: "mager vlees met ketjap saus en groenten", price: "15,00", comment: "" },
  { id: 59, value: "cha-sieuw", label: "Cha-sieuw", category: "Vleesgerechten", description: "geroosterde mager vlees in soja saus Hong Kong stijl", price: "15,50", comment: "" },
  { id: 60, value: "varkensvlees-met-pikante-saus-en-groenten", label: "Varkensvlees met pikante saus en groenten", category: "Vleesgerechten", description: "", price: "13,50", comment: "" },
  { id: 61, value: "varkensvlees-met-kerrie-saus-en-groenten", label: "Varkensvlees met kerrie saus en groenten", category: "Vleesgerechten", description: "", price: "13,50", comment: "" },
  { id: 62, value: "varkensvlees-met-zwarte-sojabonen-saus-en-paprika", label: "Varkensvlees met zwarte sojabonen saus en paprika", category: "Vleesgerechten", description: "", price: "13,50", comment: "" },
  { id: 63, value: "varkensvlees-met-chinese-paddenstoelen", label: "Varkensvlees met Chinese paddenstoelen", category: "Vleesgerechten", description: "", price: "13,50", comment: "" },
  { id: 64, value: "babi-manis", label: "Babi manis", category: "Vleesgerechten", description: "gestoofd varkensvlees in ketjapsaus", price: "13,50", comment: "" },
  { id: 65, value: "ossenhaas-met-pikante-saus-en-groenten", label: "Ossenhaas met pikante saus en groenten", category: "Ossenhaasgerechten", description: "", price: "15,50", comment: "" },
  { id: 66, value: "ossenhaas-met-kerrie-saus-en-groenten", label: "Ossenhaas met kerrie saus en groenten", category: "Ossenhaasgerechten", description: "", price: "15,50", comment: "" },
  { id: 67, value: "ossenhaas-met-champignons", label: "Ossenhaas met champignons", category: "Ossenhaasgerechten", description: "", price: "15,50", comment: "" },
  { id: 68, value: "ossenhaas-met-zwarte-sojabonen-saus-en-paprika", label: "Ossenhaas met zwarte sojabonen saus en paprika", category: "Ossenhaasgerechten", description: "", price: "15,50", comment: "" },
  { id: 69, value: "tjap-tjoy-á-la-“china-town”", label: "Tjap Tjoy á la “China Town”", category: "Groentegerechten", description: "met garnalen, cha-sieuw, kipfilet", price: "14,50", comment: "" },
  { id: 70, value: "tjap-tjoy-met-gefileerde-kip", label: "Tjap Tjoy met gefileerde kip", category: "Groentegerechten", description: "", price: "13,50", comment: "" },
  { id: 71, value: "tjap-tjoy-met-gesneden-varkensvlees", label: "Tjap Tjoy met gesneden varkensvlees", category: "Groentegerechten", description: "", price: "13,50", comment: "" },
  { id: 72, value: "tjap-tjoy-met-gesneden-ossenhaas", label: "Tjap Tjoy met gesneden ossenhaas", category: "Groentegerechten", description: "", price: "14,50", comment: "" },
  { id: 73, value: "tjap-tjoy-met-inktvis", label: "Tjap Tjoy met inktvis", category: "Groentegerechten", description: "", price: "14,50", comment: "" },
  { id: 74, value: "tjap-tjoy-met-garnalen", label: "Tjap Tjoy met garnalen", category: "Groentegerechten", description: "", price: "19,50", comment: "" },
  { id: 75, value: "broccoli-met-gefileerde-kip", label: "Broccoli met gefileerde kip", category: "Groentegerechten", description: "", price: "13,50", comment: "" },
  { id: 76, value: "broccoli-met-gesneden-varkensvlees", label: "Broccoli met gesneden varkensvlees", category: "Groentegerechten", description: "", price: "13,50", comment: "" },
  { id: 77, value: "broccoli-met-gesneden-ossenhaas", label: "Broccoli met gesneden ossenhaas", category: "Groentegerechten", description: "", price: "15,50", comment: "" },
  { id: 78, value: "broccoli-met-inktvis-", label: "Broccoli met inktvis ", category: "Groentegerechten", description: "", price: "15,50", comment: "" },
  { id: 79, value: "broccoli-met-garnalen", label: "Broccoli met garnalen", category: "Groentegerechten", description: "", price: "19,50", comment: "" },
  { id: 80, value: "garnalen-met-kerrie-saus-en-groenten", label: "Garnalen met kerrie saus en groenten", category: "Garnalengerechten", description: "", price: "19,50", comment: "" },
  { id: 81, value: "garnalen-met-pikante-saus-en-groenten", label: "Garnalen met pikante saus en groenten", category: "Garnalengerechten", description: "", price: "19,50", comment: "" },
  { id: 82, value: "garnalen-met-zwarte-sojabonen-saus-en-paprika", label: "Garnalen met zwarte sojabonen saus en paprika", category: "Garnalengerechten", description: "", price: "19,50", comment: "" },
  { id: 83, value: "garnalen-met-champignons", label: "Garnalen met champignons", category: "Garnalengerechten", description: "", price: "19,50", comment: "" },
  { id: 84, value: "garnalen-met-chinese-paddenstoelen", label: "Garnalen met Chinese paddenstoelen", category: "Garnalengerechten", description: "", price: "19,50", comment: "" },
  { id: 85, value: "garnalen-met-chinese-champignons", label: "Garnalen met Chinese champignons", category: "Garnalengerechten", description: "", price: "19,50", comment: "" },
  { id: 87, value: "inktvis-met-kerrie-saus-en-groenten", label: "Inktvis met kerrie saus en groenten", category: "Inktvisgerechten", description: "", price: "15,50", comment: "" },
  { id: 88, value: "inktvis-met-pikante-saus-en-groenten", label: "Inktvis met pikante saus en groenten", category: "Inktvisgerechten", description: "", price: "15,50", comment: "" },
  { id: 89, value: "inktvis-met-zwarte-sojabonen-saus-en-paprika", label: "Inktvis met zwarte sojabonen saus en paprika", category: "Inktvisgerechten", description: "", price: "15,50", comment: "" },
  { id: 90, value: "foe-yong-hai-met-cha-sieuw", label: "Foe Yong Hai met cha-sieuw", category: "Eierengerechten", description: "", price: "12,50", comment: "" },
  { id: 91, value: "foe-yong-hai-met-kip", label: "Foe Yong Hai met kip", category: "Eierengerechten", description: "", price: "12,00", comment: "" },
  { id: 92, value: "foe-yong-hai-met-krab", label: "Foe Yong Hai met krab", category: "Eierengerechten", description: "", price: "13,50", comment: "" },
  { id: 93, value: "foe-yong-hai-met-ossenhaas", label: "Foe Yong Hai met ossenhaas", category: "Eierengerechten", description: "", price: "14,50", comment: "" },
  { id: 94, value: "foe-yong-hai-met-kleine-garnalen", label: "Foe Yong Hai met kleine garnalen", category: "Eierengerechten", description: "", price: "13,50", comment: "" },
  { id: 95, value: "foe-yong-hai-met-grote-garnalen", label: "Foe Yong Hai met grote garnalen", category: "Eierengerechten", description: "", price: "19,50", comment: "" },
  { id: 96, value: "nasi-/-bami-rames-speciaal", label: "Nasi / Bami Rames Speciaal", category: "Indische Gerechten", description: "met babi manis, saté, gahaktbal, atjar, ei en groenten", price: "13,00", comment: "" },
  { id: "A1", value: "geroosterde-peking-eend", label: "Geroosterde Peking eend", category: "Aanbevolen", description: "met oestersaus", price: "20,50", comment: "" },
  { id: "A2", value: "geroosterde-peking-eend", label: "Geroosterde Peking eend", category: "Aanbevolen", description: "met ananas in zoetzure saus", price: "20,50", comment: "" },
  { id: "A3", value: "geroosterde-eend-á-la-“china-town”", label: "Geroosterde eend á la “China Town”", category: "Aanbevolen", description: "met groenten", price: "21,50", comment: "" },
  { id: "A4", value: "heung-so-ap", label: "Heung So Ap", category: "Aanbevolen", description: "zacht gemarineerd gebakken Peking eend", price: "21,00", comment: "" },
  { id: "A5", value: "yu-hon-yuk-pin", label: "Yu Hon Yuk Pin", category: "Aanbevolen", description: "varkens medaillons in pittige knoflooksaus", price: "15,00", comment: "" },
  { id: "A6", value: "sin-lat-kai", label: "Sin Lat Kai", category: "Aanbevolen", description: "julienne gesneden kip met groenten in pikante saus", price: "14,00", comment: "" },
  { id: "A7", value: "gebakken-visfilet", label: "Gebakken Visfilet", category: "Aanbevolen", description: "met zoetzure saus", price: "16,00", comment: "" },
  { id: "A8", value: "tjiew-yim-ha", label: "Tjiew Yim Ha", category: "Aanbevolen", description: "droog gebakken ongepelde pikante garnalen", price: "21,50", comment: "" },
  { id: "A9", value: "fong-mei-ha", label: "Fong Mei Ha", category: "Aanbevolen", description: "gebakken garnalen bereid op Chinese wijze", price: "19,50", comment: "" },
  { id: "A10", value: "koe-lo-ha", label: "Koe Lo Ha", category: "Aanbevolen", description: "gebakken garnalenballetjes in zoetzuresaus", price: "19,50", comment: "" },
  { id: "A11", value: "sun-yong-ha", label: "Sun Yong Ha", category: "Aanbevolen", description: "gepelde garnalen in knoflooksaus", price: "21,50", comment: "" },
  { id: "A12", value: "sa-cha-ngau-yuk", label: "Sa Cha Ngau Yuk", category: "Aanbevolen", description: "ossenhaas met groenten in pikante ”sa cha” saus", price: "16,50", comment: "" },
  { id: "A13", value: "chong-pau-ngau-yuk", label: "Chong Pau Ngau Yuk", category: "Aanbevolen", description: "roergebakken ossenhaas met pikante kruiden", price: "16,50", comment: "" },
  { id: "A14", value: "hap-cheung-ngau-yuk", label: "Hap Cheung Ngau Yuk", category: "Aanbevolen", description: "ossenhaas met groenten in pikante kruidensaus", price: "17,50", comment: "" },
  { id: "A15", value: "chong-pau-yeung", label: "Chong Pau Yeung", category: "Aanbevolen", description: "roergebakken lams filet met pikante kruiden", price: "19,00", comment: "" },
  { id: "A16", value: "chau-fan", label: "Chau fan", category: "Aanbevolen", description: "met klein garnalen, cha-sieuw en groenten", price: "13,80", comment: "" },
  { id: "A17", value: "chau-mien", label: "Chau Mien", category: "Aanbevolen", description: "met klein garnalen, cha-sieuw en groenten", price: "13,80", comment: "" },
  { id: "M1", value: "menu-”new-china-town”", label: "Menu ”New China Town”", category: "Menu's", description: "voor minimaal 2 personen", price: "21,50", comment: "per persoon" },
  { id: "M2", value: "menu-van-de-chef-kok", label: "Menu Van De Chef Kok", category: "Menu's", description: "voor minimaal 2 personen", price: "25,50", comment: "per persoon" },
  { id: "M3", value: "rijsttafel-speciaal", label: "Rijsttafel Speciaal", category: "Menu's", description: "voor 2 personen", price: "40,50", comment: "" },
  { id: "F1", value: "coca-cola", label: "Coca Cola", category: "Frisdranken", description: "", price: "2,50", comment: "" },
  { id: "F2", value: "coca-cola-light", label: "Coca Cola Light", category: "Frisdranken", description: "", price: "2,50", comment: "" },
  { id: "F3", value: "7-up", label: "7 Up", category: "Frisdranken", description: "", price: "2,50", comment: "" },
  { id: "F4", value: "sinas", label: "Sinas", category: "Frisdranken", description: "", price: "2,50", comment: "" },
  { id: "F4", value: "cassis", label: "Cassis", category: "Frisdranken", description: "", price: "2,50", comment: "" },
  { id: "F5", value: "bitter-lemon", label: "Bitter Lemon", category: "Frisdranken", description: "", price: "2,50", comment: "" },
  { id: "F6", value: "spa-rood", label: "Spa Rood", category: "Frisdranken", description: "", price: "2,50", comment: "" },
  { id: "F7", value: "spa-blauw", label: "Spa Blauw", category: "Frisdranken", description: "", price: "2,50", comment: "" },
  { id: "F8", value: "jus-d’orange", label: "Jus d’Orange", category: "Frisdranken", description: "", price: "2,50", comment: "" },
  { id: "F9", value: "appelsap", label: "Appelsap", category: "Frisdranken", description: "", price: "2,50", comment: "" },
  { id: "F10", value: "chocomel", label: "Chocomel", category: "Frisdranken", description: "", price: "2,50", comment: "" },
  { id: "B1", value: "uit-het-vat-heineken", label: "Uit het vat Heineken", category: "Bieren", description: "", price: "3,10", comment: "per glas" },
  { id: "B2", value: "heineken-/-oud-bruin", label: "Heineken / Oud Bruin", category: "Bieren", description: "", price: "3,00", comment: "per fles" },
  { id: "B3", value: "amstel-malt", label: "Amstel Malt", category: "Bieren", description: "0% alcohol", price: "3,00", comment: "per fles" },
  { id: "B4", value: "tsing-tao", label: "Tsing Tao", category: "Bieren", description: "", price: "3,60", comment: "per fles" },
  { id: "S1", value: "sherry", label: "Sherry", category: "Aperitief", description: "medium of droog", price: "3,00", comment: "per glas" },
  { id: "S2", value: "vermouth", label: "Vermouth", category: "Aperitief", description: "rood of wit", price: "3,00", comment: "per glas" },
  { id: "S3", value: "port", label: "Port", category: "Aperitief", description: "rood of wit", price: "3,00", comment: "per glas" },
  { id: "S4", value: "campari", label: "Campari", category: "Aperitief", description: "", price: "3,00", comment: "per glas" },
  { id: "G1", value: "jenever", label: "Jenever", category: "Gedistilleerd", description: "jong of oud", price: "3,00", comment: "per glas" },
  { id: "G2", value: "vieux", label: "Vieux", category: "Gedistilleerd", description: "", price: "3,00", comment: "per glas" },
  { id: "G3", value: "whisky", label: "Whisky", category: "Gedistilleerd", description: "Red Label", price: "5,00", comment: "per glas" },
  { id: "G4", value: "whisky", label: "Whisky", category: "Gedistilleerd", description: "Black Label", price: "5,00", comment: "per glas" },
  { id: "G5", value: "whisky-jameson", label: "Whisky Jameson", category: "Gedistilleerd", description: "", price: "5,00", comment: "per glas" },
  { id: "G6", value: "gin-gordon’s-dry", label: "Gin Gordon’s dry", category: "Gedistilleerd", description: "", price: "5,00", comment: "per glas" },
  { id: "G7", value: "rum-bacardi", label: "Rum Bacardi", category: "Gedistilleerd", description: "", price: "5,00", comment: "per glas" },
  { id: "G8", value: "vodka-smirnoff", label: "Vodka Smirnoff", category: "Gedistilleerd", description: "", price: "5,00", comment: "per glas" },
  { id: "G9", value: "cointreau", label: "Cointreau", category: "Gedistilleerd", description: "", price: "5,00", comment: "per glas" },
  { id: "G10", value: "grand-marnier", label: "Grand Marnier", category: "Gedistilleerd", description: "", price: "5,00", comment: "per glas" },
  { id: "G11", value: "tia-maria", label: "Tia Maria", category: "Gedistilleerd", description: "", price: "5,00", comment: "per glas" },
  { id: "G12", value: "drambuie", label: "Drambuie", category: "Gedistilleerd", description: "", price: "5,00", comment: "per glas" },
  { id: "G13", value: "amaretto-di-saronno", label: "Amaretto di Saronno", category: "Gedistilleerd", description: "", price: "5,00", comment: "per glas" },
  { id: "G14", value: "cognac-hennessy", label: "Cognac Hennessy", category: "Gedistilleerd", description: "", price: "5,50", comment: "per glas" },
  { id: "G15", value: "courvoisier", label: "Courvoisier", category: "Gedistilleerd", description: "", price: "5,50", comment: "per glas" },
  { id: "G16", value: "cognac-vsop-remy-martin", label: "Cognac VSOP Remy Martin", category: "Gedistilleerd", description: "", price: "5,50", comment: "per glas" },
  { id: "G17", value: "sake-gekkeikan", label: "Sake Gekkeikan", category: "Gedistilleerd", description: "", price: "5,00", comment: "" },
  { id: "C18", value: "chu-yeh-ching-bamboo-likeur", label: "Chu Yeh Ching Bamboo Likeur", category: "Chinees Gedistilleerd", description: "", price: "4,50", comment: "per glas" },
  { id: "C19", value: "mei-kuei-lu-rijst-likeur", label: "Mei Kuei Lu Rijst Likeur", category: "Chinees Gedistilleerd", description: "", price: "4,50", comment: "per glas" },
  { id: "W20", value: "rood-/-wit-droog", label: "Rood / Wit droog", category: "Huiswijn", description: "", price: "3,80", comment: "per glas" },
  { id: "W21", value: "rood-/-wit-droog", label: "Rood / Wit droog", category: "Huiswijn", description: "", price: "20,50", comment: "per fles" }
];

$(function() {
  $("#dish").autocomplete({
    minLength: 0,
    source: function(request, response) {
      var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
      response($.grep(menu, function(value) {
        return matcher.test(value.id) || matcher.test(value.value) || matcher.test(value.label) || matcher.test(value.category);
      }));
    },
    focus: function(event, ui) {
      $("#dish").val(ui.item.label);
      return false;
    },
    select: function(event, ui) {
      // $("#dish").val(ui.item.label);
      // $("#dish-id").val(ui.item.value);
      // $("#dish-description").html(ui.item.category);
      // $("#dish-price").html(ui.item.price);

      $('#total').append("    <div class=\"form-group row\">\n\
      <label for=\"" + ui.item.id + "\" class=\"col-1 col-form-label\">1x</label>\n\
      <label for=\"" + ui.item.id + "\" class=\"col-5 col-form-label\">" + ui.item.label + "</label>\n\
      <div class=\"col-2 col-form-label\">\n\
        <p class=\"floatleft\">&euro; </p>\n\
        <p class=\" subtotalgerecht_" + ui.item.id + " floatright\">" + ui.item.price + "</p>\n\
      </div>\n\
    </div>");
      return false;
    }
  }).autocomplete("instance")._renderItem = function(ul, item) {
    return $("<li>")
      .append("<div>" + item.label + "<br>" + item.price + "</div>")
      .appendTo(ul);
  };

  /*
  $(document).ready(function() {
      var MyDate = new Date();
      var MyDateString;
      var MyTime;
      MyDateString2 = ('0' + MyDate.getDate()).slice(-2) + '-' + ('0' + (MyDate.getMonth()+1)).slice(-2) + "-" + MyDate.getFullYear();
      MyDateString = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth()+1)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);
      MyTime =  MyDate.getHours() + ':' + ('0' + (MyDate.getMinutes()+1)).slice(-2);
  
      $('#date').val(MyDateString);
      $('#time').val(MyTime);
      //$('#date').datepicker({ dateFormat: 'dd-mm-yy' }).val();
  
      for (var i = 1; i < gerechten.length; i++) {
          $('#total').append("    <div class=\"form-group row\">\n\
      <label for=\"gerecht_" + gerechten[i][0] + "\" class=\"col-1 offset-1 col-form-label\">" + gerechten[i][0] + ". </label>\n\
      <label for=\"gerecht_" + gerechten[i][0] + "\" class=\"col-2 col-form-label\">" + gerechten[i][1] + "</label>\n\
      <label for=\"gerecht_" + gerechten[i][0] + "\" class=\"col-2 col-form-label\">&euro; " + gerechten[i][2] + "</label>\n\
      <label class=\"col-1 col-form-label\"> x </label>\n\
      <div class=\"col-2\">\n\
          <input type=\"number\" class=\"form-control\" placeholder=\"0\" min=\"0\" id=\"gerecht_" + gerechten[i][0] + "\">\n\
      </div>\n\
      <div class=\"col-2 col-form-label\">\n\
          <p class=\"floatleft\">&euro; </p>\n\
          <p class=\" subtotalgerecht_" + gerechten[i][0] + " floatright\">0,00</p>\n\
      </div>\n\
  </div>");
      }
      $('#total').append("<div class=\"form-group row textbox\">\n\
      <label for=\"notes\" class=\"col-3 offset-1 notes col-form-label\">Notes:</label>\n\
      <div class=\"col-6 notes\">\n\
      <textarea class=\"form-control notes\" name=\"message\" id=\"contact-message\" placeholder=\"Your message\" ></textarea>\n\
      </div>\n\
      </div>");
      $('#totalmath').click(function addTotal() {
          calcTotal(true);
      });
  
      $('#showall').click(function addTotal() {
          $('.form-group.row').show();
          $('.notes').show();
      });
  
      $('label[for*="gerecht_"]').click(function addTotal(e) {
          var target = e.target;
          var targetId = target.htmlFor.slice(8);
  
          $('#gerecht_' + targetId).val(Number($('#gerecht_' + targetId).val()) + 1);
  
          var count = Number($('#gerecht_' + targetId).val());
          var price = parseInt(gerechten[targetId][2]);
          var subtotal = count * price;
          $('.subtotalgerecht_' + targetId).html(subtotal + ',00');
  
          calcTotal();
      });
  
      $('label[for*="gerecht_"]').contextmenu(function(e) {
          e.preventDefault();
          var target = e.target;
          var targetId = target.htmlFor.slice(8);
  
          if (Number($('#gerecht_' + targetId).val()) > 0) {
              $('#gerecht_' + targetId).val(Number($('#gerecht_' + targetId).val()) - 1);
  
              var count = Number($('#gerecht_' + targetId).val());
              var price = parseInt(gerechten[targetId][2]);
              var subtotal = count * price;
              $('.subtotalgerecht_' + targetId).html('&euro; ' + subtotal + ',00');
  
              calcTotal();
          } else {
              return false;
          }
      });
  
      $('input[type="number"]').change(function(e) {
          var target = e.target;
          var targetId = target.id.slice(8);
  
          var count = Number($('#gerecht_' + targetId).val());
          var price = parseInt(gerechten[targetId][2]);
          var subtotal = count * price;
          $('.subtotalgerecht_' + targetId).html('&euro; ' + subtotal + ',00');
  
          calcTotal();
      });
  });
  
  function calcTotal(print) {
      $( "#keuken" ).empty();
      var totalPrice = 0;
      var totalCount = 0;
      var vat = 0;
  
      var MyDate = new Date();
      var MyDateString;
      var MyDateString2;
      MyDateString2 = ('0' + MyDate.getDate()).slice(-2) + '-' + ('0' + (MyDate.getMonth()+1)).slice(-2) + "-" + MyDate.getFullYear();
      MyDateString = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth()+1)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2);
  
      $('#keuken').append(
  "<div class=\"form-group row\">\n\
      <div class=\"col-4\">\n\
          <p class=\"dishamount\">" + MyDateString2 + "</p>\n\
      </div>\n\
      <div class=\"col-2\">\n\
          <p class=\"dishamount\">" + $('#time').val() + "</p>\n\
      </div>\n\
  </div><hr>");
  
      for (var i = 0; i < gerechten.length; i++) {
          var dishtotal = $('#gerecht_' + i).val();
          if (parseInt(dishtotal) > 0) {
              var price = parseInt(dishtotal) * parseInt(gerechten[i][2]);
              totalCount = parseInt(totalCount) + parseInt(dishtotal);
              totalPrice = totalPrice + price;
  
              vat = totalPrice - (totalPrice * (100/106));
  
              $('#keuken').append(
  "<div class=\"form-group big-letter row\">\n\
      <div class=\"col-1\">\n\
          <p class=\"dishamount\">" + dishtotal + "</p>\n\
      </div>\n\
      <label class=\"col-1 col-form-label\"> x </label>\n\
      <label for=\"gerecht_" + gerechten[i][0] + "\" class=\"col-5 col-form-label\">" + gerechten[i][3] + "</label>\n\
      <label for=\"gerecht_" + gerechten[i][0] + "\" class=\"col-2 col-form-label price text-right\">(#" + gerechten[i][0] + ")</label>\n\
      <label class=\"col-3 col-form-label subtotalgerecht_" + gerechten[i][0] + " price\"> &euro; "+ $('.subtotalgerecht_' + i).html() +"</label>\n\
  </div><hr>");
  
          } else {
              if (print) {
                  $('#gerecht_' + i).parent().parent().hide();
                  $('.textbox').hide();
              }
          }
      }
      $('#keuken').append(
  "<div class=\"form-group row\">\n\
      <label for=\"Hal\" class=\"col-4 col-form-label\">Hall + stand:</label>\n\
      <div class=\"col-4\">\n\
          <p class=\"dishamount\">" + $('#hal').val() + "</p>\n\
      </div>\n\
      <div class=\"col-4\">\n\
          <p class=\"dishamount total\"> &euro; " + $('#totalamount').html() + "</p>\n\
      </div>\n\
      <label for=\"company\" class=\"col-4 col-form-label\">Company:</label>\n\
      <div class=\"col-7\">\n\
          <p class=\"dishamount\">" + $('#company').val() + "</p>\n\
      </div>\n\
      <label for=\"notes\" class=\"col-4 col-form-label\">Notes:</label>\n\
      <div class=\"col-8\">\n\
          <p class=\"dishamount\">" + $('#contact-message').val() + "</p>\n\
      </div>\n\
  </div>");
  
  
      $('#countamount').html(totalCount);
      $('#totalamount').html(totalPrice + ',00');
      $('#vat').html(roundTo(vat, 2, totalPrice));
  
      if ($('.big-letter').length >= 13) {
          $('.big-letter').css('font-size', '33px');
      } else if ($('.big-letter').length >= 12) {
          $('.big-letter').css('font-size', '35px');
      } else if ($('.big-letter').length >= 11) {
          $('.big-letter').css('font-size', '40px');
      } else if ($('.big-letter').length >= 10) {
          $('.big-letter').css('font-size', '45px');
      }
  
      if (print) {
          window.print();
      }
  }
  
  function roundTo(n, digits, total) {
      var negative = false;
  
      if (digits === undefined) {
          digits = 0;
      }
  
      if (n < 0) {
          negative = true;
          n = n * -1;
      }
  
      var multiplicator = Math.pow(10, digits);
      n = parseFloat((n * multiplicator).toFixed(11));
      n = (Math.round(n) / multiplicator).toFixed(2);
  
      if (negative) {
          n = (n * -1).toFixed(2);
      }
  
      return n.replace(".", ",");
  }
      */
});