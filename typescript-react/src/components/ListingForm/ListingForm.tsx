import styles from './listing-form.module.scss';
import { useState } from 'react';

import { ListingFormData } from '../../types/listing';

const ListingForm = () => {
  const [formData, setFormData] = useState<ListingFormData>({
    name: '',
    postal_address: {
      street_address: '',
      postal_code: '',
      city: '',
      country: '',
    },
    description: '',
    building_type: 'STUDIO',
    latest_price_eur: 0,
    surface_area_m2: 0,
    rooms_count: 0,
    contact_phone_number: '',
  });

  console.log('formData', formData);

  //   const handleChange = (
  //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  //   ) => {
  //     const { name, value } = e.target;
  //     setFormData((prev) => ({
  //       ...prev,
  //       [name]: value,
  //     }));
  //   };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    // handle nested fields (  postal_address )
    if (name.startsWith('postal_address.')) {
      const key = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        postal_address: {
          ...prev.postal_address,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]:
          name.includes('latest_price_eur') ||
          name.includes('surface_area_m2') ||
          name.includes('rooms_count')
            ? Number(value)
            : value,
      }));
    }
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('form data before submission', formData);
    // todo: submit to API
  };

  return (
    <form className={styles['listing-form']} onSubmit={submit}>
      <div className={styles['listing-form__card']}>
        {/* Name */}
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles['listing-form__input-text']}
          />
        </div>

        {/* Description */}
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={styles['listing-form__input-text']}
          />
        </div>

        {/* Latest Price */}
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="latest_price_eur">Price (EUR):</label>
          <input
            type="number"
            name="latest_price_eur"
            value={formData.latest_price_eur}
            onChange={handleChange}
            className={styles['listing-form__input-text']}
          />
        </div>

        {/* Surface Area */}
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="surface_area_m2">Surface Area (m²):</label>
          <input
            type="number"
            name="surface_area_m2"
            value={formData.surface_area_m2}
            onChange={handleChange}
            className={styles['listing-form__input-text']}
          />
        </div>

        {/* Rooms Count */}
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="rooms_count">Rooms Count:</label>
          <input
            type="number"
            name="rooms_count"
            value={formData.rooms_count}
            onChange={handleChange}
            className={styles['listing-form__input-text']}
          />
        </div>

        {/* Street Address */}
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="postal_address.street_address">Street Address:</label>
          <input
            type="text"
            name="postal_address.street_address"
            value={formData.postal_address.street_address}
            onChange={handleChange}
            className={styles['listing-form__input-text']}
          />
        </div>

        {/* Postal Code */}
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="postal_address.postal_code">Postal Code:</label>
          <input
            type="text"
            name="postal_address.postal_code"
            value={formData.postal_address.postal_code}
            onChange={handleChange}
            className={styles['listing-form__input-text']}
          />
        </div>

        {/* City */}
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="postal_address.city">City:</label>
          <input
            type="text"
            name="postal_address.city"
            value={formData.postal_address.city}
            onChange={handleChange}
            className={styles['listing-form__input-text']}
          />
        </div>

        {/* Country */}
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="postal_address.country">Country:</label>
          <input
            type="text"
            name="postal_address.country"
            value={formData.postal_address.country}
            onChange={handleChange}
            className={styles['listing-form__input-text']}
          />
        </div>

        {/* Building Type */}
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="building_type">Building Type:</label>
          <select
            name="building_type"
            value={formData.building_type}
            onChange={handleChange}
            className={styles['listing-form__select']}
          >
            <option value="STUDIO">Studio</option>
            <option value="APARTMENT">Apartment</option>
            <option value="HOUSE">House</option>
          </select>
        </div>

        {/* Contact Phone Number */}
        <div className={styles['listing-form__input-group']}>
          <label htmlFor="contact_phone_number">Contact Phone Number:</label>
          <input
            type="text"
            name="contact_phone_number"
            value={formData.contact_phone_number || ''}
            onChange={handleChange}
            className={styles['listing-form__input-text']}
            placeholder="+123456789"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={styles['listing-form__button--submit']}
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default ListingForm;
