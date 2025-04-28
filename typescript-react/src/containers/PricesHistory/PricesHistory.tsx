import PricesHistoryCard from '../../components/PriceHistoryCard';
import styles from './prices-history.module.scss';

import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export type PriceHistoryType = {
  created_date: string;
  price_eur: number;
};

const PricesHistory = () => {
  const { listingId } = useParams<{ listingId: string }>();
  const [history, setHistory] = useState<PriceHistoryType[]>([]);
  const [loading, setLoading] = useState(true);

  console.log('PricesHistory', listingId);
  console.log('PricesHistory', history);

  useEffect(() => {
    fetch(`http://localhost:8080/listings/${listingId}/prices`)
      .then((res) => res.json())
      .then((data) => {
        setHistory(data);
        setLoading(false);
      });
  }, [listingId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles['container']}>
      <h1>Prices History</h1>
      <PricesHistoryCard history={history} />

      <Link to="/" className={styles['link']}>
        &larr; Back Home
      </Link>
    </div>
  );
};
export default PricesHistory;
