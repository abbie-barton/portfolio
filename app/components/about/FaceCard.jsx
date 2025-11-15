import profile from '../../../profile.jpg'
import Image from 'next/image'

export default function FaceCard() {
  const color = ''
  return (
    <div style={{ backgroundColor: color }} className="rounded-xl p-4">
      <Image
        src={profile}
        alt="Profile picture"
        className="rounded"
        width={200}
        height={200}
      />
    </div>
  )
}
