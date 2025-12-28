import { useNavigate } from 'react-router';
import { Apartments } from '../components/Apartments';
import { useApartments, useDeleteApartment } from '../hooks';
import { type Apartment } from '../types';

export const ApartmentsPage = () => {
  const navigate = useNavigate();
  const { data: apartments = [], isLoading, error } = useApartments();
  const { mutate: deleteApartment } = useDeleteApartment();

  const handleAddApartment = () => {
    navigate('/apartments/add');
  };

  const handleView = (apartment: Apartment) => {
    navigate(`/apartments/${apartment.id}`);
  };

  const handleEdit = (apartment: Apartment) => {
    navigate(`/apartments/${apartment.id}/edit`);
  };

  const handleDelete = (apartment: Apartment) => {
    if (window.confirm(`Are you sure you want to delete apartment ${apartment.unitNumber}?`)) {
      deleteApartment(apartment.id);
    }
  };

  return (
    <Apartments
      apartments={apartments}
      isLoading={isLoading}
      error={error}
      onAddApartment={handleAddApartment}
      onView={handleView}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
