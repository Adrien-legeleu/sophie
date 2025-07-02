'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useState } from 'react';
import OneDocWidget from '../components/OneDocWidget';

export default function Page() {
  const [prenom, setPrenom] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sujet, setSujet] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('api/send-contact-email', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ prenom, email, telephone: tel, sujet, message }),
    });
    if (res.ok) {
      alert('Message envoyé !');
      setPrenom('');
      setEmail('');
      setTel('');
      setSujet('');
      setMessage('');
    } else {
      alert('Une erreur est survenue');
    }
  };

  return (
    <div className="bg-gradient-to-b from-transparent to-[#ee818368] px-5 py-40">
      <div className="space-y-12 text-lg tracking-wide  max-w-5xl  mx-auto">
        <div className="space-y-4">
          <h1 className="lg:text-6xl sm:text-5xl text-4xl text-center text-[#C3B4A4]">
            CONTACT
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto font-medium">
            Je me déplace aussi en entreprise ou en hôtel pour proposer mes
            soins sur place. N&apos;hésitez pas à me contacter pour organiser
            une intervention dans votre établissement&nbsp;!
          </p>
        </div>

        <OneDocWidget />

        <div className="md:space-y-10 space-y-5">
          <div className="flex max-md:flex-col items-center justify-center gap-5 md:gap-10">
            <div className="bg-white/80 backdrop-blur-md  p-10 shadow-xl rounded-[3rem] flex flex-col items-center justify-center">
              <h2 className="lg:text-3xl sm:text-2xl text-xl pb-5 text-center text-[#C3B4A4]">
                ADRESSE
              </h2>
              <p>Chemin de la Jaque 80</p>
              <p>1093 La Conversion</p>
            </div>
            <div className="bg-white/80 backdrop-blur-md  p-10 shadow-xl rounded-[3rem] flex flex-col items-center justify-center">
              <h2 className="lg:text-3xl sm:text-2xl text-xl pb-5 text-center text-[#C3B4A4]">
                APPELEZ-MOI
              </h2>
              <a href="tel:079 356 20 08" className="underline">
                079 356 20 08
              </a>
              <p>contact@sophiedeneriaz.ch</p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-lg mx-auto bg-white/80 backdrop-blur-md p-10 rounded-[3rem]"
          >
            <Input
              type="text"
              id="prenom"
              name="prenom"
              required
              placeholder="Votre prénom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
            />

            <Input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="tel"
              id="telephone"
              name="telephone"
              required
              placeholder="Votre numéro de téléphone"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />

            <Input
              type="text"
              id="sujet"
              name="sujet"
              placeholder="Sujet de votre message"
              value={sujet}
              onChange={(e) => setSujet(e.target.value)}
            />

            <Textarea
              id="message"
              name="message"
              placeholder="Votre message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <Button
              type="submit"
              className="w-full bg-[#ED1C8F] rounded-full hover:bg-[#ed1c8fd1]"
            >
              Envoyer
            </Button>
            <p className="pt-5 font-light text-sm text-center ">
              Paiement par <strong>TWINT</strong>, ainsi que{' '}
              <strong>Cash</strong> et <strong>carte bancaire</strong>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
