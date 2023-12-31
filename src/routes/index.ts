import { Router } from 'express';
import restaurantRouter from './restaurant';
import { Preference, MercadoPagoConfig } from 'mercadopago';

const router = Router();

router.use('/restaurants', restaurantRouter);
router.get('/menu/97e9b9ad-391d-4507-a357-3db9d7c9f130', (req, res) => {
  res.send({
    ID: '97e9b9ad-391d-4507-a357-3db9d7c9f130',
    CreatedAt: '0001-01-01T00:00:00Z',
    UpdatedAt: '0001-01-01T00:00:00Z',
    DeletedAt: null,
    Sections: [
      {
        ID: 'f4cc438d-12f2-4602-8d94-a02a2bb09bf2',
        Name: 'Hamburguesas',
        Type: 'VISUAL',
      },
      {
        ID: '2eb90841-b350-4bb5-bb9f-2360b8555325',
        Name: 'Combos',
        Type: 'NORMAL',
      },
    ],
    Products: [
      {
        ID: 'c007977f-8b84-4341-bae1-b60931ae27a7',
        CreatedAt: '0001-01-01T00:00:00Z',
        UpdatedAt: '0001-01-01T00:00:00Z',
        DeletedAt: null,
        Title: 'Big Mac®',
        Price: {
          ID: 0,
          CreatedAt: '0001-01-01T00:00:00Z',
          UpdatedAt: '0001-01-01T00:00:00Z',
          DeletedAt: null,
          Amount: 6,
          Currency: 'EUR',
        },
        Description: 'Carne, pepinillos, lechuga, cebolla y queso fundido',
        Badges: [
          {
            ID: 2,
            CreatedAt: '0001-01-01T00:00:00Z',
            UpdatedAt: '0001-01-01T00:00:00Z',
            DeletedAt: null,
            Name: 'Popular',
            Color: 'Green',
          },
        ],
        Image: 'https://tb-static.uber.com/prod/image-proc/processed_images/fbc3ba9f49eaaa7acd4300cdfe3fc16c/859baff1d76042a45e319d1de80aec7a.jpeg',
        SectionID: 'f4cc438d-12f2-4602-8d94-a02a2bb09bf2',
      },
      {
        ID: '3fa4dce9-47d6-4575-9381-fea1c25889a5',
        CreatedAt: '0001-01-01T00:00:00Z',
        UpdatedAt: '0001-01-01T00:00:00Z',
        DeletedAt: null,
        Title: 'McExtreme™ Bacon Doble',
        Price: {
          ID: 0,
          CreatedAt: '0001-01-01T00:00:00Z',
          UpdatedAt: '0001-01-01T00:00:00Z',
          DeletedAt: null,
          Amount: 8.9,
          Currency: 'EUR',
        },
        Description: 'Doble de bacon y carne, queso gouda, cebolla y salsa McBacon',
        Badges: [],
        Image: 'https://d1ralsognjng37.cloudfront.net/0d2414b9-c7b3-4be0-9e50-7c15dfde2f85.jpeg',
        SectionID: 'f4cc438d-12f2-4602-8d94-a02a2bb09bf2',
      },
      {
        ID: '2d8918fb-98a4-447b-a4e4-128edcf62214',
        CreatedAt: '0001-01-01T00:00:00Z',
        UpdatedAt: '0001-01-01T00:00:00Z',
        DeletedAt: null,
        Title: 'CBO®',
        Price: {
          ID: 0,
          CreatedAt: '0001-01-01T00:00:00Z',
          UpdatedAt: '0001-01-01T00:00:00Z',
          DeletedAt: null,
          Amount: 6.25,
          Currency: 'EUR',
        },
        Description: 'Bacon, cebolla, lechuga y sabroso pollo supreme',
        Badges: [],
        Image: 'https://d1ralsognjng37.cloudfront.net/187d3161-36d5-4e9e-85c6-3e869a8b474c.jpeg',
        SectionID: 'f4cc438d-12f2-4602-8d94-a02a2bb09bf2',
      },
      {
        ID: '9a9ddc39-e6f6-4d18-bd29-f38e56bd94e1',
        CreatedAt: '0001-01-01T00:00:00Z',
        UpdatedAt: '0001-01-01T00:00:00Z',
        DeletedAt: null,
        Title: 'ShareBox® 10 Alitas + 10 McNuggets®',
        Price: {
          ID: 0,
          CreatedAt: '0001-01-01T00:00:00Z',
          UpdatedAt: '0001-01-01T00:00:00Z',
          DeletedAt: null,
          Amount: 6.25,
          Currency: 'EUR',
        },
        Description: 'Irresistibles alitas de pollo y nuggets',
        Badges: [],
        Image: 'https://tb-static.uber.com/prod/image-proc/processed_images/72e02f0042d7cb4e3b741eae6d848a98/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        SectionID: 'f4cc438d-12f2-4602-8d94-a02a2bb09bf2',
      },
      {
        ID: 'b519ed2a-b719-431d-a0e3-3358ec1df6d3',
        CreatedAt: '0001-01-01T00:00:00Z',
        UpdatedAt: '0001-01-01T00:00:00Z',
        DeletedAt: null,
        Title: 'Menú Completo Mediano McCrispy Original',
        Price: {
          ID: 0,
          CreatedAt: '0001-01-01T00:00:00Z',
          UpdatedAt: '0001-01-01T00:00:00Z',
          DeletedAt: null,
          Amount: 11.05,
          Currency: 'EUR',
        },
        Description: 'Ha llegado la nueva McCrispy Orginal, con nuestro delicioso pollo crujiente con queso cheddar, acompañada de la exquisita salsa original, crujiente lechuga y tomate fresco.',
        Badges: [],
        Image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMjI4ZDIxNzI5OGFlZGE0NmE0YWEwNTc4ZmQ5YjVmMzQvYTE5YmIwOTY5MjMxMGRmZDQxZTQ5YTk2YzQyNGIzYTYuanBlZw==',
        SectionID: '2eb90841-b350-4bb5-bb9f-2360b8555325',
      },
      {
        ID: '717405ef-5a74-4dcb-819e-07532f064aa0',
        CreatedAt: '0001-01-01T00:00:00Z',
        UpdatedAt: '0001-01-01T00:00:00Z',
        DeletedAt: null,
        Title: 'Menú Completo Big Mac® Mediano',
        Price: {
          ID: 0,
          CreatedAt: '0001-01-01T00:00:00Z',
          UpdatedAt: '0001-01-01T00:00:00Z',
          DeletedAt: null,
          Amount: 13.30,
          Currency: 'EUR',
        },
        Description: 'Descubre el nuevo menú completo Big Mac®, compuesto por hamburguesa, patatas regulares, tu bebida favorita y un irresistible McFlurry®.',
        Badges: [
          {
            ID: 2,
            CreatedAt: '0001-01-01T00:00:00Z',
            UpdatedAt: '0001-01-01T00:00:00Z',
            DeletedAt: null,
            Name: 'Popular',
            Color: 'Green',
          },
        ],
        Image: 'https://tb-static.uber.com/prod/image-proc/processed_images/3c1a61b99c444e82cbe4cbdfc250d421/5954bcb006b10dbfd0bc160f6370faf3.jpeg',
        SectionID: '2eb90841-b350-4bb5-bb9f-2360b8555325',
      },
      {
        ID: '71633a09-90d7-4c9c-bbab-cf0ff6dadb77',
        CreatedAt: '0001-01-01T00:00:00Z',
        UpdatedAt: '0001-01-01T00:00:00Z',
        DeletedAt: null,
        Title: 'Menú Completo Mediano McExtreme™ BBQ Bourbon Huevo Doble',
        Price: {
          ID: 0,
          CreatedAt: '0001-01-01T00:00:00Z',
          UpdatedAt: '0001-01-01T00:00:00Z',
          DeletedAt: null,
          Amount: 14.15,
          Currency: 'EUR',
        },
        Description: 'Disfruta de la nueva McExtreme BBQ Bourbon Huevo, con deliciosa salsa barbacoa aromatizada con Bourbon, huevo, bacon y un delicioso medallón de queso ahumado, todo ello envuelto en nuestro nuevo pan especial. Elige tu bebida y patatas favoritas, y acompáñalo de un delicioso Mini McFlurry de Kit-Kat. ¡No podrás resistirte!',
        Badges: [
          {
            ID: 2,
            CreatedAt: '0001-01-01T00:00:00Z',
            UpdatedAt: '0001-01-01T00:00:00Z',
            DeletedAt: null,
            Name: 'Popular',
            Color: 'Green',
          },
        ],
        Image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvOGVjNTY3N2ZlNGUxMWUzYjUyNmYyODZiOTU4NjQwNTAvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==',
        SectionID: '2eb90841-b350-4bb5-bb9f-2360b8555325',
      },
    ],
    Name: 'Menu dia y noche',
  });
});

router.get('/menu/97e9b9ad-391d-4507-a357-3db9d7c9f130/product/71633a09-90d7-4c9c-bbab-cf0ff6dadb77', (req, res) => {
  res.send({
    ID: '71633a09-90d7-4c9c-bbab-cf0ff6dadb77',
    CreatedAt: '0001-01-01T00:00:00Z',
    Answers: [
      {
        Id: 'efc91e9c-36fb-4de7-a485-3fa354829627',
        Name: 'Tu complemento',
        Max: 1,
        Options: [
          {
            Id: 'd2c8c088-9359-4de6-8e57-7f6cbca6d107',
            Name: 'McShaker Fries Sour Cream',
            Price: {
              ID: 0,
              CreatedAt: '0001-01-01T00:00:00Z',
              UpdatedAt: '0001-01-01T00:00:00Z',
              DeletedAt: null,
              Amount: 0.60,
              Currency: 'EUR',
            },
          },
          {
            Id: 'd2c8c088-9359-4de6-8e57-7f6cbca6d106',
            Name: 'McShaker Fries Deluxe Sour Cream',
            Price: {
              ID: 0,
              CreatedAt: '0001-01-01T00:00:00Z',
              UpdatedAt: '0001-01-01T00:00:00Z',
              DeletedAt: null,
              Amount: 0.60,
              Currency: 'EUR',
            },
          },
          {
            Id: 'd2c8c088-9359-4de6-8e57-7f6cbca6d105',
            Name: 'Patatas Fritas',
            Price: {
              ID: 0,
              CreatedAt: '0001-01-01T00:00:00Z',
              UpdatedAt: '0001-01-01T00:00:00Z',
              DeletedAt: null,
              Amount: 0,
              Currency: 'EUR',
            },
          },
          {
            Id: 'd2c8c088-9359-4de6-8e57-7f6cbca6d104',
            Name: 'Patatas Deluxe',
            Price: {
              ID: 0,
              CreatedAt: '0001-01-01T00:00:00Z',
              UpdatedAt: '0001-01-01T00:00:00Z',
              DeletedAt: null,
              Amount: 0,
              Currency: 'EUR',
            },
          },
        ],
      },
      {
        Id: 'efc91e9c-36fb-4de7-a485-3fa354829626',
        Name: 'Tu bebida',
        Max: 1,
        Options: [
          {
            Id: 'd2c8c088-9359-4de6-8e57-7f6cbca6d106',
            Name: 'Coca-Cola® Zero Lata 33cl',
            Price: {
              ID: 0,
              CreatedAt: '0001-01-01T00:00:00Z',
              UpdatedAt: '0001-01-01T00:00:00Z',
              DeletedAt: null,
              Amount: 0.50,
              Currency: 'EUR',
            },
          },
          {
            Id: 'd2c8c088-9359-4de6-8e57-7f6cbca6d105',
            Name: 'Coca-Cola® Lata 33cl',
            Price: {
              ID: 0,
              CreatedAt: '0001-01-01T00:00:00Z',
              UpdatedAt: '0001-01-01T00:00:00Z',
              DeletedAt: null,
              Amount: 0.50,
              Currency: 'EUR',
            },
          },
          {
            Id: 'd2c8c088-9359-4de6-8e57-7f6cbca6d104',
            Name: 'Fanta® Naranja Zero 40cl',
            Price: {
              ID: 0,
              CreatedAt: '0001-01-01T00:00:00Z',
              UpdatedAt: '0001-01-01T00:00:00Z',
              DeletedAt: null,
              Amount: 0.60,
              Currency: 'EUR',
            },
          },
          {
            Id: 'd2c8c088-9359-4de6-8e57-7f6cbca6d103',
            Name: 'Agua 50cl',
            Price: {
              ID: 0,
              CreatedAt: '0001-01-01T00:00:00Z',
              UpdatedAt: '0001-01-01T00:00:00Z',
              DeletedAt: null,
              Amount: 0,
              Currency: 'EUR',
            },
          },
        ],
      },
    ],
    UpdatedAt: '0001-01-01T00:00:00Z',
    DeletedAt: null,
    Title: 'Menú Completo Mediano McExtreme™ BBQ Bourbon Huevo Doble',
    Price: {
      ID: 0,
      CreatedAt: '0001-01-01T00:00:00Z',
      UpdatedAt: '0001-01-01T00:00:00Z',
      DeletedAt: null,
      Amount: 14.15,
      Currency: 'EUR',
    },
    Description: 'Disfruta de la nueva McExtreme BBQ Bourbon Huevo, con deliciosa salsa barbacoa aromatizada con Bourbon, huevo, bacon y un delicioso medallón de queso ahumado, todo ello envuelto en nuestro nuevo pan especial. Elige tu bebida y patatas favoritas, y acompáñalo de un delicioso Mini McFlurry de Kit-Kat. ¡No podrás resistirte!',
    Badges: [
      {
        ID: 2,
        CreatedAt: '0001-01-01T00:00:00Z',
        UpdatedAt: '0001-01-01T00:00:00Z',
        DeletedAt: null,
        Name: 'Popular',
        Color: 'Green',
      },
    ],
    Image: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvOGVjNTY3N2ZlNGUxMWUzYjUyNmYyODZiOTU4NjQwNTAvNTk1NGJjYjAwNmIxMGRiZmQwYmMxNjBmNjM3MGZhZjMuanBlZw==',
    SectionID: 1,
  });
});

router.post('/checkout', async (req, res) => {

  const mercadoPagoConfig = new MercadoPagoConfig({
    accessToken: 'TEST-834337810214244-102914-fd8cfcca603630a54aace4f29b11e6f6-180004645'
  })

  const preference = new Preference(mercadoPagoConfig);

  console.log(req.body)

  const {
    tip,
    items
  } = req.body;

  const tipItem = {
    unit_price: tip.price.amount,
    quantity: 1,
    title: 'Propina',
    id: 'tip_id'
  }

  const itemsMp = items.map((item) => {
    const extras = item.selections.map((value) => {
      return (value.selected.filter((value) => value !== false))
          .map((value) => value.price)
          .reduce((acc, next) => acc + next.amount, 0)
    }).reduce((acc, next) => acc + next, 0);

    return {
      unit_price: ((item.product?.price.amount || 0) + extras),
      quantity: item.quantity,
      title: item.name,
      id: item.id
    }
  });

  const preferenceResponse = await preference.create({
    body: {
      items: [
          ...itemsMp,
        tipItem
      ],
      auto_return: 'approved',
      back_urls: {
        success: 'www.google.com',
        failure: 'www.facebook.com',
        pending: 'www.x.com'
      }
    }
  })

  return res.send({
    id: preferenceResponse.id,
    initPoint: preferenceResponse.init_point
  })

})

export default router;
