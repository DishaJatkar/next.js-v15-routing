import Image from "next/image";
import wondersImages, { WonderImage } from "../../wonders";
import Modal from "@/components/modal";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: WonderImage = wondersImages.find((w) => w.id === id)!;

  return (
    <Modal>
      <Image
        src={photo.src}
        alt={photo.name}
        className="w-full object-cover aspect-square"
      />
      <div className="bg-white py-4">
        <h3>{photo.name}</h3>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}
