import React from "react";

type Props = {
  companies: string[];
};

const CompanyMarquee: React.FC<Props> = ({ companies }) => {
  return (
    <div className="overflow-hidden w-full">
      <div className="whitespace-nowrap animate-marquee flex items-center space-x-8 text-lg font-semibold text-gray-700">
        {companies.concat(companies).map((company, i) => (
          <span key={i}>{company}</span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          min-width: 200%;
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CompanyMarquee; 