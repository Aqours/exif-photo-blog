import PhotoForm from '@/photo/PhotoForm';
import { convertPhotoToFormData } from '@/photo/form';
import AdminChildPage from '@/components/AdminChildPage';
import { getPhoto } from '@/services/postgres';
import { redirect } from 'next/navigation';

export const runtime = 'edge';

interface Props {
  params: { photoId: string }
}

export default async function PhotoPageEdit({ params: { photoId } }: Props) {
  const photo = await getPhoto(photoId);

  if (!photo) { redirect('/admin'); }

  return (
    <AdminChildPage>
      <PhotoForm
        type="edit"
        initialPhotoForm={convertPhotoToFormData(photo)}
      />
    </AdminChildPage>
  );
};
