import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  pageUrl, hreflangAlternates, breadcrumbSchema, teamMemberSchema, jsonLd, SITE_URL, SITE_NAME, SITE_EMAIL, SITE_PHONE,
} from '@/lib/seo';

const members: Record<string, {
  slug: string;
  name: string;
  role: { es: string; en: string; pt: string };
  bio: { es: string; en: string; pt: string };
  expertise: { es: string[]; en: string[]; pt: string[] };
  linkedinUrl: string;
  photo: string;
  jobTitle: string;
}> = {
  'yamil-llaver': {
    slug: 'yamil-llaver',
    name: 'Yamil Llaver',
    role: {
      es: 'Head of Sales & Director',
      en: 'Head of Sales & Director',
      pt: 'Head of Sales & Diretor',
    },
    bio: {
      es: 'Yamil Llaver es Director y Head of Sales de TRUST TRADE ORG LLC. Con amplia experiencia en trading internacional de commodities, intermediación financiera y estructuración de acuerdos comerciales complejos. Especializado en mercados venezolanos de petróleo, gas, petroquímica y electricidad, así como en procesos de M&A (fusiones y adquisiciones) para empresas del sector energético. Yamil lidera la estrategia comercial de TRUST TRADE y la relación con compradores internacionales en China, Malasia, USA y Brasil.',
      en: 'Yamil Llaver is Director and Head of Sales at TRUST TRADE ORG LLC. With extensive experience in international commodity trading, financial intermediation, and structuring of complex commercial agreements. Specialized in Venezuelan oil, gas, petrochemical, and electricity markets, as well as M&A processes for energy sector companies. Yamil leads TRUST TRADE\'s commercial strategy and relationships with international buyers in China, Malaysia, USA, and Brazil.',
      pt: 'Yamil Llaver é Diretor e Head of Sales da TRUST TRADE ORG LLC. Com ampla experiência em trading internacional de commodities, intermediação financeira e estruturação de acordos comerciais complexos. Especializado nos mercados venezuelanos de petróleo, gás, petroquímica e eletricidade, bem como em processos de M&A para empresas do setor energético. Yamil lidera a estratégia comercial da TRUST TRADE e o relacionamento com compradores internacionais na China, Malásia, EUA e Brasil.',
    },
    expertise: {
      es: ['Trading Internacional de Commodities', 'Metanol CH3OH, Asfalto AC-30, ULO, Urea', 'Financiamiento M&A para empresas venezolanas', 'Due Diligence y Compliance internacional', 'Estructuración FOB / CIF / DLC', 'Mercados: China, Malasia, USA, Brasil'],
      en: ['International Commodity Trading', 'Methanol CH3OH, Asphalt AC-30, ULO, Urea', 'M&A Financing for Venezuelan companies', 'Due Diligence and International Compliance', 'FOB / CIF / DLC Structuring', 'Markets: China, Malaysia, USA, Brazil'],
      pt: ['Trading Internacional de Commodities', 'Metanol CH3OH, Asfalto AC-30, ULO, Ureia', 'Financiamento M&A para empresas venezuelanas', 'Due Diligence e Compliance internacional', 'Estruturação FOB / CIF / DLC', 'Mercados: China, Malásia, EUA, Brasil'],
    },
    linkedinUrl: 'https://www.linkedin.com/in/yamil-llaver/',
    photo: '/images/YamilLlaver.jpg',
    jobTitle: 'Head of Sales & Director',
  },
  'nicolas-herrera': {
    slug: 'nicolas-herrera',
    name: 'Nicolas Herrera',
    role: {
      es: 'CRO – Commercial Lead',
      en: 'CRO – Commercial Lead',
      pt: 'CRO – Commercial Lead',
    },
    bio: {
      es: 'Nicolas Herrera es CRO (Chief Revenue Officer) y Commercial Lead de TRUST TRADE ORG LLC. Responsable de la gestión comercial y desarrollo de nuevas relaciones con compradores internacionales. Con experiencia en trading de commodities energéticos y estructuración de contratos FOB y CIF. Nicolas lidera el proceso de adquisición de clientes y la gestión de cotizaciones RFQ para metanol, asfalto AC-30 y otros commodities de TRUST TRADE.',
      en: 'Nicolas Herrera is CRO (Chief Revenue Officer) and Commercial Lead at TRUST TRADE ORG LLC. Responsible for commercial management and developing new relationships with international buyers. With experience in energy commodity trading and FOB and CIF contract structuring. Nicolas leads the client acquisition process and RFQ quote management for methanol, asphalt AC-30, and other TRUST TRADE commodities.',
      pt: 'Nicolas Herrera é CRO (Chief Revenue Officer) e Commercial Lead da TRUST TRADE ORG LLC. Responsável pela gestão comercial e desenvolvimento de novos relacionamentos com compradores internacionais. Com experiência em trading de commodities energéticas e estruturação de contratos FOB e CIF. Nicolas lidera o processo de aquisição de clientes e gestão de cotações RFQ para metanol, asfalto AC-30 e outros commodities da TRUST TRADE.',
    },
    expertise: {
      es: ['Desarrollo Comercial Internacional', 'Gestión de RFQ y Cotizaciones', 'Trading de Metanol y Asfalto AC-30', 'Relaciones con Compradores en Asia y Américas', 'Contratos FOB y CIF', 'Inspección SGS y Documentación'],
      en: ['International Business Development', 'RFQ and Quote Management', 'Methanol and Asphalt AC-30 Trading', 'Buyer Relations in Asia and Americas', 'FOB and CIF Contracts', 'SGS Inspection and Documentation'],
      pt: ['Desenvolvimento Comercial Internacional', 'Gestão de RFQ e Cotações', 'Trading de Metanol e Asfalto AC-30', 'Relacionamento com Compradores na Ásia e Américas', 'Contratos FOB e CIF', 'Inspeção SGS e Documentação'],
    },
    linkedinUrl: 'https://www.linkedin.com/in/nicolasjherrera/',
    photo: '/images/NicolasHerrera.jpg',
    jobTitle: 'CRO & Commercial Lead',
  },
  'henry-ramirez': {
    slug: 'henry-ramirez',
    name: 'Henry Ramirez',
    role: {
      es: 'CEO & Fundador',
      en: 'CEO & Founder',
      pt: 'CEO & Fundador',
    },
    bio: {
      es: 'Henry Ramirez es CEO y Fundador de TRUST TRADE ORG LLC. Con experiencia en operaciones internacionales de commodities, logística marítima y gestión de transacciones complejas entre productores venezolanos y compradores globales. Henry fundó TRUST TRADE con la visión de crear un modelo de intermediación transparente y directo — el modelo NEXO DIRECTO — que elimina intermediarios innecesarios y conecta directamente a compradores con productores venezolanos de metanol, asfalto, ULO y urea.',
      en: 'Henry Ramirez is CEO and Founder of TRUST TRADE ORG LLC. With experience in international commodity operations, maritime logistics, and management of complex transactions between Venezuelan producers and global buyers. Henry founded TRUST TRADE with the vision of creating a transparent and direct intermediation model — the NEXO DIRECTO model — that eliminates unnecessary intermediaries and directly connects buyers with Venezuelan producers of methanol, asphalt, ULO, and urea.',
      pt: 'Henry Ramirez é CEO e Fundador da TRUST TRADE ORG LLC. Com experiência em operações internacionais de commodities, logística marítima e gestão de transações complexas entre produtores venezuelanos e compradores globais. Henry fundou a TRUST TRADE com a visão de criar um modelo de intermediação transparente e direto — o modelo NEXO DIRECTO — que elimina intermediários desnecessários e conecta diretamente compradores com produtores venezuelanos de metanol, asfalto, ULO e ureia.',
    },
    expertise: {
      es: ['Fundación y Liderazgo Estratégico de TRUST TRADE', 'Modelo NEXO DIRECTO – Intermediación directa sin terceros', 'Operaciones marítimas: Chemical Tankers, LAYCAN, B/L', 'Coordinación logística FOB y CIF global', 'Relaciones con productores venezolanos de commodities', 'Gestión de contratos internacionales'],
      en: ['TRUST TRADE Foundation and Strategic Leadership', 'NEXO DIRECTO Model – Direct intermediation without third parties', 'Maritime operations: Chemical Tankers, LAYCAN, B/L', 'Global FOB and CIF logistics coordination', 'Relations with Venezuelan commodity producers', 'International contract management'],
      pt: ['Fundação e Liderança Estratégica da TRUST TRADE', 'Modelo NEXO DIRECTO – Intermediação direta sem terceiros', 'Operações marítimas: Chemical Tankers, LAYCAN, B/L', 'Coordenação logística FOB e CIF global', 'Relações com produtores venezuelanos de commodities', 'Gestão de contratos internacionais'],
    },
    linkedinUrl: 'https://www.linkedin.com/in/henry-morales--/',
    photo: '/images/HenryRamirez.jpg',
    jobTitle: 'CEO & Founder',
  },
};

export async function generateStaticParams() {
  const locales = ['es', 'en', 'pt'];
  const slugs = Object.keys(members);
  return locales.flatMap((locale) => slugs.map((member) => ({ locale, member })));
}

export async function generateMetadata({
  params: { locale, member: memberSlug },
}: {
  params: { locale: string; member: string };
}): Promise<Metadata> {
  setRequestLocale(locale);
  const member = members[memberSlug];
  if (!member) return {};

  const role = member.role[locale as keyof typeof member.role] ?? member.role.en;
  const bio = member.bio[locale as keyof typeof member.bio] ?? member.bio.en;
  const url = pageUrl(locale, `/team/${memberSlug}`);

  const title = `${member.name} – ${role} | TRUST TRADE ORG LLC`;
  const description = bio.slice(0, 160);

  return {
    title,
    description,
    authors: [{ name: member.name }],
    robots: { index: true, follow: true },
    alternates: {
      canonical: url,
      languages: hreflangAlternates(`/team/${memberSlug}`),
    },
    openGraph: {
      title,
      description,
      url,
      type: 'profile',
      siteName: SITE_NAME,
      images: [{ url: `${SITE_URL}${member.photo}`, width: 400, height: 400, alt: member.name }],
    },
    twitter: {
      card: 'summary',
      title,
      description,
      images: [`${SITE_URL}${member.photo}`],
    },
  };
}

export default function TeamMemberPage({
  params: { locale, member: memberSlug },
}: {
  params: { locale: string; member: string };
}) {
  setRequestLocale(locale);
  const member = members[memberSlug];
  if (!member) notFound();

  const role = member.role[locale as keyof typeof member.role] ?? member.role.en;
  const bio = member.bio[locale as keyof typeof member.bio] ?? member.bio.en;
  const expertise = member.expertise[locale as keyof typeof member.expertise] ?? member.expertise.en;

  const crumbName: Record<string, string> = { es: 'Equipo', en: 'Team', pt: 'Equipe' };
  const schemas = [
    teamMemberSchema({
      name: member.name,
      jobTitle: member.jobTitle,
      description: bio,
      linkedinUrl: member.linkedinUrl,
      imageUrl: `${SITE_URL}${member.photo}`,
    }),
    breadcrumbSchema([
      { name: crumbName[locale] ?? 'Team', item: pageUrl(locale, '/about') },
      { name: member.name, item: pageUrl(locale, `/team/${memberSlug}`) },
    ]),
  ];

  const labels: Record<string, { expertise: string; contact: string; back: string }> = {
    es: { expertise: 'Especialidades', contact: 'Contacto', back: 'Ver Equipo Completo' },
    en: { expertise: 'Expertise', contact: 'Contact', back: 'View Full Team' },
    pt: { expertise: 'Especialidades', contact: 'Contato', back: 'Ver Equipe Completa' },
  };
  const label = labels[locale] ?? labels.en;

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(s) }} />
      ))}

      <div className="min-h-screen bg-bgLight pt-20">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Back link */}
          <Link
            href={`${locale === 'es' ? '' : `/${locale}`}/about`}
            className="inline-flex items-center gap-2 text-gold text-sm font-medium mb-10 hover:underline"
          >
            ← {label.back}
          </Link>

          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-navy px-8 py-12 flex flex-col sm:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gold/30 flex-shrink-0">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="font-inter text-3xl font-bold text-white mb-2">{member.name}</h1>
                <p className="text-gold text-lg font-semibold mb-1">{role}</p>
                <p className="text-white/60 text-sm">TRUST TRADE ORG LLC · Miami, Florida, USA</p>
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-medium hover:bg-gold/20 transition-colors"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            {/* Bio */}
            <div className="px-8 py-8 border-b border-gray-100">
              <p className="text-gray-700 leading-relaxed text-base">{bio}</p>
            </div>

            {/* Expertise */}
            <div className="px-8 py-8 border-b border-gray-100">
              <h2 className="font-inter text-xl font-bold text-navy mb-4">{label.expertise}</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {expertise.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-gold font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="px-8 py-8">
              <h2 className="font-inter text-xl font-bold text-navy mb-4">{label.contact}</h2>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-navy text-white text-sm font-medium hover:bg-navy/80 transition-colors"
                >
                  {SITE_EMAIL}
                </a>
                <a
                  href={`tel:${SITE_PHONE}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-navy text-navy text-sm font-medium hover:bg-navy hover:text-white transition-colors"
                >
                  {SITE_PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
