import { Injectable } from '@angular/core';
import { AlbumClass, AlbumList } from './models/album-interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs'
import { Observable } from '../../node_modules/rxjs/dist/types/index';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AlbumServiceService {


  // private _albumsUrl: string = environment.albumUrl;

  // est à lafois un observable et un observeur
  subjectAlbum = new Subject<AlbumClass>();
  constructor(
  ) { }

  // swithOn(album: AlbumClass): void{
  //   album.genre = "on";

  //   this.http.put<void>(this._albumsUrl + '/' + album.id, album).subscribe({
  //     next: (data: void) =>console.log(data),
  //     error: (err: any) => console.warn(err),
  //     complete: () => this.subjectAlbum.next(album)
  //   })
  // }

  // switchOff(album: AlbumClass): void {
  //   album.genre = "off";

  //   this.http.put<void>(`${this._albumsUrl}/${album.id}`, album).subscribe(()=>{})
  // }
  albums: AlbumClass[] = [
    {
      "id": "1",
      "title": "La Vie en Rose",
      "artist": "Édith Piaf",
      "releaseDate": "1947-12-09",
      "genre": "Chanson",
      "label": "Columbia",
      "trackCount": 10,
      "duration": "32:15",
      "tags": ["consectetur", "adipisicing", "elit", "Ratione", "nisi"],
      "tracks": [
        { "trackNumber": 1, "title": "La Vie en Rose", "duration": "3" },
        { "trackNumber": 2, "title": "Milord", "duration": "4" },
        { "trackNumber": 3, "title": "Non, je ne regrette rien", "duration": "2" },
        { "trackNumber": 4, "title": "L'Hymne à l'amour", "duration": "3" },
        { "trackNumber": 5, "title": "La Foule", "duration": "3" },
        { "trackNumber": 6, "title": "Mon Dieu", "duration": "4" },
        { "trackNumber": 7, "title": "Padam Padam", "duration": "3" },
        { "trackNumber": 8, "title": "Sous le ciel de Paris", "duration": "5" },
        { "trackNumber": 9, "title": "Je t'ai dans la peau", "duration": "2" },
        { "trackNumber": 10, "title": "La Goualante du pauvre Jean", "duration": "3" }
      ],
      "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFl0g95JmB6hzj9HejCtbG8SoDFcCRKP2Tg&s",
      "description": "Un album iconique d'Édith Piaf contenant ses plus grands succès.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nisi exercitationem explicabo nulla sit molestiae aliquid voluptates distinctio quam quasi atque, totam quo eos, quia nobis nesciunt minima corporis ullam.Itaque vero nulla ratione quam cupiditate repudiandae minima, adipisci iusto quae, delectus ipsum doloribus dolorum deserunt expedita fuga illo voluptatum soluta. Modi nemo numquam, voluptatem maxime impedit  Deleniti commodi alias quae reiciendis saepe repellendus porro nam nulla id temporibus minus, fugiat voluptate vitae velit soluta est. Dolorum soluta ducimus ex molestiae optio! Nobis et doloribus laboriosam nulla. Doloribus ab quisquam sapiente, doloremque fugiat hic accusantium expedita voluptatibus nihil, ex reprehenderit necessitatibus. Voluptates, exercitationem consequuntur quasi dignissimos aut placeat, numquam cumque culpa qui quis eos adipisci reprehenderit tempora? Est officia commodi illum nostrum maxime modi officiis quisquam optio nesciunt recusandae iste adipisci, aut dolore corrupti sequi ipsum tempora consectetur esse. Ratione debitis totam rem necessitatibus eius sequi exercitationem. Eaque, exercitationem! Omnis cum eaque ipsam praesentium velit at, ipsum minima facilis in laborum! Quia delectus consequuntur reprehenderit laborum sunt id accusamus voluptatibus numquam, alias dolor. Libero vitae quibusdam provident.Fuga, quibusdam. Expedita ducimus rem nobis atque minus voluptatibus dolorum similique porro quas repellat, magni voluptates, iure laborum ea, dignissimos nihil eligendi sequi iusto ullam. Pariatur sapiente perspiciatis rem nulla.Blanditiis reprehenderit incidunt corporis commodi ad illum id, cum ratione! Dolorem asperiores nesciunt labore mollitia inventore repudiandae quod minima voluptatem veritatis officia.",
    },
    {
      "id": "2",
      "title": "Ne me quitte pas",
      "artist": "Jacques Brel",
      "releaseDate": "1959-09-01",
      "genre": "Chanson",
      "label": "Philips",
      "trackCount": 11,
      "duration": "37:45",
      "tags": ["consectetur", "adipisicing", "elit", "Ratione", "nisi"],
      "tracks": [
        { "trackNumber": 1, "title": "Ne me quitte pas", "duration": "4" },
        { "trackNumber": 2, "title": "Quand on n'a que l'amour", "duration": "2" },
        { "trackNumber": 3, "title": "Amsterdam", "duration": "3" },
        { "trackNumber": 4, "title": "La Chanson des vieux amants", "duration": "5" },
        { "trackNumber": 5, "title": "Les Flamandes", "duration": "3" },
        { "trackNumber": 6, "title": "Le Moribond", "duration": "3" },
        { "trackNumber": 7, "title": "Mathilde", "duration": "4" },
        { "trackNumber": 8, "title": "La Valse à mille temps", "duration": "5" },
        { "trackNumber": 9, "title": "Les Bourgeois", "duration": "3" },
        { "trackNumber": 10, "title": "Marieke", "duration": "3" },
        { "trackNumber": 11, "title": "Le Plat Pays", "duration": "6" }
      ],
      "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFl0g95JmB6hzj9HejCtbG8SoDFcCRKP2Tg&s",
      "description": "Quam officiis reiciendis a illo voluptatum beatae sequi, excepturi doloremque, magnam sapiente earum ex sunt. Ullam odit magni, consequuntur ratione obcaecati quisquam ducimus rem. In, ad ab. Expedita, blanditiis mollitia dio natus esse nihil deleniti numquam distinctio vel quas blanditiis delectus odit. Omnis praesentium atque itaque velit deleniti non excepturi quod corporis facilis laboriosam at veniam, ipsa maiores debitis errorFacilis vitae dicta cumque excepturi quibusdam, iure esse modi nostrum deserunt exercitationem rerum tempore, quasi a id laudantium obcaecati in? Ex, et distinctio amet in earum sequi facilis maxime aliasMolestias exercitationem autem excepturi quidem explicabo dignissimos earum et nam ullam! Obcaecati voluptatem accusamus expedita natus nostrum tempore, aut, sunt vel, tempora quae doloremque debitis atque vitae nobis accusantium. Delectus Officiis mollitia placeat non est facere nam, vitae assumenda at exercitationem tempore officia error praesentium natus doloribus dolores tenetur. Deleniti voluptatem eveniet impedit exercitationem dolor dolorem, hic molestiae nobis sitPlaceat in repellendus error? Obcaecati dolorem autem unde quisquam ex sequi nihil suscipit est consequuntur quidem, quibusdam nulla incidunt laudantium minima mollitia iure! Perferendis minima reprehenderit quo veritatis suscipit deleniti ",
    },
    {
      "id": "3",
      "title": "Mistral Gagnant",
      "artist": "Renaud",
      "releaseDate": "1985-01-01",
      "genre": "Chanson",
      "label": "Polydor",
      "trackCount": 12,
      "duration": "45:30",
      "tags": ["consectetur", "adipisicing", "elit", "Ratione", "nisi"],
      "tracks": [
        { "trackNumber": 1, "title": "Mistral Gagnant", "duration": "2:47" },
        { "trackNumber": 2, "title": "Dès que le vent soufflera", "duration": "4:40" },
        { "trackNumber": 3, "title": "En cloque", "duration": "3:04" },
        { "trackNumber": 4, "title": "Laisse béton", "duration": "3:30" },
        { "trackNumber": 5, "title": "Morgane de toi", "duration": "4:30" },
        { "trackNumber": 6, "title": "Manhattan-Kaboul", "duration": "3:50" },
        { "trackNumber": 7, "title": "Hexagone", "duration": "5:45" },
        { "trackNumber": 8, "title": "It is not because you are", "duration": "2:30" },
        { "trackNumber": 9, "title": "Miss Maggie", "duration": "3:52" },
        { "trackNumber": 10, "title": "Mon HLM", "duration": "4:12" },
        { "trackNumber": 11, "title": "Les Animals", "duration": "3:20" },
        { "trackNumber": 12, "title": "Chanson pour Pierrot", "duration": "3:30" }
      ],
      "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFl0g95JmB6hzj9HejCtbG8SoDFcCRKP2Tg&s",
      "description": "Un album de Renaud avec des chansons profondément ancrées dans la culture française.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nisi exercitationem explicabo nulla sit molestiae aliquid voluptates distinctio quam quasi atque, totam quo eos, quia nobis nesciunt minima corporis ullam.animi corrupti assumenda?Adipisci impedit error veritatis? Quod ratione aliquid suscipit perspiciatis fugit quas odio unde saepe repudiandae, rem accusamus quis ut illo, iusto numquam laborum cupiditate earum. Libero placeat vel reprehenderit modi?Cupiditate, provident esse sequi voluptates laborum beatae ducimus blanditiis, optio corporis vero nobis dolore modi ea iure repellat eius sapiente non illo? Sed odit minus ad laboriosam vel iusto nisi.Eius esse dolorum corporis delectus quibusdam voluptatibus quos repellat distinctio ipsum id error amet illum quasi quae, minima earum minus repellendus quam quas? Quam aspernatur quod accusamus a ipsa architecto.Praesentium sequi deserunt culpa enim in repellat Sapiente, at velit debitis alias magni itaque delectus modi quo, nulla neque corrupti eos consectetur accusamus rerum aspernatur nisi ullam commodi voluptatibus voluptas autem deleniti iusto odio. Et, itaque ratione.      Sunt maiores cupiditate tempore totam eius maxime laborum minus libero! Nam error maxime exercitationem eius iure placeat ab, facere hic quia nihil, voluptatum quis accusamus quas soluta doloribus dicta",
    },
    {
      "id": "4",
      "title": "Je te promets",
      "artist": "Johnny Hallyday",
      "releaseDate": "1986-01-01",
      "genre": "Rock",
      "label": "Philips",
      "trackCount": 12,
      "duration": "45:00",
      "tags": ["consectetur", "adipisicing", "elit", "Ratione", "nisi"],
      "tracks": [
        { "trackNumber": 1, "title": "Je te promets", "duration": "4:33" },
        { "trackNumber": 2, "title": "Quelque chose de Tennessee", "duration": "4:12" },
        { "trackNumber": 3, "title": "L'envie", "duration": "3:56" },
        { "trackNumber": 4, "title": "Laura", "duration": "4:14" },
        { "trackNumber": 5, "title": "J'oublierai ton nom", "duration": "4:32" },
        { "trackNumber": 6, "title": "Gabrielle", "duration": "4:24" },
        { "trackNumber": 7, "title": "Que je t'aime", "duration": "4:40" },
        { "trackNumber": 8, "title": "Allumer le feu", "duration": "4:23" },
        { "trackNumber": 9, "title": "Ma gueule", "duration": "3:52" },
        { "trackNumber": 10, "title": "Le pénitencier", "duration": "4:22" },
        { "trackNumber": 11, "title": "Requiem pour un fou", "duration": "4:37" },
        { "trackNumber": 12, "title": "Diego, libre dans sa tête", "duration": "3:45" }
      ],
      "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFl0g95JmB6hzj9HejCtbG8SoDFcCRKP2Tg&s",
      "description": "Un album incontournable de Johnny Hallyday.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nisi exercitationem explicabo nulla sit molestiae aliquid voluptates distinctio quam quasi atque, totam quo eos, quia nobis nesciunt minima corporis ullam.Cum dolore ducimus exercitationem, iste recusandae quae accusamus voluptatem ipsa sunt sint, consectetur quasi ad odit ratione fugit magni iure, tempora eos voluptates vero minus sed ex nobis. Sequi, provident.  Sit sapiente libero maxime modi aliquid quibusdam, alias accusantium ullam iure molestiae nostrum voluptate enim obcaecati praesentium repudiandae laboriosam ut hic qui optio corrupti sequi. Similique repudiandae necessitatibus unde optio.      Nemo ea atque obcaecati a distinctio voluptates illo est ipsa neque officia sapiente, perferendis possimus sint rem, provident, laboriosam mollitia? Ut voluptates aliquid consequatur iure voluptatum eligendi laboriosam natus voluptatibus!     Eveniet quis commodi quaerat veniam! Natus ducimus possimus beatae eligendi omnis facilis modi sit delectus deserunt. Voluptatibus vel provident laudantium officia. Quisquam obcaecati ea sed minima doloremque soluta debitis optio?      Nihil, adipisci, ipsam asperiores soluta aspernatur nesciunt fuga aperiam sapiente non blanditiis est saepe labore quos molestias molestiae nisi magnam itaque? Laborum accusamus ex quidem necessitatibus doloremque ut, pariatur ab.      Minus, labore. Inventore nostrum maxime omnis maiores fuga ipsam odio assumenda quisquam, ullam itaque dolorem quo, natus eaque consequatur cumque, at nobis perspiciatis asperiores doloribus iste aliquam harum minima non. ",
    },
    {
      "id": "5",
      "title": "Bleu Noir",
      "artist": "Mylène Farmer",
      "releaseDate": "2010-12-06",
      "genre": "Pop",
      "label": "Polydor",
      "trackCount": 12,
      "duration": "52:36",
      "tags": ["consectetur", "adipisicing", "elit", "Ratione", "nisi"],
      "tracks": [
        { "trackNumber": 1, "title": "Oui mais... non", "duration": "4:17" },
        { "trackNumber": 2, "title": "Bleu Noir", "duration": "4:35" },
        { "trackNumber": 3, "title": "Toi l'amour", "duration": "5:05" },
        { "trackNumber": 4, "title": "Lonely Lisa", "duration": "3:26" },
        { "trackNumber": 5, "title": "M'effondre", "duration": "5:32" },
        { "trackNumber": 6, "title": "N'aie plus d'amertume", "duration": "4:47" },
        { "trackNumber": 7, "title": "Light Me Up", "duration": "4:11" },
        { "trackNumber": 8, "title": "Leila", "duration": "4:52" },
        { "trackNumber": 9, "title": "Diabolique mon ange", "duration": "5:21" },
        { "trackNumber": 10, "title": "Inseparables", "duration": "4:40" },
        { "trackNumber": 11, "title": "Inséparables", "duration": "4:16" },
        { "trackNumber": 12, "title": "Désobéissance", "duration": "5:14" }
      ],
      "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFl0g95JmB6hzj9HejCtbG8SoDFcCRKP2Tg&s",
      "description": "Un album marquant de Mylène Farmer.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nisi exercitationem explicabo nulla sit molestiae aliquid voluptates distinctio quam quasi atque, totam quo eos, quia nobis nesciunt minima corporis ullam.quasi!      Quo omnis voluptatem quod ariatur, neque odit iure ratione tempora iste maiores, voluptas facere rerum impedit velit ipsa, laborum reprehenderit amet. Nesciunt iste veritatis nemo quos blanditiis alias voluptates soluta.      Nam veniam rem fugiat facere maiores obcaecati dignissimos aperiam inventore quasi pariatur? Aperiam doloremque deserunt molestias quos perspiciatis, molestiae sint repellendus omnis est atque harum perferendis provident, ipsam repellat praesentium.      Sequi quasi tempore error ut facilis, autem eaque. Soluta inventore non a libero necessitatibus ipsum ut deleniti velit rerum, quaerat quasi tempora voluptatum adipisci fugiat, qui maxime cumque harum ad quaerat porro! Sint, non nulla. Velit eos quaerat quae.      Et dolorum iusto minima distinctio, sed aspernatur incidunt repellat aliquid animi dolore ratione ipsam officia culpa illum laudantium ab accusamus earum qui! Facere aliquid laboriosam illo ducimus nobis esse eum?      Dolore corrupti asperiores minima deserunt voluptate vero quisquam  ",
    },
    {
      "id": "6",
      "title": "Chocolat",
      "artist": "Zazie",
      "releaseDate": "1995-01-01",
      "genre": "Pop Rock",
      "label": "Mercury",
      "trackCount": 10,
      "duration": "45:00",
      "tags": ["consectetur", "adipisicing", "elit", "Ratione", "nisi"],
      "tracks": [
        { "trackNumber": 1, "title": "Larsen", "duration": "4:00" },
        { "trackNumber": 2, "title": "Un point c'est toi", "duration": "4:12" },
        { "trackNumber": 3, "title": "Zen", "duration": "4:30" },
        { "trackNumber": 4, "title": "Homme Sweet Homme", "duration": "4:45" },
        { "trackNumber": 5, "title": "Un petit peu amoureux", "duration": "4:05" },
        { "trackNumber": 6, "title": "Je suis un homme", "duration": "4:50" },
        { "trackNumber": 7, "title": "Chanson d'ami", "duration": "4:35" },
        { "trackNumber": 8, "title": "Ca fait mal et ça fait rien", "duration": "4:20" },
        { "trackNumber": 9, "title": "Rodeo", "duration": "4:25" },
        { "trackNumber": 10, "title": "Rue de la paix", "duration": "4:58" }
      ],
      "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFl0g95JmB6hzj9HejCtbG8SoDFcCRKP2Tg&s",
      "description": "Un album emblématique de Zazie, mélange de pop rock et de poésie.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nisi exercitationem explicabo nulla sit molestiae aliquid voluptates distinctio quam quasi atque, totam quo eos, quia nobis nesciunt minima corporis ullam.Modi dignissimos voluptas nihil labore eligendi cum ullam eveniet ipsum? Officiis dolores sed ex! Explicabo iusto distinctio voluptatibus, illum eius voluptatum, repellendus porro quae, ratione eveniet quaerat deleniti assumenda dignissimos.      Error temporibus libero magni animi optio et omnis voluptatibus. Magni ipsa pariatur fuga ut similique. Aut, reiciendis fugit quidem quae, incidunt porro obcaecati deserunt sint possimus aliquid cumque dolorum delectus.      Illum eveniet iste asperiores, eos vel numquam recusandae iusto et quibusdam dolorum esse rerum cum eius error ipsa non accusamus sapiente dolor ut. Sapiente dignissimos accusamus incidunt, ipsam eaque nobis.      Quo, vitae consectetur aperiam reiciendis ipsum soluta nam eveniet veniam voluptas dolor natus aspernatur dolorum pariatur minus earum facere, ratione incidunt, eos quos eligendi dolorem exercitationem quaerat eius placeat? Dicta!      Nihil voluptatum quaerat vel possimus repellat, eveniet magnam sed dolore voluptates delectus ullam at, dolorum porro quod perferendis velit ea dolor magni et. Adipisci, debitis aliquam soluta repudiandae quibusdam molestiae?",
    },
    {
      "id": "7",
      "title": "Le Secret",
      "artist": "Lara Fabian",
      "releaseDate": "2013-04-15",
      "genre": "Pop",
      "label": "TF1 Musique",
      "trackCount": 17,
      "duration": "74:36",
      "tags": ["consectetur", "adipisicing", "elit", "Ratione", "nisi"],
      "tracks": [
        { "trackNumber": 1, "title": "Le Secret", "duration": "3:47" },
        { "trackNumber": 2, "title": "Danse", "duration": "4:10" },
        { "trackNumber": 3, "title": "L'illusionniste", "duration": "3:52" },
        { "trackNumber": 4, "title": "La vie est là", "duration": "4:03" },
        { "trackNumber": 5, "title": "Je n'ai que mon âme", "duration": "3:45" },
        { "trackNumber": 6, "title": "Amourex", "duration": "3:38" },
        { "trackNumber": 7, "title": "Lara", "duration": "4:26" },
        { "trackNumber": 8, "title": "Deux 'ils, deux 'elles", "duration": "3:34" },
        { "trackNumber": 9, "title": "Je t'aime encore", "duration": "4:05" },
        { "trackNumber": 10, "title": "Il est lune", "duration": "4:12" },
        { "trackNumber": 11, "title": "Mama", "duration": "4:05" },
        { "trackNumber": 12, "title": "Tango", "duration": "4:22" },
        { "trackNumber": 13, "title": "Le pont de l'âme", "duration": "4:10" },
        { "trackNumber": 14, "title": "Voce", "duration": "3:58" },
        { "trackNumber": 15, "title": "Si je ne t'aime pas", "duration": "4:23" },
        { "trackNumber": 16, "title": "Yver, vous n'estes qu'un villain", "duration": "4:00" },
        { "trackNumber": 17, "title": "Growing Wings", "duration": "4:06" }
      ],
      "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFl0g95JmB6hzj9HejCtbG8SoDFcCRKP2Tg&s",
      "description": "Un album introspectif et puissant de Lara Fabian, mêlant émotions et poésie.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nisi exercitationem explicabo nulla sit molestiae aliquid voluptates distinctio quam quasi atque, totam quo eos, quia nobis nesciunt minima corporis ullam.laudantium!      Eligendi culpa non magnam ratione. Eveniet recusandae nesciunt fugiat, quas distinctio qui, quam tenetur fuga amet autem dolores nobis. Ipsum modi totam deleniti saepe illum quidem eligendi dolor asperiores incidunt?      Dolorem cupiditate culpa iste veniam recusandae totam necessitatibus, dolor repellendus eius quae assumenda amet esse reiciendis atque nulla perspiciatis fugiat odio, debitis nam ullam tempora saepe dolore neque. Quasi, id?      Alias suscipit in doloremque adipisci molestiae quidem vitae, at rem temporibus odit ullam nostrum saepe soluta facilis placeat dolores amet hic magnam vel debitis itaque voluptatem eius cupiditate incidunt? Ducimus.      Pariatur autem repudiandae ea nostrum at provident dolor nemo natus a fuga enim in eprehenderit, eaque ipsa cupiditate expedita vitae magni veniam rerum itaque corrupti voluptas impedit sed? Repellendus, ut.      Sapiente ducimus, natus iusto aspernatur",
    },
    {
      "id": "8",
      "title": "Les Failles",
      "artist": "Pomme",
      "releaseDate": "2019-11-01",
      "genre": "Chanson",
      "label": "Polydor",
      "trackCount": 11,
      "duration": "38:42",
      "tags": ["consectetur", "adipisicing", "elit", "Ratione", "nisi"],
      "tracks": [
        {
          "trackNumber": 1,
          "title": "Jardin",
          "duration": "2:58"
        },
        {
          "trackNumber": 2,
          "title": "Je sais pas danser",
          "duration": "2:52"
        },
        {
          "trackNumber": 3,
          "title": "La Lumière",
          "duration": "3:34"
        },
        {
          "trackNumber": 4,
          "title": "Grandiose",
          "duration": "3:14"
        },
        {
          "trackNumber": 5,
          "title": "Une Minute",
          "duration": "3:07"
        },
        {
          "trackNumber": 6,
          "title": "Anxiété",
          "duration": "3:12"
        },
        {
          "trackNumber": 7,
          "title": "Pourquoi la mort te fait peur", "duration": "3:08"
        },
        {
          "trackNumber": 8,
          "title": "Les Séquoias",
          "duration": "3:46"
        },
        {
          "trackNumber": 9,
          "title": "La Gare",
          "duration": "3:30"
        },
        {
          "trackNumber": 10,
          "title": "Soleil Soleil",
          "duration": "3:01"
        },
        {
          "trackNumber": 11,
          "title": "Lueur",
          "duration": "3:20"
        }
      ],
      "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFl0g95JmB6hzj9HejCtbG8SoDFcCRKP2Tg&s",
      "description": "Un album délicat et introspectif de Pomme, explorant les thèmes de la vulnérabilité et de la résilience.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nisi exercitationem explicabo nulla sit molestiae aliquid voluptates distinctio quam quasi atque, totam quo eos, quia nobis nesciunt minima corporis ullam.Ea adipisci, culpa laborum laboriosam aut facilis placeat accusantium eligendi? Suscipit eos laudantium eligendi atque necessitatibus quisquam quidem nostrum iusto, voluptates possimus distinctio molestias repudiandae earum fuga id vero dolores?      Porro possimus, in aut laboriosam sequi numquam quos mollitia eos ipsum error amet earum quam sint, omnis quis reprehenderit illo magnam distinctio facere totam ipsam vero quasi commodi. Laboriosam, nobis.      Ab nihil odio officiis! Quas amet itaque possimus omnis totam? Dolor consequuntur vero odit animi tenetur sed! Minus ipsam, amet animi fugit fuga qui ullam doloribus, officia ab quaerat delectus.      Itaque, consectetur consequuntur. Accusantium, sint ullam neque dignissimos, laboriosam provident odit rerum repellat soluta perspiciatis consequatur dolorem. Velit corporis quos deleniti cupiditate dolor dignissimos eius, eligendi illo? Repudiandae, ipsam",
    },
    {
      "id": "9",
      "title": "Les jours heureux",
      "artist": "Vincent Delerm",
      "releaseDate": "2016-10-28",
      "genre": "Chanson",
      "label": "Tôt ou Tard",
      "trackCount": 11,
      "duration": "38:14",
      "tags": ["consectetur", "adipisicing", "elit", "Ratione", "nisi"],
      "tracks": [
        { "trackNumber": 1, "title": "La vie Varda", "duration": "2:48" },
        { "trackNumber": 2, "title": "Dans tes bras", "duration": "3:45" },
        { "trackNumber": 3, "title": "Je ne veux pas mourir ce soir", "duration": "3:15" },
        { "trackNumber": 4, "title": "Et le temps passe", "duration": "3:20" },
        { "trackNumber": 5, "title": "La Chamade", "duration": "3:12" },
        { "trackNumber": 6, "title": "C'est toi", "duration": "3:05" },
        { "trackNumber": 7, "title": "Toi en version moi", "duration": "3:33" },
        { "trackNumber": 8, "title": "Les chansons d'après-midi", "duration": "3:21" },
        { "trackNumber": 9, "title": "Bon pour un tour", "duration": "3:44" },
        { "trackNumber": 10, "title": "Les piqûres d'araignée", "duration": "3:14" },
        { "trackNumber": 11, "title": "Fanny Ardant et moi", "duration": "3:47" }
      ],
      "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFl0g95JmB6hzj9HejCtbG8SoDFcCRKP2Tg&s",
      "description": "Un album poétique et intimiste de Vincent Delerm, explorant des moments de bonheur simple.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nisi exercitationem explicabo nulla sit molestiae aliquid voluptates distinctio quam quasi atque, totam quo eos, quia nobis nesciunt minima corporis ullam.Fuga autem repudiandae ducimus odit molestiae, ipsum qui molestias, necessitatibus culpa vel illum expedita? Animi vero numquam, nisi qui eveniet quidem sint exercitationem nesciunt cum soluta ut, quaerat aut minus?      Ratione reiciendis, voluptas aliquam nam vitae, optio ipsum iste suscipit dolores praesentium eaque ut quo deleniti quia aut? Labore harum ab doloremque, repellendus adipisci laboriosam praesentium dignissimos aut illo consequatur!      Exercitationem, rem dolorum? Placeat aliquam minus eveniet optio, pariatur iure quo. Officiis quos eveniet fugiat magnam laudantium earum placeat praesentium dolorum, recusandae est totam quam velit fugit id. Cum, ratione!      Aspernatur atque quis id ipsam molestias, omnis quasi inventore officia voluptate mollitia culpa velit explicabo corporis fugiat iusto soluta, nemo perferendis sint dolore, enim minima nobis ex a similique? Ut?      Maiores sunt eligendi earum nam nostrum blanditiis dignissimos, ullam id mollitia obcaecati in quos vel ",
    },
    {
      "id": "10",
      "title": "Tout oublier",
      "artist": "Angèle",
      "releaseDate": "2018-10-05",
      "genre": "Pop",
      "label": "Initial Artist Services",
      "trackCount": 12,
      "duration": "43:27",
      "tags": ["consectetur", "adipisicing", "elit", "Ratione", "nisi"],
      "tracks": [
        { "trackNumber": 1, "title": "La Thune", "duration": "3:23" },
        { "trackNumber": 2, "title": "Balance ton quoi", "duration": "3:09" },
        { "trackNumber": 3, "title": "Jalousie", "duration": "3:19" },
        { "trackNumber": 4, "title": "Nombreux", "duration": "3:29" },
        { "trackNumber": 5, "title": "La Loi de Murphy", "duration": "3:21" },
        { "trackNumber": 6, "title": "Victime des réseaux", "duration": "3:13" },
        { "trackNumber": 7, "title": "Tout oublier", "duration": "3:23" },
        { "trackNumber": 8, "title": "Les Matins", "duration": "3:20" },
        { "trackNumber": 9, "title": "Ta Reine", "duration": "3:05" },
        { "trackNumber": 10, "title": "Flou", "duration": "3:18" },
        { "trackNumber": 11, "title": "Je veux tes yeux", "duration": "3:15" },
        { "trackNumber": 12, "title": "Le temps fera les choses", "duration": "3:12" }
      ],
      "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFl0g95JmB6hzj9HejCtbG8SoDFcCRKP2Tg&s",
      "description": "Un album vibrant et moderne d'Angèle, avec des chansons qui capturent les complexités de la vie contemporaine.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nisi exercitationem explicabo nulla sit molestiae aliquid voluptates distinctio quam quasi atque, totam quo eos, quia nobis nesciunt minima corporis ullam.Ipsam, ea pariatur modi voluptatum laborum porro hic nihil iusto quis atque alias accusamus?      Delectus deleniti itaque, provident hic necessitatibus perspiciatis porro facilis ullam id quas fugit, tempore quidem quibusdam harum ducimus debitis magnam similique. Eos error soluta, facilis modi repudiandae nihil placeat tenetur?      Quaerat numquam id magni obcaecati molestias iste distinctio ipsam! Ea a accusamus eos in iure, id repellat iusto et vel necessitatibus, harum asperiores quo sapiente amet, aliquam esse aspernatur fugit!      Labore dolores ipsam cum nisi sit, adipisci laudantium inventore fugit porro. Nihil quod optio voluptatibus omnis nulla obcaecati, minus numquam sit. Vel facilis soluta similique neque, dolore voluptatem ullam inventore.      Recusandae, similique? Voluptas modi magni quia, qui iste dolor, id fugiat itaque incidunt saepe corrupti in quos quo quod reiciendis deserunt voluptate atque fuga molestias deleniti odio cum suscipit sed",
    },
    {
      "id": "11",
      "title": "Le présent d'abord",
      "artist": "Florent Pagny",
      "releaseDate": "2017-09-22",
      "genre": "Chanson",
      "label": "Capitol Music France",
      "trackCount": 12,
      "duration": "43:57",
      "tags": ["consectetur", "adipisicing", "elit", "Ratione", "nisi"],
      "tracks": [
        { "trackNumber": 1, "title": "Le présent d'abord", "duration": "3:22" },
        { "trackNumber": 2, "title": "La beauté du doute", "duration": "3:35" },
        { "trackNumber": 3, "title": "Je veux en voir encore", "duration": "3:40" },
        { "trackNumber": 4, "title": "L'âge de raison", "duration": "3:48" },
        { "trackNumber": 5, "title": "Immense", "duration": "3:43" },
        { "trackNumber": 6, "title": "Interlude (La Caissière du Super)", "duration": "1:09" },
        { "trackNumber": 7, "title": "Entre mes lignes", "duration": "3:55" },
        { "trackNumber": 8, "title": "Laissez-moi tranquille", "duration": "3:27" },
        { "trackNumber": 9, "title": "Se partir", "duration": "3:56" },
        { "trackNumber": 10, "title": "C'est peut-être", "duration": "3:33" },
        { "trackNumber": 11, "title": "Rafale de vent", "duration": "4:09" },
        { "trackNumber": 12, "title": "Pour tourner la page", "duration": "3:40" }
      ],
      "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFl0g95JmB6hzj9HejCtbG8SoDFcCRKP2Tg&s",
      "description": "Un album inspirant de Florent Pagny, axé sur la présence et l'importance de vivre l'instant.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nisi exercitationem explicabo nulla sit molestiae aliquid voluptates distinctio quam quasi atque, totam quo eos, quia nobis nesciunt minima corporis ullam.Nulla molestias voluptatem doloremque fugit.      Quidem non nulla, provident asperiores voluptatum dolor, esse fugiat reprehenderit, illo omnis hic architecto! Impedit magni debitis minus assumenda libero molestias repellendus sint ullam consequuntur, dolorum officiis excepturi adipisci modi?      Voluptas aut deleniti quidem fugit enim repudiandae minima doloribus maiores. Rem magni ut dolore, nostrum cupiditate sunt odit itaque, commodi laborum blanditiis optio vero repudiandae officia incidunt quod eum molestias.      Quaerat sed, corrupti, sunt laborum, vitae quod ex explicabo labore cum dolorum cumque odio amet dolore temporibus ratione praesentium? Magni earum minima id quae sunt nisi amet ea, dolores at.      Asperiores error laudantium ab eos nemo quis dignissimos neque praesentium pariatur, molestias autem provident veniam minima? Expedita ab mollitia iure deserunt, deleniti molestiae, quisquam culpa atque doloremque molestias unde? Praesentium?      Suscipit maxime perferendis fugit, doloribus reprehenderit harum odio necessitatibus eaque saepe quasi, inventore est maiores vitae? .",
    },
    {
      "id": "12",
      "title": "Paradis",
      "artist": "Ben Mazué",
      "releaseDate": "2020-10-06",
      "genre": "Chanson",
      "label": "Columbia",
      "trackCount": 12,
      "duration": "44:35",
      "tags": ["consectetur", "adipisicing", "elit", "Ratione", "nisi"],
      "tracks": [
        { "trackNumber": 1, "title": "Quand je marche", "duration": "3:45" },
        { "trackNumber": 2, "title": "Toutes les belles choses", "duration": "3:50" },
        { "trackNumber": 3, "title": "Nicolas", "duration": "3:42" },
        { "trackNumber": 4, "title": "Le cœur qui cogne", "duration": "3:28" },
        { "trackNumber": 5, "title": "Évidemment", "duration": "3:36" },
        { "trackNumber": 6, "title": "Fils de...", "duration": "3:34" },
        { "trackNumber": 7, "title": "Nous deux contre le reste du monde", "duration": "3:30" },
        { "trackNumber": 8, "title": "Gaffe aux autres", "duration": "3:39" },
        { "trackNumber": 9, "title": "Paradis", "duration": "3:48" },
        { "trackNumber": 10, "title": "Les heures difficiles", "duration": "3:44" },
        { "trackNumber": 11, "title": "La mer est calme", "duration": "3:31" },
        { "trackNumber": 12, "title": "Quand je marche (version acoustique)", "duration": "4:08" }
      ],
      "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFl0g95JmB6hzj9HejCtbG8SoDFcCRKP2Tg&s",
      "description": "Un album touchant et poétique de Ben Mazué, explorant des thèmes de l'amour, de la perte et de la résilience.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nisi exercitationem explicabo nulla sit molestiae aliquid voluptates distinctio quam quasi atque, totam quo eos, quia nobis nesciunt minima corporis ullam. Amet laudantium illum temporibus asperiores pariatur similique voluptate ratione distinctio, dolores rerum, deserunt veritatis suscipit inventore. Provident ipsum magni quaerat, eveniet ea quae nam doloremque, unde pariatur harum adipisci ducimus?      Quidem qui, temporibus minima, vero consequuntur accusamus voluptatibus expedita asperiores saepe voluptatem iusto nam, facilis quas odio eos tempore? Explicabo excepturi neque cumque inventore corrupti! Enim laborum perspiciatis sapiente laboriosam.      Molestias sit laborum quasi quod amet laudantium error eum, nam asperiores, eligendi, vel expedita assumenda consequatur quae. Quas, soluta! Id ipsam aspernatur eius quas ullam",
    },
    {
      "id": "13",
      "title": "Amour chien fou",
      "artist": "Serge Lama",
      "releaseDate": "2018-10-12",
      "genre": "Chanson",
      "label": "Warner Music France",
      "trackCount": 12,
      "duration": "47:28",
      "tags": ["consectetur", "adipisicing", "elit", "Ratione", "nisi"],
      "tracks": [
        { "trackNumber": 1, "title": "Je débute", "duration": "3:54" },
        { "trackNumber": 2, "title": "Bordeaux", "duration": "4:02" },
        { "trackNumber": 3, "title": "Amour chien fou", "duration": "3:45" },
        { "trackNumber": 4, "title": "Lama père & fils", "duration": "4:21" },
        { "trackNumber": 5, "title": "Les poètes", "duration": "3:50" },
        { "trackNumber": 6, "title": "D'aventures en aventures", "duration": "4:10" },
        { "trackNumber": 7, "title": "Je voudrais tant que tu comprennes", "duration": "3:47" },
        { "trackNumber": 8, "title": "Le guitariste", "duration": "3:56" },
        { "trackNumber": 9, "title": "Pour toi mon amour", "duration": "3:52" },
        { "trackNumber": 10, "title": "Les glycines", "duration": "3:48" },
        { "trackNumber": 11, "title": "Le même temps", "duration": "4:08" },
        { "trackNumber": 12, "title": "L'envie", "duration": "4:35" }
      ],
      "coverImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFl0g95JmB6hzj9HejCtbG8SoDFcCRKP2Tg&s",
      "description": "Un album puissant et émouvant de Serge Lama, explorant l'amour sous toutes ses formes.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nisi exercitationem explicabo nulla sit molestiae aliquid voluptates distinctio quam quasi atque, totam quo eos, quia nobis nesciunt minima corporis ullam.nihil aut repellat animi iusto doloremque, ut eveniet aperiam, nisi obcaecati? Aliquid voluptatem tempora dignissimos nesciunt omnis sapiente ut, error ad minus?      Eligendi reiciendis hic aut fugiat ratione possimus obcaecati natus dignissimos necessitatibus odit alias exercitationem rerum ducimus voluptate, voluptatibus quisquam temporibus sint itaque! Iusto mollitia repellat magnam assumenda architecto molestias reprehenderit.      Totam animi temporibus ea repellat commodi explicabo ad adipisci inventore. Quibusdam dicta ratione ipsum obcaecati, numquam ut debitis veniam atque dignissimos ullam exercitationem nemo possimus doloribus ea, harum inventore cupiditate!      Quaerat incidunt vel, recusandae magni aut eum quisquam quo voluptate repellendus animi voluptatum exercitationem, rerum, ex sequi neque ad! Dicta veritatis laborum repudiandae ipsa sequi vero rerum atque maiores molestias?.",
    }
  ]

  sendCurrentNumberPage = new Subject<number>();

paginate(page: number, PerPage:number): AlbumClass[]{
  const start = (page - 1) * PerPage;
  const end = start + PerPage
    return this.albums.slice(start, end);
}

currentPage(page: number){
  this.sendCurrentNumberPage.next(page);
}
  // paginate(start: number, end: number): Observable<AlbumClass[]> {
  //   return this.http.get<AlbumClass[]>(this._albumsUrl).pipe(
  //     map(
  //       (albums) => albums.sort(
  //         (a, b) => b.duration - a.duration
  //       ).slice(start, end)
  //     )
  //   );
  // }


  getAlbums(): AlbumClass[] {
    return this.albums.sort();
  }
  getAlbum(id: string): AlbumClass | undefined {
    return this.albums.find((el: AlbumClass) => el.id === id);
  }

  count() {
    return this.albums.length;
  }
 

}
