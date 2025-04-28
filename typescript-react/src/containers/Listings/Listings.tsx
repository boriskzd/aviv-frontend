import ListingForm from '../../components/ListingForm';
import ListingCard from '../../components/ListingCard';

import styles from './listings.module.scss';

import { useEffect, useState } from 'react';

import { Listing } from '../../types/listing';

const Listings = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch('/listings'); // Proxy should forward to localhost:8080
        const data = await response.json();
        setListings(data);

        console.log('Fetched listings:', data);
      } catch (error) {
        console.error('Error fetching listings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  return (
    <main className={styles['listings']}>
      <h1 className={styles['listings__title']}>Main Listings page</h1>
      <div className={styles['listings__wrapper']}>
        <aside className={styles['listings__aside']}>
          <h2 className={styles['listings__sub-title']}>Add a listing</h2>
          <ListingForm />
        </aside>
        <section className={styles['listings__section']}>
          <h2 className={styles['listings__sub-title']}>Listings</h2>

          {loading ? (
            <p>Loading...</p>
          ) : listings.length > 0 ? (
            listings.map((listing) => (
              <ListingCard key={listing.name} listing={listing} />
            ))
          ) : (
            <p>No listings available.</p>
          )}
        </section>
      </div>
    </main>
  );
};

export default Listings;
