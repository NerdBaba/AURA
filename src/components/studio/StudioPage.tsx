import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types/product';
import { Column, Heading, Text, Row } from '@once-ui-system/core';



const dummyProducts: Product[] = [
  {
    id: '1',
    name: 'Ephemeral Drape',
    description: 'A silk scarf that shifts in the light.',
    price: 150,
    imageUrl: 'https://picsum.photos/id/1011/400/500?grayscale&blur=1',
    category: 'Accessories',
  },
  {
    id: '2',
    name: 'Chrono-Stitch Jeans',
    description: 'Denim that wears its history.',
    price: 275,
    imageUrl: 'https://picsum.photos/id/1020/400/500?grayscale&blur=1',
    category: 'Apparel',
  },
  {
    id: '3',
    name: 'Glimmer Weave',
    description: 'Fabric that catches forgotten light.',
    price: 420,
    imageUrl: 'https://picsum.photos/id/1025/400/500?grayscale&blur=1',
    category: 'Apparel',
  },
  {
    id: '4',
    name: 'Aether-Laced Boots',
    description: 'Walk between the seams of the world.',
    price: 550,
    imageUrl: 'https://picsum.photos/id/1047/400/500?grayscale&blur=1',
    category: 'Footwear',
  },
  {
    id: '5',
    name: 'Oracle Lens',
    description: 'Sunglasses that reflect the unseen.',
    price: 320,
    imageUrl: 'https://picsum.photos/id/1054/400/500?grayscale&blur=1',
    category: 'Accessories',
  },
  {
    id: '6',
    name: 'Void-Dyed Trenchcoat',
    description: 'A coat the color of a starless night.',
    price: 780,
    imageUrl: 'https://picsum.photos/id/1060/400/500?grayscale&blur=1',
    category: 'Apparel',
  },
  {
    id: '7',
    name: 'Silent Echo Loafers',
    description: 'Leather shoes that make no sound.',
    price: 480,
    imageUrl: 'https://picsum.photos/id/21/400/500?grayscale&blur=1',
    category: 'Footwear',
  },
  {
    id: '8',
    name: 'Penumbra Hat',
    description: 'A wide-brimmed hat that casts a perfect shadow.',
    price: 210,
    imageUrl: 'https://picsum.photos/id/33/400/500?grayscale&blur=1',
    category: 'Accessories',
  },
  {
    id: '9',
    name: 'Lucent Fabric Brooch',
    description: 'A pin that seems to glow from within.',
    price: 130,
    imageUrl: 'https://picsum.photos/id/45/400/500?grayscale&blur=1',
    category: 'Jewelry',
  },
  {
    id: '10',
    name: 'Ghost-Weave Shirt',
    description: 'A button-down shirt that is semi-transparent.',
    price: 310,
    imageUrl: 'https://picsum.photos/id/56/400/500?grayscale&blur=1',
    category: 'Apparel',
  },
];

const StudioPage: React.FC = () => {
  return (
    <div>
      <Column as="main" padding="xl" gap="xl" background="transparent">
        <Heading as="h1" variant="heading-strong-xl">
          Studio Collection
        </Heading>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', width: '100%' }}>
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Column>
    </div>
  );
};

export default StudioPage;
