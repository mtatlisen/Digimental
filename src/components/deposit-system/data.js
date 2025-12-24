export const PRODUCTS = [
    // REVEGO
    {id:'i10',name:'iECO i10',brand:'REVEGO',capacity:'600 şişe',speed:null,materials:'Cam',
     img:'https://revego.net/wp-content/uploads/2025/07/i10t1.jpg',
     featured:false},
    {id:'i20',name:'iECO i20',brand:'REVEGO',capacity:'800 adet',speed:null,materials:'PET, Kutu',
     img:'https://revego.net/wp-content/uploads/2025/07/REVEGO-i20.webp',
     featured:false},
    {id:'i30',name:'iECO i30',brand:'REVEGO',capacity:'1.660 adet',speed:null,materials:'PET, Cam, Kutu',
     img:'https://revego.net/wp-content/uploads/2025/07/REVEGO-i30.webp',
     featured:true},
    {id:'i100',name:'iECO i100',brand:'REVEGO',capacity:'5.000+ adet',speed:'120/dk',materials:'Tümü',
     img:'https://revego.net/wp-content/uploads/2025/07/REVEGO-iECO-i100.webp',
     featured:true,tag:'Mobil'},
    // RVM Systems
    {id:'xpro',name:'X ProLine',brand:'RVM Systems',capacity:'Modüler',speed:'60/dk',materials:'Tümü',
     img:'https://rvmsystems.com.tr/wp-content/uploads/sites/19/2025/01/rvm-xproline.jpg',
     featured:false},
    {id:'mega',name:'Mega ProLine+',brand:'RVM Systems',capacity:'8 Kabin',speed:'100/dk',materials:'Tümü',
     img:'https://rvmsystems.com.tr/wp-content/uploads/sites/19/2025/01/rvm-mega-proline.jpg',
     featured:true,tag:'Popüler'},
    {id:'x20',name:'X20',brand:'RVM Systems',capacity:'Kompakt',speed:'50/dk',materials:'PET, Kutu',
     img:'https://rvmsystems.com.tr/wp-content/uploads/sites/19/2025/01/rvm-x20.jpg',
     featured:false},
    {id:'x2',name:'X2',brand:'RVM Systems',capacity:'Kompakt',speed:'50/dk',materials:'PET, Kutu',
     img:'https://rvmsystems.com.tr/wp-content/uploads/sites/19/2025/01/rvm-x2.jpg',
     featured:false},
    {id:'x3',name:'X3',brand:'RVM Systems',capacity:'Kompakt',speed:'50/dk',materials:'PET, Cam, Kutu',
     img:'https://rvmsystems.com.tr/wp-content/uploads/sites/19/2025/01/rvm-x3.jpg',
     featured:false},
    {id:'x30',name:'X30',brand:'RVM Systems',capacity:'Geniş',speed:'50/dk',materials:'PET, Cam, Kutu',
     img:'https://rvmsystems.com.tr/wp-content/uploads/sites/19/2025/01/rvm-x30.jpg',
     featured:false},
    // Ripet
    {id:'cfront',name:'C-FRONT',brand:'Ripet',capacity:'6.000 şişe',speed:null,materials:'PET',
     img:'https://ripet.it/wp-content/uploads/2024/05/Ripet-ecocompattatore-CFRONT-web.png',
     featured:true,tag:'6x Sıkıştırma'},
    {id:'cta',name:'C-TA',brand:'Ripet',capacity:'3.500 şişe',speed:null,materials:'PET',
     img:'https://ripet.it/wp-content/uploads/2024/04/Ripet-C-TA.png',
     featured:false},
    {id:'plastc',name:'Plast-C',brand:'Ripet',capacity:'6.000 şişe',speed:null,materials:'PET',
     img:'https://ripet.it/wp-content/uploads/2025/10/Ripet-ecocompattatore-Plast-C.png',
     featured:false,tag:'Yeni'},
    // Anker Andersen
    {id:'hlz',name:'HLZ',brand:'Anker Andersen',capacity:'Yüksek',speed:'100-300/dk',materials:'Tümü',
     img:'https://rvmsystems.com.tr/wp-content/uploads/sites/19/2025/01/hlz.jpg',
     featured:true,tag:'En Hızlı'}
];

export const BRANDS = [
    {name:'REVEGO',country:'Türkiye',flag:'🇹🇷',tagline:'Yerli üretim, iF 2025 ödüllü',url:'https://revego.net/tr/',color:'#10b981'},
    {name:'RVM Systems',country:'İsveç',flag:'🇸🇪',tagline:'40+ pazarda 17 milyar ambalaj',url:'https://rvmsystems.com.tr/',color:'#3b82f6'},
    {name:'Ripet',country:'İtalya',flag:'🇮🇹',tagline:'Patentli RiPress teknolojisi',url:'https://ripet.it/en/',color:'#22c55e'},
    {name:'Anker Andersen',country:'Danimarka',flag:'🇩🇰',tagline:'Sanayi tipi, 300/dk hız',url:'https://www.anker-andersen.dk/en/',color:'#f59e0b'}
];

export const NAV = [
    {label:'Ana Sayfa',href:'#/'},
    {label:'Ürünler',href:'#/products'},
    {label:'Markalar',href:'#/brands'},
    {label:'İletişim',href:'#/contact'}
];
