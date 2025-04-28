import { PriceHistoryType } from 'containers/PricesHistory/PricesHistory';
import styles from './price-history-card.module.scss';

interface PriceHistoryCardProps {
  history: PriceHistoryType[];
}

const PriceHistoryCard = ({ history }: PriceHistoryCardProps) => {
  return (
    <div className={styles['container']}>
      <table className={styles['price-card']}>
        <tbody>
          <tr className={styles['price-card__header']}>
            <th scope="col">Date</th>
            <th scope="col">Price (eur)</th>
          </tr>
          {history.map((item: PriceHistoryType, index) => (
            <tr key={index}>
              <td scope="col">{item.created_date}</td>
              <td scope="col">{item.price_eur}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PriceHistoryCard;
