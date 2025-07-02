import { Text, Html, Tailwind } from '@react-email/components';

export default function ContactEmail({
  prenom,
  email,
  telephone,
  sujet,
  message,
}: {
  prenom: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
}) {
  return (
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              brand: '#007291',
            },
          },
        },
      }}
    >
      <Html lang="fr" className="bg-[#fffafa] px-5 py-40">
        <Text className="text-center text-2xl">
          📥 Nouveau message reçu depuis le formulaire de contact :
        </Text>
        <Text className="text-lg">
          <strong>Prénom :</strong> {prenom}
        </Text>
        <Text className="text-lg">
          <strong>Email :</strong> {email}
        </Text>
        <Text className="text-lg">
          <strong>Téléphone :</strong> {telephone}
        </Text>
        {sujet && (
          <Text className="text-lg">
            <strong>Sujet :</strong> {sujet}
          </Text>
        )}
        <Text className="text-lg">
          <strong>Message :</strong> {message}
        </Text>
      </Html>
    </Tailwind>
  );
}
