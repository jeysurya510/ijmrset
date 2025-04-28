const ijmrsetBenefits = [
  {
    id: 1,
    title: 'Global Visibility',
    content:
      'Articles published in IJMRSET are accessible to researchers worldwide, enhancing the reach of your work.',
  },
  {
    id: 2,
    title: 'Rapid Publication Process',
    content:
      'The journal provides a quick review and publication process, ensuring your research is shared promptly.',
  },
  {
    id: 3,
    title: 'Peer-Reviewed Journal',
    content:
      'All submissions undergo a rigorous peer review, ensuring the quality and credibility of published work.',
  },
  {
    id: 4,
    title: 'Open Access',
    content:
      'The journal follows an open-access policy, making research freely available to everyone, promoting wider dissemination and citation.',
  },
  {
    id: 5,
    title: 'Interdisciplinary Focus',
    content:
      'Covers a wide range of fields in science, engineering, and technology, encouraging cross-disciplinary research.',
  },
  {
    id: 6,
    title: 'Indexed Journal',
    content: 'Indexed in multiple databases, increasing the discoverability of your research.',
  },
  {
    id: 7,
    title: 'Certificate of Publication',
    content:
      'Authors receive a publication certificate, which can be used to enhance academic and professional credentials.',
  },
  {
    id: 8,
    title: 'Affordable Fees',
    content:
      'Competitive publication fees, making it accessible to researchers from diverse financial backgrounds.',
  },
  {
    id: 9,
    title: 'Author Support',
    content:
      'Offers guidance and support throughout the submission, review, and publication processes.',
  },
  {
    id: 10,
    title: 'Impactful Research Platform',
    content:
      'Provides a platform to contribute to and learn from the latest advancements in modern research.',
  },
];

export default function Benfits() {
  return (
    <ul className="flex flex-wrap justify-around  gap-5 p-10">
      {ijmrsetBenefits.map((each) => (
        <li
          key={each.id}
          className="lg:w-[40%] w-full bg-color3  shadow-lg space-y-3 p-5 rounded-xl"
        >
          <h1 className="text-black font-lora text-[18px] text-center font-bold">{each.title}</h1>
          <p className="text-center font-Inter font-mdedium">{each.content}</p>
        </li>
      ))}
    </ul>
  );
}
