interface sponsorsProps {
    icon: string;
    name: string;
}

export const sponsors: sponsorsProps[] = [
    {
        icon: "Crown",
        name: "ProspectMaster",
    },
    {
        icon: "Vegan",
        name: "LeadNinja",
    },
    {
        icon: "Ghost",
        name: "EmailHero",
    },
    {
        icon: "Puzzle",
        name: "SmartReach",
    },
    {
        icon: "Squirrel",
        name: "CiblePro",
    },
    {
        icon: "Cookie",
        name: "ContactSphere",
    },
    {
        icon: "Drama",
        name: "StratégieContact",
    },
];

interface BenefitsProps {
    icon: string;
    title: string;
    description: string;
}

export const benefitList: BenefitsProps[] = [
    {
        icon: "Blocks",
        title: "Trouvez Vos Meilleurs Prospects en Un Clin d'Œil 🎯",
        description:
            "Des filtres puissants pour générer instantanément des listes de prospects parfaits. Chaque clic vous rapproche de vos futurs clients.",
    },
    {
        icon: "LineChart",
        title: "Générez des Leads en Mode Automatique 🚀",
        description:
            "L'IA trouve et qualifie vos prospects pendant que vous vous concentrez sur la vente. Obtenez un flux continu de leads sans effort.",
    },
    {
        icon: "Wallet",
        title: "Maximisez Vos Conversions 💸",
        description:
            "Des insights précis pour des campagnes qui convertissent. Chaque prospect devient une opportunité de revenu.",
    },
    {
        icon: "Sparkle",
        title: "Optimisez Vos Stratégies Marketing en Continu ✨",
        description:
            "Testez, analysez, ajustez. Votre stratégie évolue constamment pour des résultats toujours meilleurs.",
    },
];

interface FeaturesProps {
    icon: string;
    title: string;
    description: string;
}

export const featureList: FeaturesProps[] = [
    {
        icon: "Megaphone",
        title: "Automatisez Votre Prospection 📢",
        description:
            "Des campagnes e-mail ultra-personnalisées, sans lever le petit doigt. La prospection sur pilote automatique.",
    },
    {
        icon: "Users",
        title: "Ciblez Avec Précision Chirurgicale 🔍",
        description:
            "Chaque message touche la bonne personne. Une segmentation au laser pour des résultats immédiats.",
    },
    {
        icon: "Gauge",
        title: "Analysez en Temps Réel 📊",
        description:
            "Des stats en direct pour ajuster instantanément. Transformez vos données en décisions profitables.",
    },
    {
        icon: "Mail",
        title: "Personnalisation Extrême des E-mails 💌",
        description:
            "Des e-mails uniques pour chaque prospect. Plus de connexion, plus de conversions.",
    },
    {
        icon: "Workflow",
        title: "Intégrations Sans Accroc 🤝",
        description:
            "Vos outils préférés connectés en un clic. Gagnez du temps, boostez votre productivité.",
    },
    {
        icon: "Settings",
        title: "Plateforme 100% Personnalisable 🛠️",
        description:
            "Adaptez tout à votre façon de travailler. Workflows, templates, règles : tout est modulable.",
    },
];

export enum ProService {
    YES = 1,
    NO = 0,
}

interface ServiceProps {
    title: string;
    pro: ProService;
    description: string;
}

export const serviceList: ServiceProps[] = [
    {
        title: "Domaine Personnalisé",
        description:
            "Renforcez votre image de marque avec votre propre domaine.",
        pro: 0,
    },
    {
        title: "Connexion Réseaux Sociaux",
        description:
            "Importez vos prospects de LinkedIn, Twitter et bien plus.",
        pro: 0,
    },
    {
        title: "Intégrations E-mail Marketing",
        description: "Connectez vos outils marketing facilement.",
        pro: 0,
    },
    {
        title: "SEO Optimisé pour Plus de Visibilité",
        description:
            "Dominez les moteurs de recherche avec un SEO avancé.",
        pro: 1,
    },
];

interface TeamProps {
    imageUrl: string;
    firstName: string;
    lastName: string;
    positions: string[];
    socialNetworks: SocialNetworkProps[];
}

interface SocialNetworkProps {
    name: string;
    url: string;
}

export const teamList: TeamProps[] = [
    {
        imageUrl: "Give me picture",
        firstName: "Théo",
        lastName: "S.",
        positions: ["Developper Front", "Architecte SaaS"],
        socialNetworks: [
            { name: "LinkedIn", url: "https://www.linkedin.com/in/cassette/" },
        ],
    },
];

export enum PopularPlan {
    NO = 0,
    YES = 1,
}

interface PlanProps {
    title: string;
    popular: PopularPlan;
    price: number;
    description: string;
    buttonText: string;
    benefitList: string[];
}

export const plans: PlanProps[] = [
    {
        title: "Starter",
        popular: 0,
        price: 0,
        description:
            "Commencez à prospecter sans payer. Découvrez la puissance de l'IA gratuitement.",
        buttonText: "Commencer Gratuitement",
        benefitList: [
            "1 membre",
            "1 Go de stockage",
            "2 campagnes max",
            "Support communautaire",
            "Assistant IA basique",
        ],
    },
    {
        title: "Pro",
        popular: 1,
        price: 45,
        description:
            "Passez à la vitesse supérieure. Toutes les fonctionnalités pour dominer votre prospection.",
        buttonText: "Décoller",
        benefitList: [
            "4 membres",
            "8 Go de stockage",
            "6 campagnes max",
            "Support prioritaire",
            "Assistant IA avancé",
        ],
    },
    {
        title: "Entreprise",
        popular: 0,
        price: 120,
        description:
            "Pour les équipes ambitieuses. La solution complète pour une prospection sans limite.",
        buttonText: "Nous Contacter",
        benefitList: [
            "10 membres",
            "20 Go de stockage",
            "10 campagnes max",
            "Support premium",
            "Assistant IA premium",
        ],
    },
];

interface FAQProps {
    question: string;
    answer: string;
    value: string;
}

export const FAQList: FAQProps[] = [
    {
        question: "Le template est-il vraiment gratuit ? 🤔",
        answer: "Oui, totalement gratuit et open-source. Aucun piège.",
        value: "item-1",
    },
    {
        question: "Quelles sont les limites de recherche de prospects ? 🕵️",
        answer:
            "Accédez à 480 millions de contacts qualifiés avec des filtres puissants.",
        value: "item-2",
    },
    {
        question: "Comment la personnalisation des campagnes fonctionne-t-elle ? 💌",
        answer:
            "Notre IA optimise chaque e-mail pour tripler vos taux de réponse.",
        value: "item-3",
    },
    {
        question: "Puis-je tester avant de m'engager ? 🆓",
        answer: "Absolument. Le plan Starter est gratuit, sans carte bancaire.",
        value: "item-4",
    },
    {
        question: "Quels sont les délais d'implémentation ? ⏱️",
        answer: "Lancez votre première campagne en moins de 15 minutes.",
        value: "item-5",
    },
];  