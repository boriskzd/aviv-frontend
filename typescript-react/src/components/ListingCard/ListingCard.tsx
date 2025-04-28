import { Listing } from 'types/listing';
import styles from './listing-card.module.scss';

import { Link } from 'react-router-dom';

const ListingCard = ({ listing }: { listing: Listing }) => {
  const date = listing.updated_date;

  return (
    <article className={styles['listing-card']}>
      <span className={styles['listing-card__price']}>
        {listing.latest_price_eur} &euro;
      </span>
      <dl className={styles['listing-card__properties']}>
        <dt className={styles['listing-card__properties-item']}>
          {listing.building_type}
        </dt>
        <dt className={styles['listing-card__properties-item']}>
          {listing.surface_area_m2}m<sup>2</sup>
        </dt>
        <dt className={styles['listing-card__properties-item']}>
          {listing.rooms_count} rooms
        </dt>
      </dl>
      <section className={styles['listing-card__address']}>
        <address>
          {listing.postal_address.street_address},{' '}
          {listing.postal_address.postal_code}, {listing.postal_address.city},{' '}
          {listing.postal_address.country}{' '}
        </address>
      </section>
      <section className={styles['listing-card__description']}>
        <h3>Property description: </h3>
        <p>{listing.description}</p>
      </section>
      <div className={styles['listing-card__footer']}>
        <p className={styles['listing-card__reference']}>
          Ref: 123456 <br />
          Last update: {date}
        </p>
        <Link
          to={`/${listing.id}/prices`}
          className={styles['listing-card__link']}
        >
          See history &rarr;
        </Link>
      </div>
    </article>
  );
};

export default ListingCard;
