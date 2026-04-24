'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Linkedin } from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

const members = [
  { name: 'Nicolas Herrera', initials: 'NH', photo: '/images/NicolasHerrera.jpg', linkedinHref: 'https://www.linkedin.com/in/nicolasjherrera/' },
  { name: 'Henry Morales', initials: 'HM', photo: '/images/HenryMorales.jpg', linkedinHref: 'https://www.linkedin.com/in/henry-morales--/' },
  { name: 'Yamil Llaver', initials: 'YL', photo: '/images/YamilLlaver.jpg', linkedinHref: 'https://www.linkedin.com/in/yamil-llaver/' },
];

export default function TeamSection() {
  const t = useTranslations('team');

  return (
    <section className="bg-white section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
              {t('tag')}
            </span>
            <h2 className="font-inter text-3xl md:text-4xl font-bold text-navy mb-4">{t('title')}</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
          </div>
        </ScrollAnimation>

        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {members.map((member, i) => (
            <ScrollAnimation key={member.name} delay={i * 0.15}>
              <div className="group text-center">
                <div className="relative inline-block mb-5">
                  <div className="w-32 h-32 rounded-full border-4 border-gold/20 group-hover:border-gold/50 transition-all shadow-lg overflow-hidden bg-navy">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                <h3 className="font-inter text-lg font-bold text-navy mb-1">{member.name}</h3>
                <p className="text-gold text-sm font-medium mb-4">{t('role')}</p>

                <a
                  href={member.linkedinHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-blue-600 transition-colors group/linkedin"
                >
                  <Linkedin className="w-3.5 h-3.5 group-hover/linkedin:text-blue-600 transition-colors" />
                  {t('linkedin')}
                </a>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
