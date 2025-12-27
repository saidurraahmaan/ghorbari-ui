import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router';
import { useCreateBuilding } from '../hooks/useCreateBuilding';
import { BuildingForm, type BuildingFormData } from '../components/BuildingForm';

const buildingSchema = z.object({
  name: z.string().min(3, 'Building name must be at least 3 characters'),
  address: z.string().min(5, 'Address must be at least 5 characters'),
  totalFloors: z.number().min(1, 'Must have at least 1 floor').max(200, 'Maximum 200 floors'),
  totalUnits: z.number().min(1, 'Must have at least 1 unit').max(10000, 'Maximum 10000 units'),
  yearBuilt: z.number().min(1800, 'Year must be after 1800').max(new Date().getFullYear() + 5, 'Year cannot be too far in the future'),
  description: z.string().min(10, 'Description must be at least 10 characters').max(500, 'Description is too long'),
});

export const AddBuilding = () => {
  const navigate = useNavigate();
  const { mutate: createBuilding, isPending } = useCreateBuilding();

  const form = useForm<BuildingFormData>({
    resolver: zodResolver(buildingSchema),
  });

  const onSubmit = (data: BuildingFormData) => {
    createBuilding(data, {
      onSuccess: () => {
        navigate('/buildings');
      },
      onError: (error) => {
        console.error('Error adding building:', error);
      },
    });
  };

  const handleCancel = () => {
    navigate('/buildings');
  };

  return (
    <BuildingForm
      form={form}
      isLoading={isPending}
      onSubmit={onSubmit}
      onCancel={handleCancel}
    />
  );
};
