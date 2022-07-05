export default class PD {
  constructor(pdId, name) {
    this.pdId = pdId;
    this.name = name;
  }

  static fromDict(d) {
    return new PD(d.pdId, d.name);
  }
}

const PD_D_LIST = [
  { pdId: "EC-01A", name: "Colombo North" },
  { pdId: "EC-01B", name: "Colombo Central" },
  { pdId: "EC-01C", name: "Borella" },
  { pdId: "EC-01D", name: "Colombo East" },
  { pdId: "EC-01E", name: "Colombo West" },
  { pdId: "EC-01F", name: "Dehiwala" },
  { pdId: "EC-01G", name: "Ratmalana" },
  { pdId: "EC-01H", name: "Kolonnawa" },
  { pdId: "EC-01I", name: "Kotte" },
  { pdId: "EC-01J", name: "Kaduwela" },
  { pdId: "EC-01K", name: "Avissawella" },
  { pdId: "EC-01L", name: "Homagama" },
  { pdId: "EC-01M", name: "Maharagama" },
  { pdId: "EC-01N", name: "Kesbewa" },
  { pdId: "EC-01O", name: "Moratuwa" },

  { pdId: "EC-02A", name: "Wattala" },
  { pdId: "EC-02B", name: "Negombo" },
  { pdId: "EC-02C", name: "Katana" },
  { pdId: "EC-02D", name: "Divulapitiya" },
  { pdId: "EC-02E", name: "Mirigama" },
  { pdId: "EC-02F", name: "Minuwangoda" },
  { pdId: "EC-02G", name: "Attanagalla" },
  { pdId: "EC-02H", name: "Gampaha" },
  { pdId: "EC-02I", name: "Ja Ela" },
  { pdId: "EC-02J", name: "Mahara" },
  { pdId: "EC-02K", name: "Dompe" },
  { pdId: "EC-02L", name: "Biyagama" },
  { pdId: "EC-02M", name: "Kelaniya" },

  { pdId: "EC-03A", name: "Panadura" },
  { pdId: "EC-03B", name: "Bandaragama" },
  { pdId: "EC-03C", name: "Horana" },
  { pdId: "EC-03D", name: "Bulathsinhala" },
  { pdId: "EC-03E", name: "Mathugama" },
  { pdId: "EC-03F", name: "Kalutara" },
  { pdId: "EC-03G", name: "Beruwala" },
  { pdId: "EC-03H", name: "Agalawatta" },

  { pdId: "EC-04A", name: "Galagedara" },
  { pdId: "EC-04B", name: "Harispattuwa" },
  { pdId: "EC-04C", name: "Pathadumbara" },
  { pdId: "EC-04D", name: "Ududumbara" },
  { pdId: "EC-04E", name: "Teldeniya" },
  { pdId: "EC-04F", name: "Kundasale" },
  { pdId: "EC-04G", name: "Hewaheta" },
  { pdId: "EC-04H", name: "Senkadagala" },
  { pdId: "EC-04I", name: "Mahanuwara" },
  { pdId: "EC-04J", name: "Yatinuwara" },
  { pdId: "EC-04K", name: "Udunuwara" },
  { pdId: "EC-04L", name: "Gampola" },
  { pdId: "EC-04M", name: "Nawalapitiya" },

  { pdId: "EC-05A", name: "Dambulla" },
  { pdId: "EC-05B", name: "Laggala" },
  { pdId: "EC-05C", name: "Matale" },
  { pdId: "EC-05D", name: "Rattota" },

  { pdId: "EC-06A", name: "Nuwara Eliya Maskeliya" },
  { pdId: "EC-06B", name: "Kothmale" },
  { pdId: "EC-06C", name: "Hanguranketha" },
  { pdId: "EC-06D", name: "Walapane" },

  { pdId: "EC-07A", name: "Balapitiya" },
  { pdId: "EC-07B", name: "Ambalangoda" },
  { pdId: "EC-07C", name: "Karandeniya" },
  { pdId: "EC-07D", name: "Bentara Elpitiya" },
  { pdId: "EC-07E", name: "Hiniduma" },
  { pdId: "EC-07F", name: "Baddegama" },
  { pdId: "EC-07G", name: "Ratgama" },
  { pdId: "EC-07H", name: "Galle" },
  { pdId: "EC-07I", name: "Akmeemana" },
  { pdId: "EC-07J", name: "Habaraduwa" },

  { pdId: "EC-08A", name: "Deniyaya" },
  { pdId: "EC-08B", name: "Hakmana" },
  { pdId: "EC-08C", name: "Akuressa" },
  { pdId: "EC-08D", name: "Kamburupitiya" },
  { pdId: "EC-08E", name: "Devinuwara" },
  { pdId: "EC-08F", name: "Matara" },
  { pdId: "EC-08G", name: "Weligama" },

  { pdId: "EC-09A", name: "Mulkirigala" },
  { pdId: "EC-09B", name: "Beliatta" },
  { pdId: "EC-09C", name: "Tangalle" },
  { pdId: "EC-09D", name: "Thissamaharama" },

  { pdId: "EC-10A", name: "Kayts" },
  { pdId: "EC-10B", name: "Vaddukoddai" },
  { pdId: "EC-10C", name: "Kankesanthurai" },
  { pdId: "EC-10D", name: "Manipay" },
  { pdId: "EC-10E", name: "Kopay" },
  { pdId: "EC-10F", name: "Udupiddy" },
  { pdId: "EC-10G", name: "Point Pedro" },
  { pdId: "EC-10H", name: "Chavakachcheri" },
  { pdId: "EC-10I", name: "Nallur" },
  { pdId: "EC-10J", name: "Jaffna" },
  { pdId: "EC-10K", name: "Kilinochchi" },

  { pdId: "EC-11A", name: "Mannar" },
  { pdId: "EC-11B", name: "Vavuniya" },
  { pdId: "EC-11C", name: "Mullaitivu" },

  { pdId: "EC-12A", name: "Kalkudah" },
  { pdId: "EC-12B", name: "Batticaloa" },
  { pdId: "EC-12C", name: "Paddiruppu" },

  { pdId: "EC-13A", name: "Ampara" },
  { pdId: "EC-13B", name: "Samanthurai" },
  { pdId: "EC-13C", name: "Kalmunai" },
  { pdId: "EC-13D", name: "Pothuvil" },

  { pdId: "EC-14A", name: "Seruvila" },
  { pdId: "EC-14B", name: "Trincomalee" },
  { pdId: "EC-14C", name: "Muttur" },

  { pdId: "EC-15A", name: "Galgamuwa" },
  { pdId: "EC-15B", name: "Nikaweratiya" },
  { pdId: "EC-15C", name: "Yapahuwa" },
  { pdId: "EC-15D", name: "Hiriyala" },
  { pdId: "EC-15E", name: "Wariyapola" },
  { pdId: "EC-15F", name: "Panduwasnuwara" },
  { pdId: "EC-15G", name: "Bingiriya" },
  { pdId: "EC-15H", name: "Katugampola" },
  { pdId: "EC-15I", name: "Kuliyapitiya" },
  { pdId: "EC-15J", name: "Dambadeniya" },
  { pdId: "EC-15K", name: "Polgahawela" },
  { pdId: "EC-15L", name: "Kurunegala" },
  { pdId: "EC-15M", name: "Mawathagama" },
  { pdId: "EC-15N", name: "Dodangaslanda" },

  { pdId: "EC-16A", name: "Puttalam" },
  { pdId: "EC-16B", name: "Anamaduwa" },
  { pdId: "EC-16C", name: "Chilaw" },
  { pdId: "EC-16D", name: "Nattandiya" },
  { pdId: "EC-16E", name: "Wennappuwa" },

  { pdId: "EC-17A", name: "Medawachchiya" },
  { pdId: "EC-17B", name: "Horowpothana" },
  { pdId: "EC-17C", name: "Anuradhapura East" },
  { pdId: "EC-17D", name: "Anuradhapura West" },
  { pdId: "EC-17E", name: "Kalawewa" },
  { pdId: "EC-17F", name: "Mihinthale" },
  { pdId: "EC-17G", name: "Kekirawa" },

  { pdId: "EC-18A", name: "Minneriya" },
  { pdId: "EC-18B", name: "Medirigiriya" },
  { pdId: "EC-18C", name: "Polonnaruwa" },

  { pdId: "EC-19A", name: "Mahiyanganaya" },
  { pdId: "EC-19B", name: "Viyaluwa" },
  { pdId: "EC-19C", name: "Passara" },
  { pdId: "EC-19D", name: "Badulla" },
  { pdId: "EC-19E", name: "Hali Ela" },
  { pdId: "EC-19F", name: "Uva Paranagama" },
  { pdId: "EC-19G", name: "Welimada" },
  { pdId: "EC-19H", name: "Bandarawela" },
  { pdId: "EC-19I", name: "Haputale" },

  { pdId: "EC-20A", name: "Bibile" },
  { pdId: "EC-20B", name: "Monaragala" },
  { pdId: "EC-20C", name: "Wellawaya" },

  { pdId: "EC-21A", name: "Eheliyagoda" },
  { pdId: "EC-21B", name: "Ratnapura" },
  { pdId: "EC-21C", name: "Pelmadulla" },
  { pdId: "EC-21D", name: "Balangoda" },
  { pdId: "EC-21E", name: "Rakwana" },
  { pdId: "EC-21F", name: "Nivithigala" },
  { pdId: "EC-21G", name: "Kalawana" },
  { pdId: "EC-21H", name: "Kolonna" },
  { pdId: "EC-22A", name: "Dedigama" },
  { pdId: "EC-22B", name: "Galigamuwa" },
  { pdId: "EC-22C", name: "Kegalle" },
  { pdId: "EC-22D", name: "Rambukkana" },
  { pdId: "EC-22E", name: "Mawanella" },
  { pdId: "EC-22F", name: "Aranayaka" },
  { pdId: "EC-22G", name: "Yatiyanthota" },
  { pdId: "EC-22H", name: "Ruwanwella" },
  { pdId: "EC-22I", name: "Deraniyagala" },
];

export const PD_LIST = PD_D_LIST.map((d) => PD.fromDict(d));
