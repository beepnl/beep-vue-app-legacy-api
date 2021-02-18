/*
 * Beep - Translations
 * Author: Pim van Gennip (pim@iconize.nl)
 *
 */
const translations = {
  /* Date picker */
  monthsFull: [
    'Tammikuu',
    'Helmikuu',
    'Maaliskuu',
    'Huhtikuu',
    'Toukokuu',
    'Kesäkuu',
    'Heinäkuu',
    'Elokuu',
    'Syyskuu',
    'Lokakuu',
    'Marrakuu',
    'Joulukuu',
  ],
  monthsShort: [
    'Tammi',
    'Helmi',
    'Maalis',
    'Huhti',
    'Touko',
    'Kesä',
    'Heinä',
    'Elo',
    'Syys',
    'Loka',
    'Marras',
    'Joulu',
  ],
  weekdaysFull: [
    'Sunnuntai',
    'Maanantai',
    'Tiistai',
    'Keskiviikko',
    'Torstai',
    'Perjantai',
    'Lauantai',
  ],
  weekdaysShort: ['Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La'],
  Today: 'Tänään',
  Clear: 'Poista',
  Close: 'Sulje',
  firstDay: 1,
  format: 'pppp p kkkk vvvv',

  /* main */
  Website: 'Verkkosivu',
  Feedback: 'Palaute',
  Feedback_mail_header: 'Beep app palaute',
  Feedback_mail_body:
    'Hyvä Beep Säätiö,%0D%0A%0D%0ATässä palautteeni about the Beep sovelluksesta.%0D%0A%0D%0AHuomasin että:%0D%0A%0D%0AJuuri ennen kuin näin tapahtui, tein:%0D%0A%0D%0ANäyttö näytti tältä (lisää kuvakaappaus):%0D%0A%0D%0A%0D%0A%0D%0A',
  Diagnostic_info: 'Diagnostiikkatiedot (jos kyseessä on bugi):%0D%0A',
  back: 'Takaisin',
  menu: 'Valikko',
  lighting: 'Kirkkaus',
  camera: 'Kamera',
  weather: 'Sää',
  sensors: 'Laitteet',
  sensors_na: 'BEEP pesiesi etävalvontasensorit ovat pian saatavilla...',

  no_valid_authentication: 'Todennustietoja ei vastaanotettu',
  succesfully_saved: 'Tallennettu onnistuneesti',

  switch_language: 'Vaihda kieli',
  Delete: 'Poista',
  Search: 'Hae...',

  /* user error messages */
  User: 'Käyttäjä',
  User_data: 'Käyttäjän tiedot',
  user_data: 'käyttäjän tiedot',
  updated: 'päivitetty',
  delete_complete_account:
    'Oletko varma että haluat poistaa koko tilisi mukaanlukien kaikki mehiläistarhat, pesät ja pesätarkastukset? Tietoja ei voi palauttaa.',
  username_is_required: 'Anna käyttäjätunnus',
  username_already_exists: 'Käyttäjätunnus on jo olemassa',
  password_is_required: 'Anna salasana',
  email_is_required: 'Anna sähköpostiosoite',
  email_already_exists: 'Sähköpostiosoite on jo käytössä',
  'policy accepted_is_required': 'Hyväksy käyttöehdot ennen rekisteröintiä',

  already_registered: 'Olen jo rekisteröitynyt',
  invalid_user: 'Käyttäjätunnus tuntematon tai väärä salasana',
  no_password_match: 'Salasanat eivät täsmää',
  invalid_token: 'Virheellinen koodi',

  no_valid_email: 'Virheellinen sähköpostiosoite',

  empty_fields: 'Täytä kaikki kentät',
  match_passwords: 'Salasanat eivät täsmää',

  succesfully_registered: 'Olet rekisteröitynyt onnistuneesti.',
  authentication_failed: 'Tunnistautminen epäonnistui',

  no_valid_input_received:
    'Tietoja ei voitu tallentaa, oikeanlaista tietoa ei vastaanotettu.',

  remove_all_settings: 'Poista kaikki asetukset',
  remove_apiary: 'Poista mehiläistarha',
  remove_hive: 'Poista pesä',
  remove_inspection: 'Poista pesätarkastus',

  Error: 'Virhe',
  Warning: 'Varoitus',
  first_remove_hives:
    'Huomio: tällä tarhalla on vielä pesiä. Voit tallentaa haluamasi pesät (ja niiden tarkastukset) siirtämällä ne ensin toiseen mehiläistarhaan. Jos jatkat poistamista, poistat KAIKKI tämän tarhapaikan pesät ja niiden tarkastukset.',

  Date: 'Päivämäärä',
  ok: 'Ok',
  previous: 'Edellinen',
  prev: 'edellinen',
  next: 'Seuraava',
  add: 'Lisää',
  create_new: 'Lisää uusi',
  New: 'Uusi',

  warning: 'Varoitus',

  apply: 'Ota käyttöön',
  Cancel: 'Peruuta',
  automatic: 'Automaattinen',
  manually: 'Manuaalinen',
  on: 'On',
  off: 'Off',

  /* login */
  login_title: 'Kirjaudu',
  login: 'Kirjaudu',
  back_to_login: 'Takaisin kirjatumiseen',
  forgot_password: 'Unohditko salasanasi?',

  username: 'Käyttäjätunnus',
  password: 'Salasana',
  confirm_password: 'Vahvista salasana',
  email: 'Sähköposti',
  token: 'Koodi',

  create_login_question:
    'Minulla ei ole tiliä. Rekisteröidy uudeksi käyttäjäksi',
  create_login: 'Rekisteröidy uudeksi käyttäjäksi',
  create_login_summary: 'Luo uusi käyttäjätili',
  save: 'Tallenna',
  save_and_return: 'Tallenna ja palaa',

  logout: 'Kirjaudu ulos',
  logout_title: 'Kirjaudu ulos tililtä',
  logout_now: 'Haluatko varmasti kirjautua ulos?',
  member_since: 'Jäsen alkaen',

  /* password recovery */
  password_recovery_title: 'Unohditko salasanasi?',
  password_recovery_remembered: 'Nyt muistin salasanani taas!',
  password_recovery_user: 'Käyttäjän tiedot',
  password_recovery_send_mail: 'Lähetä vahvistuskoodi',
  password_recovery_code_not_received: 'Etkö saanut koodia 5 minuutissa?',
  password_recovery_enter_code:
    'Onko sinulla jo vahvistuskoodi? Kirjoita se tähän',
  password_recovery_reset_title: 'Syötä uusi salasana',
  password_recovery_reset_password: 'Vaihda salasana',
  password_recovery_reminder_success:
    'Sähköposti on lähetetty. Klikkaa sähköpostissa olevaa linkkiä vaihtaaksesi salasanan tälle tilille.',
  password_recovery_reminder_summary:
    'Syötä sähköpostiosoitteesi. Saat sähköpostin, jossa on linkki salasanan vaihtamiseen.',

  password_recovery_reset_summary:
    'Määritä uusi salasana tilillesi saamallasi koodilla',
  password_recovery_reset_success:
    'Salasanasi vaihtaminen onnistui ja olet nyt kirjautunut sisään.',

  new_password: 'Uusi salasana',
  confirm_new_password: 'Vahvista uusi salasana',

  go_to_dashboard: 'Mene hallintapaneeliini',

  /* overview */
  overview_title: 'Yhteenveto',
  overview: 'Yhteenveto',
  color: 'Väri',
  state: 'On/off',
  connection_state: 'Yhteyden tila',

  /* hives */
  locations_title: 'Beep',
  hives_title: 'Beep',
  Hive: 'Pesä | Pesät',
  hive: 'pesä | pesät',
  Location: 'Mehiläistarha | Mehiläistarhat',
  location: 'mehiläistarha | mehiläistarhat',
  Name: 'Nimi',
  name: 'nimi',
  Type: 'Tyyppi',
  type: 'tyyppi',
  Layer: 'Osasto',
  layer: 'Osasto',
  brood: 'Sikiöt',
  honey: 'Hunaja',
  inspect: 'Tarkasta',
  inspection: 'tarkastus | tarkastukset',
  Inspection: 'Tarkastus | Tarkastukset',
  New_inspection: 'Uusi tarkastus',
  Edit_inspection: 'Muokkaa tarkastusta',
  Actions: 'Toimenpiteet',
  Conditions: 'Olosuhteet (tarkastettu)',
  edit: 'Muokkaa',
  // Hive_brood_layers: 'Sikiö osastot',
  // Hive_honey_layers: 'Hunaja osastot',
  Hive_layer_amount: 'Osastojen määrä',
  Bee_race: 'Mehiläisten rotu',
  Birth_date: 'Syntymäpäivä',
  Color: 'Väri',
  Queen_colored: 'Emo merkattu',
  Queen_clipped: 'Emo siivet typistetty',
  Queen_fertilized: 'Emo pariutunut',
  Age: 'Ikä',
  years_old: 'vuotta vanha',

  /* Hive check items */
  Date_of_inspection: 'Tarkastuspäivämäärä',
  action: 'Toimenpide',
  reminder: 'Muista',
  remind_date: 'Muistutuspäivä',

  overall: 'Yleiskuva',
  positive_impression: 'Yleisarvio',
  needs_attention: 'Tarvitsee lisähuomiota',
  notes: 'Muistiinpanot',
  notes_for_next_inspection:
    'Lyhyt muistiinpano seuraavaa tarkastuskertaa varten (näkyy yleiskatsauksessa)',
  Not_implemented_yet: 'Tätä kohdetta ei ole vielä otettu käyttöön',
  save_input_first: 'Haluatko tallentaa tiedot ensin?',

  /* dashboard */
  dashboard_title: 'Hallintapaneeli',
  dashboard: 'Hallintapaneeli',
  // measurements: 'Mittaukset',
  measurementsError: 'Mittauksia ei voi ladata, tarkista verkkoyhteys',
  last_measurement: 'Viimeisin mittaus',
  at: 'klo',
  measurement_system: 'Beep mittausjärjestelmä',
  no_data: 'Tietoja ei käytettävissä',
  no_chart_data: 'Ei kaaviotietoja valitulta ajanjaksolta',

  /* settings */
  General: 'Yleisasetukset',
  Place: 'Sijainti',
  Country: 'Maa',
  City: 'Kaupunki',
  Address: 'Osoite',
  Lattitude: 'Leveysaste',
  Longitude: 'Pituusaste',
  Street: 'Katu',
  Number: 'Numero',
  Postal_code: 'Postinumero',
  Description: 'Kuvaus',
  Hive_settings: 'Pesän asetukset',
  Hive_amount: 'Pesien määrä täällä tarhapaikalla',
  Hive_prefix: 'Pesän nimen etuliite (ennen numeroa)',
  Hive_number_offset: 'Pesien alkunumero',
  Hive_type: 'Pesätyyppi',
  Hive_layers: 'Pesän osastot',
  Hive_frames: 'Kehiä per osasto',
  Hive_color: 'Pesän väri',
  Queen: 'Emo',
  queen: 'emo',

  settings_title: 'Asetukset',
  settings_description: 'Anturien asetukset',
  settings: 'asetukset',

  sensors_title: 'Laiteasetukset',
  sensors_description: 'Laitteiden tila ja rekisteröinti',
  // sensors: 'Laitteet',
  sensor: 'laite',

  Select: 'Valitse',
  Not_selected: 'Ei valittu',
  Poor: 'Huono',
  Fair: 'Kohtalainen',
  Average: 'Keskimääräinen',
  Good: 'Hyvä',
  Excellent: 'Erinomainen',
  Low: 'Matala',
  Medium: 'Keskitaso',
  High: 'Korkea',
  Extreme: 'äärimmäinen',

  /* colors */
  select_color: 'Valitse väri',
  advanced: 'Lisäasetukset',

  /* sensors */
  Select_sensor: 'Valitse anturi',
  // temperature: 'Lämpötila',
  t: 'Lämpötila',
  t_0: 'Lämpötila 1',
  t_1: 'Lämpötila 2',
  t_2: 'Lämpötila 3',
  t_3: 'Lämpötila 4',
  t_4: 'Lämpötila 5',
  t_5: 'Lämpötila 6',
  t_6: 'Lämpötila 7',
  t_7: 'Lämpötila 8',
  t_8: 'Lämpötila 9',
  t_9: 'Lämpötila 10',
  light: 'Auringonvalo',
  l: 'Auringonvalo',
  water: 'Vesi',
  w: 'Vesi',
  humidity: 'Kosteus',
  h: 'Kosteus',
  air_pressure: 'Ilmanpaine',
  p: 'Ilmanpaine',
  weight: 'Paino',
  w_v: 'Painoanturin arvo kaikki anturit',
  w_fl: 'Painoanturin arvo etu vasen',
  w_fr: 'Painoanturin arvo etu oikea',
  w_bl: 'Painoanturin arvo taka vasen',
  w_br: 'Painoanturin arvo taka oikea',
  weight_kg: 'Paino',
  weight_kg_corrected: 'Paino (corr)',
  weight_combined_kg: 'Paino yhdistelmä',
  bat_volt: 'Akku',
  bv: 'Akku',
  sound_fanning_4days: 'Tuuletus 4pv mehiläiset',
  s_fan_4: 'Tuuletus 4pv mehiläiset',
  sound_fanning_6days: 'Tuuletus 6pv mehiläiset',
  s_fan_6: 'Tuuletus 6pv mehiläiset',
  sound_fanning_9days: 'Tuuletus 9pv mehiläiset',
  s_fan_9: 'Tuuletus 9pv mehiläiset',
  sound_flying_adult: 'Lentomehiläiset',
  s_fly_a: 'Lentomehiläiset',
  sound_total: 'ääni yhteensä',
  s_tot: 'ääni yhteensä',
  s_spl: 'äänen painetaso',
  bee_count_in: 'Mehiläisten määrä sisään',
  bc_i: 'Mehiläisten määrä sisään',
  bee_count_out: 'Mehiläisten määrä ulos',
  bc_o: 'Mehiläisten määrä ulos',
  t_i: 'Sisälämpötila',
  rssi: 'Signaalin voimakkuus',
  snr: 'Signaali kohina',
  lat: 'Leveysaste',
  lon: 'Pituusaste',
  Sound_measurements: 'äänen mittaukset',
  Sensor_info: 'Anturin tiedot',
  s_bin098_146Hz: '098-146Hz',
  s_bin146_195Hz: '146-195Hz',
  s_bin195_244Hz: '195-244Hz',
  s_bin244_293Hz: '244-293Hz',
  s_bin293_342Hz: '293-342Hz',
  s_bin342_391Hz: '342-391Hz',
  s_bin391_439Hz: '391-439Hz',
  s_bin439_488Hz: '439-488Hz',
  s_bin488_537Hz: '488-537Hz',
  s_bin537_586Hz: '537-586Hz',
  icon: 'Kuvake',
  precipIntensity: 'Sademäärä',
  precipProbability: 'Sateen todennäköisyys',
  precipType: 'Sade tyyppi',
  temperature: 'Ulkolämpötila',
  apparentTemperature: 'Näkyvä lämpötila',
  dewPoint: 'Kastepiste',
  // humidity: 'Kosteus',
  pressure: 'Ilmanpaine',
  windSpeed: 'Tuulennopeus',
  windGust: 'Tuuli puuskissa',
  windBearing: 'Tuulen suunta',
  cloudCover: 'Pilvisyys',
  uvIndex: 'UV indeksi',
  visibility: 'Näkyvyys',
  ozone: 'Otsoni',

  /* Measurements */
  hour: 'Tunti',
  day: 'Päivä',
  week: 'Viikko',
  month: 'Kuukausi',
  year: 'Vuosi',

  /* settings */
  could_not_load_settings: 'Asetuksia ei voitu ladata',
  offline: 'Ei yhteyttä',
  remote: 'Etä',
  connected: 'Suora',

  yes: 'Kyllä',
  no: 'Ei',

  footer_text: 'Avoimen lähdekoodin mehiläistarhausta',
  beep_foundation: 'BEEP säätiö',

  Checklist: 'Tarkistuslista | Tarkistusluettelot',
  checklist: 'tarkistuslista | tarkistusluettelot',
  Checklist_items: 'Tarkistuslistan kohteet',
  edit_hive_checklist:
    'Lisää/poista kohteita pesän tarkastuslistalta valitsemalla ruutu/poistamalla valinta. Voit myös järjestää kohteet haluamaasi järjestykseen vetämällä ja pudottamalla. Vinkki: jos kirjoitat termin hakukenttään, kaikki kyseistä termiä sisältävät kohteet muuttuvat punaisiksi.',

  /* user */
  Data_export: 'Vie tiedot',
  Export_your_data:
    'Vie kaikki Beep-tililläsi olevat tiedot ja lähetä Excel-tiedostona sähköpostissa. Excel-tiedostossa on oma välilehti henkilökohtaisille, pesän, tarhapaikan ja tarkastusten tiedoille.',

  Terms_of_use: 'Käyttöehdot',
  accept_policy:
    'Hyväksyn BEEP-palveluehdot, jotka ovat uuden eurooppalaisen tietosuojalain mukaiset.',
  policy_url: 'https://beep.nl/terms-of-service',
  policy_version: 'beep_terms_2018_05_25_avg_v1',
  approve_policy: 'Et ole vielä hyväksynyt viimeisimpiä käyttöehtoja',

  /* weight calibration settings */
  calibrate_weight: 'Kalibroi paino',
  calibrate_explanation:
    'Nollaa anturipaino vähentämällä nykyinen mittausarvo.',
  set_as_zero_value: 'Aseta nämä arvot 0 arvoiksi',
  set_weight_factor: 'Määritä painokerroin',
  own_weight_kg: 'Mikä on oma painosi kiloina?',
  start_calibration:
    'Astu nyt vaaalle ja paina alla olevaa nappia määritelläksesi painokertoimen. Jaa painosi tasaisesti.',
  currently_there_is: 'Paino on',
  nothing: 'ei mitään',
  on_the_scale: 'vaaalla',
  calibration_started:
    'Kalibrointi aloitettu... Odota kunnes seuraava mittaus tulee voimaan.',
  calibration_ended: 'Kalibrointi onnistui!',

  /* General items */
  server_down:
    'Sovellus ei ole käytössä huoltotöiden takia. Yritä myöhemmin uudelleen',
  add_to_calendar: 'Lisää kalenteriin',
  sort_on: 'Lajittelu päällä',
  Whats_new: 'Uutta!',
  Manual: 'Ohjeet',

  Site_title: 'BEEP | Mehiläismonitori',

  could_not_create_user:
    'Käyttäjää ei voida luoda tällä hetkellä.Pahoittelemme häiriötä, yritä myöhemmin uudelleen.',
  email_verified: 'Your e-mail address has been verified.',
  email_not_verified: 'Sähköpostiosoitettasi ei ole vielä vahvistettu',
  email_new_verification:
    'Klikkaa tätä linkkiä lähettääksesi uuden vahvistussähköpostin',
  email_verification_sent:
    'Vahvistuslinkillä varustettu viesti on lähetetty sähköpostiosoitteeseesi. Aktivoi tilisi ja kirjaudu sisään napsauttamalla sähköpostissa olevaa linkkiä.',

  not_filled: 'Vaaditaan, mutta ei täytetä',
  cannot_deselect:
    'Tätä kohdetta ei voi poistaa, koska se sisältää pakollista tietoa',
  sensor_key: 'Anturi näppäin',
  Undelete: 'älä poista',
  the_field: 'Kenttä',
  is_required: 'on pakollinen',

  No_groups: 'Ryhmiä ei ole käytettävissä',
  not_available_yet:
    'Ei vielä käytettävissä. Klikkaa yläkulmassa olevaa painiketta lisätäksesi ryhmän.',
  Users: 'Käyttäjät',
  member: 'ryhmän jäsen | ryhmän jäsenet',
  Member: 'Ryhmän jäsen | Ryhmän jäsenet',
  Invite: 'Kutsu',
  Invited: 'Kutsuttu',
  Invitation: 'Kutsu | Kutsutut',
  Admin: 'Järjestelmänvalvoja',
  Creator: 'Ryhmän omistaja',
  Group: 'Yhteistyöryhmä | Tee yhteistyötä',
  group: 'yhteistyöryhmä | tee yhteistyötä',
  group_short: 'ryhmä | ryhmät',
  to_share:
    'Jaa tämän ryhmän kanssa. 1 napsautus = Ryhmän jäsenillä vain lukuoikeus 2 napsautusta = Ryhmän jäsenet voivat muokata',
  Invitation_accepted: 'Kutsu hyväksytty',
  Accept: 'Hyväksy',
  My_shared: 'Jaetut',
  invitee_name: 'Kutsutun nimi',
  Remove_group:
    'Oletko varma että haluat poistaa tämän ryhmän kokonaan kaikilta sen jäseniltä?',
  Detach_from_group: 'Poista minut ja pesäni tästä ryhmästä',
  my_hive: 'Minun pesäni',
  created: 'Luotu',
  group_detached: 'Poistuit ryhmästä onnistuneesti',
  group_activated: 'Ryhmäkutsu hyväksytty',
  group_explanation_1:
    '1. Luo uusi yhteistyöryhmä, jolla on selkeä otsikko ja valinnainen kuvaus',
  group_explanation_2: '2. Kutsu muita Beep käyttäjiä sähköpostilla',
  group_explanation_3:
    '3. Jaa tietyt pesät, joita muut voivat tarkastella ja tehdä yhteistyötä',
  Filter_and_sort_on: 'Suodata ja lajittele:',

  /* New translations v2.2.0 */
  roofed: 'Onko mehiläistarhalla katos?',
  info: 'Info',

  research: 'Tutkimus',
  research_explanation:
    'Tästä näytöstä löydät tutkimukset, joiden kanssa voit jakaa tietosi. Kun annat suostumuksesi BEEB tilisi tietojen käyttöön, osallistut tutkimukseen, joka tukee mehiläisten terveyttä. Ennen kuin annat suostumuksesi, tutustu tutkimuksen kuvaukseen alla olevan linkin kautta ja pyydä tarvittaessa lisätietoja.Voit peruuttaa suostumuksesi milloin tahansa, uusia tietoja ei jaeta siitä hetkestä lähtien. Tiedot, jotka annoit suostumusen aikana, ovat edelleen tutkimuksen käytettävissä. Jos sinulla on kysyttävää, ole hyvä ja ota yhteyttä alla ilmoitettuun yhteyshenkilöön.',
  research_info:
    'Jakamalla tietosi tutkijoiden kanssa autat heitä analysoimaan enemmän tietoa ja tekemään parempia johtopäätöksiä tutkimuksessaan.',
  start_date: 'Aloituspäivämäärä',
  end_date: 'Päättymispäivämäärä',
  purpose: 'Tutkimuksen tarkoitus',
  institution: 'Tutkimuslaitos',
  type_of_data_used: 'Datan käyttö',
  link: 'Linkki',
  Consent: 'Suostumus',
  history: 'Historia',
  Current_consent: 'Nykyinen suostumus',
  consent_yes: 'Suostun jakamaan tietoni',
  consent_no: 'EN suostu jakamaan tietojani',
  my_beep_data: 'Oma BEEP datani',
  Consent_can_only_be_set: 'Suostumus voidaan muuttaa vain',
  earlier: 'aiempi',
  later: 'myöhempi',

  new_apiary_explanation: 'Luo uusi mehiläistarha neljässä vaiheessa',
  start_here: 'Aloita tästä',
  optional: 'valinnainen',
  dimensions: 'Mitat',
  details: 'yksityiskohdat',
  configuration: 'konfiguraatio',
  adjustments: 'säädöt',
  changes_queen_color: 'Muokkaus muuttaa värin',

  Brood_box_and_frame: 'Sikiöosasto ja kehä',
  Hive_order: 'Pesien järjestys tarhapaikalla',
  bb_width_cm: 'Sikiöosaston leveys (cm)',
  bb_height_cm: 'Sikiöosaston korkeus (cm)',
  bb_depth_cm: 'Sikiöosaston syvyys (cm)',
  fr_width_cm: 'Kehän leveys (cm)',
  fr_height_cm: 'Kehän korkeus (cm)',
  queen_line: 'linja',
  queen_tree: 'sukupuu',
  queen_description: 'muistiinpanot',
  Hive_short: 'Pesä | Pesät',

  Image: 'Kuva | Kuvat',
  Size: 'Koko',
  preview: 'esikatsele',

  Sensor_definitions: 'Anturimääritelmät',
  Inside: 'Mittaa sisällä',
  Offset: 'Offset',
  Multiplier: 'Kerroin',
  Input: 'Input',
  Output: 'Output',
  Last: 'Viimeinen',

  Export_sensor_data:
    "Vie kaikki tiedot per laite korkeimmalla mahdollisella resoluutiolla .csv-tiedostona, jonka voit avata Excelissä tai SPSS: ssä. HUOMAUTUS: 'aika ' -sarakkeessa olevat päivämäärän ja kellonajan tiedot ovat GMT-aikaa, muotoillut RFC 3339 -päivämäärä-aika -standardilla.",
  CSV_export_separator: 'CSV-datasarakkeen erotin',
  Selected_date: 'Valittu ajanjakso',
  Sensor_measurements: 'Anturimittaukset',
  too_much_data:
    'Liian paljon käsiteltäviä tietoja, valitse vähemmän anturimittauksia tai lyhennä aikajaksoa aloitus- ja lopetuspäivän välillä',

  beep_base_explanation:
    "Jos sinulla on BEEP alusta (ks. yllä oleva kuva), käytä natiivisovellusta (iOS ja Android) yhteyden muodostamiseksi tämän sovelluksen kanssa. Jos sinulla ei vielä ole BEEP alustaa, klikkaa valikon kohdasta 'BEEP verkkosivu' saadaksesi lisätietoja BEEP alustan saamisesta. Jos sinulla on oma mittauslaite ja haluat nähdä sen tiedot BEEP-sovelluksessa, lähetä meille viesti ja pyydä liittymistä Slack-yhteisöömme ja saat pääsyn API-kuvaukseen.",

  sample_code_hive:
    'Valitse ensin pesä, jotta voit luoda yksilöllisen näytekoodin',
  sample_code_generate: 'Luo yksilöllinen näytekoodi',
  sample_code_delete: 'Poista yksilöllinen näytekoodi',

  measurement_interval: 'väli',
  from_weather_service: 'sääpalvelusta',

  /* New translations v3 */
  Collaborate: 'Tehdä yhteistyötä',
  click_hives_to_filter: 'Click hives to filter',
  for: 'for',
  last_visit: 'Last visit',
  apiary_details: 'Apiary details',
  group_details: 'Group details',
  diary: 'Diary',
  data: 'Data',
  photo: 'photo | photos',
  add_checklist: 'Add checklist',
  add_hive: 'Add hive',
  delete_apiary: 'Delete apiary',
  edit_apiary: 'Edit apiary',
  new_apiary: 'New apiary',
  delete_group: 'Delete group',
  edit_group: 'Edit group',
  new_group: 'New group',
  verification_code: 'verification code',
  limit_exceeded: 'Limit has been reached, try again later',
  confirm_email_title: 'Confirm your email',
  confirm_email_summary:
    "You've received a verification code in your email. Enter it below to verify your email adress",
  confirm: 'Confirm',
  Profile: 'Profile',
  Checklist_template: 'Checklist template | Checklist templates',
  Help: 'Help',
  Privacy: 'Privacy',
  FAQ: 'FAQ',
  Support: 'Support',
  no_inspections: 'Add first inspection',
  no_results: 'No results',
  Hive_brood_layer: 'Sikiö osasto | Sikiö osastot',
  Hive_honey_layer: 'Hunaja osasto | Hunaja osastot',
  Hive_queen_excluder_layer: 'Queen excluder | Queen excluders',
  Hive_feeding_box_layer: 'Feeding box | Feeding boxes',
  overrides_layer_colors: 'overrides layer colors',
  drag_layers: 'Drag layers to configure hive',
  page: 'page | pages',
  not_found: 'not found',
  sorry: 'Sorry',
  delete_layer: 'Delete layer',
  not_saved_error: 'Data could not be saved',
  something_wrong: 'Something went wrong',
  not_editable: 'not editable',
  unsaved_changes: 'Unsaved changes',
  save_changes:
    'Are you sure you want to leave this page? Any unsaved changes will be lost.',
  no_apiaries_yet: "You don't have any apiaries yet",
  need_help: 'Need help?',
  Apiary_color: 'Apiary color',
  Set_notification_date: 'Set notification date',
  remove_image: 'Remove image',
  Total_colony_size: 'Total colony size',
  bee: 'bee | bees',
  with_bees: 'with bees',
  change_checklist_confirm:
    'Are you sure you want to select a different checklist? Values of already filled in fields will be kept.',
  view: 'View',
  share: 'Share',
  edit_details: 'Edit details',
  remove_queen: 'Remove queen',
  remove_group_short: 'Remove collaboration group',
  device: 'Device | Devices',
  click_date_to_edit: 'Click date to edit.',
  accept_policy_1: 'I accept the BEEP ',
  accept_policy_2: ', that are compatible with the new European privacy law',
  terms_of_use: 'terms of service',
  invalid_password:
    'Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one number and one special character (\\]{}()?\\-"!@#%&/\\,><\':;|_~`)',
  sensor_definition: 'sensor definition | sensor definitions',
  measurement: 'mittaus | mittaukset',
  remove_device: 'Remove device',
  last_message_received: 'Last message received',
  transmission_ratio: 'Transmission ratio',
  period: 'Period',
  download: 'Download',
  different_end_start: 'End and start date must differ',
  new_email_verification_sent:
    'A message with a verification link has been sent to your new e-mail address. Click the link in the e-mail to confirm your new e-mail address and log in.',
  sensordef_info:
    "A sensor definition is intended to convert a sensor value from an incoming 'raw' sensor value into a value according to a physical quantity and unit (e.g. w_v = 1098273 => weight_kg = 62,400 kg) or to calibrate a sensor (e.g. t_0 = 15.3 ° C => t_0 = 15.8 ° C). This can be done by setting an 'offset' and a 'multiplier'. The input and output value remains the same if offset '0' and multiplier '1' is set. The BEEP base app (from the App Store) will provide you with the right sensor definitions at the initial setup of your BEEP base.",
  or: 'or',
  select_all_hives: 'Select all hives',
  select_all_editable_hives: 'Selecteer alle aanpasbare bijenkasten',
  alert: 'Alert | Alerts',
  remove_alert: 'Remove alert',
  alerts_enabled: 'Alerts enabled',
  alerts_disabled: 'Alerts disabled',
  edit_checklist_confirm:
    'Are you sure you want to edit the checklist? Any unsaved changes to your inspection will be lost.',
  edit_checklist_confirm_deselectedhives:
    'Are you sure you want to edit the checklist? Any unsaved changes to your inspection and your hive selection will be lost.',
  user_not_edited:
    'User data has not been edited. Possibly the user data is identical to the user data already in the database, or one or more fields are not correctly filled in. Please check your data and try again.',
  user_not_deleted: 'Something went wrong, user has not been deleted.',
  research_consent: 'Research consent',
  checklist_types: 'Personal, shared, research',
  edit_hive_checklist_no_touch:
    'Check/unckeck the boxes in the list below to add/remove items from your hive checklist. You can also unfold/fold and drag/drop the items to re-order them to your own style (N.B. this is not possible on a touchscreen device).',
  edit_hive_checklist_touch:
    'Check/unckeck the boxes in the list below to add/remove items from your hive checklist. Changing the order of items is only possible on a desktop computer.',
  input_not_possible_for_bulkinspection:
    'This item is not available when multiple hives are selected for an inspection, as it can only be filled in per individual hive. It is possible to fill in this item for a single hive at a later time, by editing the inspection for that hive.',
  save_bulkinspection_confirm:
    'Are you sure that you want to save this inspection for multiple hives at the same time?',
  deleted_but_not_saved_devices_warning:
    "N.B.: devices will only be removed after clicking the 'Save Devices' button in the top right corner.",
  no_alerts: 'No new alerts',
  alertrule: 'alert rule | alert rules',
  Measurement: 'Measurement | Measurements',
  Calculation: 'Calculation',
  calculation: 'calculation',
  Calculation_minutes: 'Calculate per x number of minutes',
  Alert_on_occurences: 'When would you like to receive this alert?',
  Alert_on_occurences_hint:
    'Directly, or only after it has occurred an x number of times?',
  Direct: 'Directly',
  After: 'After ',
  times: ' times',
  Comparator: 'Comparator',
  comparator: 'comparator',
  Comparison: 'Comparison',
  comparison: 'comparison',
  Threshold_value: 'Threshold value',
  Minimum: 'Minimum',
  Maximum: 'Maximum',
  Derivative: 'Derivative (increase or decrease)',
  Count: 'Count',
  Value: 'Value',
  Difference: 'Difference',
  Absolute_value: 'Absolute value',
  Absolute_value_of_dif: 'Absolute value of the difference',
  alertrule_info: 'This will be replaced by some info on alert rules.',
  alertrules_default_url_text:
    'Here you can view the default alert rules and copy them to your own alert rules if you like.',
  Exclude_months:
    'I do NOT want to receive any alerts during the following months:',
  Exclude_hours:
    'I do NOT want to receive any alerts during the following hours:',
  Exclude_hours_details:
    'N.B. During the selected hours no calculations will be performed in order to create any alerts.',
  Exclude_hives: 'I do NOT want to receive any alerts for the following hives:',
  months: 'months',
  hours: 'hours',
  delete_alertrule: 'Delete alert rule',
  Active: 'Active',
  Alert_via_email: 'Alert via email',
  Webhook_url: 'Webhook url',
  this_field: 'This field',
  alertrule_default: 'Default alert rule | Default alert rules',
  copy: 'Copy',
}

export default translations
