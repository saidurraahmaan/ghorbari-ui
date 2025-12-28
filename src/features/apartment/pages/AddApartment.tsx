import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ApartmentForm } from '../components/ApartmentForm';
import { useCreateApartment } from '../hooks';
import { useBuildings } from '@/features/building/hooks/useBuildings';
import type { CreateApartmentDto } from '../types';
import { ArrowLeft } from 'lucide-react';

const apartmentSchema = z.object({
  unitNumber: z.string().min(1, 'Unit number is required'),
  buildingId: z.number().min(1, 'Building is required'),
  floor: z.number().min(0, 'Floor must be 0 or greater'),
  status: z.enum(['OCCUPIED', 'VACANT', 'MAINTENANCE']).optional().default('VACANT'),
  bedrooms: z.number().min(0, 'Bedrooms must be 0 or greater'),
  bathrooms: z.number().min(0, 'Bathrooms must be 0 or greater'),
  squareFootage: z.number().min(1, 'Square footage must be greater than 0'),
  monthlyRent: z.number().min(0, 'Monthly rent must be 0 or greater'),
  description: z.string().optional(),
});

export const AddApartment = () => {
  const navigate = useNavigate();
  const { mutate: createApartment, isPending } = useCreateApartment();
  const { data: buildings = [], isLoading: isBuildingsLoading } = useBuildings();

  const form = useForm<CreateApartmentDto>({
    resolver: zodResolver(apartmentSchema),
    defaultValues: {
      status: 'VACANT',
    },
  });

  const onSubmit = (data: CreateApartmentDto) => {
    createApartment(data, {
      onSuccess: () => {
        navigate('/apartments');
      },
    });
  };

  const handleCancel = () => {
    navigate('/apartments');
  };

  if (isBuildingsLoading) {
    return (
      <div className="flex items-center justify-center h-100">
        <p>Loading buildings...</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <button
          onClick={handleCancel}
          className="text-gray-500 hover:text-gray-700"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold text-gray-900">Add New Apartment</h1>
      </div>

      <div className="max-w-4xl">
        <ApartmentForm
          form={form}
          buildings={buildings}
          isLoading={isPending}
          onSubmit={onSubmit}
          onCancel={handleCancel}
        />
      </div>
    </div>
  );
};
