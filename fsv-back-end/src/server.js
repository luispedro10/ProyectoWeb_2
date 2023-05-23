import express from 'express';
import bodyParser from 'body-parser';

export const products = [{
    id: '1',
    name: 'Adidas Busenitz',
    price: '799',
    description: ' Zapatos de skate de alta calidad diseñados en colaboración con el legendario skater profesional Dennis Busenitz. Estos zapatos están diseñados para ofrecer una combinación perfecta de estilo, durabilidad y rendimiento en el skateboarding',
    imageUrl: '/images/shoes-1.jpg',
    averageRating: '5.0',
  }, {
    id: '2',
    name: 'Jordans Azules',
    price: '999',
    description: 'Elegantes y versátiles zapatos deportivos que combinan estilo y funcionalidad a la perfección. Con su atractivo color azul y el emblemático diseño de los Jordans, estos zapatos te permiten destacar tanto en el terreno de juego como en la vida cotidiana.',
    imageUrl: '/images/shoes-2.jpg',
    averageRating: '5.0',
  }, {
    id: '3',
    name: 'Jordans Rojos',
    price: '999',
    description: 'Son unos icónicos y vibrantes zapatos deportivos que combinan a la perfección estilo y rendimiento. Con su llamativo color rojo y su reconocible diseño de alta gama, estos zapatos te permiten destacar en cualquier ocasión.',
    imageUrl: '/images/shoes-3.jpg',
    averageRating: '5.0',
  }, {
    id: '4',
    name: 'Fiesteros Belicosos',
    price: '1099',
    description: 'Los "Belicosos" son una innovadora y elegante opción de calzado diseñada para aquellos que desean destacar con un estilo audaz y sofisticado. Estos zapatos fusionan perfectamente la apariencia clásica de un calzado formal con un toque de rebeldía y fuerza.',
    imageUrl: '/images/shoes-4.jpg',
    averageRating: '5.0',
  }, {
    id: '5',
    name: 'Tony Hawks',
    price: '899',
    description: 'El estilo de los 90 fue atrevido y extravagante. Por eso no es sorpresa que la adidas OZWEEGO también lo sea. Su silueta se inspira en esa época irreverente y en los modelos de running que triunfaban por aquel entonces. Esta versión actual luce una silueta esculpida que puedes combinar con cualquier prenda de tu armario. Los detalles metalizados y reflectantes le aportan un toque sofisticado. Adidas Ozweego Disponibles para Hombre. ',
    imageUrl: '/images/shoes-5.jpg',
    averageRating: '5.0',
  }, {
    id: '6',
    name: 'Ozweegos',
    price: '1099',
    description: '"Ozweegos" son unos zapatos de vanguardia que destacan por su diseño único y vistoso. Con una estética futurista y un enfoque en la experimentación con materiales y formas, los "Ozweegos" se han convertido en un ícono de la moda contemporánea.',
    imageUrl: '/images/shoes-6.jpg',
    averageRating: '5.0',
  }, {
    id: '7',
    name: 'Party Animals',
    price: '1299',
    description: 'Los "Party Animals" son una emocionante y colorida línea de zapatos diseñados para aquellos que desean destacar en cualquier evento o fiesta. Estos zapatos se caracterizan por su diseño divertido y extravagante, con detalles y adornos que representan diferentes animales y elementos festivos.',
    imageUrl: '/images/shoes-7.jpg',
    averageRating: '5.0',
  }, {
    id: '8',
    name: 'Vans Azules',
    price: '699',
    description: 'Con el All Star Chuck 70 Converse reelabora un icónico con detalles y técnicas actualizados para celebrar el Chuck Taylor All Star original de los años 70. Se han realizado cambios menores en la suela de goma, que es ligeramente más alto, una puntera de goma más sustancial, un lienzo más pesado, costuras vintage, mientras que la entresuela ahora cuenta con una amortiguación avanzada para una experiencia cómoda. Converse All Star Chuck 70 Hi “Black”.',
    imageUrl: '/images/shoes-8.jpg',
    averageRating: '5.0',
  }, {
    id: '9',
    name: 'Skechers Running',
    price: '799',
    description: 'Los "Skechers Running" son zapatos diseñados específicamente para correr y brindar un rendimiento óptimo durante tus sesiones de entrenamiento. Skechers, una reconocida marca de calzado deportivo, se ha destacado en el mercado por su enfoque en la comodidad y la tecnología innovadora.',
    imageUrl: '/images/shoes-9.jpg',
    averageRating: '5.0',
  },
  {
    id: '10',
    name: 'Vaqueros Woody',
    price: '2099',
    description: 'Los Woodies son una elegante opción de calzado diseñada para ocasiones especiales y eventos formales. Estos zapatos son el complemento perfecto para completar un atuendo sofisticado y profesional.',
    imageUrl: '/images/shoes-10.jpg',
    averageRating: '5.0',
  },
  {
    id: '11',
    name: 'Botas Ingenieras',
    price: '699',
    description: 'Las "Botas Ingenieras" de nuestra tienda son una elección perfecta para aquellos que buscan un calzado resistente y con estilo. Estas botas se caracterizan por su diseño robusto y su construcción duradera, inspirada en las botas utilizadas por los ingenieros y trabajadores industriales.',
    imageUrl: '/images/shoes-11.jpg',
    averageRating: '5.0',
  }, {
    id: '12',
    name: 'High-lites',
    price: '799',
    description: 'Los "High-lites" son unos zapatos modernos y extrovertidos que se destacan por su estilo atemporal y su diseño sencillo pero elegante. Estos zapatos, disponibles en nuestra tienda, son una opción confiable para aquellos que buscan una combinación perfecta entre comodidad y sofisticación.',
    imageUrl: '/images/shoes-12.jpg',
    averageRating: '5.0',
  }];
  
  export let cartItems = [
    products[0],
    products[2],
    products[7],
  ];

const app = express();
app.use(bodyParser.json());

app.get('/api/products', (req, res) => {
    res.status(200).json(products);
});

app.get('/api/users/:userId/cart', (req, res) => {
    res.status(200).json(cartItems);
});

app.get('/api/products/:productId', (req, res) => {
    const { productId } = req.params;
    const product = products.find((product) => product.id === productId);
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json('Producto no encontrado');
    }
})

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});