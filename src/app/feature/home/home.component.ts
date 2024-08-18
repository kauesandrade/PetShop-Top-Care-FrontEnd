import { Component } from '@angular/core';
import { MainCarousel } from 'src/app/shared/interfaces/main-carousel';
import { Product } from 'src/app/shared/interfaces/product/product';
import { RoundCard } from '../../shared/interfaces/round-card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products: Array<Product> = [];

  itens: Array<MainCarousel> = [
    {
      imgSrcs: [
        '../../../../assets/images/carousel-images/carousel1desktop.png',
        '../../../../assets/images/carousel-images/carousel1tablet.png',
        '../../../../assets/images/carousel-images/carousel1mobile.png',
      ],
      link: '',
      alt: 'card 1',
    },
    {
      imgSrcs: [
        '../../../../assets/images/carousel-images/carousel2desktop.png',
        '../../../../assets/images/carousel-images/carousel2tablet.png',
        '../../../../assets/images/carousel-images/carousel2mobile.png',
      ],
      link: '',
      alt: 'card 2',
    },
    {
      imgSrcs: [
        '../../../../assets/images/carousel-images/carousel3desktop.png',
        '../../../../assets/images/carousel-images/carousel3tablet.png',
        '../../../../assets/images/carousel-images/carousel3mobile.png',
      ],
      link: '',
      alt: 'card 3',
    },
    {
      imgSrcs: [
        '../../../../assets/images/carousel-images/carousel4desktop.png',
        '../../../../assets/images/carousel-images/carousel4tablet.png',
        '../../../../assets/images/carousel-images/carousel4mobile.png',
      ],
      link: '/sobre-nos',
      alt: 'card 4',
    },
    {
      imgSrcs: [
        '../../../../assets/images/carousel-images/carousel5desktop.png',
        '../../../../assets/images/carousel-images/carousel5tablet.png',
        '../../../../assets/images/carousel-images/carousel5mobile.png',
      ],
      link: '/nossas-lojas',
      alt: 'card 5',
    },
    {
      imgSrcs: [
        '../../../../assets/images/carousel-images/carousel6desktop.png',
        '../../../../assets/images/carousel-images/carousel6tablet.png',
        '../../../../assets/images/carousel-images/carousel6mobile.png',
      ],
      link: 'contate-nos',
      alt: 'card 6',
    },
  ];

  categories: Array<RoundCard> = [
    {
      imgSrc:
        'https://m.media-amazon.com/images/I/517DTupFR3L._AC_UF1000,1000_QL80_.jpg',
      title: 'Ração',
    },
    {
      imgSrc:
        'https://m.media-amazon.com/images/I/71f+IhKATsS._AC_UF1000,1000_QL80_.jpg',
      title: 'Antipulga',
    },
    {
      imgSrc:
        'https://images.tcdn.com.br/img/img_prod/573283/combo_tapete_para_cachorro_30un_higienico_descartavel_absorvente_tipo_fralda_e_atrativo_caes_xixi_po_534496_1_20200401122000.jpg',
      title: 'Tapete',
    },
    {
      imgSrc:
        'https://images.tcdn.com.br/img/img_prod/699275/antipulgas_e_carrapatos_zoetis_simparic_40mg_para_caes_10_1_a_20kg_1719_1_d3d32195b04169c53921396ca8ed764f.jpg',
      title: 'Medicamento',
    },
    {
      imgSrc:
        'https://a-static.mlcdn.com.br/450x450/casinha-cachorro-casa-plastica-desmontavel-n6-mec-grande-vapet-vupet/vapetvupet/mecn6vm/7fd0c5e63efff0550a652d4cba7aa1f3.jpeg',
      title: 'Casinha',
    },
    {
      imgSrc:
        'https://a-static.mlcdn.com.br/450x450/petisco-para-cachorro-adulto-dog-chow-mix-de-frutas-75g/magazineluiza/228778300/809ff66fdd60fdc8914e69cbddff6aa9.jpg',
      title: 'Petisco',
    },
    {
      imgSrc:
        'https://cdn.awsli.com.br/600x1000/2604/2604686/produto/227108199/brinquedo-de-pelucia-para-cachorro--1--98mzuvzyh6.jpg',
      title: 'Brinquedo',
    },
  ];

  category1: Array<number> = [1];

  brands: Array<RoundCard> = [
    {
      imgSrc:
        'https://logodownload.org/wp-content/uploads/2019/09/pedigree-logo-5.png',
      title: 'Pedigree',
    },
    {
      imgSrc:
        'https://i.pinimg.com/736x/b3/66/57/b3665754998e1377da73fdc08ec83555.jpg',
      title: 'Purina',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsgoZbtvOTXtRKa_0I5e3kniuXSXzAEL-selvDfdO0g&s',
      title: 'Golden',
    },
    {
      imgSrc: 'https://static.petz.com.br/novaLoja/images/brands/zeedog.jpg',
      title: 'Zee.dog',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRR5o_mITghnmjcUYROkbMkc81AgKO8yGdVDmTbQyh_Q&s',
      title: 'Whiskas',
    },
    {
      imgSrc:
        'https://static.petz.com.br/fotos/imagem-marca-supersecao-super_secao.jpg',
      title: 'Super Secão',
    },
    {
      imgSrc: 'https://static.petz.com.br/novaLoja/images/brands/nd.jpg',
      title: 'N&D Prime',
    },
  ];

  category2: Array<number> = [2];

  constructor() {}
}
