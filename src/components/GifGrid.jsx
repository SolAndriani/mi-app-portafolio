import PropTypes from 'prop-types';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {
          images.length === 0 && !isLoading
            ? <p>No se encontraron gifs para "{category}"</p>
            : images.map(image => (
                <GifItem 
                  key={image.id} 
                  {...image} 
                />
              ))
        }
      </div>
    </>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
