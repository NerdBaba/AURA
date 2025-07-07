import React from 'react';
import { Product } from '../../types/product';
import styles from './ChromaticCard.module.css';
import { Heading, Text, Column } from '@once-ui-system/core';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${product.imageUrl})` }}
      ></div>
      <Column
        gap="s"
        align="center"
        padding="l"
        style={{ 
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
          borderRadius: '0 0 12px 12px'
        }}
      >
        <Heading as="h4" align="center" color="text-primary" className={styles.heading}>
          {product.name}
        </Heading>
        <Text align="center" size="s" color="text-secondary" className={styles.text}>
          {product.description}
        </Text>
        <Text variant="heading-strong-l" style={{ marginTop: '1rem' }}>
          ${product.price.toFixed(2)}
        </Text>
      </Column>
    </div>
  );
};

export default ProductCard;
